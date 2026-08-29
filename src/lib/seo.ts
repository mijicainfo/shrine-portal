import { benefitTranslations } from '../data/benefitTranslations';
import { benefitTranslationsZh } from '../data/benefitTranslationsZh';

/** Strips a trailing full-width-paren reading/gloss, e.g. "天照大御神（あまてらすおおみかみ）" -> "天照大御神" */
function stripReading(text: string): string {
  return text.replace(/（[^）]*）/g, '').trim();
}

interface ShrineDescriptionData {
  name: string;
  prefecture: string;
  city: string;
  deities: string[];
  benefits?: string[];
  founded?: string;
}

/** Max length (in characters) a meta description is allowed to reach with the optional "founded" clause included. */
const MAX_DESCRIPTION_LENGTH = { ja: 110, en: 170, zh: 110 } as const;
/** Hard cap applied as a final safety net, in case a data field (e.g. a very long deity name) alone blows the budget. */
const HARD_CAP = { ja: 130, en: 200, zh: 130 } as const;
/** A single deity name is truncated to this length before being embedded in a sentence. */
const MAX_DEITY_LENGTH = { ja: 30, en: 60, zh: 30 } as const;

function truncate(text: string, maxLength: number): string {
  const chars = [...text];
  if (chars.length <= maxLength) return text;
  return chars.slice(0, maxLength - 1).join('').trimEnd() + '…';
}

export function buildShrineDescription(data: ShrineDescriptionData, lang: 'ja' | 'en' | 'zh'): string {
  const rawDeity = data.deities[0] ? stripReading(data.deities[0]) : '';
  const deity = truncate(rawDeity, MAX_DEITY_LENGTH[lang]);
  const rawBenefits = (data.benefits ?? []).slice(0, 2);
  const maxLength = MAX_DESCRIPTION_LENGTH[lang];

  if (lang === 'en') {
    const benefits = rawBenefits.map((b) => benefitTranslations[b] ?? b);
    const parts = [`${data.name} is a Shinto shrine in ${data.prefecture}${deity ? ` dedicated to ${deity}` : ''}.`];
    if (benefits.length > 0) parts.push(`Known for ${benefits.join(' and ')} blessings.`);
    parts.push('Explore its history, access, and goshuin info.');
    const base = parts.join(' ');
    if (data.founded) {
      const withFounded = `${parts[0]} Founding history: ${data.founded}. ${parts.slice(1).join(' ')}`;
      if (withFounded.length <= maxLength) return withFounded;
    }
    return truncate(base, HARD_CAP.en);
  }

  if (lang === 'zh') {
    const benefits = rawBenefits.map((b) => benefitTranslationsZh[b] ?? b);
    const parts = [`${data.name}（${data.prefecture}${data.city}）是${deity ? `供奉${deity}的` : ''}神社。`];
    if (benefits.length > 0) parts.push(`以${benefits.join('、')}等庇佑聞名。`);
    parts.push('為您介紹由緒、交通方式與御朱印資訊。');
    const base = parts.join('');
    if (data.founded) {
      const withFounded = `${parts[0]}創建於${data.founded}。${parts.slice(1).join('')}`;
      if (withFounded.length <= maxLength) return withFounded;
    }
    return truncate(base, HARD_CAP.zh);
  }

  const parts = [`${data.name}（${data.prefecture}${data.city}）は${deity ? `${deity}をお祀りする` : ''}神社です。`];
  if (rawBenefits.length > 0) parts.push(`${rawBenefits.join('・')}のご利益で知られます。`);
  parts.push('由緒・アクセス・御朱印情報をご紹介します。');
  const base = parts.join('');
  if (data.founded) {
    const withFounded = `${parts[0]}創建は${data.founded}。${parts.slice(1).join('')}`;
    if (withFounded.length <= maxLength) return withFounded;
  }
  return truncate(base, HARD_CAP.ja);
}

interface ShrineStructuredDataInput {
  name: string;
  kana?: string;
  description: string;
  address: string;
  city: string;
  prefecture: string;
  url: string;
  imageUrl?: string;
  officialUrl?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqStructuredData(faq: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildShrineStructuredData(data: ShrineStructuredDataInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: data.name,
    ...(data.kana ? { alternateName: data.kana } : {}),
    description: data.description,
    ...(data.imageUrl ? { image: data.imageUrl } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address,
      addressLocality: data.city,
      addressRegion: data.prefecture,
      addressCountry: 'JP',
    },
    url: data.url,
    ...(data.officialUrl ? { sameAs: [data.officialUrl] } : {}),
  };
}
