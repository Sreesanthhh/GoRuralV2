/**
 * Re-encodes the site's raster assets to sane delivery sizes and generates the
 * icon + Open Graph images Next.js picks up from src/app/.
 *
 * Run from the project root:  node scripts/optimise-assets.mjs
 * Originals are copied to assets/originals/ the first time it runs.
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BACKUP = path.join(ROOT, "assets", "originals");

const BRAND = {
  cream: "#fdfbf6",
  red: "#e2231a",
  green: "#159447",
  ink: "#1c1b18",
};

async function backup(rel) {
  const src = path.join(ROOT, rel);
  const dest = path.join(BACKUP, path.basename(rel));
  try {
    await fs.access(dest);
  } catch {
    await fs.mkdir(BACKUP, { recursive: true });
    await fs.copyFile(src, dest);
  }
  return dest;
}

const kb = (n) => (n / 1024).toFixed(0) + "KB";

async function report(label, before, file) {
  const after = (await fs.stat(file)).size;
  const saved = (100 * (1 - after / before)).toFixed(0);
  console.log(
    `  ${label.padEnd(34)} ${kb(before).padStart(8)} -> ${kb(after).padStart(8)}  (-${saved}%)`
  );
}

/** Flat PNG with alpha: palette encoding is dramatically smaller than truecolour. */
async function shrinkPng(rel, width) {
  const abs = path.join(ROOT, rel);
  const original = await backup(rel);
  const before = (await fs.stat(abs)).size;
  const buf = await sharp(original)
    .resize({ width, withoutEnlargement: true })
    .png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(abs, buf);
  await report(rel, before, abs);
}

async function shrinkJpeg(rel, width) {
  const abs = path.join(ROOT, rel);
  const original = await backup(rel);
  const before = (await fs.stat(abs)).size;
  const buf = await sharp(original)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 76, mozjpeg: true, progressive: true })
    .toBuffer();
  await fs.writeFile(abs, buf);
  await report(rel, before, abs);
}

/** Square app icon: the logo centred on brand cream, so it reads at 16px. */
async function makeIcon(size, outRel) {
  const pad = Math.round(size * 0.12);
  const logo = await sharp(path.join(BACKUP, "logo.png"))
    .resize({
      width: size - pad * 2,
      height: size - pad * 2,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();
  const out = path.join(ROOT, outRel);
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BRAND.cream,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`  ${outRel.padEnd(34)} ${size}x${size}`);
}

/** 1200x630 link-preview card for WhatsApp, LinkedIn, X and Google. */
async function makeOgImage(outRel) {
  const W = 1200;
  const H = 630;
  const LOGO_W = 186;
  const logo = await sharp(path.join(BACKUP, "logo.png"))
    .resize({ width: LOGO_W, withoutEnlargement: true })
    .toBuffer();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${BRAND.cream}"/>
  <rect x="0" y="0" width="${W}" height="14" fill="${BRAND.red}"/>
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="${BRAND.green}"/>
  <circle cx="1065" cy="150" r="78" fill="${BRAND.green}" opacity="0.14"/>
  <circle cx="1120" cy="520" r="120" fill="${BRAND.red}" opacity="0.10"/>
  <text x="84" y="358" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="66" font-weight="700" fill="${BRAND.ink}">Taking brands to the</text>
  <text x="84" y="436" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="66" font-weight="700" fill="${BRAND.red}">hinterlands.</text>
  <text x="84" y="508" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="27" font-weight="600" fill="${BRAND.ink}" opacity="0.72">Full-service rural marketing and digital advertising</text>
  <text x="84" y="548" font-family="Segoe UI, Arial, Helvetica, sans-serif"
        font-size="27" font-weight="600" fill="${BRAND.ink}" opacity="0.72">Hyderabad, India</text>
</svg>`;

  const out = path.join(ROOT, outRel);
  await sharp(Buffer.from(svg))
    .composite([{ input: logo, top: 72, left: 84 }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  const size = (await fs.stat(out)).size;
  console.log(`  ${outRel.padEnd(34)} ${W}x${H}  ${kb(size)}`);
}

async function main() {
  console.log("\nIllustrations and logo");
  // Rendered at 420px CSS max; 900px covers 2x displays.
  await shrinkPng("public/images/rickshaw.png", 900);
  // Rendered at 72px CSS max; 400px covers 3x displays and the icon source.
  await shrinkPng("public/images/logo.png", 400);

  console.log("\nCampaign photography");
  const dir = path.join(ROOT, "public", "images", "work");
  for (const f of (await fs.readdir(dir)).filter((f) => /\.jpe?g$/i.test(f))) {
    await shrinkJpeg(path.posix.join("public/images/work", f), 1200);
  }

  console.log("\nIcons and link preview");
  await makeIcon(512, "src/app/icon.png");
  await makeIcon(180, "src/app/apple-icon.png");
  await makeOgImage("src/app/opengraph-image.png");

  console.log("\nDone. Originals are in assets/originals/.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
