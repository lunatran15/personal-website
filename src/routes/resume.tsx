import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations, allAwards } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Download, CheckCircle2, Languages } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const LANGUAGES = [
  { name: 'Vietnamese', level: 'Native Speaker', pct: 100 },
  { name: 'English', level: 'Fluent', pct: 90 },
  { name: 'Chinese', level: 'Intermediate', pct: 55 },
]

function Resume() {
  const jobs = [...allJobs].sort((a, b) => a.order - b.order)
  const educations = [...allEducations].sort((a, b) => a.order - b.order)
  const certs = allAwards.filter((a) => a.type === 'Professional Certification')

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold">
              Resume
            </span>
            <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
              Professional Experience &amp; Education
            </h1>
          </div>
          <a href="/resume.pdf" download>
            <Button size="lg" variant="gold">
              <Download size={16} /> Download Resume
            </Button>
          </a>
        </div>

        <Separator className="mt-8" />

        {/* Profile */}
        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="text-2xl">Professional Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-start gap-8 sm:flex-row">
              <p className="flex-1 leading-relaxed text-muted-foreground">
                Phuong Thu Do (Pallas Do) is a technology professional
                specializing in Product Management, Business Analysis,
                Cybersecurity Research, Blockchain Security, Artificial
                Intelligence, and Software Development. With international
                experience spanning Vietnam, the United States, and China,
                she bridges business strategy and technical execution —
                leading Agile product delivery while pursuing a Master of
                Cybersecurity with a research focus on Blockchain Security on
                RegTech.
              </p>
              <img
                src="/headshot-on-white.jpg"
                alt="Professional headshot of Phuong Thu Do"
                className="h-52 w-44 rounded-2xl object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <section className="mt-14 space-y-6">
          <h2 className="font-display text-3xl text-ink">Work Experience</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.jobTitle}>
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                      <p className="font-medium text-jade-deep">
                        {job.company} — {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit text-sm">
                      {new Date(job.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      {' – '}
                      {job.endDate
                        ? new Date(job.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                        : 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 leading-relaxed text-muted-foreground">{job.summary}</p>

                  {job.achievements.length > 0 && (
                    <ul className="mb-5 space-y-2">
                      {job.achievements.map((a) => (
                        <li key={a} className="flex gap-2 text-sm leading-relaxed">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-jade-deep" size={16} />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mb-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>

                  {job.content && (
                    <div
                      className="prose prose-sm mt-4 max-w-none"
                      dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-14 space-y-6">
          <h2 className="font-display text-3xl text-ink">Education</h2>
          <div className="space-y-6">
            {educations.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <CardTitle className="text-xl">{education.degree}</CardTitle>
                  <p className="font-medium text-jade-deep">
                    {education.school}
                    {education.location ? ` — ${education.location}` : ''}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{education.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  {education.content && (
                    <div
                      className="prose prose-sm mt-6 max-w-none"
                      dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-14 space-y-6">
          <h2 className="font-display text-3xl text-ink">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {certs.map((c) => (
              <Card key={c.title}>
                <CardContent className="pt-2">
                  <p className="font-semibold text-ink">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mt-14 space-y-6">
          <h2 className="flex items-center gap-2 font-display text-3xl text-ink">
            <Languages size={26} className="text-jade-deep" /> Languages
          </h2>
          <div className="space-y-5">
            {LANGUAGES.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-ink">{l.name}</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-jade to-gold"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
