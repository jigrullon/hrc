import type { Metadata } from 'next'
import FacebookLink from '@/components/FacebookLink'

export const metadata: Metadata = {
  title: 'Learn More | Homeschool Resource Center',
}

const EMAIL = 'homeschoolersbelonghere@gmail.com'

export default function LearnMore() {
  return (
    <main className="flex flex-col items-center gap-10 px-6 pb-16 pt-12 text-center">
      <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Learn More
      </h1>
      <p className="max-w-[460px] text-lg leading-relaxed">
        For more information, please email{' '}
        <a
          href={`mailto:${EMAIL}`}
          className="break-words text-leaf underline underline-offset-2 hover:text-navy"
        >
          {EMAIL}
        </a>
        .
      </p>
      <FacebookLink />
    </main>
  )
}
