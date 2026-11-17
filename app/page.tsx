import Link from 'next/link'
import FacebookLink from '@/components/FacebookLink'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 px-6 pb-16 pt-10 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Homeschool Resource Center: homeschoolers belong here"
        width={1280}
        height={853}
        className="h-auto w-full max-w-[460px]"
      />

      <div className="flex max-w-[520px] flex-col items-center gap-5">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Mission &amp; Vision
        </h1>
        <p className="text-lg leading-relaxed text-bark">
          We are building a space for homeschool families in Camden County, GA.
        </p>
        <p className="text-lg leading-relaxed text-bark">
          We envision a thriving homeschool community where families are supported, students are
          inspired to discover their God-given gifts, and every family is empowered to homeschool
          with confidence and purpose.
        </p>
        <p className="text-lg leading-relaxed text-bark">
          Our mission is to equip and encourage homeschool families through Christ-centered
          resources, meaningful community, and opportunities to learn, grow, and thrive together.
        </p>
        <p className="text-lg leading-relaxed text-bark">
          Check out our upcoming{' '}
          <Link
            href="/events/"
            className="font-semibold text-leaf underline underline-offset-2 hover:text-navy"
          >
            events
          </Link>{' '}
          or{' '}
          <Link
            href="/support-us/"
            className="font-semibold text-leaf underline underline-offset-2 hover:text-navy"
          >
            donate now
          </Link>
          .
        </p>

      </div>

      <FacebookLink />
    </main>
  )
}
