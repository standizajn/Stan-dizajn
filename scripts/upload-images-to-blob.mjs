// One-time migration: upload public/images/** to Vercel Blob, then rewrite
// every "/images/..." reference in src/ to the resulting https Blob URL.
//
// Usage: BLOB_READ_WRITE_TOKEN=... node scripts/upload-images-to-blob.mjs
//
// Requires a Vercel Blob store connected to the project (Vercel dashboard ->
// Storage -> Create Database -> Blob), which provides BLOB_READ_WRITE_TOKEN.

import { put } from "@vercel/blob";
import { readFileSync, readdirSync, statSync, writeFileSync, unlinkSync, rmdirSync } from "node:fs";
import path from "node:path";

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN. Get it from Vercel dashboard -> Storage -> your Blob store -> .env.local tab.");
  process.exit(1);
}

const root = path.resolve(import.meta.dirname, "..");
const imagesDir = path.join(root, "public", "images");

function walk(dir) {
  let results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(full));
    else results.push(full);
  }
  return results;
}

const files = walk(imagesDir);
const mapping = {}; // "/images/foo/bar.webp" -> "https://xxxx.public.blob.vercel-storage.com/foo/bar-hash.webp"

for (const file of files) {
  const relPath = "/" + path.relative(path.join(root, "public"), file).split(path.sep).join("/");
  const buffer = readFileSync(file);
  const blobPath = relPath.replace(/^\/images\//, "images/");
  const { url } = await put(blobPath, buffer, {
    access: "public",
    token,
    addRandomSuffix: false,
  });
  mapping[relPath] = url;
  console.log(relPath, "->", url);
}

const sourceFiles = [
  "src/lib/content.ts",
  "src/components/Process.tsx",
  "src/components/AboutSlider.tsx",
  "src/components/Hero.tsx",
];

for (const relSrc of sourceFiles) {
  const filePath = path.join(root, relSrc);
  let contents = readFileSync(filePath, "utf8");
  for (const [localPath, blobUrl] of Object.entries(mapping)) {
    contents = contents.split(localPath).join(blobUrl);
  }
  writeFileSync(filePath, contents);
  console.log("updated", relSrc);
}

// Remove local copies now that they live in Blob storage.
for (const file of files) unlinkSync(file);
function removeEmptyDirs(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) removeEmptyDirs(path.join(dir, entry.name));
  }
  if (readdirSync(dir).length === 0) rmdirSync(dir);
}
removeEmptyDirs(imagesDir);

writeFileSync(
  path.join(root, "scripts", "blob-mapping.json"),
  JSON.stringify(mapping, null, 2)
);

console.log(`\nDone. Uploaded ${files.length} images to Vercel Blob and rewrote references.`);
