
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  })
});

export const collections = { posts, pages };
