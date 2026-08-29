export interface GlossaryTerm {
  term: string;
  reading: string;
  category: string;
  description: string;
}

export const glossaryTermsKo: GlossaryTerm[] = [
  {
    term: '도리이(鳥居)',
    reading: 'とりい / torii',
    category: '건축과 경내',
    description:
      '신성한 세계와 일상 세계의 경계를 나타내는 문입니다. 신사 입구에 세워져 있으며, 이곳을 지나는 것은 신이 계신 신성한 공간으로 들어서는 것으로 여겨집니다.',
  },
  {
    term: '산도(参道)',
    reading: 'さんどう / sandō',
    category: '건축과 경내',
    description:
      '도리이에서 본전까지 이어지는 참배로입니다. 참배로의 한가운데는 신이 지나는 길로 여겨지기 때문에, 예로부터 참배객은 예의상 살짝 옆으로 비켜서 걷습니다.',
  },
  {
    term: '혼덴(本殿)',
    reading: 'ほんでん / honden',
    category: '건축과 경내',
    description:
      '신사에서 가장 신성한 건물로, 신이 머무는 곳입니다. 대부분의 신사에서는 일반 참배객이 혼덴 안으로 직접 들어갈 수 없습니다.',
  },
  {
    term: '하이덴(拝殿)',
    reading: 'はいでん / haiden',
    category: '건축과 경내',
    description:
      '혼덴 앞에 있으며 참배객이 실제로 참배를 드리는 건물입니다. 새전을 바치고 손을 모아 기도하는 곳이 바로 이곳입니다.',
  },
  {
    term: '데미즈야(手水舎)',
    reading: 'てみずや / temizuya, ちょうずや / chōzuya',
    category: '건축과 경내',
    description:
      '참배 전에 손과 입을 정갈히 씻는 정화용 시설입니다. 국자로 물을 떠서 왼손, 오른손을 차례로 헹구고 입을 헹군 뒤 참배하는 것이 올바른 순서입니다.',
  },
  {
    term: '시메나와(注連縄)',
    reading: 'しめなわ / shimenawa',
    category: '건축과 경내',
    description:
      '신성한 세계와 일상 세계의 경계를 표시하는 새끼줄입니다. 신성한 장소나 신목(神木)에 둘러져 부정을 막는 결계 역할을 한다고 여겨집니다.',
  },
  {
    term: '고마이누(狛犬)',
    reading: 'こまいぬ / komainu',
    category: '건축과 경내',
    description:
      '신사 본전 앞에 흔히 놓여 있는 한 쌍의 사자·개 모양 석상입니다. 액을 막는 수호상 역할을 하며, 보통 입을 벌린 "아(阿)"상과 입을 다문 "운(吽)"상이 한 쌍을 이룹니다.',
  },
  {
    term: '진주노모리(鎮守の杜)',
    reading: 'ちんじゅのもり / chinju no mori',
    category: '건축과 경내',
    description:
      '신사 경내를 둘러싸거나 인접한 신성한 숲을 가리킵니다. 신이 머무는 곳으로 오랫동안 보호되어 왔기 때문에, 도심 한복판에서도 울창한 숲을 이루고 있는 경우가 많습니다.',
  },
  {
    term: '니레이 니하쿠슈 이치레이(二礼二拍手一礼)',
    reading: 'にれいにはくしゅいちれい / nirei nihakushu ichirei',
    category: '참배 예절',
    description:
      '대부분의 신사에서 따르는 기본 참배 방식으로, 두 번 깊이 절하고, 두 번 손뼉을 치고, 마지막으로 한 번 더 절하는 순서입니다. 일부 신사는 다른 방식을 따르기도 합니다.',
  },
  {
    term: '하쓰호료(初穂料)',
    reading: 'はつほりょう / hatsuho-ryō',
    category: '참배 예절',
    description:
      '신사에 바치는 봉납금이나 기원료를 가리킵니다. 그해 처음 수확한 벼(하쓰호)를 바치던 풍습에서 유래했으며, 기원·액막이·고슈인 등에 쓰이는 비용을 이렇게 부릅니다.',
  },
  {
    term: '고슈인(御朱印)',
    reading: 'ごしゅいん / goshuin',
    category: '참배 예절',
    description:
      '참배의 증표로 받는 도장으로, 보통 신사 이름과 인장, 날짜가 함께 찍힙니다. 원래는 사경(写経)을 봉납한 증표였지만, 오늘날에는 고슈인초(御朱印帳, 전용 수첩)를 가져가 신사 사무소에서 받는 것이 일반적입니다.',
  },
  {
    term: '고신타이(御神体)',
    reading: 'ごしんたい / goshintai',
    category: '참배 예절',
    description:
      '거울, 검, 산, 바위 등 신이 깃들어 있다고 여겨지는 신성한 물체입니다. 혼덴 깊숙한 곳에 모셔져 있어 일반 참배객이 직접 보는 일은 거의 없습니다.',
  },
  {
    term: '야오요로즈노카미(八百万の神)',
    reading: 'やおよろずのかみ / yaoyorozu no kami',
    category: '신과 신앙',
    description:
      '신도(神道)에서 모시는 수많은 신을 통틀어 이르는 말입니다. 자연 현상이나 동식물, 심지어 역사적 인물까지도 신으로 모셔질 수 있다는 일본 고유의 세계관을 잘 보여줍니다.',
  },
  {
    term: '우지가미(氏神)',
    reading: 'うじがみ / ujigami',
    category: '신과 신앙',
    description:
      '본래는 씨족의 조상신을 뜻했지만, 오늘날에는 자신이 살고 있는 지역을 지켜주는 수호신, 즉 "동네 신"이라는 의미로 널리 쓰입니다.',
  },
  {
    term: '우부스나가미(産土神)',
    reading: 'うぶすながみ / ubusunagami',
    category: '신과 신앙',
    description:
      '태어난 땅을 지켜주는 수호신입니다. 평생에 걸쳐 그 사람을 보살펴 준다고 믿어지며, 갓난아기의 첫 참배인 오미야마이리(お宮参り) 풍습도 이 신앙에서 비롯되었습니다.',
  },
  {
    term: '구지(宮司)',
    reading: 'ぐうじ / gūji',
    category: '신과 신앙',
    description:
      '해당 신사에서 가장 높은 지위의 신관으로, 제사를 주관하고 신사 전체를 총괄하는 역할을 맡습니다.',
  },
  {
    term: '시키넨 센구(式年遷宮)',
    reading: 'しきねんせんぐう / shikinen sengū',
    category: '행사와 기타',
    description:
      '일정한 주기로 신사의 건물을 새로 짓고 그곳으로 신을 옮겨 모시는 의식입니다. 이세 신궁에서는 20년마다 이루어지며, 건축 기술과 전통을 다음 세대에 전승하는 역할도 합니다.',
  },
  {
    term: '간나즈키·가미아리즈키(神無月・神在月)',
    reading: 'かんなづき、かみありづき / kannazuki, kamiarizuki',
    category: '행사와 기타',
    description:
      '옛 음력 10월을 가리키는 말입니다. 이 달에는 일본 전국의 신들이 이즈모(出雲)에 모인다고 전해져, 이즈모 지역에서는 "신이 있는 달(가미아리즈키)"이라 부르고, 그 밖의 지역에서는 "신이 없는 달(간나즈키)"이라 부릅니다.',
  },
  {
    term: '레이타이사이(例大祭)',
    reading: 'れいたいさい / reitaisai',
    category: '행사와 기타',
    description:
      '매년 정해진 날짜에 열리는 신사의 가장 중요한 연례 축제입니다. 신사의 창건이나 모시는 신과 관련된 날짜에 열리는 경우가 많으며, 많은 참배객이 몰려듭니다.',
  },
  {
    term: '하마야(破魔矢)',
    reading: 'はまや / hamaya',
    category: '행사와 기타',
    description:
      '액과 불운을 막아준다고 여겨지는 장식용 화살입니다. 특히 새해를 맞아 받는 부적으로 인기가 많으며, 보통 집 안의 높은 곳이나 현관 근처에 장식합니다.',
  },
];

export const glossaryCategoriesKo = [...new Set(glossaryTermsKo.map((t) => t.category))];
