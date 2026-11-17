import type { Metadata } from 'next'
import localFont from 'next/font/local'
import SiteHeader from '@/components/SiteHeader'
import './globals.css'

// Fonts are self-hosted (Latin subset of Source Sans 3 / Source Serif 4 from
// Google Fonts) so the build doesn't depend on reaching Google Fonts.
const sans = localFont({
  src: './fonts/SourceSans3-latin.woff2',
  weight: '400 600',
  display: 'swap',
  variable: '--font-sans',
})

const serif = localFont({
  src: './fonts/SourceSerif4-latin.woff2',
  weight: '600',
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Homeschool Resource Center',
  description:
    'The Homeschool Resource Center equips and encourages homeschool families in Camden County, GA.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans text-navy antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
