# AGENTS.md

## Project Overview

A premium personal brand website for Phuong Thu Do (Pallas Do) — a technology
professional in Product Management, Business Analysis, Cybersecurity
Research, Blockchain Security, and AI. The site functions as a portfolio,
academic research profile, blog/knowledge-sharing platform, and personal
brand site. Built with TanStack Start and deployed on Netlify.

### Design System

Light-luxury theme combining Silicon Valley executive polish with modern
Chinese aesthetics: jade/emerald green primary, ivory background, champagne
gold accents, ink-black typography. Theme tokens live in `src/styles.css`
(`--jade`, `--jade-deep`, `--gold`, `--gold-soft`, `--ivory`, `--ink`) and are
exposed as Tailwind utilities (`bg-jade`, `text-jade-deep`, `bg-gold`,
`text-ink`, `bg-ivory`, etc.) via the `@theme inline` block. The
`.ink-wash-bg` utility applies a subtle, minimal ink-wash-inspired radial
gradient background used on section wrappers; `.bamboo-rule` is a small
accent divider; `.font-display` applies a serif display font (Noto Serif SC)
for headings.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components (`src/components/ui`) |
| Content | Content Collections (type-safe markdown in `content/`) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Content Model (`content-collections.ts`)

All page content is authored as markdown with frontmatter under `content/`.
Editing a person's resume, adding a blog post, or adding an award means
adding/editing a markdown file — no code changes required.

- `content/jobs/*.md` — work experience (`jobTitle`, `company`, `location`,
  `startDate`/`endDate`, `summary`, `achievements[]`, `tags[]`, `order`, body).
- `content/education/*.md` — degrees (`school`, `degree`, `summary`,
  `startDate`/`endDate`, `tags[]`, `order`, body).
- `content/blog/*.md` — articles (`title`, `date`, `summary`, `category`,
  `tags[]`, `author`, `readingTime`, `featured`, body markdown incl. code
  blocks and `##` headings which populate the table of contents).
- `content/projects/*.md` — case studies (`challenge`, `solution`, `role`,
  `process`, `result`, `lessons`, `techStack[]`, `tags[]`, body).
- `content/research/*.md` — research/knowledge-area cards (`title`,
  `summary`, `tags[]`, `order`).
- `content/publications/*.md` — papers/talks (`title`, `type`, `date`,
  `status`, `researchArea`, `abstract`, `link`).
- `content/awards/*.md` — awards & certifications (`title`, `issuer`, `date`,
  `type`, `order`).

Content Collections generates typed exports named `all<PluralizedName>`
(via the `pluralize` package) — e.g. `allJobs`, `allEducations`, `allBlogs`,
`allProjects`, `allResearch` (uncountable, no trailing "s"),
`allPublications`, `allAwards`. Import these from `'content-collections'`.

## Directory Structure

```
├── content/                  # Markdown content collections (see above)
├── public/
│   ├── contact.html           # Static skeleton form for Netlify Forms build-time detection
│   └── resume-phuong-thu-do.txt  # Downloadable resume (linked from Hero + Resume page)
├── src/
│   ├── components/
│   │   ├── ui/                # Radix + Tailwind primitives (button, card, badge, etc.)
│   │   ├── Header.tsx          # Sticky nav with mobile menu
│   │   └── Footer.tsx          # Site footer with contact links and sitemap
│   ├── lib/utils.ts            # cn() class merge helper
│   ├── routes/
│   │   ├── __root.tsx           # Root layout: Header + Footer wrap every page, SEO meta
│   │   ├── index.tsx            # Hero, highlights, stats, featured blog
│   │   ├── about.tsx            # Philosophy, strengths, timeline, vision
│   │   ├── resume.tsx            # Interactive resume: experience, education, certs, languages
│   │   ├── expertise.tsx         # Skills dashboard by category
│   │   ├── research.tsx          # Academic research profile (education + knowledge areas)
│   │   ├── projects.tsx          # Case studies: challenge/solution/role/process/result/lessons
│   │   ├── publications.tsx      # Papers, talks, articles
│   │   ├── awards.tsx            # Awards & certifications
│   │   ├── blog/index.tsx        # Blog index: search, category filter, featured post
│   │   ├── blog/$slug.tsx        # Article page: TOC, share buttons, related posts
│   │   └── contact.tsx           # Contact links + Netlify Forms contact form
│   └── styles.css               # Theme tokens + Tailwind layers
├── content-collections.ts       # Zod schemas for all content collections
└── netlify.toml                  # Build command, publish dir, dev server settings
```

## Conventions

- Components: PascalCase. Routes: TanStack file-based routing conventions.
- Tailwind utility classes throughout; `cn()` for conditional class merging.
- Theme colors always referenced via the jade/gold/ivory/ink tokens, never
  raw hex values, to keep the palette consistent.
- New nav destinations must be added to `NAV_LINKS` in `src/components/Header.tsx`.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```
