/**
 * 開運カレンダーから六曜の参考ページへ誘導する文言（スイッチ・リンク・ボタン）。6言語。
 * 六曜は別ページ（/calendar/2027/rokuyo/）が本体で、ここは入口の文言だけ。
 */
export type RokuyoUiLang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';

export interface CalendarRokuyoUi {
  /** 月別ページのスイッチ（初期はオフ） */
  toggle: string;
  /** 月別ページのカレンダー下のリンク */
  monthLink: string;
  /** 年間ページの「主な開運日」の箱のボタン */
  yearButton: string;
  /** 年間ページのよくある質問（六曜）の答えの下のリンク */
  faqLink: string;
  /** フッター */
  footer: string;
}

export const calendarRokuyoUi: Record<RokuyoUiLang, CalendarRokuyoUi> = {
  ja: {
    toggle: '六曜を表示',
    monthLink: '2027年の六曜カレンダー（参考）→',
    yearButton: '六曜（大安・仏滅）を見る →',
    faqLink: '六曜カレンダー（参考）を見る →',
    footer: '六曜カレンダー2027',
  },
  en: {
    toggle: 'Show rokuyo',
    monthLink: '2027 Rokuyo calendar (for reference) →',
    yearButton: 'See rokuyo (Taian, Butsumetsu) →',
    faqLink: 'Open the rokuyo calendar (for reference) →',
    footer: 'Rokuyo Calendar 2027',
  },
  zh: {
    toggle: '顯示六曜',
    monthLink: '2027年六曜日曆（參考）→',
    yearButton: '查看六曜（大安、佛滅）→',
    faqLink: '查看六曜日曆（參考）→',
    footer: '2027六曜日曆',
  },
  es: {
    toggle: 'Mostrar rokuyō',
    monthLink: 'Calendario de rokuyō 2027 (de referencia) →',
    yearButton: 'Ver los rokuyō (Taian, Butsumetsu) →',
    faqLink: 'Abrir el calendario de rokuyō (de referencia) →',
    footer: 'Calendario de rokuyō 2027',
  },
  fr: {
    toggle: 'Afficher les rokuyō',
    monthLink: 'Calendrier des rokuyō 2027 (à titre indicatif) →',
    yearButton: 'Voir les rokuyō (Taian, Butsumetsu) →',
    faqLink: 'Ouvrir le calendrier des rokuyō (à titre indicatif) →',
    footer: 'Calendrier des rokuyō 2027',
  },
  ko: {
    toggle: '로쿠요 표시',
    monthLink: '2027 로쿠요 캘린더(참고) →',
    yearButton: '로쿠요(다이안·부쓰메쓰) 보기 →',
    faqLink: '로쿠요 캘린더(참고) 보기 →',
    footer: '2027 로쿠요 캘린더',
  },
};
