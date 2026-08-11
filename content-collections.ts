import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const jobs = defineCollection({
  name: 'jobs',
  directory: 'content/jobs',
  include: '**/*.md',
  schema: z.object({
    jobTitle: z.string(),
    summary: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    company: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    achievements: z.array(z.string()).default([]),
    order: z.number().default(0),
    content: z.string(),
  }),
})

const education = defineCollection({
  name: 'education',
  directory: 'content/education',
  include: '**/*.md',
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    summary: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    order: z.number().default(0),
    content: z.string(),
  }),
})

const blog = defineCollection({
  name: 'blog',
  directory: 'content/blog',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    readingTime: z.string().default('5 min read'),
    featured: z.boolean().default(false),
    content: z.string(),
  }),
})

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    location: z.string().optional(),
    description: z.string(),
    challenge: z.string(),
    solution: z.string(),
    role: z.string(),
    process: z.string(),
    result: z.string(),
    lessons: z.string(),
    techStack: z.array(z.string()),
    tags: z.array(z.string()),
    github: z.string().optional(),
    liveUrl: z.string().optional(),
    image: z.string().optional(),
    content: z.string(),
  }),
})

const research = defineCollection({
  name: 'research',
  directory: 'content/research',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    tags: z.array(z.string()),
    content: z.string(),
  }),
})

const publications = defineCollection({
  name: 'publications',
  directory: 'content/publications',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    date: z.string(),
    status: z.string(),
    researchArea: z.string(),
    abstract: z.string(),
    link: z.string().optional(),
    content: z.string(),
  }),
})

const awards = defineCollection({
  name: 'awards',
  directory: 'content/awards',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    type: z.string(),
    order: z.number().default(0),
    content: z.string(),
  }),
})

export default defineConfig({
  collections: [jobs, education, blog, projects, research, publications, awards],
})
