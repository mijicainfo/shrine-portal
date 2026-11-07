import type { KoyomiTag } from '../data/calendar2027';

/** 暦注ごとの色（凡例・グリッド・バッジで共通）。言語に依存しない。 */
export const koyomiStyle: Record<KoyomiTag, { dot: string; badge: string }> = {
  tensha: { dot: 'bg-shrine-vermillion-dark', badge: 'bg-shrine-vermillion-dark text-white' },
  ichiryumanbai: { dot: 'bg-shrine-gold', badge: 'bg-shrine-gold/80 text-shrine-ink' },
  tsuchinotomi: { dot: 'bg-emerald-500', badge: 'bg-emerald-600 text-white' },
  kinoene: { dot: 'bg-violet-500', badge: 'bg-violet-600 text-white' },
  tora: { dot: 'bg-shrine-indigo-dark', badge: 'bg-shrine-indigo-dark text-white' },
  mi: { dot: 'bg-teal-500', badge: 'bg-teal-600 text-white' },
};

export const rokuyoKanji = {
  senshou: '先勝',
  tomobiki: '友引',
  senbu: '先負',
  butsumetsu: '仏滅',
  taian: '大安',
  shakku: '赤口',
} as const;
