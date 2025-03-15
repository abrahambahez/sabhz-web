import { z, defineCollection } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    tags: z.enum(["publicacion", "coleccion"]),
    lang: z.enum(["es", "en"]),
  }),
});

export const collections = {
  posts: post,
};
