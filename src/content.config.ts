import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"
const blog = defineCollection({
  // Load Markdown and MDX files in the `src/contents/blog/` directory.
  loader: glob({ base: "./src/contents/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Transform string to Date object
      auto_date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
})

export const collections = { blog }
