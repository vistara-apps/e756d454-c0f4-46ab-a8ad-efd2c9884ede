import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'MindMeld AI Tutor',
  description: 'Your personalized AI learning assistant on Base, powered by Farcaster.',
  openGraph: {
    title: 'MindMeld AI Tutor',
    description: 'Your personalized AI learning assistant on Base, powered by Farcaster.',
    images: ['/mindmeld_og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
