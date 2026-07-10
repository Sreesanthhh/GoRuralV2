import sharp from "sharp";
import path from "path";

const ASSETS = path.resolve("..", "assets");
const OUT = path.resolve("public", "images");

async function chromaKeyWhite(inputPath, outputPath, { threshold = 18 } = {}) {
  const img = sharp(inputPath).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const maxc = Math.max(r, g, b);
    const minc = Math.min(r, g, b);
    const isWhiteish = minc > 255 - threshold * 2 && maxc - minc < threshold;
    if (isWhiteish) {
      data[i + 3] = 0;
    } else if (minc > 235 - threshold) {
      const fade = Math.max(0, Math.min(1, (255 - minc) / threshold));
      data[i + 3] = Math.round(data[i + 3] * fade);
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .trim()
    .png()
    .toFile(outputPath);
}

await chromaKeyWhite(
  path.join(ASSETS, "eVpy_vgPtyXJNcjamcgHOGzYGnw_WFnmKXX2Gd28nYTbfxshAmbS1uOMCqH2r-NyDK92FQ2Eow=s900-c-k-c0x00ffffff-no-rj-197908964.jpg"),
  path.join(OUT, "logo.png"),
  { threshold: 24 }
);

await chromaKeyWhite(
  path.join(ASSETS, "Rickshaw Upscaled.png"),
  path.join(OUT, "rickshaw.png"),
  { threshold: 16 }
);

console.log("Done.");
