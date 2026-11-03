/**
 * Takes photos harvested out of the Drive archive and turns them into web
 * delivery assets under public/images/work/.
 *
 *   node scripts/place-photos.mjs picks.json
 *
 * Each pick runs through: EXIF rotate -> trim -> aspect crop -> resize -> encode.
 *
 *   { src, dest, trim?, aspect?, gravity?, width? }
 *     src     absolute path to the harvested original
 *     dest    filename to write under public/images/work/
 *     trim    { top, bottom, left, right } in px, removed BEFORE the aspect
 *             crop. This is how the burned-in GPS proof-stamp bands come off.
 *     aspect  [w, h] target ratio, cover-cropped. Default 21:9 for the wide
 *             category heroes.
 *     gravity sharp position for the aspect crop: "north" keeps the top (use
 *             when heads or signage are near the top), "centre" is default.
 *     width   max output width, default 1800.
 *
 * Untouched originals are kept in assets/originals/work/, and every stage reads
 * from those, so re-running never compounds JPEG loss.
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "images", "work");
const BACKUP = path.join(ROOT, "assets", "originals", "work");

const picksPath = process.argv[2];
if (!picksPath) {
  console.error("usage: node scripts/place-photos.mjs <picks.json>");
  process.exit(1);
}

const picks = JSON.parse(await fs.readFile(picksPath, "utf8"));
await fs.mkdir(OUT, { recursive: true });
await fs.mkdir(BACKUP, { recursive: true });

const kb = (n) => (n / 1024).toFixed(0) + "KB";
let before = 0;
let after = 0;

for (const p of picks) {
  const width = p.width ?? 1800;
  const [aw, ah] = p.aspect ?? [21, 9];

  const kept = path.join(BACKUP, p.dest);
  try {
    await fs.access(kept);
  } catch {
    await fs.copyFile(p.src, kept);
  }
  const srcStat = await fs.stat(kept);

  const meta = await sharp(kept).metadata();

  // metadata() reports the stored pixel dimensions, before the EXIF
  // Orientation tag is applied. Orientations 5-8 are the rotated ones, where
  // the displayed image is the transpose of what is stored.
  const swapped = meta.orientation >= 5 && meta.orientation <= 8;
  const srcW = swapped ? meta.height : meta.width;
  const srcH = swapped ? meta.width : meta.height;

  const t = { top: 0, bottom: 0, left: 0, right: 0, ...(p.trim ?? {}) };
  const cropW = srcW - t.left - t.right;
  const cropH = srcH - t.top - t.bottom;
  if (cropW < 10 || cropH < 10) {
    throw new Error(`${p.dest}: trim leaves nothing (${cropW}x${cropH})`);
  }

  // sharp ignores the EXIF Orientation tag unless told to honour it, so a
  // phone photo shot in portrait would otherwise land on its side.
  let img = sharp(kept).rotate();
  if (t.top || t.bottom || t.left || t.right) {
    img = img.extract({ left: t.left, top: t.top, width: cropW, height: cropH });
  }

  // Exactly ONE resize: sharp replaces a previous resize rather than chaining,
  // so the crop and the downscale have to happen in the same call.
  const outW = Math.min(width, cropW);
  const outH = Math.round((outW * ah) / aw);
  const buf = await img
    .resize({ width: outW, height: outH, fit: "cover", position: p.gravity ?? "centre" })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toBuffer();

  const dest = path.join(OUT, p.dest);
  await fs.writeFile(dest, buf);

  const outMeta = await sharp(buf).metadata();
  before += srcStat.size;
  after += buf.length;
  console.log(
    `  ${p.dest.padEnd(32)} ${(meta.width + "x" + meta.height).padEnd(11)} -> ${(
      outMeta.width +
      "x" +
      outMeta.height
    ).padEnd(10)} ${kb(srcStat.size).padStart(8)} -> ${kb(buf.length).padStart(7)}`
  );
}

console.log(
  `\n${picks.length} photos placed. ${kb(before)} -> ${kb(after)} (-${(
    100 *
    (1 - after / before)
  ).toFixed(0)}%)\n`
);
