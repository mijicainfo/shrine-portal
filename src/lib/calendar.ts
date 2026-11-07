/**
 * 開運カレンダー（/calendar/2027/）用のヘルパー。日付データは src/data/calendar2027.ts（言語共通）、
 * 文言は src/data/calendarText.*.ts。ここは月グリッドの組み立てや、一覧表示用の整形だけを担当する。
 */
import { calendarDays, calendarYear, type CalendarDay, type KoyomiTag } from '../data/calendar2027';
import { calendarText } from '../data/calendarText';
import type { Lang } from './content';

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export { calendarYear };

/** 暦注の表示順（年間で特に注目される順） */
export const KOYOMI_ORDER: KoyomiTag[] = ['tensha', 'ichiryumanbai', 'tsuchinotomi', 'kinoene', 'tora', 'mi'];

const byDate = new Map<string, CalendarDay>(calendarDays.map((d) => [d.date, d]));

export const pad2 = (n: number) => String(n).padStart(2, '0');
export const isoDate = (month: number, day: number) => `${calendarYear}-${pad2(month)}-${pad2(day)}`;
export const daysInMonth = (month: number) => new Date(Date.UTC(calendarYear, month, 0)).getUTCDate();
export const weekdayOf = (month: number, day: number) => new Date(Date.UTC(calendarYear, month - 1, day)).getUTCDay();

export function dayInfo(month: number, day: number): CalendarDay | undefined {
  return byDate.get(isoDate(month, day));
}

export interface DayCell {
  month: number;
  day: number;
  weekday: number;
  date: string;
  info?: CalendarDay;
}

/** 日曜始まりの週ごとの配列（月外のマスは null） */
export function buildMonthGrid(month: number): (DayCell | null)[][] {
  const weeks: (DayCell | null)[][] = [];
  let row: (DayCell | null)[] = Array(weekdayOf(month, 1)).fill(null);
  for (let d = 1; d <= daysInMonth(month); d++) {
    const cell: DayCell = { month, day: d, weekday: weekdayOf(month, d), date: isoDate(month, d), info: dayInfo(month, d) };
    row.push(cell);
    if (row.length === 7) {
      weeks.push(row);
      row = [];
    }
  }
  if (row.length) {
    while (row.length < 7) row.push(null);
    weeks.push(row);
  }
  return weeks;
}

export function daysWith(tag: KoyomiTag): CalendarDay[] {
  return calendarDays.filter((d) => d.koyomi?.includes(tag));
}

export function parseDate(date: string) {
  const [, m, d] = date.split('-').map(Number);
  return { month: m, day: d, weekday: weekdayOf(m, d) };
}

/** 言語ごとの書式で日付を並べる（例: 2月28日（日）、4月29日（木）…） */
export function formatDates(lang: Lang, dates: string[]): string {
  const t = calendarText[lang];
  const sep = lang === 'ja' || lang === 'zh' ? '、' : ', ';
  return dates
    .map((date) => {
      const { month, day, weekday } = parseDate(date);
      return t.dateShort(month, day, weekday);
    })
    .join(sep);
}

/** その月の暦注がある日（日付順） */
export function koyomiDaysInMonth(month: number): CalendarDay[] {
  return calendarDays.filter((d) => d.koyomi?.length && Number(d.date.slice(5, 7)) === month);
}

/** その月の公的発表（祝日・節気・雑節・月相）がある日 */
export function officialDaysInMonth(month: number): CalendarDay[] {
  return calendarDays.filter(
    (d) => (d.holiday || d.sekki || d.zassetsu?.length || d.moon) && Number(d.date.slice(5, 7)) === month,
  );
}

export function tenshaDatesInMonth(month: number): string[] {
  return daysWith('tensha')
    .map((d) => d.date)
    .filter((date) => Number(date.slice(5, 7)) === month);
}

/** 年間の集計（FAQ・見出し用） */
export function yearSummary() {
  const tensha = daysWith('tensha').map((d) => d.date);
  const tenshaIchiryu = daysWith('tensha').filter((d) => d.koyomi?.includes('ichiryumanbai')).map((d) => d.date);
  const tsuchinotomi = daysWith('tsuchinotomi').map((d) => d.date);
  return {
    tensha,
    tenshaIchiryu,
    tsuchinotomi,
    ichiryuCount: daysWith('ichiryumanbai').length,
  };
}
