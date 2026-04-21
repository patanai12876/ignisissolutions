'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* GLASS NAV CONTAINER */}
      <nav className="mx-auto mt-4 w-[92%] md:w-[85%] rounded-2xl 
                      bg-slate-900/50 backdrop-blur-xl border-b border-white/10 shadow-lg">

        <div className="container flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="text-lg font-bold tracking-wide">
            <span className="text-white">Ignisis</span>
            <span className="text-blue-400"> Solutions</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">

            {links.map((l) => {
              const active = pathname === l.href

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm transition ${
                    active
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {l.label}

                  {/* ACTIVE DOT */}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  )}
                </Link>
              )
            })}

          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:block px-5 py-2 rounded-xl 
                       bg-gradient-to-r from-indigo-600 to-blue-500
                       hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 
                       transition"
          >
            Get Started
          </Link>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-white/10 px-6 py-5 space-y-4">

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center mt-4 px-5 py-3 rounded-xl 
                         bg-gradient-to-r from-indigo-600 to-blue-500"
            >
              Get Started
            </Link>

          </div>
        )}

      </nav>
    </div>
  )
}