/**
 * 開運カレンダー2027 の告知（トップページのカード／全ページ共通の細い帯）の文言。6言語。
 * 暦注は慣習で公式ではない旨は、告知側でも一言添える。
 */
export type PromoLang = 'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko';

export interface CalendarPromoText {
  eyebrow: string;
  title: string;
  body: (tenshaCount: number) => string;
  cta: string;
  note: string;
  /** 全ページ共通の細い帯の一文 */
  strip: string;
  stripLink: string;
}

export const calendarPromo: Record<PromoLang, CalendarPromoText> = {
  ja: {
    eyebrow: '2027年版 公開中',
    title: '開運カレンダー2027',
    body: (n) => `2027年の天赦日は${n}回。天赦日・一粒万倍日・寅の日・巳の日・己巳の日を月別にまとめ、その日に合う神社もご紹介します。`,
    cta: '開運カレンダーを見る',
    note: '暦注は慣習で公式ではありません。',
    strip: '開運カレンダー2027 公開中｜天赦日・一粒万倍日を月別にチェック',
    stripLink: '見る',
  },
  en: {
    eyebrow: 'Now open: 2027 edition',
    title: 'Auspicious Days Calendar 2027',
    body: (n) => `Tenshabi falls ${n} times in 2027. See Tenshabi, Ichiryumanbai, Tiger and Snake days month by month, with shrines that match each day.`,
    cta: 'Open the calendar',
    note: 'Rekichū are traditional customs, not official.',
    strip: 'Auspicious Days Calendar 2027 is open: Tenshabi and Ichiryumanbai, month by month',
    stripLink: 'View',
  },
  zh: {
    eyebrow: '2027年版 現已公開',
    title: '2027開運日曆',
    body: (n) => `2027年的天赦日共${n}次。依月份整理天赦日、一粒萬倍日、寅之日、巳之日、己巳之日，並介紹適合當天的神社。`,
    cta: '查看開運日曆',
    note: '曆注為慣習，並非官方公布。',
    strip: '2027開運日曆現已公開｜依月份查看天赦日、一粒萬倍日',
    stripLink: '查看',
  },
  es: {
    eyebrow: 'Ya disponible: edición 2027',
    title: 'Calendario de días propicios 2027',
    body: (n) => `El Tenshanichi cae ${n} veces en 2027. Consulta mes a mes los días Tenshanichi, Ichiryū-manbai-bi, del Tigre y de la Serpiente, con santuarios afines a cada día.`,
    cta: 'Ver el calendario',
    note: 'Los rekichū son costumbres tradicionales, no oficiales.',
    strip: 'Calendario de días propicios 2027: Tenshanichi e Ichiryū-manbai-bi, mes a mes',
    stripLink: 'Ver',
  },
  fr: {
    eyebrow: 'Disponible : édition 2027',
    title: 'Calendrier des jours fastes 2027',
    body: (n) => `Le Tenshanichi tombe ${n} fois en 2027. Consultez mois par mois les jours Tenshanichi, Ichiryū-manbai-bi, du Tigre et du Serpent, avec des sanctuaires adaptés à chaque jour.`,
    cta: 'Voir le calendrier',
    note: 'Les rekichū sont des coutumes traditionnelles, non officielles.',
    strip: 'Calendrier des jours fastes 2027 : Tenshanichi et Ichiryū-manbai-bi, mois par mois',
    stripLink: 'Voir',
  },
  ko: {
    eyebrow: '2027년판 공개',
    title: '2027 개운 캘린더',
    body: (n) => `2027년의 덴샤니치는 ${n}회입니다. 덴샤니치·이치류만바이비·도라노히·미노히를 월별로 정리하고, 그날에 어울리는 신사도 소개합니다.`,
    cta: '캘린더 보기',
    note: '레키추는 관습이며 공식 발표가 아닙니다.',
    strip: '2027 개운 캘린더 공개｜덴샤니치·이치류만바이비를 월별로 확인',
    stripLink: '보기',
  },
};
