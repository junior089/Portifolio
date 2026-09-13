import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    eyebrow: z.string(),
    title: z.string(),
    lede: z.string(),
    meta: z.array(z.object({ k: z.string(), v: z.string() })),
    viewSource: z.string().optional(),
    numbersLabel: z.string(),
    numbers: z.array(z.string()),
    numbersNote: z.string(),
    home: z.object({
      desc: z.string(),
      status: z.string(),
      meta: z.string()
    })
  })
});

export const collections = { projects };
