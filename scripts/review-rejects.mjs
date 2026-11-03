/**
 * Acts on the full visual review of all 83 card photos.
 *
 *  REJECT  - the frame shows no identifiable client branding, or is blank.
 *            Reverts the case study to a placeholder and deletes the file.
 *  RECROP  - a burned-in stamp survived the first trim. Cuts deeper.
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";

const FILE = "src/data/content.ts";

const REJECT = {
  35: "TVS Motor: Building Wraps & Hoardings - no TVS branding anywhere in frame",
  40: "GRT Jewellers: Retail Branding - a street of coaching-centre hoardings, no GRT",
  96: "GRT Jewellers: RWA Activation - an empty canopy, nothing happening",
  99: "Coca-Cola: Apartment Activity - a bare apartment facade, no branding, no activity",
  101: "Kedia Rice - a blank canopy roof against a wall",
  103: "Porter - two men in close-up, no Porter branding visible",
};

// Stamp survived the first pass; cut deeper.
const RECROP = { 20: 0.3, 31: 0.26, 113: 0.42 };

let src = await fs.readFile(FILE, "utf8");

// --- rejects: image -> placeholder, and drop the file -----------------------
let reverted = 0;
for (const id of Object.keys(REJECT)) {
  const re = new RegExp(`    image: "/images/work/card-${id}\\.jpg",\\n`);
  if (!re.test(src)) {
    console.log(`  ! ${id} not found in content.ts`);
    continue;
  }
  src = src.replace(re, "    placeholder: true,\n");
  await fs.rm(`public/images/work/card-${id}.jpg`, { force: true });
  reverted++;
  console.log(`  rejected ${id}: ${REJECT[id]}`);
}
await fs.writeFile(FILE, src);

// --- recrops ---------------------------------------------------------------
console.log("");
for (const [id, frac] of Object.entries(RECROP)) {
  const kept = `assets/originals/work/card-${id}.jpg`;
  const meta = await sharp(kept).metadata();
  const swapped = meta.orientation >= 5 && meta.orientation <= 8;
  const w = swapped ? meta.height : meta.width;
  const h = swapped ? meta.width : meta.height;
  const cut = Math.round(h * frac);

  const outW = Math.min(900, w);
  const buf = await sharp(kept)
    .rotate()
    .extract({ left: 0, top: 0, width: w, height: h - cut })
    .resize({
      width: outW,
      height: Math.round((outW * 9) / 16),
      fit: "cover",
      position: "north",
    })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toBuffer();
  await fs.writeFile(`public/images/work/card-${id}.jpg`, buf);
  console.log(
    `  recropped ${id}: cut ${(frac * 100).toFixed(0)}% (${cut}px of ${h})`
  );
}

const placeholders = (src.match(/placeholder: true/g) ?? []).length;
const photos = (src.match(/image: "\/images\/work\//g) ?? []).length;
console.log(
  `\n${reverted} reverted to placeholder. Case studies with a photo: ${photos - 10}, placeholders: ${placeholders}\n`
);
