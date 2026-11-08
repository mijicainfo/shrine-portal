// 開運カレンダー2027 の X 投稿案（月初の「今月の開運日」6言語＋天赦日の当日 ja/zh）を、日付データから生成する。
// 投稿時刻: 月初 JA 0:00 / KO 9:07 / ZH 12:07 / FR 16:07 / ES 17:07、天赦日の当日 JA 7:07 / ZH 9:07（いずれも日本時間）
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

// 投稿で使う用語が、サイトの文言辞書（src/data/calendarText.<lang>.ts）にそのまま載っていることを確認する
const mustHave = {
  ja: ['天赦日', '一粒万倍日', '己巳の日', '暦注'],
  zh: ['天赦日', '一粒萬倍日', '己巳之日', '曆注'],
  ko: ['덴샤니치', '이치류만바이비', '쓰치노토미노히', '레키추'],
  es: ['Tenshanichi', 'Ichiryū-manbai-bi', 'Tsuchinoto-mi', 'rekichū'],
  fr: ['Tenshanichi', 'Ichiryū-manbai-bi', 'Tsuchinoto-mi', 'rekichū'],
};
for (const [lang, words] of Object.entries(mustHave)) {
  const dict = fs.readFileSync(path.join(here, '..', 'src', 'data', `calendarText.${lang}.ts`), 'utf8');
  for (const w of words) if (!dict.includes(w)) throw new Error(`term "${w}" not found in calendarText.${lang}.ts`);
}
const MONTHS_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MONTHS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const deMois = (m) => (/^[aeiouhâéèêîôû]/i.test(MONTHS_FR[m - 1]) ? `d’${MONTHS_FR[m - 1]}` : `de ${MONTHS_FR[m - 1]}`);
const listEs = (a) => a.join(', ');
const listFr = (a) => a.join(', ');
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

function addFit(title, lang, candidates, urlLine) {
  for (const body of candidates) {
    const text = [body, urlLine, '', HASH].join('\n');
    if (weighted(text) <= 280) return add(title, lang, body, urlLine);
  }
  add(title, lang, candidates[candidates.length - 1], urlLine); // 収まらなければ add() が警告を出す
}

// ---- 月初: 日本語 0:00(+EN)・韓国語 9:07・中国語 12:07・フランス語 16:07・スペイン語 17:07 ----
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
  add(`${m}月 月初 0:00（JA＋EN）`, 'ja', jaBody, monthUrl(m, 'ja'), `🇬🇧 In English: ${monthUrl(m, 'en')}`);

  // 繁体字中国語
  const zh = [];
  if (tensha.length) zh.push(`天赦日為${tensha.join('、')}日`);
  zh.push(`一粒萬倍日為${ichi.join('、')}日`);
  if (tsuchi.length) zh.push(`己巳之日為${tsuchi.join('、')}日`);
  let zhBody = `2027年${m}月開運日｜${zh.join('；')}。`;
  if (overlap.length) zhBody += `${overlap.join('、')}日為天赦日與一粒萬倍日重疊。`;
  zhBody += '曆注為慣習，並非官方公布。';
  add(`${m}月 月初 12:07（ZH）`, 'zh', zhBody, monthUrl(m, 'zh'));

  // 韓国語
  const koBuild = (withTsuchi, withOverlap) => {
    const k = [];
    if (tensha.length) k.push(`덴샤니치는 ${tensha.join('·')}일`);
    k.push(`이치류만바이비는 ${ichi.join('·')}일`);
    if (withTsuchi && tsuchi.length) k.push(`쓰치노토미노히는 ${tsuchi.join('·')}일`);
    let b = `2027년 ${m}월 개운일｜${k.join(', ')}입니다.`;
    if (withOverlap && overlap.length) b += ` ${overlap.join('·')}일은 덴샤니치와 이치류만바이비가 겹칩니다.`;
    return b + ' 레키추는 관습이며 공식 발표가 아닙니다.';
  };
  addFit(`${m}月 月初 9:07（KO）`, 'ko', [koBuild(true, true), koBuild(false, true), koBuild(false, false)], monthUrl(m, 'ko'));

  // フランス語
  const frBuild = (withTsuchi, withOverlap) => {
    const f = [];
    if (tensha.length) f.push(`Tenshanichi : ${listFr(tensha)}`);
    f.push(`Ichiryū-manbai-bi : ${listFr(ichi)}`);
    if (withTsuchi && tsuchi.length) f.push(`Tsuchinoto-mi : ${listFr(tsuchi)}`);
    let b = `Jours fastes ${deMois(m)} 2027 : ${f.join(' ; ')}.`;
    if (withOverlap && overlap.length) b += ` Le ${overlap.join(' et le ')} : Tenshanichi et Ichiryū-manbai-bi coïncident.`;
    return b + ' Les rekichū sont des coutumes, non officielles.';
  };
  addFit(`${m}月 月初 16:07（FR）`, 'fr', [frBuild(true, true), frBuild(false, true), frBuild(false, false)], monthUrl(m, 'fr'));

  // スペイン語
  const esBuild = (withTsuchi, withOverlap) => {
    const e = [];
    if (tensha.length) e.push(`Tenshanichi: ${listEs(tensha)}`);
    e.push(`Ichiryū-manbai-bi: ${listEs(ichi)}`);
    if (withTsuchi && tsuchi.length) e.push(`Tsuchinoto-mi: ${listEs(tsuchi)}`);
    let b = `Días propicios de ${MONTHS_ES[m - 1]} de 2027: ${e.join('; ')}.`;
    if (withOverlap && overlap.length) b += ` El ${overlap.join(' y el ')} coinciden Tenshanichi e Ichiryū-manbai-bi.`;
    return b + ' Los rekichū son costumbres tradicionales, no oficiales.';
  };
  addFit(`${m}月 月初 17:07（ES）`, 'es', [esBuild(true, true), esBuild(false, true), esBuild(false, false)], monthUrl(m, 'es'));
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
  add(`${m}月${dd}日 天赦日の当日 7:07（JA＋EN）`, 'ja', ja, `${monthUrl(m, 'ja')}#d${String(dd).padStart(2, '0')}`, `🇬🇧 In English: ${monthUrl(m, 'en')}#d${String(dd).padStart(2, '0')}`);
  const zh =
    `今天（${m}月${dd}日・週${WEEK_ZH[wd]}）是天赦日。曆注認為是「一年只有數次的最上吉日」。` +
    (both ? '同時也是一粒萬倍日。' : '') +
    '曆注為慣習，並非官方公布。';
  add(`${m}月${dd}日 天赦日の当日 9:07（ZH）`, 'zh', zh, `${monthUrl(m, 'zh')}#d${String(dd).padStart(2, '0')}`);
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
