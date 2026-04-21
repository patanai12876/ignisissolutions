import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/10">

      <div className="container py-16 grid md:grid-cols-3 gap-10">

        {/* BRAND INFO */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Ignisis Solutions
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Helping businesses grow with modern digital solutions,
            automation and smart strategy.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 mt-6">

  {/* Facebook */}
  <a
    href="#"
    className="p-2 rounded-lg bg-white/5 hover:bg-[#1877F2] hover:text-white transition"
  >
    <Facebook size={18} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/ignisissolutions"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-white/5 transition hover:text-white hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
  >
    <Instagram size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    className="p-2 rounded-lg bg-white/5 hover:bg-[#0A66C2] hover:text-white transition"
  >
    <Linkedin size={18} />
  </a>

 
    

</div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <div className="space-y-2 text-gray-400">
            <Link href="/" className="hover:text-white block">Home</Link>
            <Link href="/about" className="hover:text-white block">About</Link>
            <Link href="/services" className="hover:text-white block">Services</Link>
            <Link href="/portfolio" className="hover:text-white block">Portfolio</Link>
            <Link href="/contact" className="hover:text-white block">Contact</Link>
          </div>
        </div>

        {/* CTA SECTION */}
        <div>
          <h3 className="font-semibold mb-4">Let’s Work Together</h3>

          <p className="text-gray-400 mb-4">
            Start your project with us today.
          </p>

          <Link
            href="/contact"
            className="inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {year} Ignisis Solutions. All rights reserved.
      </div>

    </footer>
  )
}