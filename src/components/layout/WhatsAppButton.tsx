'use client'

import { FormEvent, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquare, Send, X } from 'lucide-react'

const WHATSAPP_NUMBER = '923025708769'
const DEFAULT_MESSAGE = 'Hello, I want to discuss a project with Ignisis Solutions.'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const openWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = message.trim() || DEFAULT_MESSAGE
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            aria-label="WhatsApp support"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-[min(25rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#2E5DE6]/70 bg-[#071039] p-5 text-white shadow-[0_18px_55px_rgba(7,16,57,0.42)] sm:p-6"
          >
            <header className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.55)]" />
                <h2 className="truncate text-sm font-bold">Ignisis Solutions WhatsApp Support</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close WhatsApp support"
                className="rounded-md p-1 text-[#AFC5F8] transition hover:bg-white/10 hover:text-white"
              >
                <X size={19} />
              </button>
            </header>

            <p className="mt-4 text-sm leading-relaxed text-[#E1E8FF]">
              Need a quick quote or have a question about growing your business online?
            </p>
            <p className="mt-3 text-xs font-semibold text-[#6E92F2]">
              +92 302 5708769 <span className="px-1.5 text-[#AFC5F8]">·</span> Lahore, Pakistan
            </p>

            <form onSubmit={openWhatsApp} className="mt-4">
              <label htmlFor="whatsapp-message" className="sr-only">
                Your question for Ignisis Solutions
              </label>
              <textarea
                id="whatsapp-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="e.g. Can you help improve my website or online growth?"
                rows={2}
                className="w-full resize-none rounded-xl border border-[#2E5DE6]/55 bg-[#0B1830] px-3.5 py-3 text-sm leading-relaxed text-white outline-none placeholder:text-slate-400 focus:border-[#6E92F2] focus:ring-2 focus:ring-[#2E5DE6]/20"
              />
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071039]"
              >
                <Send size={17} aria-hidden="true" />
                Start WhatsApp chat
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 230 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? 'Close WhatsApp support' : 'Open WhatsApp support'}
        aria-expanded={isOpen}
        className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-600 text-white shadow-[0_8px_30px_rgba(16,185,129,0.38)] transition-colors hover:bg-emerald-500"
      >
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-[3px] border-[#071039] bg-emerald-400" />
        {isOpen ? <X size={25} aria-hidden="true" /> : <MessageSquare size={25} aria-hidden="true" />}
      </motion.button>
    </div>
  )
}
