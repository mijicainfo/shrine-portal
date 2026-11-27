/**
 * Klook の検索語を作ります（ボタンの表示どおり、ツアー・体験の一覧が出るようにする）。
 *
 * 地名だけで検索するとホテルが上位に並ぶため、「地名＋ツアー・体験」にしています。
 * ただし日本語の検索は、小さな市町村名だと「検索結果がありません」になります。
 * そのため、ツアーが実際に出る市だけ市名を使い、ほかは都道府県（0件の県は近くの観光地）を使います。
 * 一覧は 2026-11-27 に Klook の検索結果を確認して作りました。足すときは必ず実際の結果を確認してください。
 */
type Lang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';

/** [都道府県, 市区町村（この文字を含む）, 検索に使う地名] */
const jaCityAreas: [string, string, string][] = [
  ['北海道', '札幌市', '札幌'],
  ['宮城県', '仙台市', '仙台'],
  ['栃木県', '日光市', '日光'],
  ['群馬県', '草津町', '草津'],
  ['神奈川県', '横浜市', '横浜'],
  ['神奈川県', '鎌倉市', '鎌倉'],
  ['神奈川県', '箱根町', '箱根'],
  ['石川県', '金沢市', '金沢'],
  ['長野県', '松本市', '松本'],
  ['岐阜県', '高山市', '高山'],
  ['静岡県', '熱海市', '熱海'],
  ['愛知県', '名古屋市', '名古屋'],
  ['三重県', '伊勢市', '伊勢'],
  ['京都府', '京都市', '京都'],
  ['大阪府', '大阪市', '大阪'],
  ['兵庫県', '神戸市', '神戸'],
  ['奈良県', '奈良市', '奈良'],
  ['広島県', '広島市', '広島'],
  ['福岡県', '福岡市', '福岡'],
  ['長崎県', '長崎市', '長崎'],
  ['熊本県', '熊本市', '熊本'],
  ['鹿児島県', '鹿児島市', '鹿児島'],
  ['沖縄県', '那覇市', '那覇'],
];

/** 都道府県名で検索すると0件〜ごく少数になる県は、代わりの地名を使う（ここにない県は都道府県名のまま） */
const jaPrefectureAreas: Record<string, string> = {
  東京都: '東京',
  宮城県: '仙台',
  群馬県: '草津',
  千葉県: '千葉',
  石川県: '金沢',
  福井県: '金沢',
  愛知県: '名古屋',
  三重県: '伊勢',
  兵庫県: '神戸',
  愛媛県: '四国',
  高知県: '四国',
};

export function buildKlookArea(lang: Lang, prefecture: string, city: string): { area: string; query: string } {
  if (lang === 'ja') {
    const hit = jaCityAreas.find(([p, c]) => p === prefecture && city.includes(c));
    const area = hit ? hit[2] : (jaPrefectureAreas[prefecture] ?? prefecture);
    return { area, query: `${area} ツアー・体験` };
  }
  if (lang === 'zh') {
    const area = prefecture === '北海道' ? prefecture : prefecture.replace(/[都府縣県]$/, '');
    return { area, query: `${area} 一日遊` };
  }
  // en/es/fr/ko: Klook の各言語サイトは、ローマ字の「都道府県 tours」でツアーが出る
  const area = prefecture.replace(/\s*Prefecture$/i, '');
  return { area, query: `${area} tours` };
}
