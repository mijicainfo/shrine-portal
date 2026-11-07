/**
 * Google AdSense の設定。サイトの審査が承認されるまでは adsenseEnabled = false のままにする
 * （false の間は、広告スクリプトも広告枠も一切出力されない）。
 *
 * 承認後にやること:
 *  1. AdSense で「ディスプレイ広告（レスポンシブ）」の広告ユニットを枠ごとに作り、下の slot ID を入れる。
 *  2. AdSense の「広告」→ サイト → 自動広告はオフ（またはアンカー・サイドレール・全画面広告を外す）。
 *     広告は下の枠だけに絞る（1ページ最大2枠、ファーストビューには出さない、提携リンクの直近には置かない）。
 *  3. adsenseEnabled を true にする。
 *  4. プライバシーポリシー（6言語）に AdSense の記載を入れ、EEA/UK 向けの同意メッセージ（AdSense「プライバシーとメッセージ」）を公開する。
 */
export const adsenseClient = 'ca-pub-2667686450318613';
export const adsenseEnabled = false;

export type AdPlacement = 'shrine-mid' | 'shrine-end' | 'guide-end';

/** 枠ごとの広告ユニット（data-ad-slot）。空文字の枠は出力されない。 */
export const adsenseSlots: Record<AdPlacement, string> = {
  'shrine-mid': '',
  'shrine-end': '',
  'guide-end': '',
};

export const adLabel: Record<'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko', string> = {
  ja: '広告',
  en: 'Advertisement',
  zh: '廣告',
  es: 'Publicidad',
  fr: 'Publicité',
  ko: '광고',
};
