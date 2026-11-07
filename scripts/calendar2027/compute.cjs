// Compute 暦注 for a year. Usage: node compute.cjs 2027 [json-out]
// Setsu (節入り) dates are taken from 国立天文台 暦要項 (https://eco.mtk.nao.ac.jp/koyomi/yoko/<year>/rekiyou27x.html), not computed here.
const fs = require('fs');
const STEMS = '甲乙丙丁戊己庚辛壬癸'.split('');
const BR = '子丑寅卯辰巳午未申酉戌亥'.split('');
const jdn = (y, m, d) => { // civil date -> JDN (noon-based integer)
  const a = Math.floor((14 - m) / 12), yy = y + 4800 - a, mm = m + 12 * a - 3;
  return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
};
const kanshiIdx = (y, m, d) => (jdn(y, m, d) + 49) % 60; // 2000-01-01 = 戊午 (idx 54)
const kanshi = i => STEMS[i % 10] + BR[i % 12];
// NAO setsu: [month, day, 'HH:MM', 節月支 index entered]
const SETSU = {
  2026: [[1,5,'17:23','丑'],[2,4,'05:02','寅'],[3,5,'22:59','卯'],[4,5,'03:40','辰'],[5,5,'20:49','巳'],[6,6,'00:48','午'],[7,7,'10:57','未'],[8,7,'20:43','申'],[9,7,'23:41','酉'],[10,8,'15:29','戌'],[11,7,'18:52','亥'],[12,7,'11:53','子']],
  2027: [[1,5,'23:10','丑'],[2,4,'10:46','寅'],[3,6,'04:40','卯'],[4,5,'09:17','辰'],[5,6,'02:25','巳'],[6,6,'06:26','午'],[7,7,'16:37','未'],[8,8,'02:27','申'],[9,8,'05:28','酉'],[10,8,'21:17','戌'],[11,8,'00:39','亥'],[12,7,'17:38','子']],
};
// carry-over: month branch in effect on Jan 1 (last setsu of previous year = 大雪 -> 子)
const ICHI = { 寅:'丑午', 卯:'寅酉', 辰:'子卯', 巳:'卯辰', 午:'巳午', 未:'午酉', 申:'子未', 酉:'卯申', 戌:'午酉', 亥:'酉戌', 子:'子亥', 丑:'子卯' };
const TENSHA = { 春:'戊寅', 夏:'甲午', 秋:'戊申', 冬:'甲子' };
const SEASON_OF = { 寅:'春',卯:'春',辰:'春',巳:'夏',午:'夏',未:'夏',申:'秋',酉:'秋',戌:'秋',亥:'冬',子:'冬',丑:'冬' };
// mode 'day' = month changes ON the 節入り date (almanac convention); 'next' = month changes the day AFTER (variant, for boundary-sensitivity check)
function monthBranchFor(y, m, d, mode) {
  let cur = '子';
  for (const [sm, sd, , br] of SETSU[y]) {
    const boundary = mode === 'day' ? [sm, sd] : [sm, sd + 1];
    if (m > boundary[0] || (m === boundary[0] && d >= boundary[1])) cur = br;
  }
  return cur;
}
function build(y, mode) {
  const out = [];
  const days = (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 366 : 365;
  const dt = new Date(Date.UTC(y, 0, 1));
  for (let i = 0; i < days; i++, dt.setUTCDate(dt.getUTCDate() + 1)) {
    const m = dt.getUTCMonth() + 1, d = dt.getUTCDate();
    const idx = kanshiIdx(y, m, d), ks = kanshi(idx), br = BR[idx % 12];
    const mb = monthBranchFor(y, m, d, mode);
    const tags = [];
    if (ICHI[mb].includes(br)) tags.push('一粒万倍日');
    if (TENSHA[SEASON_OF[mb]] === ks) tags.push('天赦日');
    if (ks === '己巳') tags.push('己巳の日');
    if (ks === '甲子') tags.push('甲子の日');
    if (br === '寅') tags.push('寅の日');
    if (br === '巳') tags.push('巳の日');
    out.push({ date: `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`, dow: '日月火水木金土'[dt.getUTCDay()], kanshi: ks, setsuMonth: mb, tags });
  }
  return out;
}
const y = +process.argv[2] || 2027;
const A = build(y, 'day'), B = build(y, 'next');
const pick = (arr, t) => arr.filter(r => r.tags.includes(t)).map(r => `${r.date.slice(5)}(${r.dow})`);
const outp = [];
const P = s => outp.push(s);
P(`# ${y}  (日干支: JDN法 / 節月: 国立天文台 節入り日で切替)`);
P(`anchor check: 2000-01-01=${kanshi(kanshiIdx(2000,1,1))} (expect 戊午), 2026-11-07=${kanshi(kanshiIdx(2026,11,7))}, 2027-01-01=${kanshi(kanshiIdx(2027,1,1))}`);
for (const t of ['天赦日','己巳の日','甲子の日']) P(`${t} (${pick(A,t).length}): ${pick(A,t).join(' ')}`);
const ichi = A.filter(r => r.tags.includes('一粒万倍日'));
P(`一粒万倍日 (${ichi.length}):`);
for (let m = 1; m <= 12; m++) P(`  ${m}月: ` + ichi.filter(r => +r.date.slice(5,7) === m).map(r => +r.date.slice(8)+'日'+r.kanshi.slice(1)).join(' '));
const ov = (a, b) => A.filter(r => r.tags.includes(a) && r.tags.includes(b)).map(r => `${r.date.slice(5)}(${r.dow})${r.kanshi}`);
P(`天赦日×一粒万倍日: ${ov('天赦日','一粒万倍日').join(' ')}`);
P(`天赦日×寅の日: ${ov('天赦日','寅の日').join(' ')}`);
P(`天赦日×巳の日(=己巳? no): ${ov('天赦日','巳の日').join(' ')}`);
P(`己巳の日×一粒万倍日: ${ov('己巳の日','一粒万倍日').join(' ')}`);
P(`寅の日×一粒万倍日 (${ov('寅の日','一粒万倍日').length}): ${ov('寅の日','一粒万倍日').join(' ')}`);
P(`巳の日×一粒万倍日 (${ov('巳の日','一粒万倍日').length}): ${ov('巳の日','一粒万倍日').join(' ')}`);
P(`天赦日×一粒万倍日×寅の日: ${A.filter(r=>['天赦日','一粒万倍日','寅の日'].every(t=>r.tags.includes(t))).map(r=>r.date).join(' ')||'なし'}`);
// boundary sensitivity
const diffs = A.filter((r, i) => r.tags.join() !== B[i].tags.join()).map((r, i) => `${r.date}: day-mode[${r.tags.join(',')}] vs next-day-mode[${B[A.indexOf(r)].tags.join(',')}]`);
P(`節入り日の切替方式で結果が変わる日 (${diffs.length}):\n  ` + diffs.join('\n  '));
console.log(outp.join('\n'));
if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify(A.filter(r=>r.tags.length), null, 1));
fs.writeFileSync(`all${y}.json`, JSON.stringify(A));
