import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "*.{mdx,md}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(200),
    date: z.date(),
    categories: z.array(z.string().min(1).max(50)).min(1).max(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
