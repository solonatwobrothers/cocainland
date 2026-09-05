import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bangers, Space_Grotesk } from 'next/font/google'
import './globals.css'

const bangers = Bangers({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'COCAINLAND ($COCAIN) — The Purest Meme on Solana',
  description:
    'COCAINLAND ($COCAIN) is the wildest degen meme coin on the Solana blockchain. One hit and you are in the land. Not financial advice.',
  generator: 'v0.app',
  openGraph: {
    title: 'COCAINLAND ($COCAIN) — The Purest Meme on Solana',
    description:
      'The wildest degen meme coin on Solana. Welcome to COCAINLAND.',
    images: ['/cocainland-banner.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a0a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${bangers.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
