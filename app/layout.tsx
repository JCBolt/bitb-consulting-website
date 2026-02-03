import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BITB Consulting | Strategic Systems Consulting',
  description: 'I find the hidden drag in your organization and fix it. No theatre, no jargon, no blame. Strategic consulting for scaling companies navigating change.',
  keywords: ['consulting', 'systems thinking', 'organizational change', 'delivery', 'leadership', 'strategy'],
  authors: [{ name: 'Jo Bolt' }],
  openGraph: {
    title: 'BITB Consulting | Strategic Systems Consulting',
    description: 'I find the hidden drag in your organization and fix it. No theatre, no jargon, no blame.',
    url: 'https://bitbconsulting.ca',
    siteName: 'BITB Consulting',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BITB Consulting | Strategic Systems Consulting',
    description: 'I find the hidden drag in your organization and fix it. No theatre, no jargon, no blame.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
