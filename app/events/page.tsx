import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | Homeschool Resource Center',
}

export default function Events() {
  return (
    <main className="flex flex-col items-center gap-10 px-6 pb-16 pt-12 text-center">
      <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Events
      </h1>

      <section className="flex w-full max-w-[520px] flex-col items-center gap-3 rounded-xl border-2 border-leaf px-6 py-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
          December 11 &amp; 12
        </p>
        <h2 className="font-serif text-2xl font-semibold text-navy">Estate Sale</h2>
        <p className="leading-relaxed">
          For all the details about our estate sale, please click{' '}
          <a
            href="/estate-sale.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf underline underline-offset-2 hover:text-navy"
          >
            here
          </a>{' '}
          to view the flyer.
        </p>
      </section>
    </main>
  )
}
