import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Cloud, Wrench, Palette, KanbanSquare } from 'lucide-react'

export const Route = createFileRoute('/expertise')({
  component: Expertise,
})

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Programming & Frameworks',
    items: ['Python', 'JavaScript', 'PHP', 'Java', 'SQL', 'PyTorch', 'React', 'Solidity', 'Rust'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Platforms',
    items: ['Amazon AWS', 'Azure', 'WordPress'],
  },
  {
    icon: Wrench,
    title: 'Technical Tools',
    items: ['Kibana', 'VMware', 'Trello', 'Jira', 'POSTMAN', 'Firebase', 'Google Analytics', 'Playwright'],
  },
  {
    icon: Palette,
    title: 'Design',
    items: ['Adobe Suite', 'Photoshop', 'Premiere Pro', 'Dreamweaver', 'XD', 'Figma', 'Axure', 'Xmind'],
  },
  {
    icon: KanbanSquare,
    title: 'Project Management',
    items: ['Kanban', 'Scrum', 'Waterfall'],
  },
]

function Expertise() {
  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Expertise
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Skills &amp; Expertise Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A working toolkit spanning software development, cloud platforms,
          product tooling, design, and project management methodology —
          built across product, engineering, and research roles.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <Card key={cat.title} className="border-border/70">
              <CardContent className="pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-jade-deep">
                    <cat.icon size={20} />
                  </div>
                  <p className="font-semibold text-ink">{cat.title}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-jade/30 px-3 py-1 text-sm text-ink hover:border-jade hover:text-jade-deep"
                    >
                      {item}
                    </Badge>
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
