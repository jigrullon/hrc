import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Us | Homeschool Resource Center',
}

export default function SupportUs() {
  return (
    <main className="flex flex-col items-center gap-8 px-6 pb-16 pt-12 text-center">
      <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Support Us
      </h1>
      <p className="text-[17px] font-semibold text-bark">Would you like to donate to the cause?</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/donate-qr.png"
        alt="QR code linking to our donation page"
        width={180}
        height={180}
        className="h-[180px] w-[180px]"
      />
      <p className="text-[15px]">Scan the code to visit our donation page.</p>
    </main>
  )
}
