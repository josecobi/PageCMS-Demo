import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.union([
      z.array(z.string()),
      z.string().transform(val => val.split(',').map(tag => tag.trim()))
    ]).default([]),
    featured: z.boolean().default(false),
  }),
});

// Events collection schema
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.date(),
    eventTime: z.string().optional(),
    location: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    registrationLink: z.string().url().optional(),
    isPast: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Team collection schema
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    boardCategory: z.enum(['Executive Board', 'At-Large', 'Committee Chair']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    email: z.string().email().optional(),
    linkedin: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

// Documents collection schema
const documentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    documentDate: z.date(),
    category: z.enum(['Meeting Minutes', 'Governance Documents']),
    documentFile: z.string(), // Path to PDF file
    fileSize: z.string().optional(), // e.g., "2.3 MB"
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  events: eventsCollection,
  team: teamCollection,
  documents: documentsCollection,
};
