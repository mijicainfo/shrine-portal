/**
 * Booking.com / 楽天トラベルの検索クエリ生成（神社ページ・神社カード・旅行先ページで共通利用）。
 *
 * 経緯は src/components/AccommodationSection.astro のコメントを参照：Booking.com の地名検索は
 * 「Prefecture」付き表記・区レベルの地名・括弧つきの補足地名・無名の神社名などを正しく解釈できないため、
 * 括弧書きを取り除き、`都道府県 市区町村` / `City, Prefecture, Japan` の形だけを使う。
 * 値は実機（Booking.com）で確認済みのものだけを bookingCity / bookingPrefecture で上書きする運用。
 */
import { buildBookingSearchUrl, buildRakutenSearchUrl } from '../data/affiliate';

export type Lang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';

export interface AccommodationInput {
  city: string;
  prefecture: string;
  bookingCity?: string;
  bookingPrefecture?: string;
}

export function buildAccommodationQuery(lang: Lang, { city, prefecture, bookingCity, bookingPrefecture }: AccommodationInput): string {
  const cleanCity = (bookingCity ?? city).replace(/[（(].*?[）)]/g, '').trim();
  const resolvedBookingPrefecture = (bookingPrefecture ?? prefecture).replace(/\s*Prefecture$/i, '');
  return lang !== 'ja'
    ? (cleanCity ? `${cleanCity}, ${resolvedBookingPrefecture}, Japan` : `${resolvedBookingPrefecture}, Japan`)
    : (cleanCity ? `${prefecture} ${cleanCity}` : prefecture);
}

export function buildAccommodationBookingUrl(lang: Lang, input: AccommodationInput): string {
  return buildBookingSearchUrl(buildAccommodationQuery(lang, input));
}

/** 楽天トラベルのキーワード検索は日本語専用（日本語版でのみ使う） */
export function buildAccommodationRakutenUrl(shrineName: string, { city, prefecture, bookingCity }: AccommodationInput): string {
  const cleanCity = (bookingCity ?? city).replace(/[（(].*?[）)]/g, '').trim();
  return buildRakutenSearchUrl(`${shrineName} ${prefecture}${cleanCity}`);
}
