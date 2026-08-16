export interface Region {
  id: string;
  nameJa: string;
  nameEn: string;
}

export const regions: Region[] = [
  { id: 'hokkaido', nameJa: '北海道', nameEn: 'Hokkaido' },
  { id: 'tohoku', nameJa: '東北', nameEn: 'Tohoku' },
  { id: 'kanto', nameJa: '関東', nameEn: 'Kanto' },
  { id: 'chubu', nameJa: '中部', nameEn: 'Chubu' },
  { id: 'kinki', nameJa: '近畿', nameEn: 'Kinki' },
  { id: 'chugoku', nameJa: '中国', nameEn: 'Chugoku' },
  { id: 'shikoku', nameJa: '四国', nameEn: 'Shikoku' },
  { id: 'kyushu-okinawa', nameJa: '九州・沖縄', nameEn: 'Kyushu & Okinawa' },
];

/** JA prefecture name (as stored in the `shrines` collection) → region id. Covers all 47 prefectures so future additions are pre-categorized. */
const prefectureToRegionJa: Record<string, string> = {
  北海道: 'hokkaido',
  青森県: 'tohoku', 岩手県: 'tohoku', 宮城県: 'tohoku', 秋田県: 'tohoku', 山形県: 'tohoku', 福島県: 'tohoku',
  茨城県: 'kanto', 栃木県: 'kanto', 群馬県: 'kanto', 埼玉県: 'kanto', 千葉県: 'kanto', 東京都: 'kanto', 神奈川県: 'kanto',
  新潟県: 'chubu', 富山県: 'chubu', 石川県: 'chubu', 福井県: 'chubu', 山梨県: 'chubu', 長野県: 'chubu', 岐阜県: 'chubu', 静岡県: 'chubu', 愛知県: 'chubu',
  三重県: 'kinki', 滋賀県: 'kinki', 京都府: 'kinki', 大阪府: 'kinki', 兵庫県: 'kinki', 奈良県: 'kinki', 和歌山県: 'kinki',
  鳥取県: 'chugoku', 島根県: 'chugoku', 岡山県: 'chugoku', 広島県: 'chugoku', 山口県: 'chugoku',
  徳島県: 'shikoku', 香川県: 'shikoku', 愛媛県: 'shikoku', 高知県: 'shikoku',
  福岡県: 'kyushu-okinawa', 佐賀県: 'kyushu-okinawa', 長崎県: 'kyushu-okinawa', 熊本県: 'kyushu-okinawa', 大分県: 'kyushu-okinawa', 宮崎県: 'kyushu-okinawa', 鹿児島県: 'kyushu-okinawa', 沖縄県: 'kyushu-okinawa',
};

/** EN prefecture base name (without a trailing " Prefecture") → region id. */
const prefectureToRegionEn: Record<string, string> = {
  Hokkaido: 'hokkaido',
  Aomori: 'tohoku', Iwate: 'tohoku', Miyagi: 'tohoku', Akita: 'tohoku', Yamagata: 'tohoku', Fukushima: 'tohoku',
  Ibaraki: 'kanto', Tochigi: 'kanto', Gunma: 'kanto', Saitama: 'kanto', Chiba: 'kanto', Tokyo: 'kanto', Kanagawa: 'kanto',
  Niigata: 'chubu', Toyama: 'chubu', Ishikawa: 'chubu', Fukui: 'chubu', Yamanashi: 'chubu', Nagano: 'chubu', Gifu: 'chubu', Shizuoka: 'chubu', Aichi: 'chubu',
  Mie: 'kinki', Shiga: 'kinki', Kyoto: 'kinki', Osaka: 'kinki', Hyogo: 'kinki', Nara: 'kinki', Wakayama: 'kinki',
  Tottori: 'chugoku', Shimane: 'chugoku', Okayama: 'chugoku', Hiroshima: 'chugoku', Yamaguchi: 'chugoku',
  Tokushima: 'shikoku', Kagawa: 'shikoku', Ehime: 'shikoku', Kochi: 'shikoku',
  Fukuoka: 'kyushu-okinawa', Saga: 'kyushu-okinawa', Nagasaki: 'kyushu-okinawa', Kumamoto: 'kyushu-okinawa', Oita: 'kyushu-okinawa', Miyazaki: 'kyushu-okinawa', Kagoshima: 'kyushu-okinawa', Okinawa: 'kyushu-okinawa',
};

export function getRegionId(prefecture: string, lang: 'ja' | 'en'): string | undefined {
  if (lang === 'ja') return prefectureToRegionJa[prefecture];
  const base = prefecture.replace(/\s*Prefecture$/i, '').trim();
  return prefectureToRegionEn[base];
}
