import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="ink-wash-bg">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-gold">
          Get in Touch
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Contact me</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Have a question about product management, cybersecurity research,
          or a potential collaboration? Reach out - I'd love to hear from
          you.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <a
              href="mailto:pallasdo@outlook.com"
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-jade"
            >
              <Mail className="text-jade-deep" size={20} />
              <div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <p className="text-sm text-muted-foreground">Shoot an email for more info</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/phuong-do-574a6813a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-jade"
            >
              <Linkedin className="text-jade-deep" size={20} />
              <div>
                <p className="text-sm font-semibold text-ink">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect professionally</p>
              </div>
            </a>
            <a
              href="https://github.com/pallasphuongdo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-jade"
            >
              <Github className="text-jade-deep" size={20} />
              <div>
                <p className="text-sm font-semibold text-ink">GitHub</p>
                <p className="text-sm text-muted-foreground">Explore technical work</p>
              </div>
            </a>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-jade/30 bg-secondary/40 p-10 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-jade/10">
                  <Mail className="text-jade-deep" size={26} />
                </div>
                <h2 className="font-display text-2xl text-ink">Message Sent!</h2>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const formData = new FormData(form)
                  fetch('/contact.html', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(
                      formData as unknown as Record<string, string>,
                    ).toString(),
                  }).then(() => setSubmitted(true))
                }}
                className="space-y-5 rounded-2xl border border-border p-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border px-4 py-2 outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border px-4 py-2 outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-border px-4 py-2 outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/30"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" size="lg">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>

        <p className="mt-16 text-center font-display text-xl italic text-jade-deep">
          "Building the future through technology, research, and innovation."
        </p>
      </div>
    </div>
  )
}
