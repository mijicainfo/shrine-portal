// Scheduled publishing helper (see src/lib/content.ts).
//
//   node scripts/release-schedule.mjs          -> print upcoming releases (future publishDate)
//   node scripts/release-schedule.mjs --due    -> print "true"/"false": is anything due to go live
//                                                today or yesterday (JST)? Used by the daily
//                                                GitHub Action to decide whether to trigger a deploy.
import fs from 'node:fs';
import path from 'node:path';

const LANG_BY_DIR = {
  '': 'ja',
  '-en': 'en',
  '-zh': 'zh',
  '-es': 'es',
  '-fr': 'fr',
  '-ko': 'ko',
};

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const today = new Date(Date.now() + JST_OFFSET_MS).toISOString().slice(0, 10);
const yesterday = new Date(Date.now() + JST_OFFSET_MS - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

const root = path.resolve('src/content');
const rows = [];
for (const kind of ['shrines', 'guides']) {
  for (const [suffix, lang] of Object.entries(LANG_BY_DIR)) {
    const dir = path.join(root, kind + suffix);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      const head = fs.readFileSync(path.join(dir, file), 'utf8').slice(0, 4000);
      const m = head.match(/^publishDate:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
      if (!m) continue;
      rows.push({ date: m[1], kind, lang, slug: file.replace(/\.md$/, '') });
    }
  }
}

if (process.argv.includes('--due')) {
  const due = rows.some((r) => r.date === today || r.date === yesterday);
  console.log(due ? 'true' : 'false');
  process.exit(0);
}

const upcoming = rows.filter((r) => r.date > today).sort((a, b) => a.date.localeCompare(b.date));
if (upcoming.length === 0) {
  console.log(`No scheduled releases after ${today} (JST).`);
  process.exit(0);
}
// Group by date, then by kind/slug, listing the languages going live.
const byDate = new Map();
for (const r of upcoming) {
  if (!byDate.has(r.date)) byDate.set(r.date, new Map());
  const key = `${r.kind}/${r.slug}`;
  const g = byDate.get(r.date);
  if (!g.has(key)) g.set(key, []);
  g.get(key).push(r.lang);
}
console.log(`Upcoming releases (today is ${today} JST):`);
for (const [date, group] of byDate) {
  console.log(`\n${date}`);
  for (const [key, langs] of group) console.log(`  ${key}: ${langs.join(', ')}`);
}
