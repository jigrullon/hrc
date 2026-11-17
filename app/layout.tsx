import type { Metadata } from 'next'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import './globals.css'

const sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600'],
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
