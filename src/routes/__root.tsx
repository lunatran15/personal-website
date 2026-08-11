import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Phuong Thu Do (Pallas Do) | Product Manager & Cybersecurity Researcher',
      },
      {
        name: 'description',
        content:
          'Phuong Thu Do (Pallas Do) — Product Manager, Cybersecurity Researcher, Blockchain Security enthusiast, and AI & technology professional bridging business, engineering, and research across Vietnam, the United States, and China.',
      },
      {
        property: 'og:title',
        content: 'Phuong Thu Do (Pallas Do) | Product Manager & Cybersecurity Researcher',
      },
      {
        property: 'og:description',
        content:
          'A technology professional bridging business, engineering, cybersecurity research, and innovative product development.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
