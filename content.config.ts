import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    socials: defineCollection({
      type: 'data',
      source: 'socials/*.yml',
      schema: z.object({
        name: z.string(),
        url: z.string(),
        icon: z.string(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        category: z.string(),
      }),
    }),
  },
})
