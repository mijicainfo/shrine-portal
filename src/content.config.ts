import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shrineSchema = ({ image }: { image: () => z.ZodType<any> }) => z.object({
  name: z.string(),
  kana: z.string(),
  prefecture: z.string(),
  city: z.string(),
  address: z.string(),
  deities: z.array(z.string()),
  benefits: z.array(z.string()).default([]),
  founded: z.string().optional(),
  hours: z.string().optional(),
  access: z.string().optional(),
  parking: z.string().optional(),
  goshuin: z
    .object({
      available: z.boolean(),
      hours: z.string().optional(),
      fee: z.string().optional(),
    })
    .optional(),
  officialUrl: z.string().optional(),
  twitterHandle: z.string().optional(),
  themeColor: z.enum(['vermillion', 'indigo', 'gold']).default('vermillion'),
  featured: z.boolean().default(false),
  order: z.number().default(999),
  publishDate: z.coerce.date(),
  image: image().optional(),
  imageCredit: z
    .object({
      author: z.string(),
      license: z.string(),
      sourceUrl: z.string(),
    })
    .optional(),
  gallery: z
    .array(
      z.object({
        image: image(),
        credit: z.object({
          author: z.string(),
          license: z.string(),
          sourceUrl: z.string(),
        }),
      }),
    )
    .default([]),
});

const shrines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shrines' }),
  schema: shrineSchema,
});

const shrinesEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shrines-en' }),
  schema: shrineSchema,
});

export const collections = { shrines, shrinesEn };
