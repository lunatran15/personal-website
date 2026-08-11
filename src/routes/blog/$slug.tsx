import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter, Link2 } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-ink">Post not found</h1>
          <Link to="/blog" className="text-jade-deep hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)
  const headings = Array.from(post.content.matchAll(/^##\s+(.+)$/gm)).map((m) => m[1])
  const related = allBlogs
    .filter((p) => p._meta.path !== post._meta.path && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-10">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-jade-deep"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <article>
          <header className="mb-8">
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-ink">{post.author}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} /> {post.readingTime}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </header>

          <div className="mb-4 flex aspect-[21/9] items-center justify-center rounded-2xl bg-gradient-to-br from-jade/15 to-gold/20 font-display text-2xl text-jade-deep">
            {post.category}
          </div>

          {headings.length > 0 && (
            <Card className="mb-10 border-border/70 bg-secondary/40">
              <CardContent className="pt-2">
                <p className="mb-2 text-sm font-semibold text-ink">Table of Contents</p>
                <ul className="space-y-1 text-sm text-jade-deep">
                  {headings.map((h) => (
                    <li key={h}>· {h}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div
            className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-jade-deep"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-10 flex items-center gap-3 border-t border-border/70 pt-6">
            <span className="text-sm font-medium text-ink">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-border hover:border-jade hover:text-jade-deep"
            >
              <Twitter size={15} />
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full border border-border hover:border-jade hover:text-jade-deep"
            >
              <Linkedin size={15} />
            </a>
            <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground">
              <Link2 size={15} />
            </span>
          </div>
        </article>

        {related.length > 0 && (
          <div className="mt-16 border-t border-border/70 pt-10">
            <h2 className="font-display text-2xl text-ink">Related Articles</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r._meta.path} to="/blog/$slug" params={{ slug: r._meta.path }}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardContent className="pt-2">
                      <p className="font-semibold leading-snug text-ink">{r.title}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{r.readingTime}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
