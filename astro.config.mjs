// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import fs from 'node:fs';
import path from 'node:path';

// Astro's Markdown parser (satteri) enables GFM strikethrough by default, and
// its strikethrough rule accepts a *single* tilde as a delimiter, not just
// `~~`. That means body text like "5:00~17:00, 9:00~16:00" gets parsed as a
// strikethrough span (the two single tildes pair up as open/close delimiters
// and are dropped from the output), silently eating literal tildes used in
// time ranges. This plugin finds strikethrough nodes that were opened with a
// single `~` (as opposed to a real `~~text~~`) and unwraps them back into
// plain text with the tildes restored, while leaving genuine `~~text~~`
// strikethrough untouched.
//
// Delimiter width is detected by scanning the raw source around the node's
// children rather than diffing the node's own position against its child's:
// the two report offsets in different units (bytes vs. characters) once the
// content contains multi-byte characters (e.g. Japanese/Korean text), which
// silently breaks any fix based on that subtraction.
const fixSingleTildeStrikethrough = {
  name: 'fix-single-tilde-strikethrough',
  delete(node, context) {
    const { children } = node;
    if (!children || children.length === 0) return undefined;
    const firstChildStart = children[0]?.position?.start.offset;
    const lastChildEnd = children[children.length - 1]?.position?.end.offset;
    if (firstChildStart === undefined || lastChildEnd === undefined) return undefined;

    const source = context.source;
    let openWidth = 0;
    for (let i = firstChildStart - 1; i >= 0 && source[i] === '~'; i--) openWidth++;
    let closeWidth = 0;
    for (let j = lastChildEnd; j < source.length && source[j] === '~'; j++) closeWidth++;
    if (openWidth !== 1 || closeWidth !== 1) return undefined;

    context.insertBefore(node, [
      { type: 'text', value: '~' },
      ...children,
      { type: 'text', value: '~' },
    ]);
    context.removeNode(node);
    return undefined;
  },
};

// --- Sitemap <lastmod> -------------------------------------------------------
// Accurate per-URL lastmod helps Google prioritise crawling new/changed pages.
// Shrine and guide pages use their own frontmatter `publishDate`; hub pages
// (home, shrine list, guide list) use the newest shrine publishDate. Other pages
// get no lastmod rather than a made-up one. Dates are clamped to today.
const SITE = 'https://shrine-jp.net';
const SITEMAP_LANGS = ['en', 'zh', 'es', 'fr', 'ko'];
// Astro bundles this config to a temp file, so import.meta.url is not the project root;
// build/dev always run from the project root, so resolve against the cwd.
const contentRoot = path.resolve(process.cwd(), 'src/content');
const today = new Date().toISOString().slice(0, 10);
const lastmodByUrl = new Map();
let newestShrineDate = '';
for (const kind of ['shrines', 'guides']) {
  for (const lang of ['', ...SITEMAP_LANGS]) {
    const dir = path.join(contentRoot, lang ? `${kind}-${lang}` : kind);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      let head = '';
      try {
        head = fs.readFileSync(path.join(dir, file), 'utf8').slice(0, 4000);
      } catch {
        continue;
      }
      const m = head.match(/^publishDate:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
      if (!m) continue;
      const date = m[1] > today ? today : m[1];
      const prefix = lang ? `/${lang}` : '';
      lastmodByUrl.set(`${SITE}${prefix}/${kind}/${file.replace(/\.md$/, '')}/`, date);
      if (kind === 'shrines' && date > newestShrineDate) newestShrineDate = date;
    }
  }
}
const hubUrls = new Set();
for (const lang of ['', ...SITEMAP_LANGS]) {
  const prefix = lang ? `/${lang}` : '';
  hubUrls.add(`${SITE}${prefix}/`);
  hubUrls.add(`${SITE}${prefix}/shrines/`);
  hubUrls.add(`${SITE}${prefix}/guides/`);
}
function serializeSitemapItem(item) {
  const lastmod = lastmodByUrl.get(item.url) ?? (hubUrls.has(item.url) ? newestShrineDate : undefined);
  if (lastmod) item.lastmod = `${lastmod}T00:00:00.000Z`;
  return item;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://shrine-jp.net',
  i18n: {
    locales: ['ja', 'en', 'zh', 'es', 'fr', 'ko'],
    defaultLocale: 'ja',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({ serialize: serializeSitemapItem })],
  markdown: {
    processor: satteri({
      mdastPlugins: [fixSingleTildeStrikethrough],
    }),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
