export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594432465712'

export default function FacebookLink() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="rounded-xl border-2 border-leaf px-6 py-4 text-lg font-semibold leading-snug">
        Follow us on Facebook to receive updates!
      </p>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Homeschool Resource Center on Facebook"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-leaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4v3.2h2.8V22h3.3z" />
        </svg>
      </a>
    </div>
  )
}
