import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    tags: z.array(z.enum(["Publicacion", "Coleccion"])),
    lang: z.enum(["es", "en"]),
  }),
});

export const collections = {
  blog,
};
