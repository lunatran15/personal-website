import { createFileRoute } from '@tanstack/react-router'
import { allResearch, allEducations } from 'content-collections'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, FlaskConical } from 'lucide-react'

export const Route = createFileRoute('/research')({
  component: Research,
})

function Research() {
  const research = [...allResearch].sort((a, b) => a.order - b.order)
  const gradSchool = allEducations.find((e) => e.school.includes('Science and Technology of China'))

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Research &amp; Innovation
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Academic Research Profile
        </h1>

        <Card className="mt-8 border-jade/30 bg-gradient-to-br from-secondary/60 to-card">
          <CardContent className="flex items-start gap-4 pt-2">
            <GraduationCap className="mt-1 shrink-0 text-jade-deep" size={26} />
            <div>
              <p className="font-display text-2xl text-ink">Master of Cybersecurity</p>
              <p className="mt-1 text-jade-deep">University of Science and Technology of China</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {gradSchool?.summary}
              </p>
              <Badge className="mt-4" variant="secondary">
                Research Direction: Blockchain Security with Machine Learning 
              </Badge>
            </div>
          </CardContent>
        </Card>

        <h2 className="mt-14 flex items-center gap-2 font-display text-2xl text-ink">
          <FlaskConical className="text-jade-deep" size={22} /> Relevant Knowledge Areas
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {research.map((r) => (
            <Card key={r.title} className="border-border/70">
              <CardContent className="pt-2">
                <p className="font-semibold text-ink">{r.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
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
