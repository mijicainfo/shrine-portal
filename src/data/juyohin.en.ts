import type { JuyohinItem } from './juyohin';

export const juyohinItemsEn: JuyohinItem[] = [
  {
    id: 'ofuda',
    name: 'Ofuda (Household Talisman)',
    reading: '御札 / ofuda, shinsatsu',
    theme: 'indigo',
    summary: 'A talisman enshrined in the home, imbued with the kami\'s power.',
    description:
      'Placed on a home altar (kamidana), the ofuda functions like a guardian charm for the household. Many families enshrine the ofuda of Ise Jingu (jingu taima) alongside one from their local ujigami shrine.',
    howTo:
      'If you have a kamidana, place it at the center. Without one, mount or stand it somewhere bright and clean, above eye level, facing south or east. Replace it with a fresh one each year.',
    priceRange: 'Roughly ¥500–1,000',
    link: { href: '/en/kamidana/', label: 'Read the home altar guide' },
  },
  {
    id: 'omamori',
    name: 'Omamori (Amulet)',
    reading: 'お守り / omamori',
    theme: 'vermillion',
    summary: 'The most popular kind of charm, carried to receive the kami\'s protection.',
    description:
      'A small pouch containing an inner talisman (naifu) imbued with the kami\'s power. Omamori come in many varieties for different purposes — good relationships, safe childbirth, traffic safety, academic success, health and longevity, and more.',
    howTo:
      'Carry it in a bag, wallet, or on your person. Opening it to look inside is considered bad manners. After about a year, it\'s customary to return it to the shrine you received it from (or a nearby shrine) and receive a new one.',
    priceRange: 'Roughly ¥500–1,000',
  },
  {
    id: 'goshuin',
    name: 'Goshuin (Shrine Seal Stamp)',
    reading: '御朱印 / goshuin',
    theme: 'vermillion',
    summary: 'A special stamp given as proof of a visit, featuring the shrine\'s name, seal, and date.',
    description:
      'Originally given as proof of a sutra offering, today it\'s given simply as a memento of a visit. Each shrine has its own distinctive seal, and some offer seasonal calligraphy. Some are hand-brushed on the spot ("kakioki" refers to a pre-written version you receive instead).',
    howTo:
      'Bring a goshuincho (stamp book) and ask at the shrine office for a goshuin. It\'s customary to receive it after paying your respects. The ink may still be wet, so let it dry for a moment before closing the book.',
    priceRange: 'Roughly ¥300–500',
  },
  {
    id: 'goshuincho',
    name: 'Goshuincho (Stamp Book)',
    reading: '御朱印帳 / goshuinchō',
    theme: 'gold',
    summary: 'A dedicated book for collecting goshuin — your companion for recording each visit.',
    description:
      'Typically an accordion-fold book, often available with a shrine-specific cover design, which makes choosing a favorite part of the fun. Most shrine offices sell them.',
    howTo:
      'Bring your goshuincho with you and hand it to the shrine office when requesting a goshuin. Some people prefer to keep separate books for shrines and temples.',
    priceRange: 'Roughly ¥1,500–3,000',
  },
  {
    id: 'hamaya',
    name: 'Hamaya (Ward-Off-Evil Arrow)',
    reading: '破魔矢 / hamaya',
    theme: 'indigo',
    summary: 'A decorative arrow believed to ward off evil and misfortune.',
    description:
      'Rooted in an old New Year archery ritual, the hamaya is now given as a decorative arrow. It\'s said to dispel misfortune from the home or office and invite good fortune, making it especially popular as a New Year charm.',
    howTo:
      'Display it somewhere high in the home, such as by the entrance or in the tokonoma alcove, facing the year\'s auspicious direction or the traditionally inauspicious northeast. After a year, return it to a shrine to be ritually burned.',
    priceRange: 'Roughly ¥1,000–3,000',
  },
  {
    id: 'ema',
    name: 'Ema (Votive Plaque)',
    reading: '絵馬 / ema',
    theme: 'vermillion',
    summary: 'A pentagonal wooden plaque on which visitors write a wish and dedicate it to the kami.',
    description:
      'Said to originate from the old custom of offering a live horse to the kami as a prayer, later simplified into offering a wooden plaque painted with a horse. Many shrines offer designs tailored to specific wishes, such as academic success or love.',
    howTo:
      'Write your wish and name on the back, then hang it on the ema rack in the shrine grounds. It\'s said to help to be specific about what you\'re wishing for.',
    priceRange: 'Roughly ¥500–1,000',
  },
  {
    id: 'omikuji',
    name: 'Omikuji (Fortune Slip)',
    reading: 'おみくじ / omikuji',
    theme: 'gold',
    summary: 'A slender paper fortune offering a message from the kami.',
    description:
      'Alongside an overall fortune ranking (from great blessing to great curse), omikuji include advice on specific topics like love, work, and health. Rather than fixating on whether the result is good or bad, it\'s best to take the message as guidance for daily life.',
    howTo:
      'You may take it home or tie it to the designated spot in the shrine grounds. Taking it home and rereading it occasionally is also a nice way to keep its advice in mind.',
    priceRange: 'Roughly ¥100–300',
  },
  {
    id: 'kumade',
    name: 'Kumade (Lucky Rake)',
    reading: '熊手 / kumade',
    theme: 'vermillion',
    summary: 'A decorative rake said to "rake in" good fortune.',
    description:
      'Modeled on a farming rake, the kumade is a lucky charm built on the wordplay of "raking in" fortune and prosperity, and is especially beloved as a charm for business success. It\'s famously distributed at the November Tori-no-Ichi ("Rooster Fair") markets.',
    howTo:
      'Display it somewhere elevated and visible from outside, such as an entrance or storefront, facing the entryway. Tradition holds that you should trade up to a slightly larger one each year.',
    priceRange: 'From several thousand yen, depending on size',
  },
  {
    id: 'omiki',
    name: 'Omiki (Sacred Sake)',
    reading: '御神酒 / omiki',
    theme: 'gold',
    summary: 'Sacred sake first offered to the kami, then shared among worshippers.',
    description:
      'One of the ritual food offerings (shinsen) presented to the kami, sometimes distributed at festivals or after a prayer ceremony. Drinking what was offered to the kami is believed to share in the deity\'s blessing.',
    howTo:
      'It\'s customary to share it among family members, or to offer it at your home altar before drinking.',
    priceRange: 'Usually distributed at festivals or prayer ceremonies',
  },
];
