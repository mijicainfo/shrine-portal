import type { DeityInsight } from './deityInsights';

/**
 * English translations of deityInsights.ts, keyed by the same shrine id.
 * Mirrors the Japanese file's fallback behavior: any shrine id missing here
 * gets an auto-generated minimal card on /en/deities/ instead of being omitted.
 */
export const deityInsightsEn: Record<string, DeityInsight> = {
  'ise-jingu': {
    category: 'Mythological deity (Imperial ancestress, sun goddess)',
    description:
      'Regarded as the supreme deity of Japanese mythology, Amaterasu Omikami is the goddess of the sun. She is known for her covenant with her brother Susanoo and for the "Heavenly Rock Cave" myth in which she hid herself away, and has long been revered as one of the most exalted deities as ancestress of the imperial family.',
    chant: {
      title: 'Tokoto no Kami no Ju (the Ten-Syllable Sacred Chant)',
      text: 'Amaterasu Omikami',
      note: 'Chanting the deity\'s name as ten syllables, a practice long passed down among Ise\'s Shinto priests.',
    },
  },
  'izumo-taisha': {
    category: 'Mythological deity (Nation-builder, god of good relationships)',
    description:
      'Okuninushi is said to have built up the land of Izumo. In Japanese mythology he is best known for rescuing the "White Hare of Inaba" after it was tormented by his brother gods, and for the "Transfer of the Land" myth in which he ceded the realm he ruled to Amaterasu Omikami. He is also venerated as a deity who governs the unseen world and the bonds between people.',
  },
  'meiji-jingu': {
    category: 'Imperial ancestor deity',
    description:
      'Emperor Meiji was the 122nd emperor, who guided Japan through the turbulent transition from the Edo era into the modern age. His consort, Empress Shoken, was known for her dedication to education and social welfare; the two are enshrined together.',
  },
  'fushimi-inari': {
    category: 'Mythological deity (god of the harvest)',
    description:
      'Affectionately known as "Oinari-san," this deity\'s name incorporates "uka," an old word for grain and food. Originally venerated as a god of agriculture, the deity later came to be widely worshipped as a patron of business prosperity as well.',
  },
  'dazaifu-tenmangu': {
    category: 'Deified historical figure (god of scholarship)',
    description:
      'Enshrines Sugawara no Michizane, a Heian-era scholar and statesman. After his death, the imperial court granted him the divine title "Tenman Daijizai Tenjin," and thanks to his reputation as a brilliant scholar he came to be venerated nationwide as "Tenjin-sama," god of learning.',
    chant: {
      title: 'Divine title',
      text: 'Tenman Daijizai Tenjin',
      note: 'The divine title bestowed on Michizane, and the origin of the name "Tenmangu" used by shrines dedicated to him.',
    },
  },
  itsukushima: {
    category: 'Mythological deity (sea goddess)',
    description:
      'One of the "Three Munakata Goddesses," said to have been born from the covenant between Amaterasu Omikami and Susanoo. Long revered as a protector of safe sea travel, she has drawn deep devotion from seafarers throughout history.',
  },
  'hokkaido-jingu': {
    category: 'Mythological deity (god of land development)',
    description:
      'Onamuchi no Kami is regarded as another name for Okuninushi. Together with Sukunahikona no Kami, he is said to have advanced the building of the nation and spread knowledge of agriculture and medicine among the people. He was enshrined to watch over the development of Hokkaido.',
  },
  'shiogama-jinja': {
    category: 'Mythological deities (sea gods, gods of war)',
    description:
      'Shiotsuchi no Oji no Kami is said to have taught people the art of salt-making. The co-enshrined deities Takemikazuchi no Kami and Futsunushi no Kami are the martial gods dispatched to Izumo in the "Transfer of the Land" myth, and are also said to have played a role in pacifying the Tohoku region.',
  },
  kotohiragu: {
    category: 'Mythological deity (sea god)',
    description:
      'Omononushi no Kami is said to represent the "nigi-mitama" — the gentle, blessing-bestowing aspect — of Okuninushi. As a god of the sea, he has long drawn deep devotion from those engaged in fishing and shipping.',
  },
  'usa-jingu': {
    category: 'Deified historical figure (god of martial fortune)',
    description:
      'Hachiman Okami is regarded as the divine spirit of the 15th emperor, Ojin. Revered as a god of martial success, he was especially venerated in the age of the samurai, and during the era of syncretic Shinto-Buddhist worship was also known as "Hachiman Daibosatsu."',
    chant: {
      title: 'Divine title',
      text: 'Namu Hachiman Daibosatsu',
      note: 'A chant that spread during the era of syncretic Shinto-Buddhist worship, said to have been invoked by many warriors, including Minamoto no Yoshitsune, before battle.',
    },
  },
  samuhara: {
    category: 'Mythological deities (the three creator deities)',
    description:
      'In the Kojiki, these three deities are said to be the very first to appear at the dawn of creation. "Samuhara" serves as a collective sacred character for the three, long passed down as a ward against misfortune.',
    chant: {
      title: 'Sacred character',
      text: 'Samuhara',
      note: 'Believed to hold the power to ward off misfortune, this special character is said to have once been worn by soldiers heading off to war. The original character cannot be displayed on most computers or smartphones, so it is rendered here in katakana for convenience.',
    },
  },
};
