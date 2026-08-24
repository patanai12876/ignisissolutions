'use client'

import Link from 'next/link'
import { ClipboardCheck, MessageCircle, Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '923025708769'
const WHATSAPP_MESSAGE = 'Hello, I want to discuss a project with Ignisis Solutions.'

export default function MobileActionBar() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-1 bottom-2 z-50 grid grid-cols-3 gap-1 rounded-xl border border-white/10 bg-[#071426]/95 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
    >
      <a
        href="tel:+923025708769"
        className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg bg-white/[0.08] text-[11px] font-semibold text-white transition active:bg-white/15"
      >
        <Phone size={16} aria-hidden="true" />
        <span>Call</span>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg bg-white/[0.08] text-[11px] font-semibold text-white transition active:bg-white/15"
      >
        <MessageCircle size={16} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <Link
        href="/contact"
        className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg bg-[#17A2C7] text-[11px] font-bold text-white transition active:bg-[#48c4e0]"
      >
        <ClipboardCheck size={16} aria-hidden="true" />
        <span>Free Audit</span>
      </Link>
    </nav>
  )
}
