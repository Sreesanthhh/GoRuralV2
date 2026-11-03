/**
 * Builds one contact sheet per category from the harvested photos, so a whole
 * category can be judged in a single look instead of six separate opens.
 *
 *   node scripts/contact-sheet.mjs <harvestDir> <outDir>
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const [harvestDir, outDir] = process.argv.slice(2);
if (!harvestDir || !outDir) {
  console.error("usage: node scripts/contact-sheet.mjs <harvestDir> <outDir>");
  process.exit(1);
}
await fs.mkdir(outDir, { recursive: true });

const CELL_W = 620;
const CELL_H = 440;
const PAD = 10;
const LABEL = 30;
const COLS = 3;

const files = (await fs.readdir(harvestDir)).filter((f) => /\.jpe?g$/i.test(f));
const groups = new Map();
for (const f of files.sort()) {
  const slug = f.replace(/-\d+\.jpe?g$/i, "");
  if (!groups.has(slug)) groups.set(slug, []);
  groups.get(slug).push(f);
}

for (const [slug, list] of groups) {
  const rows = Math.ceil(list.length / COLS);
  const W = COLS * CELL_W + (COLS + 1) * PAD;
  const H = rows * (CELL_H + LABEL) + (rows + 1) * PAD;

  const composites = [];
  for (let i = 0; i < list.length; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const left = PAD + col * (CELL_W + PAD);
    const top = PAD + row * (CELL_H + LABEL + PAD);

    const src = path.join(harvestDir, list[i]);
    const meta = await sharp(src).rotate().metadata();
    const cell = await sharp(src)
      .rotate()
      .resize({
        width: CELL_W,
        height: CELL_H,
        fit: "contain",
        background: { r: 24, g: 24, b: 24 },
      })
      .toBuffer();
    composites.push({ input: cell, left, top });

    const n = list[i].match(/-(\d+)\.jpe?g$/i)?.[1] ?? "?";
    const label = `<svg width="${CELL_W}" height="${LABEL}">
      <rect width="${CELL_W}" height="${LABEL}" fill="#141414"/>
      <text x="8" y="21" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="700" fill="#f5a623">${n}</text>
      <text x="30" y="21" font-family="Arial,Helvetica,sans-serif" font-size="15" fill="#d8d4cc">${meta.width}x${meta.height}</text>
    </svg>`;
    composites.push({
      input: Buffer.from(label),
      left,
      top: top + CELL_H,
    });
  }

  const out = path.join(outDir, `sheet-${slug}.jpg`);
  await sharp({
    create: { width: W, height: H, channels: 3, background: "#1c1b18" },
  })
    .composite(composites)
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);

  const size = (await fs.stat(out)).size;
  console.log(
    `  ${slug.padEnd(30)} ${list.length} frames  ${W}x${H}  ${(size / 1024).toFixed(0)}KB`
  );
}
