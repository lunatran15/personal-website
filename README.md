# Phuong Thu Do (Pallas Do) — Personal Brand Website

A premium personal brand website for Phuong Thu Do (Pallas Do), a technology
professional in Product Management, Business Analysis, Cybersecurity
Research, Blockchain Security, and Artificial Intelligence. The site works
as a professional portfolio, an academic research profile, and a blog /
knowledge-sharing platform, styled with a light-luxury jade-and-gold theme
inspired by modern Chinese aesthetics.

## Key Technologies

- **TanStack Start** (React 19 + TanStack Router) for file-based routing and SSR
- **Vite 7** for the build pipeline
- **Tailwind CSS 4** for styling, with a custom jade/ivory/champagne-gold theme
- **Content Collections** for type-safe markdown content (resume, blog, projects, research, publications, awards)
- **Netlify Forms** for the contact form
- Deployed on **Netlify**

## Site Sections

Home (hero), About, Resume, Expertise, Research & Innovation, Projects,
Blog / Knowledge Hub, Publications & Speaking, Awards & Certifications, and
Contact.

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on port 3000 by default. To run with full Netlify
platform emulation (forms, redirects, etc.), use the Netlify CLI instead:

```bash
netlify dev
```

## Editing Content

All resume, blog, project, research, publication, and award content lives
as markdown files with frontmatter under `content/`. Add or edit a `.md`
file in the relevant folder to update the site — no code changes required.
See `AGENTS.md` for the full content schema reference.

## Build

```bash
npm run build
```

Outputs a production build to `dist/client`, matching the `publish`
directory configured in `netlify.toml`.
