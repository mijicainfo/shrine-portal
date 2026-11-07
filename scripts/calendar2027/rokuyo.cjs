// 六曜 computation from 国立天文台 暦要項 (朔 & 中気). Usage: node rokuyo.cjs  -> writes rokuyo2027.json, rokuyo2026.json
const fs=require('fs');
// 朔 (JST date, calendar day) from 暦要項 rekiyou253 (R7), 263 (R8), 273 (R9)
const SAKU=['2025-12-20','2026-01-19','2026-02-17','2026-03-19','2026-04-17','2026-05-17','2026-06-15','2026-07-14','2026-08-13','2026-09-11','2026-10-11','2026-11-09','2026-12-09',
 '2027-01-08','2027-02-07','2027-03-08','2027-04-07','2027-05-06','2027-06-05','2027-07-04','2027-08-02','2027-09-01','2027-09-30','2027-10-29','2027-11-28','2027-12-28'];
// 中気 (JST date) from 暦要項 rekiyou252/262/272: [date, 旧暦月番号]
const CHUKI=[['2025-12-22',11],['2026-01-20',12],['2026-02-19',1],['2026-03-20',2],['2026-04-20',3],['2026-05-21',4],['2026-06-21',5],['2026-07-23',6],['2026-08-23',7],['2026-09-23',8],['2026-10-23',9],['2026-11-22',10],['2026-12-22',11],
 ['2027-01-20',12],['2027-02-19',1],['2027-03-21',2],['2027-04-20',3],['2027-05-21',4],['2027-06-21',5],['2027-07-23',6],['2027-08-23',7],['2027-09-23',8],['2027-10-24',9],['2027-11-22',10],['2027-12-22',11]];
// 2028-01-20 大寒 (12月) is NOT in 暦要項 yet (令和10 not published; 404); the last 朔 2027-12-28 starts a month that will contain 大寒 (~2028-01-20) before the next 朔 (~2028-01-27) => 12月.
const day=s=>Math.floor(Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))/864e5);
const fmt=n=>new Date(n*864e5).toISOString().slice(0,10);
const months=SAKU.map((s,i)=>({start:day(s),end:i+1<SAKU.length?day(SAKU[i+1])-1:null,num:null,leap:false}));
months[months.length-1].num=12; // see note above
for(const m of months){ if(m.end===null)continue; const c=CHUKI.filter(([d])=>day(d)>=m.start&&day(d)<=m.end); if(c.length>1)throw new Error('2 chuki in month '+fmt(m.start)); if(c.length===1)m.num=c[0][1]; }
// leap: month without 中気 takes previous number
for(let i=0;i<months.length;i++) if(months[i].num===null){months[i].num=months[i-1].num;months[i].leap=true;}
const RK=['大安','赤口','先勝','友引','先負','仏滅'];
function year(y){const out={};for(let n=day(y+'-01-01');n<=day(y+'-12-31');n++){const m=months.find(m=>n>=m.start&&(m.end===null||n<=m.end));const d=n-m.start+1;out[fmt(n)]={rokuyo:RK[(m.num+d)%6],kyureki:(m.leap?'閏':'')+m.num+'-'+d};}return out;}
module.exports={year,months,fmt};
if(require.main===module){
 for(const y of [2026,2027]){const o=year(y);fs.writeFileSync(`rokuyo${y}.json`,JSON.stringify(o,null,1));console.log(y,Object.keys(o).length);}
 console.log(months.map(m=>fmt(m.start)+' '+(m.leap?'閏':'')+m.num).join('\n'));
}
