"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '923025708769'
const WHATSAPP_MESSAGE = 'Hello, I want to discuss a project with Ignisis Solutions.'

export default function WhatsAppButton() {
  const handleClick = () => {
    const encoded = encodeURIComponent(WHATSAPP_MESSAGE)

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 230 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Chat with Ignisis Solutions on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500 text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] lg:flex"
    >
      <span className="absolute inset-0 rounded-full border border-emerald-300/40 animate-ping opacity-40" />
      <MessageCircle size={26} className="relative" />

      <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-white/10 bg-[#071426] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.button>
  )
}
