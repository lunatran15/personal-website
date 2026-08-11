import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Target, Lightbulb, Cog, Trophy, BookOpen } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Portfolio
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Featured Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Product leadership in action — from a fintech machine-learning
          competition entry in Shenzhen to a community-driven social
          listening application in Hanoi.
        </p>

        <div className="mt-10 space-y-10">
          {allProjects.map((project) => (
            <Card key={project._meta.path} className="overflow-hidden border-border/70">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    {project.location && (
                      <p className="mt-1 text-sm text-jade-deep">{project.location}</p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-jade-deep">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-jade-deep hover:underline">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <ProjectBlock icon={Target} label="Challenge" text={project.challenge} />
                  <ProjectBlock icon={Lightbulb} label="Solution" text={project.solution} />
                  <ProjectBlock icon={Cog} label="Process" text={project.process} />
                  <ProjectBlock icon={Trophy} label="Result" text={project.result} />
                </div>

                <div className="mt-6 rounded-xl bg-secondary/60 p-5">
                  <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
                    <BookOpen size={16} className="text-jade-deep" /> Role
                  </p>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>

                <div className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-5">
                  <p className="mb-1 text-sm font-semibold text-ink">Lessons Learned</p>
                  <p className="text-sm text-muted-foreground">{project.lessons}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectBlock({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Target
  label: string
  text: string
}) {
  return (
    <div>
      <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
        <Icon size={16} className="text-jade-deep" /> {label}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}
