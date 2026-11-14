import type { Metadata } from 'next'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
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
  title: 'Homeschool Resource Center | Coming Soon',
  description:
    'The Homeschool Resource Center is building a space for homeschool families in Camden County, GA. Our site is on its way.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans text-navy antialiased">{children}</body>
    </html>
  )
}
