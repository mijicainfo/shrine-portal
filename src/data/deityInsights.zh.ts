import type { DeityInsight } from './deityInsights';

/**
 * Traditional Chinese translation of deityInsights.ts, keyed by the same shrine id.
 * Mirrors the Japanese file's fallback behavior: any shrine id missing here
 * gets an auto-generated minimal card on /zh/deities/ instead of being omitted.
 */
export const deityInsightsZh: Record<string, DeityInsight> = {
  'ise-jingu': {
    category: '神話之神（皇室祖神・太陽女神）',
    description:
      '在日本神話中被視為最高神的太陽女神。她與弟弟須佐之男命立誓約定，以及躲入天岩戶而衍生出的「天岩戶神話」都廣為人知。身為皇室的祖先神，自古以來被奉為最尊貴的神明之一。',
    chant: {
      title: '十言神咒（とことのかみのじゅ）',
      text: '天照大御神',
      note: '直接以十個音節唱誦神名的作法，是伊勢神宮神職人員自古傳承下來的唱誦方式。',
    },
  },
  'izumo-taisha': {
    category: '神話之神（開創國土之神・締結良緣之神）',
    description:
      '相傳是開創出雲之國的神明。在日本神話中，以拯救遭到兄弟眾神欺凌的「因幡之白兔」的故事，以及將自己所治理的國土讓渡給天照大御神的「國讓神話」而廣為人知。同時也被視為掌管幽冥世界，以及人與人之間「緣分」的神明而受到信仰。',
  },
  'meiji-jingu': {
    category: '祖神・皇室',
    description:
      '明治天皇是引領日本從江戶邁向明治這段劇烈變革時代的第一百二十二代天皇。皇后昭憲皇太后則以致力推動教育與社會福利而聞名，此神社將兩位一同奉祀。',
  },
  'fushimi-inari': {
    category: '神話之神（五穀豐收之神）',
    description:
      '以「稻荷大人」的暱稱廣受親近的神明。「宇迦」被認為意指穀物與食物，原本是掌管農業的神明，後世逐漸也被廣泛信仰為生意興隆之神。',
  },
  'dazaifu-tenmangu': {
    category: '人物神（學問之神）',
    description:
      '奉祀平安時代的學者兼政治家菅原道真公。他去世後，朝廷追贈「天滿大自在天神」的神號，加上其本人博學多才的形象，使他以學問之神「天神大人」之姿受到全國信仰。',
    chant: {
      title: '神號',
      text: '天滿大自在天神（てんまんだいじざいてんじん）',
      note: '朝廷追贈給道真公的神明稱號，也是「天滿宮」這個社名的由來。',
    },
  },
  itsukushima: {
    category: '神話之神（海神）',
    description:
      '相傳是由天照大御神與須佐之男命的誓約中誕生的「宗像三女神」之一。自古以來作為守護海上交通安全的神明，深受從事航海之人的虔誠信仰。',
  },
  'hokkaido-jingu': {
    category: '神話之神（開拓國土之神）',
    description:
      '大己貴神被認為是大國主大神的別名，相傳祂與少彥名神共同推動國土開發，並將農業與醫藥知識傳授給世人。北海道開拓之際，為祈求其庇佑而奉祀於此。',
  },
  'shiogama-jinja': {
    category: '神話之神（海神・武神）',
    description:
      '鹽土老翁神相傳是將製鹽技術傳授給世人的神明。與其一同奉祀的武甕槌神、經津主神，則是在國讓神話中被派往出雲的武神，相傳也曾參與平定東北地區。',
  },
  kotohiragu: {
    category: '神話之神（海神）',
    description:
      '大物主神被認為是大國主大神「和魂」──也就是溫和、為人們帶來恩惠的一面。作為海神，自古以來深受從事漁業與海運之人的虔誠信仰。',
  },
  'usa-jingu': {
    category: '人物神（武運之神）',
    description:
      '八幡大神相傳是第十五代應神天皇的神靈。作為武運長久之神，尤其在武士的時代備受尊崇，神佛習合時期也被稱為「八幡大菩薩」。',
    chant: {
      title: '神號',
      text: '南無八幡大菩薩（なむはちまんだいぼさつ）',
      note: '神佛習合時期廣為流傳的唱誦詞，相傳源義經等眾多武將在合戰之際都曾唱誦此語。',
    },
  },
  samuhara: {
    category: '神話之神（造化三神・開天闢地之神）',
    description:
      '相傳是《古事記》中天地開闢之初最早出現的三柱神明。「サムハラ」（薩姆哈拉）作為統稱這三位神明的神文字，自古以來也被視為能免除災禍的護身符文字流傳下來。',
    chant: {
      title: '神文字',
      text: 'サムハラ（薩姆哈拉）',
      note: '相傳具有避免災難的力量，過去出征的士兵會隨身攜帶這個特殊文字。原本的神字因屬特殊字形，電腦與智慧型手機皆無法顯示，此處便宜以片假名標示。',
    },
  },
};
