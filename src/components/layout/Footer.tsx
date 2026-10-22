import Link from 'next/link'

const navigation = [
  { href: '/', label: 'Home' }, { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' }, { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand-column">
        <Link className="brand" href="/" aria-label="Ignisis Solutions home"><span className="brand-mark">IS</span><span className="brand-name">Ignisis<small>Solutions</small></span></Link>
        <p className="footer-copy">A digital agency combining strategy, technology, design and marketing to help businesses move forward with confidence.</p>
        <div className="social-links" aria-label="Social media"><a href="https://www.facebook.com/profile.php?id=61592162813345" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a><a href="https://instagram.com/ignisissolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a><a href="https://www.linkedin.com/company/ignisis-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a></div>
      </div>
      <nav className="footer-column" aria-label="Footer navigation"><strong>Navigate</strong>{navigation.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <nav className="footer-column" aria-label="Legal links"><strong>Legal</strong><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></nav>
      <div className="footer-column"><strong>Visit or contact</strong><a className="contact-item" href="tel:+923025708769"><span className="contact-label">Phone</span><span>+92 302 5708769</span></a><div className="contact-item"><span className="contact-label">Lahore, Pakistan ↗</span><span>280 N Block, Model Town, Lahore, 54700</span></div><Link className="footer-project" href="/contact">Start a Project <span>↗</span></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Ignisis Solutions. All rights reserved.</span><span>Built for businesses ready to move forward.</span></div>
  </footer>
}
