import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { allBlogs } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Search } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')

  const posts = useMemo(
    () =>
      [...allBlogs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [],
  )

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  )

  const filtered = posts.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })

  const [featured, ...rest] = filtered

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Knowledge Hub
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          Blog &amp; Knowledge Sharing
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Editorial-style essays on AI &amp; machine learning, cybersecurity,
          blockchain technology, product management, and the career &amp;
          learning journey across three countries.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm outline-none focus:border-jade"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  category === c
                    ? 'border-jade bg-jade text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-jade/50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <Link
            to="/blog/$slug"
            params={{ slug: featured._meta.path }}
            className="mt-10 block"
          >
            <Card className="overflow-hidden border-gold/40 bg-gradient-to-br from-secondary/60 to-card transition-shadow hover:shadow-lg">
              <CardContent className="grid gap-6 pt-2 md:grid-cols-[1fr_1.2fr] md:items-center">
                <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-jade/20 to-gold/20 font-display text-2xl text-jade-deep">
                  {featured.category}
                </div>
                <div>
                  <Badge>{featured.category}</Badge>
                  <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{featured.summary}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar size={13} /> {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={13} /> {featured.readingTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post._meta.path}
              to="/blog/$slug"
              params={{ slug: post._meta.path }}
              className="block"
            >
              <Card className="h-full cursor-pointer transition-shadow hover:shadow-md">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="mt-1 text-xl">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1"><Clock size={13} /> {post.readingTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No articles match your search yet.
          </p>
        )}
      </div>
    </div>
  )
}
