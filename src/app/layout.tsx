import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const metadataConfig: Metadata = {
  title: 'Anuj Gupta | Backend & AI Systems Engineer',
  description:
    'Specialist Programmer at Infosys. Distributed systems, fintech architecture, and Agentic AI. Building scalable, fault-tolerant systems with Spring Boot, LangChain, and LangGraph.',
  keywords: [
    'Anuj Gupta',
    'Backend Engineer',
    'AI Systems Engineer',
    'Distributed Systems',
    'Fintech',
    'LangChain',
    'Spring Boot',
    'Infosys',
    'Agentic AI',
    'System Design',
  ],
  authors: [{ name: 'Anuj Gupta', url: 'https://anujgupta.dev' }],
  creator: 'Anuj Gupta',
  openGraph: {
    type: 'website',
    title: 'Anuj Gupta | Backend & AI Systems Engineer',
    description:
      'Specialist Programmer at Infosys. Distributed systems, fintech architecture, and Agentic AI.',
    siteName: 'Anuj Gupta Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuj Gupta | Backend & AI Systems Engineer',
    description: 'Distributed systems, fintech architecture, and Agentic AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadata = metadataConfig

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistSans.className} min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-base focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
