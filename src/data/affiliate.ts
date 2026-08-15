/**
 * 宿泊予約サイトのアフィリエイトID設定。
 *
 * 現在は空文字（アフィリエイトIDなし）の通常検索リンクとして動作します。
 * 各サービスのアフィリエイトプログラムに登録・承認されたら、
 * 発行されたIDをここに入力するだけで、サイト全体のリンクが
 * 自動的にアフィリエイトリンクに切り替わります。
 *
 * - Booking.com アフィリエイトプログラム:
 *   https://www.booking.com/affiliate-program/v2/index.html
 *   （登録・承認後に発行される「aid」をbookingAidに設定）
 * - 楽天アフィリエイト:
 *   https://affiliate.rakuten.co.jp/
 *   （登録・承認後に発行される「アフィリエイトID」をrakutenAffiliateIdに設定）
 */
export const affiliateConfig = {
  bookingAid: '', // 例: '000000'
  rakutenAffiliateId: '', // 例: '0000000.00000000.0000000.00000000'
};

/**
 * Booking.comの検索結果ページURLを生成します。
 * bookingAidが設定されている場合は、アフィリエイトIDつきのURLになります。
 */
export function buildBookingSearchUrl(query: string): string {
  const params = new URLSearchParams({ ss: query });
  if (affiliateConfig.bookingAid) {
    params.set('aid', affiliateConfig.bookingAid);
  }
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

/**
 * 楽天トラベルの検索結果ページURLを生成します。
 * rakutenAffiliateIdが設定されている場合は、楽天アフィリエイトのリンク経由になります。
 */
export function buildRakutenSearchUrl(query: string): string {
  const params = new URLSearchParams({ f_query: query, charset: 'utf-8' });
  const targetUrl = `https://kw.travel.rakuten.co.jp/keyword/Search.do?${params.toString()}`;

  if (affiliateConfig.rakutenAffiliateId) {
    const wrapped = new URLSearchParams({ pc: targetUrl, m: targetUrl });
    return `https://hb.afl.rakuten.co.jp/hgc/${affiliateConfig.rakutenAffiliateId}/?${wrapped.toString()}`;
  }
  return targetUrl;
}
