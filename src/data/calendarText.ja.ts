/**
 * 開運カレンダー（/calendar/2027/）の表示文言。日本語版が基準で、型 CalendarText もここで定義する。
 * 他言語は calendarText.<lang>.ts に同じ形で置く（日付・タグは src/data/calendar2027.ts で言語共通）。
 *
 * 書き方の方針（構成案 開運カレンダー2027_構成案.md より）:
 *  - 暦注（天赦日・一粒万倍日など）は「慣習であって公式ではない」と明記する。意味づけは必ず「とされています」と書き、効果を保証しない。
 *  - 祝日・二十四節気・雑節・月の満ち欠けは公的発表（内閣府・国立天文台）に基づくと明記する。
 */
import type { KoyomiTag } from './calendar2027';

export type RokuyoKey = 'senshou' | 'tomobiki' | 'senbu' | 'butsumetsu' | 'taian' | 'shakku';

/** FAQ・見出しに差し込む、整形済みの日付リスト（言語ごとの書式で作られる） */
export interface CalendarFaqContext {
  year: string;
  tensha: string;
  tenshaCount: number;
  tenshaIchiryu: string;
  tenshaIchiryuCount: number;
  tsuchinotomi: string;
  tsuchinotomiCount: number;
  ichiryuCount: number;
}

export interface CalendarText {
  /** 日曜始まりの曜日（短縮形） */
  weekdays: [string, string, string, string, string, string, string];
  /** 例: 4月29日（木） */
  dateShort: (month: number, day: number, weekday: number) => string;
  /** 例: 4月 */
  monthName: (month: number) => string;
  /** 例: 2027年（令和9年） */
  yearLabel: string;
  koyomi: Record<KoyomiTag, { name: string; label: string; desc: string }>;
  holidays: Record<string, string>;
  sekki: Record<string, string>;
  zassetsu: Record<string, string>;
  moon: { new: string; full: string };
  rokuyo: Record<RokuyoKey, { name: string; desc: string }>;
  ui: {
    sectionName: string;
    legendHeading: string;
    legendKoyomi: string;
    legendOfficial: string;
    legendHoliday: string;
    legendTensha: string;
    year: {
      title: string;
      description: string;
      h1: string;
      lead: string;
      keyDatesHeading: string;
      tenshaLine: (count: number, dates: string) => string;
      overlapLine: (count: number, dates: string) => string;
      tsuchinotomiLine: (count: number, dates: string) => string;
      monthsHeading: string;
      monthLink: (month: number) => string;
      rokuyoPromo: string;
      guidesHeading: string;
      guideKinun: string;
      guideEnmusubi: string;
      faqHeading: string;
    };
    month: {
      title: (month: number, tenshaDates: string | null) => string;
      description: (month: number) => string;
      h1: (month: number) => string;
      gridHeading: string;
      detailHeading: string;
      noKoyomi: string;
      relatedHeading: string;
      relatedNote: string;
      prev: (month: number) => string;
      next: (month: number) => string;
      backToYear: string;
      officialHeading: string;
    };
    rokuyoPage: {
      title: string;
      description: string;
      h1: string;
      lead: string;
      aboutHeading: string;
      aboutBody: string[];
      tableHeading: string;
      calcNote: string;
      backToYear: string;
      noteBadge: string;
    };
    notice: { heading: string; body: string };
    sources: {
      heading: string;
      items: { label: string; text: string; href?: string }[];
    };
    faq: (ctx: CalendarFaqContext) => { q: string; a: string }[];
    relatedShrinesAria: string;
  };
}

export const calendarTextJa: CalendarText = {
  weekdays: ['日', '月', '火', '水', '木', '金', '土'],
  dateShort: (m, d, w) => `${m}月${d}日（${['日', '月', '火', '水', '木', '金', '土'][w]}）`,
  monthName: (m) => `${m}月`,
  yearLabel: '2027年（令和9年）',
  koyomi: {
    tensha: {
      name: '天赦日（てんしゃにち）',
      label: '天赦日',
      desc: '暦注では「百神が天に昇り、天がすべての罪を赦す日」とされ、年に数回しかない最上の吉日とされています。',
    },
    ichiryumanbai: {
      name: '一粒万倍日（いちりゅうまんばいび）',
      label: '一粒万倍日',
      desc: '「一粒の籾が万倍にも実る」という意味から、何かを始めるのによい日とされています。',
    },
    tora: {
      name: '寅の日（とらのひ）',
      label: '寅の日',
      desc: '「千里を行って千里を帰る」と言われる虎にちなみ、金運や旅立ちによい日とされています（12日に1度）。',
    },
    mi: {
      name: '巳の日（みのひ）',
      label: '巳の日',
      desc: '弁財天の使いとされる蛇にちなみ、金運や芸事にご縁のある日とされています（12日に1度）。',
    },
    tsuchinotomi: {
      name: '己巳の日（つちのとみのひ）',
      label: '己巳の日',
      desc: '巳の日の中でも、弁財天の縁日として特によいとされる日です（60日に1度）。',
    },
    kinoene: {
      name: '甲子の日（きのえねのひ）',
      label: '甲子の日',
      desc: '大黒天の縁日とされ、金運や商売繁盛によい日とされています（60日に1度）。',
    },
  },
  holidays: {
    ganjitsu: '元日',
    seijin: '成人の日',
    kenkoku: '建国記念の日',
    tennou: '天皇誕生日',
    shunbun: '春分の日',
    furikae: '振替休日',
    showa: '昭和の日',
    kenpou: '憲法記念日',
    midori: 'みどりの日',
    kodomo: 'こどもの日',
    umi: '海の日',
    yama: '山の日',
    keirou: '敬老の日',
    shubun: '秋分の日',
    sports: 'スポーツの日',
    bunka: '文化の日',
    kinrou: '勤労感謝の日',
  },
  sekki: {
    shokan: '小寒',
    daikan: '大寒',
    risshun: '立春',
    usui: '雨水',
    keichitsu: '啓蟄',
    shunbun: '春分',
    seimei: '清明',
    kokuu: '穀雨',
    rikka: '立夏',
    shoman: '小満',
    boshu: '芒種',
    geshi: '夏至',
    shousho: '小暑',
    taisho: '大暑',
    risshuu: '立秋',
    shosho: '処暑',
    hakuro: '白露',
    shubun: '秋分',
    kanro: '寒露',
    soukou: '霜降',
    ritto: '立冬',
    shosetsu: '小雪',
    taisetsu: '大雪',
    toji: '冬至',
  },
  zassetsu: {
    'doyo-fuyu': '土用の入り（冬）',
    setsubun: '節分',
    'higan-haru': '彼岸の入り（春）',
    'doyo-haru': '土用の入り（春）',
    hachijuhachiya: '八十八夜',
    nyubai: '入梅',
    hangesho: '半夏生',
    'doyo-natsu': '土用の入り（夏）',
    nihyakutoka: '二百十日',
    'higan-aki': '彼岸の入り（秋）',
    'doyo-aki': '土用の入り（秋）',
    hatsuuma: '初午',
    'doyo-ushi': '夏の土用の丑の日',
  },
  moon: { new: '新月（朔）', full: '満月（望）' },
  rokuyo: {
    senshou: { name: '先勝', desc: '何事も急ぐのがよいとされ、午前が吉、午後は凶とされる日です。' },
    tomobiki: { name: '友引', desc: '「友を引く」とされ、葬儀を避ける習慣がある日です。朝夕は吉、正午は凶とされます。' },
    senbu: { name: '先負', desc: '何事も控えめにするのがよいとされ、午前が凶、午後は吉とされる日です。' },
    butsumetsu: { name: '仏滅', desc: '六曜のなかで最も凶とされる日です。' },
    taian: { name: '大安', desc: '「大いに安し」で、一日を通して吉とされる日です。結婚式などの日取りに選ばれることが多い日です。' },
    shakku: { name: '赤口', desc: '正午前後のみ吉で、それ以外は凶とされる日です。祝い事を避ける人もいます。' },
  },
  ui: {
    sectionName: '開運カレンダー',
    legendHeading: '色・印の見方',
    legendKoyomi: '暦注（慣習・公式ではない）',
    legendOfficial: '公的発表（国立天文台・内閣府）',
    legendHoliday: '祝日',
    legendTensha: '天赦日',
    year: {
      title: '2027年（令和9年）開運カレンダー｜天赦日・一粒万倍日・己巳の日一覧',
      description:
        '2027年の天赦日は6回、天赦日と一粒万倍日が重なる日は3日。天赦日・一粒万倍日・寅の日・巳の日・己巳の日・甲子の日を月別に一覧にし、その日に合う神社もご紹介します（暦注は慣習で公式ではありません）。',
      h1: '2027年（令和9年）開運カレンダー',
      lead:
        '天赦日・一粒万倍日・寅の日・巳の日・己巳の日・甲子の日を、2027年の月別カレンダーにまとめました。祝日・二十四節気・雑節・月の満ち欠けは国立天文台・内閣府の発表に基づき、暦注と区別して表示しています。日ごとに、ご利益のタグが合う神社も自動で表示します。',
      keyDatesHeading: '2027年の主な開運日',
      tenshaLine: (n, d) => `天赦日（${n}回）：${d}`,
      overlapLine: (n, d) => `天赦日と一粒万倍日が重なる日（${n}日）：${d}`,
      tsuchinotomiLine: (n, d) => `己巳の日（${n}回）：${d}`,
      monthsHeading: '月別カレンダー',
      monthLink: (m) => `${m}月の開運日`,
      rokuyoPromo: '六曜（大安・仏滅など）は、別ページに参考情報としてまとめています。',
      guidesHeading: 'あわせて読みたい特集',
      guideKinun: '金運アップにご利益のある神社6選',
      guideEnmusubi: '縁結びで有名な神社10選【全国版】',
      faqHeading: 'よくある質問',
    },
    month: {
      title: (m, t) => `2027年${m}月の開運日｜${t ? `天赦日（${t}）・` : ''}一粒万倍日・寅の日・巳の日`,
      description: (m) => `2027年${m}月の天赦日・一粒万倍日・寅の日・巳の日・己巳の日・甲子の日、祝日・二十四節気を一覧に。日ごとに、ご利益が合う神社も紹介します（暦注は慣習で公式ではありません）。`,
      h1: (m) => `2027年${m}月の開運日`,
      gridHeading: 'カレンダー',
      detailHeading: 'この月の暦注の日',
      noKoyomi: 'この月の暦注の日はありません。',
      relatedHeading: 'この日に合う神社',
      relatedNote: 'ご利益のタグなどが合う神社を自動で表示しています。この日に参拝すると効果があることを示すものではありません。',
      prev: (m) => `← ${m}月`,
      next: (m) => `${m}月 →`,
      backToYear: '2027年の開運カレンダーに戻る',
      officialHeading: '祝日・二十四節気・雑節・月の満ち欠け（公的発表）',
    },
    rokuyoPage: {
      title: '2027年 六曜カレンダー（大安・仏滅）｜参考情報',
      description: '2027年の六曜（先勝・友引・先負・仏滅・大安・赤口）を月別に一覧にした参考ページです。六曜は旧暦をもとにした暦注で、神道の教義とは関係がありません。',
      h1: '2027年 六曜カレンダー（参考）',
      lead: '六曜（大安・仏滅など）を月別にまとめた参考ページです。開運カレンダーの暦注とは別に、「日取りを考えるときの目安」としてご覧ください。',
      aboutHeading: '六曜とは',
      aboutBody: [
        '六曜は、先勝・友引・先負・仏滅・大安・赤口の6つで、旧暦の月日から順に決まる暦注です。中国に由来するとされ、日本では江戸時代の終わりごろから民間で広まったと言われます。',
        '六曜は神道の教義とは関係がなく、国や公的機関が定めたものでもありません。国立天文台の暦要項にも載っていません。吉凶の根拠や効果を保証するものではなく、結婚式や葬儀などの日取りで気にする人が多い、という習慣として紹介しています。',
      ],
      tableHeading: '月別の六曜',
      calcNote: '六曜は、国立天文台が発表する新月（朔）と二十四節気から旧暦の月日を求め、そこから計算しています。旧暦の月日は括弧内に示しています。',
      backToYear: '2027年の開運カレンダーに戻る',
      noteBadge: '参考',
    },
    notice: {
      heading: 'ご利用にあたって',
      body:
        '一粒万倍日・天赦日・寅の日・巳の日・己巳の日・甲子の日は「暦注（れきちゅう）」と呼ばれる、日取りの目安として古くから民間の暦に載せられてきた慣習で、国や公的機関が定めたものではありません。吉凶の根拠や効果を保証するものでもなく、暦や流派によって採用する日が異なる場合があります。一粒万倍日などの月の区切りは、二十四節気の「節」の当日から新しい月とする一般的な方法に従っています。祝日・二十四節気・雑節・月の満ち欠けは、内閣府・国立天文台の発表に基づいています。日取りは「縁起を楽しむ目安」としてご活用ください。',
    },
    sources: {
      heading: '出典',
      items: [
        { label: '国民の祝日', text: '内閣府「国民の祝日について」', href: 'https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html' },
        { label: '二十四節気・雑節', text: '国立天文台 暦要項 令和9年（2027年）', href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou272.html' },
        { label: '朔望（新月・満月）', text: '国立天文台 暦要項 令和9年（2027年）', href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou273.html' },
        { label: '暦注（天赦日・一粒万倍日など）', text: '日の干支と二十四節気の「節」から、民間の暦で一般的な規則に従って当サイトで計算しています（公的発表ではありません）。意味づけは一般的な暦の解説によるもので、効果を保証するものではありません。' },
      ],
    },
    faq: (c) => [
      {
        q: `${c.year}の天赦日は何月何日ですか？`,
        a: `${c.year}の天赦日は年に${c.tenshaCount}回で、${c.tensha}です（暦注の一般的な規則に基づく計算です）。`,
      },
      {
        q: `天赦日と一粒万倍日が重なる日はいつですか？`,
        a: `${c.year}は${c.tenshaIchiryu}の${c.tenshaIchiryuCount}日です。一粒万倍日は年間${c.ichiryuCount}日あります。`,
      },
      {
        q: '天赦日や一粒万倍日は公式の暦ですか？',
        a: '国や公的機関が定めたものではなく、日取りの目安として民間の暦に古くから載せられてきた「暦注」という慣習です。流派や暦によって日が異なる場合があり、効果を保証するものでもありません。',
      },
      {
        q: '己巳の日はいつですか？',
        a: `${c.year}の己巳の日は年に${c.tsuchinotomiCount}回で、${c.tsuchinotomi}です。`,
      },
      {
        q: '六曜（大安・仏滅）は載っていますか？',
        a: '六曜は、神道とは関係のない旧暦由来の暦注のため、開運カレンダーとは別の参考ページにまとめています。',
      },
    ],
    relatedShrinesAria: 'この日に合う神社',
  },
};
