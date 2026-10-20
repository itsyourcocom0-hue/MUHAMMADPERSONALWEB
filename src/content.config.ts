import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    eyebrow: z.string(),
    title: z.string(),         // H1 — may contain <br> and <em>
    lead: z.string(),
    cardTitle: z.string(),
    cardText: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    sidebar: z.array(z.object({ label: z.string(), value: z.string() })),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    featured: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    order: z.number(),
    pillar: z.string(),
    title: z.string(),
    lead: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { work, notes };
