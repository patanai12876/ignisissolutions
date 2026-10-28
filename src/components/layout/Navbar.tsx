'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/digital-marketing', label: 'Digital Marketing' },
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/branding', label: 'Branding' },
  { href: '/services/social-media-management', label: 'Social Media Management' },
  { href: '/services/saas-development', label: 'SaaS Development' },
  { href: '/services/graphic-designing', label: 'Graphic Designing' },
  { href: '/services/digital-business-growth', label: 'Digital Business Growth' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  return <header className="site-header">
    <div className="nav">
      <Link className="brand" href="/" aria-label="Ignisis Solutions home"><Image className="brand-logo" src="/nav%20logo.png" alt="Ignisis Solutions" width={1921} height={819} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => link.href === '/services' ? (
        <div
          className={`desktop-services${pathname.startsWith('/services') ? ' is-active' : ''}`}
          key={link.href}
        >
          <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>Services</Link>
          <span className="desktop-services-toggle" aria-hidden="true"><ChevronDown size={15} /></span>
          <div className="services-dropdown" aria-label="Services">
            <div className="services-dropdown-heading">Explore our services</div>
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} aria-current={pathname === service.href ? 'page' : undefined}>
                {service.label}<span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      ) : <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}</nav>
      <div className="nav-actions"><Link className="button button-primary" href="/contact">Get Free Audit <span>↗</span></Link>
        <details className="mobile-menu"><summary aria-label="Open menu"><Menu size={20} /></summary><nav className="mobile-links" aria-label="Mobile navigation">{links.map((link) => link.href === '/services' ? (
          <div className="mobile-services" key={link.href}>
            <div className="mobile-services-row">
              <Link href="/services" aria-current={pathname === '/services' ? 'page' : undefined}>Services</Link>
              <button
                type="button"
                className="mobile-services-toggle"
                aria-label={mobileServicesOpen ? 'Hide services list' : 'Show services list'}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                <ChevronDown size={16} aria-hidden="true" />
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="mobile-services-list">
                {serviceLinks.map((service) => <Link key={service.href} href={service.href} aria-current={pathname === service.href ? 'page' : undefined}>{service.label}</Link>)}
              </div>
            )}
          </div>
        ) : <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link className="mobile-audit-link" href="/contact">Get Free Audit <span aria-hidden="true">↗</span></Link></nav></details>
      </div>
    </div>
  </header>
}
