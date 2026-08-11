import { createFileRoute } from '@tanstack/react-router'
import { allPublications } from 'content-collections'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, FileText } from 'lucide-react'

export const Route = createFileRoute('/publications')({
  component: Publications,
})

function Publications() {
  const publications = [...allPublications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Knowledge Sharing
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Publications &amp; Speaking
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Research papers, technical articles, conference submissions, and
          presentations across cybersecurity, blockchain, and product
          management.
        </p>

        <div className="mt-10 space-y-6">
          {publications.map((pub) => (
            <Card key={pub.title} className="border-border/70">
              <CardContent className="pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{pub.type}</Badge>
                  <Badge variant="secondary">{pub.status}</Badge>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {new Date(pub.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
                <p className="mt-4 flex items-start gap-2 font-display text-xl text-ink">
                  <FileText className="mt-1 shrink-0 text-jade-deep" size={18} />
                  {pub.title}
                </p>
                <p className="mt-2 text-sm font-medium text-jade-deep">{pub.researchArea}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{pub.abstract}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-jade-deep hover:underline"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
