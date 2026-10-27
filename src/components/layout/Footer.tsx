import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const navigation = [
  { href: '/', label: 'Home' }, { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' }, { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand-column">
        <Link className="brand" href="/" aria-label="Ignisis Solutions home"><Image className="brand-logo" src="/nav%20logo.png" alt="Ignisis Solutions" width={1921} height={819} /></Link>
        <p className="footer-copy">A digital agency combining strategy, technology, design and marketing to help businesses move forward with confidence.</p>
        <div className="social-links" aria-label="Social media">
          <a href="https://www.facebook.com/profile.php?id=61592162813345" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><Facebook size={18} aria-hidden="true" /></a>
          <a href="https://instagram.com/ignisissolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><Instagram size={18} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/company/ignisis-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={18} aria-hidden="true" /></a>
        </div>
      </div>
      <nav className="footer-column" aria-label="Footer navigation"><strong>Navigate</strong>{navigation.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <nav className="footer-column" aria-label="Legal links"><strong>Legal</strong><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></nav>
      <div className="footer-column"><strong>Visit or contact</strong><a className="contact-item" href="tel:+923025708769"><span className="contact-label">Phone</span><span>+92 302 5708769</span></a><a className="contact-item" href="https://www.google.com/maps/place/Ignisis+Solutions/data=!4m2!3m1!1s0x0:0xced23207e01bfe9d?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" aria-label="Open Ignisis Solutions location in Google Maps"><span className="contact-label">Lahore, Pakistan ↗</span><span>280 N Block, Model Town, Lahore, 54700</span></a><Link className="footer-project" href="/contact">Start a Project <span>↗</span></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Ignisis Solutions. All rights reserved.</span><span>Built for businesses ready to move forward.</span></div>
  </footer>
}
