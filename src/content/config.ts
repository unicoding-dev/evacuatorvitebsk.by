import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    h1: z.string().optional(),
    category: z.enum(['vehicle', 'situation', 'roadside', 'ev']),
    icon: z.string().default('Truck'),
    image: z.string(),
    featured: z.boolean().default(false),
    priceFrom: z.string(),
    executionTime: z.string(), // время подачи эвакуатора
    relatedServices: z.array(z.string()).default([]),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    date: z.date(),
    rubric: z.enum(['news', 'guide']).default('guide'),
    relatedServices: z.array(z.string()).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

const geoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),          // H1: «Эвакуатор в Городке»
    town: z.string(),           // «Городок» — для карточек
    metaTitle: z.string().optional(),
    description: z.string(),
    distanceKm: z.number(),
    driveTime: z.string(),      // «~45 мин» — подача из Витебска
    direction: z.string(),      // «трасса на Смоленск»
    priceNote: z.string(),      // ориентир для легкового авто
    relatedServices: z.array(z.string()).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = {
  services: servicesCollection,
  news: newsCollection,
  geo: geoCollection,
};
