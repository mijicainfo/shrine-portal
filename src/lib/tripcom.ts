/**
 * 神社の slug から、Trip.com の宿検索リンク用の情報（都市番号など）を取り出す。
 *
 * 繁體中文・韓国語の神社ページは市区町村の表記が日本語（漢字）ではない場合があるため、
 * 常に日本語版の神社データ（prefecture / city）から対応表のキーを作る。
 * 日本語版がまだ公開されていない神社や、対応表にない市区町村は undefined を返し、
 * 呼び出し側は従来の Booking.com リンクにフォールバックする。
 */
import { getPublishedEntry } from './content';
import { findTripTarget, type TripHotelTarget } from '../data/tripcom';

export async function getTripTargetForShrine(slug: string, lang: string): Promise<TripHotelTarget | undefined> {
  if (lang !== 'zh' && lang !== 'ko') return undefined;
  const ja = await getPublishedEntry('shrines', slug);
  if (!ja) return undefined;
  return findTripTarget(ja.data.prefecture, ja.data.city, `shrine-${slug}`);
}
