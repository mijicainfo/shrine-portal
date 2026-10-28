// Run after `astro build`.
//
// Astro copies every source image imported through the content collections into
// dist/_astro as-is (e.g. hirakiki-jinja.UPkviA6N.jpg, ~1.5 MB), even though the pages only
// ever reference the optimized .webp variants generated from them. Those unused originals made
// up about half of every deployment (~400 MB of ~870 MB), and Vercel's Hobby plan keeps every
// past deployment against a 10 GB storage limit.
//
// This removes a .jpg/.jpeg/.png file from dist/_astro ONLY when its file name is not mentioned
// in any text file of the build output (html, js, css, json, xml, txt), so anything that is
// actually referenced stays.
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const assetsDir = path.join(distDir, '_astro');

if (!fs.existsSync(assetsDir)) {
  console.log('[prune-orphan-originals] dist/_astro not found, nothing to do');
  process.exit(0);
}

const textExt = new Set(['.html', '.js', '.mjs', '.css', '.json', '.xml', '.txt', '.webmanifest']);
const rasterExt = new Set(['.jpg', '.jpeg', '.png']);

const allFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else allFiles.push(full);
  }
})(distDir);

const candidates = allFiles.filter(
  (f) => f.startsWith(assetsDir + path.sep) && rasterExt.has(path.extname(f).toLowerCase()),
);

let referencedText = '';
for (const f of allFiles) {
  if (textExt.has(path.extname(f).toLowerCase())) referencedText += fs.readFileSync(f, 'utf8') + '\n';
}

let removed = 0;
let removedBytes = 0;
for (const f of candidates) {
  if (referencedText.includes(path.basename(f))) continue;
  removedBytes += fs.statSync(f).size;
  fs.unlinkSync(f);
  removed++;
}

console.log(
  `[prune-orphan-originals] removed ${removed} of ${candidates.length} unreferenced raster originals ` +
    `(${(removedBytes / 1048576).toFixed(0)} MB)`,
);
