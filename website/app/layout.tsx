import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://beckvanniekerk.com'
      : 'http://localhost:3000'
  ),
  title: {
    default: 'Beck van Niekerk | Personal Website & Blog',
    template: '%s | Beck van Niekerk',
  },
  description: 'Personal website and blog by Beck van Niekerk. Thoughts on technology, software development, and entrepreneurship.',
  keywords: ['blog', 'personal website', 'portfolio', 'writing', 'technology', 'software development'],
  authors: [{ name: 'Beck van Niekerk' }],
  creator: 'Beck van Niekerk',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beckvanniekerk.com',
    siteName: 'Beck van Niekerk',
    title: 'Beck van Niekerk | Personal Website & Blog',
    description: 'Personal website and blog by Beck van Niekerk. Thoughts on technology, software development, and entrepreneurship.',
    images: [
      {
        url: '/images/general/riebeeck-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Beck van Niekerk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beck van Niekerk | Personal Website & Blog',
    description: 'Personal website and blog by Beck van Niekerk. Thoughts on technology, software development, and entrepreneurship.',
    images: ['/images/general/riebeeck-profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
