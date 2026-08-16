import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs, allAwards, allJobs } from 'content-collections'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Download,
  ShieldCheck,
  Blocks,
  BrainCircuit,
  Globe2,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const HIGHLIGHTS = [
  {
    icon: Globe2,
    title: 'Multinational Experience',
    body: 'Career and study spanning from Vietnam, the United States, and China - a diverse lens on product and technology.',
  },
  {
    icon: BrainCircuit,
    title: 'Product Leadership',
    body: 'End-to-end product ownership across fintech, education, and consumer platforms, from BRD to launch.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Research',
    body: 'Master of Cybersecurity candidate at USTC, researching Blockchain Security combined with Machine learning on RegTech.',
  },
  {
    icon: Blocks,
    title: 'AI & Blockchain Curiosity',
    body: 'Active interest in AI security, blockchain architecture, machine learning and emerging technology at the edge of both.',
  },
]

function Home() {
  const featuredPosts = [...allBlogs]
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div>
      {/* HERO */}
      <section className="ink-wash-bg relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-jade-deep">
              <span className="bamboo-rule" /> Product · Security · Research
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Phuong Thu Do
              <span className="block text-2xl font-normal text-jade-deep sm:text-3xl">
                (Pallas Do)
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-foreground/80">
              Product Manager | Cybersecurity Researcher | Blockchain Security
              Enthusiast | AI &amp; Technology Professional
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
             Hello there. I combine product, technology, and cybersecurity to turn complex ideas into meaningful digital products. With international experience across Product Management, Business Analysis, Project Management, FinTech, and UI/UX, I bring both strategic thinking and hands-on technical understanding to every challenge. My journey spans Vietnam, the United States, and China, from leading cross-functional teams to building products and researching Blockchain Security with Machine Learning. I’m always looking for opportunities to build, solve, and create impact at the intersection of business, technology, and innovation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/about">
                  Explore My Journey <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="gold">
                <Link to="/blog">Read My Blog</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-jade-deep underline-offset-4 hover:underline"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-jade/15 via-transparent to-gold/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-gold/40 bg-card p-3 shadow-xl">
              <img
                src="/images/phuong-do.png"
                alt="Portrait of Phuong Thu Do (Pallas Do)"
                className="h-80 w-64 rounded-[1.5rem] object-cover sm:h-96 sm:w-80"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-ivory px-5 py-3 shadow-lg">
                <p className="text-2xl font-bold text-jade-deep">3</p>
                <p className="text-xs text-muted-foreground">Countries of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <Card key={h.title} className="border-border/70 transition-shadow hover:shadow-md">
              <CardContent className="pt-2">
                <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-jade-deep">
                  <h.icon size={20} />
                </div>
                <p className="mt-4 font-semibold text-ink">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4 lg:px-10">
          {[
            { value: `${allJobs.length}`, label: 'Professional roles' },
            { value: '10+', label: 'Overall years of experiences' },
            { value: `${allAwards.length}`, label: 'Awards & certifications' },
            { value: '3', label: 'Languages spoken' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-jade-deep">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BLOG */}
      {featuredPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl text-ink">From the Knowledge Hub</h2>
              <p className="mt-2 text-muted-foreground">
                Thought leadership on AI, cybersecurity, blockchain, and product management.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden items-center gap-1 text-sm font-medium text-jade-deep hover:underline sm:inline-flex"
            >
              View all articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link key={post._meta.path} to="/blog/$slug" params={{ slug: post._meta.path }}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="pt-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <p className="mt-3 font-semibold leading-snug text-ink">{post.title}</p>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {post.summary}
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground">{post.readingTime}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
