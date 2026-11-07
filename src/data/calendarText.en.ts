/**
 * English UI text for the Auspicious Days Calendar (/en/calendar/2027/).
 * Same shape as the Japanese base (calendarText.ja.ts). Dates and tags are shared across languages in src/data/calendar2027.ts.
 */
import type { CalendarText } from './calendarText.ja';

const WEEKDAYS: CalendarText['weekdays'] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_FULL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const calendarTextEn: CalendarText = {
  weekdays: WEEKDAYS,
  dateShort: (m, d, w) => `${MONTHS_SHORT[m - 1]} ${d} (${WEEKDAYS[w]})`,
  monthName: (m) => MONTHS_FULL[m - 1],
  yearLabel: '2027 (Reiwa 9)',
  koyomi: {
    tensha: {
      name: 'Tenshabi (天赦日)',
      label: 'Tenshabi',
      desc: 'In rekichū, it is said to be the day when “the hundred gods ascend to heaven and heaven forgives all sins,” and it is regarded as the most auspicious day, occurring only a few times a year.',
    },
    ichiryumanbai: {
      name: 'Ichiryū-manbai-bi (一粒万倍日)',
      label: 'Ichiryū-manbai',
      desc: 'The name means “a single grain of rice seed ripens into ten thousand,” and it is said to be a good day to start something.',
    },
    tora: {
      name: 'Day of the Tiger (寅の日)',
      label: 'Tiger Day',
      desc: 'Linked to the tiger, said to “travel a thousand ri and return a thousand ri,” it is regarded as a good day for money luck and setting out on a journey (once every 12 days).',
    },
    mi: {
      name: 'Day of the Snake (巳の日)',
      label: 'Snake Day',
      desc: 'Linked to the snake, regarded as a messenger of the deity Benzaiten, it is said to be a day with a connection to money luck and the arts (once every 12 days).',
    },
    tsuchinotomi: {
      name: 'Tsuchinoto-mi no hi (己巳の日)',
      label: 'Tsuchinoto-mi',
      desc: 'Among Days of the Snake, this is regarded as an especially good day as the festival day (ennichi) of Benzaiten (once every 60 days).',
    },
    kinoene: {
      name: 'Kinoe-ne no hi (甲子の日)',
      label: 'Kinoe-ne',
      desc: 'Regarded as the festival day (ennichi) of the deity Daikokuten, it is said to be a good day for money luck and business prosperity (once every 60 days).',
    },
  },
  holidays: {
    ganjitsu: `New Year's Day`,
    seijin: 'Coming of Age Day',
    kenkoku: 'National Foundation Day',
    tennou: `The Emperor's Birthday`,
    shunbun: 'Vernal Equinox Day',
    furikae: 'Substitute Holiday',
    showa: 'Showa Day',
    kenpou: 'Constitution Memorial Day',
    midori: 'Greenery Day',
    kodomo: `Children's Day`,
    umi: 'Marine Day',
    yama: 'Mountain Day',
    keirou: 'Respect for the Aged Day',
    shubun: 'Autumnal Equinox Day',
    sports: 'Sports Day',
    bunka: 'Culture Day',
    kinrou: 'Labor Thanksgiving Day',
  },
  sekki: {
    shokan: 'Shōkan (Minor Cold)',
    daikan: 'Daikan (Major Cold)',
    risshun: 'Risshun (Start of Spring)',
    usui: 'Usui (Rainwater)',
    keichitsu: 'Keichitsu (Awakening of Insects)',
    shunbun: 'Shunbun (Spring Equinox)',
    seimei: 'Seimei (Clear and Bright)',
    kokuu: 'Kokuu (Grain Rain)',
    rikka: 'Rikka (Start of Summer)',
    shoman: 'Shōman (Grain Buds)',
    boshu: 'Bōshu (Grain in Ear)',
    geshi: 'Geshi (Summer Solstice)',
    shousho: 'Shōsho (Minor Heat)',
    taisho: 'Taisho (Major Heat)',
    risshuu: 'Risshū (Start of Autumn)',
    shosho: 'Shosho (End of Heat)',
    hakuro: 'Hakuro (White Dew)',
    shubun: 'Shūbun (Autumn Equinox)',
    kanro: 'Kanro (Cold Dew)',
    soukou: 'Sōkō (Frost Descent)',
    ritto: 'Rittō (Start of Winter)',
    shosetsu: 'Shōsetsu (Minor Snow)',
    taisetsu: 'Taisetsu (Major Snow)',
    toji: 'Tōji (Winter Solstice)',
  },
  zassetsu: {
    'doyo-fuyu': 'Doyō no Iri (Winter)',
    setsubun: 'Setsubun',
    'higan-haru': 'Higan no Iri (Spring)',
    'doyo-haru': 'Doyō no Iri (Spring)',
    hachijuhachiya: 'Hachijūhachiya (88th Night)',
    nyubai: 'Nyūbai (Start of Rainy Season)',
    hangesho: 'Hangeshō',
    'doyo-natsu': 'Doyō no Iri (Summer)',
    nihyakutoka: 'Nihyaku-tōka (210th Day)',
    'higan-aki': 'Higan no Iri (Autumn)',
    'doyo-aki': 'Doyō no Iri (Autumn)',
    hatsuuma: 'Hatsuuma (First Horse Day)',
    'doyo-ushi': 'Doyō no Ushi no Hi (Midsummer Ox Day)',
  },
  moon: { new: 'New Moon (Saku)', full: 'Full Moon (Bō)' },
  rokuyo: {
    senshou: {
      name: 'Sensho (先勝)',
      desc: 'Said to be a day when it is best to hurry; the morning is regarded as auspicious and the afternoon as inauspicious.',
    },
    tomobiki: {
      name: 'Tomobiki (友引)',
      desc: 'Said to “draw a friend along,” so there is a custom of avoiding funerals on this day. Morning and evening are regarded as auspicious, and noon as inauspicious.',
    },
    senbu: {
      name: 'Senbu (先負)',
      desc: 'Said to be a day when it is best to keep things low-key; the morning is regarded as inauspicious and the afternoon as auspicious.',
    },
    butsumetsu: { name: 'Butsumetsu (仏滅)', desc: 'The day regarded as the most inauspicious of the six rokuyō.' },
    taian: {
      name: 'Taian (大安)',
      desc: 'The name means “great peace,” and the day is regarded as auspicious all day long. It is often chosen for dates such as weddings.',
    },
    shakku: {
      name: 'Shakku (赤口)',
      desc: 'Regarded as auspicious only around noon and inauspicious at other times. Some people avoid celebrations on this day.',
    },
  },
  ui: {
    sectionName: 'Auspicious Days Calendar',
    legendHeading: 'How to read the colors and marks',
    legendKoyomi: 'Rekichū (customs, not official)',
    legendOfficial: 'Official announcements (National Astronomical Observatory of Japan / Cabinet Office)',
    legendHoliday: 'Public holiday',
    legendTensha: 'Tenshabi',
    year: {
      title: 'Tenshabi & Ichiryumanbai 2027: Auspicious Days Calendar (Reiwa 9)',
      description:
        '2027 has 6 Tenshabi, and 3 days where it overlaps Ichiryū-manbai-bi. Monthly lists of lucky days with matching shrines (rekichū are customs, not official).',
      h1: '2027 (Reiwa 9) Auspicious Days Calendar',
      lead:
        'This page lays out Tenshabi (天赦日), Ichiryū-manbai-bi (一粒万倍日), Days of the Tiger, Days of the Snake, Tsuchinoto-mi no hi and Kinoe-ne no hi on a month-by-month calendar for 2027. These are rekichū (traditional calendar annotations). Public holidays, the 24 solar terms, zassetsu (seasonal markers) and moon phases are based on announcements by the National Astronomical Observatory of Japan and the Cabinet Office, and are shown separately from rekichū. For each day, shrines whose benefit tags match are also shown automatically.',
      keyDatesHeading: 'Key auspicious days in 2027',
      tenshaLine: (n, d) => `Tenshabi (${n} times): ${d}`,
      overlapLine: (n, d) => `Days when Tenshabi and Ichiryū-manbai-bi overlap (${n} days): ${d}`,
      tsuchinotomiLine: (n, d) => `Tsuchinoto-mi no hi (${n} times): ${d}`,
      monthsHeading: 'Monthly calendars',
      monthLink: (m) => `${MONTHS_FULL[m - 1]} lucky days`,
      rokuyoPromo: 'Rokuyō (Taian, Butsumetsu and so on) are collected on a separate page for reference.',
      guidesHeading: 'Related features',
      guideKinun: '6 Shrines for Money Luck',
      guideEnmusubi: '10 Famous Shrines for Enmusubi (Love and Relationships) in Japan',
      faqHeading: 'Frequently asked questions',
    },
    month: {
      title: (m, t) =>
        t
          ? `Tenshabi on ${t} & Ichiryumanbai | ${MONTHS_FULL[m - 1]} 2027 Lucky Days`
          : `Ichiryumanbai, Tiger & Snake Days | ${MONTHS_FULL[m - 1]} 2027 Lucky Days`,
      description: (m) =>
        `${MONTHS_FULL[m - 1]} 2027 lucky days: Tenshabi, Ichiryū-manbai-bi, Tiger and Snake days and more, with holidays, solar terms and matching shrines (rekichū are customs, not official).`,
      h1: (m) => `Lucky Days in ${MONTHS_FULL[m - 1]} 2027`,
      gridHeading: 'Calendar',
      detailHeading: 'Rekichū days this month',
      noKoyomi: 'There are no rekichū days this month.',
      relatedHeading: 'Shrines that match this day',
      relatedNote:
        'Shrines are shown automatically based on matching benefit tags and similar criteria. This does not indicate that visiting on this day will have any effect.',
      prev: (m) => `← ${MONTHS_FULL[m - 1]}`,
      next: (m) => `${MONTHS_FULL[m - 1]} →`,
      backToYear: 'Back to the 2027 Auspicious Days Calendar',
      officialHeading: 'Public holidays, solar terms, zassetsu and moon phases (official announcements)',
    },
    rokuyoPage: {
      title: '2027 Rokuyō Calendar (Taian, Butsumetsu) | For Reference',
      description:
        'Reference list of 2027 rokuyō (Sensho, Tomobiki, Senbu, Butsumetsu, Taian, Shakku) by month. Based on the old lunar calendar; unrelated to Shinto doctrine.',
      h1: '2027 Rokuyō Calendar (For Reference)',
      lead: 'A reference page collecting the rokuyō (Taian, Butsumetsu and so on) by month. Separate from the rekichū in the Auspicious Days Calendar, please treat it as a rough guide when choosing a date.',
      aboutHeading: 'What Is Rokuyō?',
      aboutBody: [
        'Rokuyō consists of six days (Sensho, Tomobiki, Senbu, Butsumetsu, Taian and Shakku), a rekichū determined in sequence by the month and day of the old lunar calendar. It is said to have originated in China, and is said to have spread among ordinary people in Japan from around the end of the Edo period.',
        'Rokuyō has no connection to Shinto doctrine, nor was it established by the state or any public body. It is not listed in the Calendar Outline (Reki Yōkō) of the National Astronomical Observatory of Japan. It does not guarantee any basis or effect for good or bad fortune; it is introduced as a custom that many people pay attention to when choosing dates for weddings, funerals and the like.',
      ],
      tableHeading: 'Rokuyō by month',
      calcNote:
        'Rokuyō are calculated from old lunar calendar dates, which are derived from the new moons (saku) and the 24 solar terms announced by the National Astronomical Observatory of Japan. The old lunar calendar date is shown in parentheses.',
      backToYear: 'Back to the 2027 Auspicious Days Calendar',
      noteBadge: 'Reference',
    },
    notice: {
      heading: 'Please Note',
      body:
        'Ichiryū-manbai-bi, Tenshabi, Days of the Tiger, Days of the Snake, Tsuchinoto-mi no hi and Kinoe-ne no hi are rekichū (traditional calendar annotations): customs long printed in popular almanacs as a rough guide for choosing dates. They were not established by the state or any public body. They do not guarantee any basis for good or bad fortune or any effect, and the days adopted may differ depending on the calendar or school. For Ichiryū-manbai-bi and the like, month boundaries follow the common method of starting a new month on the day of the solar term “setsu” (節) itself. Public holidays, the 24 solar terms, zassetsu and moon phases are based on announcements by the Cabinet Office and the National Astronomical Observatory of Japan. Please use these dates as a rough guide for enjoying auspicious customs.',
    },
    sources: {
      heading: 'Sources',
      items: [
        {
          label: 'National holidays',
          text: 'Cabinet Office, “National Holidays” (国民の祝日について)',
          href: 'https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html',
        },
        {
          label: 'Solar terms and zassetsu',
          text: 'National Astronomical Observatory of Japan, Calendar Outline for Reiwa 9 (2027) (暦要項)',
          href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou272.html',
        },
        {
          label: 'Moon phases (new and full moon)',
          text: 'National Astronomical Observatory of Japan, Calendar Outline for Reiwa 9 (2027) (暦要項)',
          href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou273.html',
        },
        {
          label: 'Rekichū (Tenshabi, Ichiryū-manbai-bi, etc.)',
          text: 'Calculated by this site from each day’s sexagenary cycle (eto) and the solar term “setsu,” following rules commonly used in popular calendars (not an official announcement). The meanings are based on general calendar explanations and do not guarantee any effect.',
        },
      ],
    },
    faq: (c) => [
      {
        q: `When are the Tenshabi days in ${c.year}?`,
        a: `In ${c.year}, Tenshabi falls ${c.tenshaCount} times: ${c.tensha} (calculated using the commonly used rules for rekichū).`,
      },
      {
        q: 'When do Tenshabi and Ichiryū-manbai-bi overlap?',
        a: `In ${c.year}, they overlap on ${c.tenshaIchiryu} (${c.tenshaIchiryuCount} days). There are ${c.ichiryuCount} Ichiryū-manbai-bi days in the year.`,
      },
      {
        q: 'Are Tenshabi and Ichiryū-manbai-bi part of an official calendar?',
        a: 'No. They were not established by the state or any public body. They are customs called rekichū (traditional calendar annotations) that have long been printed in popular calendars as a rough guide for choosing dates. The days may differ depending on the school or calendar, and no effect is guaranteed.',
      },
      {
        q: 'When are the Tsuchinoto-mi no hi days?',
        a: `In ${c.year}, Tsuchinoto-mi no hi falls ${c.tsuchinotomiCount} times: ${c.tsuchinotomi}.`,
      },
      {
        q: 'Are rokuyō (Taian, Butsumetsu) included?',
        a: 'Because rokuyō are rekichū derived from the old lunar calendar and unrelated to Shinto, they are collected on a separate reference page rather than in the Auspicious Days Calendar.',
      },
    ],
    relatedShrinesAria: 'Shrines that match this day',
  },
};
