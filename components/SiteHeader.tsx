'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/events/', label: 'Events' },
  { href: '/support-us/', label: 'Support Us' },
  { href: '/learn-more/', label: 'Learn More' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''))

  return (
    <header className="relative z-20 border-b border-navy/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-serif text-lg font-semibold text-navy hover:text-leaf">
          Homeschool Resource Center
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-md text-navy transition-colors hover:bg-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy"
        >
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="site-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-full border-b border-navy/10 bg-white shadow-md"
        >
          <ul className="mx-auto flex max-w-3xl flex-col px-6 py-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`block py-3 text-lg font-semibold transition-colors hover:text-leaf ${
                    isActive(href) ? 'text-leaf' : 'text-navy'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
