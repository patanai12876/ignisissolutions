'use client'

import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/digital-marketing', label: 'Digital Marketing' },
  { href: '/services/social-media-management', label: 'Social Media Management' },
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/ecommerce-solutions', label: 'E-commerce Solutions' },
  { href: '/services/saas-development', label: 'SaaS Development' },
  { href: '/services/custom-software-development', label: 'Custom Software Development' },
  { href: '/services/branding', label: 'Branding' },
  { href: '/services/graphic-designing', label: 'Graphic Designing' },
]

export default function Navbar() {
  const pathname = usePathname()
  return <header className="site-header">
    <div className="nav">
      <Link className="brand" href="/" aria-label="Ignisis Solutions home"><span className="brand-mark">IS</span><span className="brand-name">Ignisis<small>Solutions</small></span></Link>
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
          <details className="mobile-services" key={link.href}>
            <summary><Link href="/services">Services</Link><ChevronDown size={15} aria-hidden="true" /></summary>
            <div>{serviceLinks.map((service) => <Link key={service.href} href={service.href}>{service.label}</Link>)}</div>
          </details>
        ) : <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link className="mobile-audit-link" href="/contact">Get Free Audit <span aria-hidden="true">↗</span></Link></nav></details>
      </div>
    </div>
  </header>
}
