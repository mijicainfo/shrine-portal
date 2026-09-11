// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

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
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      mdastPlugins: [fixSingleTildeStrikethrough],
    }),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
