import { createFileRoute } from '@tanstack/react-router'
import { allAwards } from 'content-collections'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, BadgeCheck } from 'lucide-react'

export const Route = createFileRoute('/awards')({
  component: Awards,
})

function Awards() {
  const awards = [...allAwards].sort((a, b) => a.order - b.order)

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Recognition
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Awards &amp; Certifications
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {awards.map((a) => (
            <Card key={a.title} className="border-gold/30 transition-shadow hover:shadow-md">
              <CardContent className="flex gap-4 pt-2">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  {a.type === 'Competition Award' ? <Trophy size={20} /> : <BadgeCheck size={20} />}
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">{a.type}</Badge>
                  <p className="font-semibold text-ink">{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.issuer}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(a.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
