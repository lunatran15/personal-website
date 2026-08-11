import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="ink-wash-bg mt-24 border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-ink">Phuong Thu Do</p>
            <p className="mt-1 text-sm text-muted-foreground">Pallas Do</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building the future through technology, research, and
              innovation.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:pallas.do@example.com"
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-jade hover:text-jade-deep"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/phuong-do-574a6813a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-jade hover:text-jade-deep"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/lunatran15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-jade hover:text-jade-deep"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-jade-deep" to="/about">About</Link></li>
              <li><Link className="hover:text-jade-deep" to="/resume">Resume</Link></li>
              <li><Link className="hover:text-jade-deep" to="/expertise">Expertise</Link></li>
              <li><Link className="hover:text-jade-deep" to="/research">Research</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Knowledge Hub</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-jade-deep" to="/projects">Projects</Link></li>
              <li><Link className="hover:text-jade-deep" to="/blog">Blog</Link></li>
              <li><Link className="hover:text-jade-deep" to="/publications">Publications</Link></li>
              <li><Link className="hover:text-jade-deep" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Phuong Thu Do (Pallas Do). All rights reserved.</p>
          <p className="italic">"Building the future through technology, research, and innovation."</p>
        </div>
      </div>
    </footer>
  )
}
