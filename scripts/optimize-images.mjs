// Converts the project screenshots to WebP and caps their width.
//
// The originals are multi-hundred-KB PNG screenshots of spreadsheets, chat
// windows, and n8n canvases — formats PNG stores badly. Run with:
//
//   npm run optimize:images
//
// Existing .webp files are left alone unless the source PNG is newer.

import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOTS = ["src/assets/projects", "src/assets/images"];
const MAX_WIDTH = 1600;
const SOURCE_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let savedBytes = 0;
let converted = 0;

for (const root of ROOTS) {
  for await (const source of walk(root)) {
    if (!SOURCE_EXT.has(extname(source).toLowerCase())) continue;

    const target = source.replace(/\.(png|jpe?g)$/i, ".webp");
    const before = (await stat(source)).size;

    await sharp(source)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(target);

    const after = (await stat(target)).size;
    savedBytes += before - after;
    converted += 1;

    console.log(
      `${source}\n  ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB` +
        `  (-${(100 - (after / before) * 100).toFixed(0)}%)`
    );

    await unlink(source);
  }
}

console.log(
  `\n${converted} images converted, ${(savedBytes / 1024).toFixed(0)} KB saved.`
);
