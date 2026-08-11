import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Target,
  Users,
  Cpu,
  FlaskConical,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const STRENGTHS = [
  {
    icon: Target,
    title: 'Business-to-Technical Translation',
    body: 'Turning ambiguous business problems into clear requirements, specs, and roadmaps that engineering teams can execute against.',
  },
  {
    icon: Users,
    title: 'Cross-Functional Leadership',
    body: 'Leading distributed product, design, engineering, and QA teams across time zones and cultures — from Hanoi to Shenzhen to remote-first teams.',
  },
  {
    icon: Cpu,
    title: 'Technology Product Building',
    body: 'Shipping fintech, education, and consumer products end-to-end, from discovery through Agile delivery and measurable business impact.',
  },
  {
    icon: FlaskConical,
    title: 'Cybersecurity Research',
    body: 'Graduate-level research into blockchain security, AI security, cryptography, and information hiding at USTC.',
  },
]

function About() {
  const timelineItems = [
    ...allJobs.map((j) => ({
      date: j.startDate,
      title: j.jobTitle,
      subtitle: `${j.company} · ${j.location}`,
      kind: 'work' as const,
    })),
    ...allEducations.map((e) => ({
      date: e.startDate,
      title: e.degree,
      subtitle: e.school,
      kind: 'education' as const,
    })),
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          About Me
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          A career built at the intersection of business, technology, and research
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <p className="leading-relaxed text-muted-foreground">
            My career philosophy is simple: <strong className="text-ink">technology
            only matters if it solves a real business problem responsibly.</strong>{' '}
            That belief has carried me from running a small e-commerce business
            in Ohio, through business studies in California, into Agile product
            leadership across Vietnam's technology sector, and now into
            cybersecurity graduate research in China.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            I am drawn to the technologies reshaping trust itself — artificial
            intelligence, blockchain security, and the regulatory systems that
            must keep pace with them. My vision is to lead at the intersection
            of product strategy and security research: building technology
            that is not only delightful and effective, but rigorously
            trustworthy by design.
          </p>
        </div>

        {/* Strengths */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {STRENGTHS.map((s) => (
            <Card key={s.title} className="border-border/70">
              <CardContent className="flex gap-4 pt-2">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-jade-deep">
                  <s.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-ink">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h2 className="font-display text-2xl text-ink">Career &amp; Education Timeline</h2>
          <div className="mt-8 space-y-8 border-l-2 border-dashed border-jade/30 pl-8">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[2.55rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-jade bg-ivory">
                  <span className="size-2 rounded-full bg-jade" />
                </span>
                <Badge variant={item.kind === 'education' ? 'secondary' : 'outline'} className="mb-1">
                  {item.kind === 'education' ? 'Education' : 'Career'}
                </Badge>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <Card className="mt-16 border-gold/40 bg-gradient-to-br from-secondary/60 to-card">
          <CardContent className="flex items-start gap-4 pt-2">
            <Sparkles className="mt-1 shrink-0 text-gold" size={22} />
            <div>
              <p className="font-display text-xl text-ink">Vision for the Future</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                To grow into a technology leader who bridges product strategy,
                cybersecurity research, and AI governance — helping
                organizations build systems that are innovative,
                globally-minded, and trustworthy by design.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
