import { defineCollection, z } from "astro:content";

const noticias = defineCollection({
   type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    img: z.string().optional(), 
     tags: z.array(z.string()).optional(),// imagen opcional, luego lo podemos cambiar a obligatorio
  }),
});

export const collections = {
  noticias,
};
