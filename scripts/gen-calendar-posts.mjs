// 開運カレンダー2027 の X 投稿案（月初の「今月の開運日」＋天赦日の当日）を、日付データから生成する。
//   node scripts/gen-calendar-posts.mjs [出力先.md]
// 日付は src/data/calendar2027.ts（サイトと同じデータ）から読むので、サイトの表示とずれない。
// 投稿のフォーマットは固定: 本文＋URL(＋🇬🇧 In English: URL)＋ #神社 #パワースポット #Japan #JapanTravel
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ts = fs.readFileSync(path.join(here, '..', 'src', 'data', 'calendar2027.ts'), 'utf8');
const days = JSON.parse(ts.match(/calendarDays: CalendarDay\[\] = (\[[\s\S]*\]);/)[1]);

const SITE = 'https://shrine-jp.net';
const HASH = '#神社 #パワースポット #Japan #JapanTravel';
const dayOf = (d) => Number(d.slice(8, 10));
const monthOf = (d) => Number(d.slice(5, 7));
const WEEK = ['日', '月', '火', '水', '木', '金', '土'];
const WEEK_ZH = ['日', '一', '二', '三', '四', '五', '六'];

function weighted(text) {
  const t = text.replace(/https?:\/\/\S+/g, 'X'.repeat(23));
  let w = 0;
  for (const ch of t) {
    const c = ch.codePointAt(0);
    const light = c <= 4351 || (c >= 8192 && c <= 8205) || (c >= 8208 && c <= 8223) || (c >= 8242 && c <= 8247);
    w += light ? 1 : 2;
  }
  return w;
}

const has = (d, tag) => d.koyomi?.includes(tag);
const monthDays = (m, tag) => days.filter((d) => monthOf(d.date) === m && has(d, tag)).map((d) => dayOf(d.date));
const monthUrl = (m, lang) => `${SITE}${lang === 'ja' ? '' : '/' + lang}/calendar/2027/${String(m).padStart(2, '0')}/`;

const posts = [];
const errors = [];
function add(title, lang, body, urlLine, secondary) {
  const text = [body, urlLine, ...(secondary ? ['', secondary] : []), '', HASH].join('\n');
  const w = weighted(text);
  if (w > 280) errors.push(`${title}: weighted ${w} > 280`);
  posts.push({ title, text, w });
}

// ---- 月初: 毎月1日 12:07 JA(+EN)、22:07 ZH ----
for (let m = 1; m <= 12; m++) {
  const tensha = monthDays(m, 'tensha');
  const ichi = monthDays(m, 'ichiryumanbai');
  const tsuchi = monthDays(m, 'tsuchinotomi');
  const overlap = days.filter((d) => monthOf(d.date) === m && has(d, 'tensha') && has(d, 'ichiryumanbai')).map((d) => dayOf(d.date));

  // 日本語（＋英語リンク）
  const ja = [];
  if (tensha.length) ja.push(`天赦日は${tensha.join('・')}日`);
  ja.push(`一粒万倍日は${ichi.join('・')}日`);
  if (tsuchi.length) ja.push(`己巳の日は${tsuchi.join('・')}日`);
  let jaBody = `2027年${m}月の開運日｜${ja.join('、')}。`;
  if (overlap.length) jaBody += `${overlap.join('・')}日は天赦日と一粒万倍日が重なります。`;
  jaBody += '暦注は慣習で公式ではありません。';
  add(`${m}月 月初（JA＋EN）`, 'ja', jaBody, monthUrl(m, 'ja'), `🇬🇧 In English: ${monthUrl(m, 'en')}`);

  // 繁体字中国語
  const zh = [];
  if (tensha.length) zh.push(`天赦日為${tensha.join('、')}日`);
  zh.push(`一粒萬倍日為${ichi.join('、')}日`);
  if (tsuchi.length) zh.push(`己巳之日為${tsuchi.join('、')}日`);
  let zhBody = `2027年${m}月開運日｜${zh.join('；')}。`;
  if (overlap.length) zhBody += `${overlap.join('、')}日為天赦日與一粒萬倍日重疊。`;
  zhBody += '曆注為慣習，並非官方公布。';
  add(`${m}月 月初（ZH）`, 'zh', zhBody, monthUrl(m, 'zh'));
}

// ---- 天赦日の当日（朝 7:07）JA(+EN)、ZH ----
for (const d of days.filter((x) => has(x, 'tensha'))) {
  const m = monthOf(d.date);
  const dd = dayOf(d.date);
  const wd = new Date(Date.UTC(2027, m - 1, dd)).getUTCDay();
  const both = has(d, 'ichiryumanbai');
  const ja =
    `今日（${m}月${dd}日・${WEEK[wd]}）は天赦日。暦注では「年に数回しかない最上の吉日」とされています。` +
    (both ? '一粒万倍日とも重なる日です。' : '') +
    '慣習で公式ではありません。';
  add(`${m}月${dd}日 天赦日の当日（JA＋EN）`, 'ja', ja, `${monthUrl(m, 'ja')}#d${String(dd).padStart(2, '0')}`, `🇬🇧 In English: ${monthUrl(m, 'en')}#d${String(dd).padStart(2, '0')}`);
  const zh =
    `今天（${m}月${dd}日・週${WEEK_ZH[wd]}）是天赦日。曆注認為是「一年只有數次的最上吉日」。` +
    (both ? '同時也是一粒萬倍日。' : '') +
    '曆注為慣習，並非官方公布。';
  add(`${m}月${dd}日 天赦日の当日（ZH）`, 'zh', zh, `${monthUrl(m, 'zh')}#d${String(dd).padStart(2, '0')}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
}
const out = process.argv[2];
const md = posts.map((p) => `### ${p.title}（weighted ${p.w}）\n\`\`\`\n${p.text}\n\`\`\`\n`).join('\n');
if (out) {
  fs.writeFileSync(out, md);
  console.log(`wrote ${posts.length} drafts to ${out}`);
} else {
  console.log(md);
}
console.log(`max weighted: ${Math.max(...posts.map((p) => p.w))} / errors: ${errors.length}`);
