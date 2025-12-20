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
    registrationLink: z.union([z.string().url(), z.literal('')]).optional(),
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
    email: z.string().email().optional().or(z.literal('')),
    linkedin: z.union([z.string().url(), z.literal('')]).optional(),
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

// Committees collection schema
const committeesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Elected Officials collection schema
const officialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(), // e.g., "Governor", "State Senator", "U.S. Representative"
    district: z.string().optional(), // e.g., "District 46", "Congressional District 7"
    level: z.enum(['State', 'City', 'Federal']),
    category: z.string(), // e.g., "Governor", "State Senate", "State Delegates", "City Council", "U.S. Senate", "U.S. House"
    order: z.number().default(0),
  }),
});

// Resource Contacts collection schema
const resourceContactsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(), // e.g., "311 General Complaints", "Report Suspicious Behavior"
    phone: z.string(),
    category: z.enum(['General', 'Community Services', 'Education', 'Emergency', 'Health', 'Public Safety', 'Sanitation']),
    description: z.string().optional(),
    featured: z.boolean().default(false), // For highlighting important numbers
    order: z.number().default(0),
  }),
});

// Settings collection schema - global site settings
const settingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Membership settings
    membershipPrice: z.number().positive(),
    membershipPriceModel: z.string(), // e.g., "per person, per year"
    membershipYear: z.number().int().min(2024).max(2100),
    membershipDuesRenewalPeriod: z.string(), // e.g., "January"
    membershipNote: z.string().optional(),
    paypalLink: z.union([z.string().url(), z.literal('')]).optional(),

    // Contact information
    contactAddress: z.string(),
    contactAddressLine2: z.string().optional(),
    contactCity: z.string(),
    contactState: z.string(),
    contactZip: z.string(),
    contactEmail: z.string().email(),

    // Meeting information
    meetingFrequency: z.string(), // e.g., "Last Thursday of each month"
    meetingTime: z.string(), // e.g., "7:00 PM"
    meetingLocation: z.string(), // e.g., "Kisling's Tavern (Upstairs)"
    meetingLocationAddress: z.string().optional(),

    // About/Mission
    missionStatement: z.string(),

    // Events page
    googleCalendarEmbedUrl: z.string().optional(),

    // Board categories (for the team member dropdown)
    boardCategories: z.union([
      z.array(z.string()),
      z.string().transform(val => val.split(',').map(cat => cat.trim()))
    ]).default(['Executive Board', 'At-Large', 'Committee Chair']),
  }),
});

export const collections = {
  blog: blogCollection,
  events: eventsCollection,
  team: teamCollection,
  documents: documentsCollection,
  committees: committeesCollection,
  officials: officialsCollection,
  'resource-contacts': resourceContactsCollection,
  settings: settingsCollection,
};
