'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0A1930]/85 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-6"
      >
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Ignisis Solutions"
            className="h-16 w-auto sm:h-20 md:h-24"
            style={{ maxWidth: 220 }}
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition ${
                  active
                    ? 'text-white'
                    : 'text-slate-300 hover:text-[#17A2C7]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#17A2C7]" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#17A2C7] px-5 py-2.5 text-sm font-semibold text-[#0A1930] transition hover:-translate-y-0.5 hover:bg-[#48c4e0] hover:shadow-[0_8px_24px_rgba(23,162,199,0.3)]"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto max-w-7xl rounded-b-2xl border border-t-0 border-white/10 bg-[#0A1930]/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="space-y-1">
            {links.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'bg-[#123C6B] text-[#66d4eb]'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center rounded-xl bg-[#17A2C7] px-5 py-3 text-sm font-semibold text-[#0A1930]"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  )
}