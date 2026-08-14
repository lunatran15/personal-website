import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { PenIcon, PptIcon } from '@/components/ui/icons'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const sortedProjects = useMemo(
    () =>
      [...allProjects].sort((a, b) => {
        const ta = a.startDate ? new Date(a.startDate).getTime() : 0
        const tb = b.startDate ? new Date(b.startDate).getTime() : 0
        return tb - ta
      }),
    [allProjects],
  )

  return (
    <div className="ink-wash-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">

        {/* Header */}
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            Portfolio
          </span>

          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Featured Projects
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Product leadership in action — from fintech and artificial
            intelligence to blockchain security, research, and software
            development.
          </p>
        </div>

        {/* Project Grid */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedProjects.map((project) => (
                <ProjectCard key={project._meta.path} project={project} />
              ))}
            </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof allProjects)[number]
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border/70 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-jade/40 hover:shadow-lg">

      {/* Project Image */}
      <div className="aspect-[16/9] overflow-hidden bg-secondary">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-secondary">
            <span className="font-display text-sm text-muted-foreground">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Project Information */}
      <div className="p-4">

        {/* Project Title */}
        <h2 className="line-clamp-2 text-base font-semibold leading-snug text-ink">
          {project.title}
        </h2>

        {/* Date */}
        {project.date && (
          <p className="mt-1.5 text-xs text-muted-foreground">
            {project.date}
          </p>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>
        )}

        {/* Tags / Status */}
        {project.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-jade" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="mt-4 flex flex-wrap gap-2">

          {project.design && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 px-2.5 text-xs"
            >
              <a
                href={project.design}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <PenIcon size={14} />
                Design
              </a>
            </Button>
          )}

          {project.github && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 px-2.5 text-xs"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Github size={14} />
                GitHub
              </a>
            </Button>
          )}

          {project.pitchDeck && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 px-2.5 text-xs"
            >
              <a
                href={project.pitchDeck}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <PptIcon size={14} />
                Pitch Deck
              </a>
            </Button>
          )}

          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="h-8 px-2.5 text-xs"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <ExternalLink size={14} />
                Link
              </a>
            </Button>
          )}

        </div>
      </div>
    </article>
  )
}