/**
 * 開運カレンダーの「この日に合う神社」を自動で選ぶ。
 *
 * 新しい神社を足しても手作業なしで反映されるよう、各神社のフロントマター（ご利益タグ・名前・祭神）と
 * 本文に含まれる語だけを使い、日ごとの暦注／行事に対応するルール（RULES）で点数づけする。
 * 「この日に参拝すると効果がある」と示すものではなく、あくまで「テーマが合う神社」の紹介。
 *
 * - 候補は日本語コレクション（ご利益タグが日本語のため）で決め、各言語のコレクションの同じ id に引き当てる。
 *   → 全言語で同じ神社が同じ日に並ぶ。
 * - 並びは「点数順の上位プール」を日ごとにずらして使う（同じ神社ばかりにならない／ビルドごとに変わらない）。
 */
import { getPublished } from './content';
import type { Lang } from './content';
import { calendarDays } from '../data/calendar2027';

const collectionByLang = {
  ja: 'shrines',
  en: 'shrinesEn',
  zh: 'shrinesZh',
  es: 'shrinesEs',
  fr: 'shrinesFr',
  ko: 'shrinesKo',
} as const;

interface Rule {
  /** 一致すると +2（ご利益タグ。日本語コレクションの値と照合） */
  benefits: string[];
  /** 神社名・祭神に含まれると +5（その日の縁日・由来に直接関わる語） */
  strongMotifs?: string[];
  /** 本文に含まれると +1（弱い一致） */
  weakMotifs?: string[];
}

const RULES: Record<string, Rule> = {
  // 天赦日：何かを始めるのによい最上の吉日とされる → 開運・諸願成就系
  tensha: { benefits: ['開運', '開運招福', '諸願成就', '大願成就', '開拓成就', '出世'] },
  // 一粒万倍日：何かを始めるのによい日とされる → 商売・開運系
  ichiryumanbai: { benefits: ['商売繁盛', '金運', '金運上昇', '開運', '開拓成就', '産業繁栄', '出世'] },
  // 寅の日：金運・旅立ち。毘沙門天・虎に縁のある神社
  tora: { benefits: ['金運', '金運上昇', '財運', '商売繁盛'], strongMotifs: ['毘沙門', '虎'], weakMotifs: ['毘沙門', '虎'] },
  // 巳の日：弁財天・蛇に縁のある神社
  mi: {
    benefits: ['金運', '金運上昇', '財運', '芸能上達', '技芸上達'],
    strongMotifs: ['弁財天', '弁天', '市杵島', '白蛇', '蛇窪'],
    weakMotifs: ['弁財天', '白蛇', '巳'],
  },
  // 己巳の日：弁財天の縁日とされる
  tsuchinotomi: {
    benefits: ['金運', '金運上昇', '財運', '芸能上達', '技芸上達'],
    strongMotifs: ['弁財天', '弁天', '市杵島', '白蛇', '蛇窪'],
    weakMotifs: ['弁財天', '白蛇', '巳'],
  },
  // 甲子の日：大黒天の縁日とされる
  kinoene: { benefits: ['金運', '商売繁盛', '出世'], strongMotifs: ['大黒', '大国主', '大己貴'], weakMotifs: ['大黒', '大国主'] },
  // 節分：厄除け系
  setsubun: { benefits: ['厄除け', '厄除開運', '厄除け・厄払い', '開運厄除', '方除け', '八方除け'] },
  // 初午：稲荷神社の祭日
  hatsuuma: {
    benefits: ['商売繁盛', '五穀豊穣', '金運', '産業繁栄'],
    strongMotifs: ['稲荷', '宇迦之御魂', '倉稲魂', '宇迦御魂'],
    weakMotifs: ['稲荷'],
  },
};

/** その日に当てはめるルール名（暦注・行事） */
export function ruleKeysFor(day: { koyomi?: string[]; zassetsu?: string[] }): string[] {
  const keys = [...(day.koyomi ?? [])];
  for (const z of day.zassetsu ?? []) if (z === 'setsubun' || z === 'hatsuuma') keys.push(z);
  return keys.filter((k) => RULES[k]);
}

const POOL_SIZE = 24;
const PER_DAY = 3;

interface Scored {
  id: string;
  score: number;
}

let cache: Promise<Map<string, string[]>> | undefined;

/** 日付 → 神社id の対応（全言語共通）。関連神社を出す日だけが入る。 */
function computePlan(): Promise<Map<string, string[]>> {
  cache ??= (async () => {
    const shrines = await getPublished('shrines');
    const sortKey = (a: Scored, b: Scored) => b.score - a.score || a.id.localeCompare(b.id);
    const plan = new Map<string, string[]>();
    let counter = 0;
    for (const day of calendarDays) {
      const keys = ruleKeysFor(day);
      if (!keys.length) continue;
      const scored: Scored[] = shrines.map((s: any) => {
        const benefits: string[] = s.data.benefits ?? [];
        const nameDeities = `${s.data.name ?? ''} ${(s.data.deities ?? []).join(' ')}`;
        const body: string = s.body ?? '';
        let score = 0;
        for (const key of keys) {
          const rule = RULES[key];
          score += benefits.filter((b) => rule.benefits.includes(b)).length * 2;
          for (const m of rule.strongMotifs ?? []) if (nameDeities.includes(m)) score += 5;
          for (const m of rule.weakMotifs ?? []) if (body.includes(m)) score += 1;
        }
        return { id: s.id as string, score };
      });
      const pool = scored.filter((s) => s.score > 0).sort(sortKey).slice(0, POOL_SIZE);
      if (!pool.length) continue;
      const picks: string[] = [];
      for (let k = 0; k < Math.min(PER_DAY, pool.length); k++) {
        picks.push(pool[(counter * PER_DAY + k) % pool.length].id);
      }
      counter += 1;
      plan.set(day.date, picks);
    }
    return plan;
  })();
  return cache;
}

/** 指定言語のコレクションのエントリとして、その日の関連神社を返す */
export async function getDayShrines(date: string, lang: Lang) {
  const plan = await computePlan();
  const ids = plan.get(date) ?? [];
  if (!ids.length) return [];
  const entries = await getPublished(collectionByLang[lang]);
  const byId = new Map(entries.map((e: any) => [e.id, e]));
  // 公開前の言語版がある神社は、その言語では出さない（リンク切れ防止）
  return ids.map((id) => byId.get(id)).filter(Boolean) as any[];
}
