import Link from 'next/link'
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Facebook,
} from 'lucide-react'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#071426] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.2fr]">
        <div>
  <Link href="/" className="relative -top-1 -ml-5 inline-flex items-center">
    <img
      src="/images/logo.png"
      alt="Ignisis Solutions"
      className="h-16 w-auto object-contain object-left"
    />
  </Link>

  <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
    A digital agency combining strategy, technology, design and
    marketing to help businesses move forward with confidence.
  </p>

  <div className="mt-6 flex gap-3">
      <a
      href="https://www.facebook.com/profile.php?id=61592162813345"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Ignisis Solutions on Facebook"
      className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930]"
    >
      <Facebook size={18} />
    </a>
    <a
      href="https://instagram.com/ignisissolutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Ignisis Solutions on Instagram"
      className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930]"
    >
      <Instagram size={18} />
    </a>

    <a
      href="https://www.linkedin.com/company/ignisis-solutions/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Ignisis Solutions on LinkedIn"
      className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930]"
    >
      <Linkedin size={18} />
    </a>

  
  </div>
</div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
            Navigate
          </p>

          <div className="mt-5 space-y-3">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
            Legal
          </p>

          <div className="mt-5 space-y-3">
            <Link
              href="/privacy-policy"
              className="block text-sm text-slate-400 transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="block text-sm text-slate-400 transition hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
            Visit or contact
          </p>

          <div className="mt-5 space-y-5">
            <a
              href="tel:+923025708769"
              className="group flex items-start gap-3 text-slate-400 transition hover:text-white"
            >
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-[#17A2C7]"
              />
              <span>
                <span className="block text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </span>
                <span className="mt-1 block text-sm">+92 302 5708769</span>
              </span>
            </a>

            <a
              href="https://www.google.com/maps/place/Ignisis+Solutions/data=!4m2!3m1!1s0x0:0xced23207e01bfe9d?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-slate-400 transition hover:text-white"
            >
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-[#17A2C7]"
              />
              <span>
                <span className="flex items-center gap-1 text-xs uppercase tracking-wider text-slate-500 group-hover:text-[#66d4eb]">
                  Lahore, Pakistan <ArrowUpRight size={12} />
                </span>
                <span className="mt-1 block max-w-xs text-sm leading-relaxed">
                  280 N Block, Model Town, Lahore, 54700
                </span>
              </span>
            </a>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 border-b border-[#17A2C7] pb-1 text-sm font-semibold text-white transition hover:text-[#66d4eb]"
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ignisis Solutions. All rights reserved.</p>
          <p>Built for businesses ready to move forward.</p>
        </div>
      </div>
    </footer>
  )
}