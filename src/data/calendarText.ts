import type { CalendarText } from './calendarText.ja';
import { calendarTextJa } from './calendarText.ja';
import { calendarTextEn } from './calendarText.en';
import { calendarTextZh } from './calendarText.zh';
import { calendarTextEs } from './calendarText.es';
import { calendarTextFr } from './calendarText.fr';
import { calendarTextKo } from './calendarText.ko';

export type { CalendarText } from './calendarText.ja';
export type { RokuyoKey } from './calendarText.ja';

export const calendarText: Record<'ja' | 'en' | 'zh' | 'es' | 'fr' | 'ko', CalendarText> = {
  ja: calendarTextJa,
  en: calendarTextEn,
  zh: calendarTextZh,
  es: calendarTextEs,
  fr: calendarTextFr,
  ko: calendarTextKo,
};
