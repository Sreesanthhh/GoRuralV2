/**
 * Finds how much of the bottom of a photo is covered by a burned-in
 * geotagging overlay, so the trim is measured rather than guessed.
 *
 *   node scripts/detect-overlay.mjs <dir> <out.json>
 *
 * GPS Map Camera and similar apps stamp a dark, flat, low-variance panel over
 * the bottom of the frame. Photographic rows are busy; overlay rows are not.
 * So: walk up from the bottom and find the first row that looks photographic
 * again. Reported as a fraction of height, clamped to a sane range.
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const [dir, outPath] = process.argv.slice(2);
if (!dir || !outPath) {
  console.error("usage: node scripts/detect-overlay.mjs <dir> <out.json>");
  process.exit(1);
}

const MAX_FRAC = 0.42; // never cut away more than this
const SAMPLE_W = 240; // downscale for speed; the band is wide and flat

async function bandFraction(file) {
  const img = sharp(file).rotate();
  const meta = await img.metadata();
  const h = Math.max(60, Math.round((SAMPLE_W * (meta.height ?? 1)) / (meta.width ?? 1)));

  const { data, info } = await img
    .resize({ width: SAMPLE_W, height: h, fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Per-row mean absolute difference between neighbouring pixels. Flat
  // overlay panels score near zero; photographic detail scores much higher.
  const rough = [];
  for (let y = 0; y < info.height; y++) {
    let acc = 0;
    for (let x = 1; x < info.width; x++) {
      acc += Math.abs(data[y * info.width + x] - data[y * info.width + x - 1]);
    }
    rough.push(acc / (info.width - 1));
  }

  // Reference: how busy is the middle of the picture?
  const mid = rough.slice(
    Math.round(info.height * 0.25),
    Math.round(info.height * 0.6)
  );
  const ref = mid.reduce((a, b) => a + b, 0) / Math.max(1, mid.length);
  const quiet = ref * 0.45;

  const limit = Math.round(info.height * MAX_FRAC);
  let band = 0;
  for (let y = info.height - 1; y >= info.height - limit; y--) {
    if (rough[y] < quiet) band = info.height - y;
    else if (band > 0 && info.height - y - band > 3) break; // photo resumed
  }

  return { frac: band / info.height, ref: +ref.toFixed(1) };
}

const files = (await fs.readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));
const out = {};
for (const f of files) {
  const { frac, ref } = await bandFraction(path.join(dir, f));
  out[f] = +frac.toFixed(3);
  if (frac > 0.02) {
    console.log(`  ${f.padEnd(16)} band ${(frac * 100).toFixed(0).padStart(3)}%  (detail ${ref})`);
  }
}
await fs.writeFile(outPath, JSON.stringify(out, null, 1));
const n = Object.values(out).filter((v) => v > 0.02).length;
console.log(`\n${files.length} scanned, ${n} with a detectable overlay band\n`);
