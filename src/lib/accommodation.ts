/**
 * Booking.com / 楽天トラベルの検索クエリ生成（神社ページ・神社カード・旅行先ページで共通利用）。
 *
 * 経緯は src/components/AccommodationSection.astro のコメントを参照：Booking.com の地名検索は
 * 「Prefecture」付き表記・区レベルの地名・括弧つきの補足地名・無名の神社名などを正しく解釈できないため、
 * 括弧書きを取り除き、`都道府県 市区町村` / `City, Prefecture, Japan` の形だけを使う。
 * 値は実機（Booking.com）で確認済みのものだけを bookingCity / bookingPrefecture で上書きする運用。
 */
import { buildBookingSearchUrl, buildRakutenSearchUrl } from '../data/affiliate';
import { buildTripcomHotelUrl, isTripLang, type TripHotelTarget } from '../data/tripcom';

export type Lang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';

export interface AccommodationInput {
  city: string;
  prefecture: string;
  bookingCity?: string;
  bookingPrefecture?: string;
  /** 英語・繁體中文・韓国語のページで、Trip.com の都市番号が分かる場合に渡す（なければ Booking.com） */
  trip?: TripHotelTarget;
}

export function buildAccommodationQuery(lang: Lang, { city, prefecture, bookingCity, bookingPrefecture }: AccommodationInput): string {
  const cleanCity = (bookingCity ?? city).replace(/[（(].*?[）)]/g, '').trim();
  const resolvedBookingPrefecture = (bookingPrefecture ?? prefecture).replace(/\s*Prefecture$/i, '');
  if (lang === 'ja' && bookingCity && /^[ -~]+$/.test(cleanCity)) {
    // 日本語の地名では誤解決される市（例: 観音寺市→高松市）向け: 実機確認済みのローマ字名だけを、都道府県を付けずにそのまま検索する
    return cleanCity;
  }
  return lang !== 'ja'
    ? (cleanCity ? `${cleanCity}, ${resolvedBookingPrefecture}, Japan` : `${resolvedBookingPrefecture}, Japan`)
    : (cleanCity ? `${prefecture} ${cleanCity}` : prefecture);
}

export function buildAccommodationBookingUrl(lang: Lang, input: AccommodationInput): string {
  if (isTripLang(lang) && input.trip) return buildTripcomHotelUrl(lang, input.trip);
  return buildBookingSearchUrl(buildAccommodationQuery(lang, input));
}

/** 宿リンクの提携先の表示名（Trip.com のリンクを出すときだけ 'Trip.com'） */
export function accommodationPartnerName(lang: Lang, input: AccommodationInput): 'Trip.com' | 'Booking.com' {
  return isTripLang(lang) && input.trip ? 'Trip.com' : 'Booking.com';
}

/** 楽天トラベルのキーワード検索は日本語専用（日本語版でのみ使う） */
export function buildAccommodationRakutenUrl(shrineName: string, { city, prefecture, bookingCity }: AccommodationInput): string {
  // ローマ字の bookingCity は Booking.com 用の上書きなので、楽天トラベルには日本語の市区町村名を使う
  const isLatinOverride = !!bookingCity && /^[ -~]+$/.test(bookingCity);
  const useCity = isLatinOverride ? city : (bookingCity ?? city);
  const cleanCity = useCity.replace(/[（(].*?[）)]/g, '').trim();
  return buildRakutenSearchUrl(`${shrineName} ${prefecture}${cleanCity}`);
}
