'use client'

import { FormEvent, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '923025708769'

const quickReplies = [
  'What services do you offer?',
  'How much does a website cost?',
  'How do I get started?',
]

const scriptedReplies: Record<string, string> = {
  'What services do you offer?':
    'We offer web development, e-commerce, custom software, SEO, digital marketing, branding, graphic design and business consultancy.',
  'How much does a website cost?':
    'Website pricing depends on pages, features and integrations. Share your requirements and our team will prepare a suitable plan for you.',
  'How do I get started?':
    'Tell us about your business and goals. We will review your requirements and arrange a free consultation.',
}

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hi! How can Ignisis Solutions help your business grow?',
  },
]

type ChatMessage = (typeof initialMessages)[number]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')

  const addReply = (question: string) => {
    const reply = scriptedReplies[question] ||
      'Thanks for reaching out. Our team can help with that. Please share your requirements or continue on WhatsApp for a quick response.'

    setMessages((current) => [
      ...current,
      { id: Date.now(), sender: 'user', text: question },
      { id: Date.now() + 1, sender: 'bot', text: reply },
    ])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = input.trim()

    if (!message) return

    addReply(message)
    setInput('')
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello, I want to discuss a project with Ignisis Solutions.'
  )}`

  return (
    <div className="fixed bottom-[10rem] left-4 z-50 sm:left-6 md:bottom-[8rem]">
      {isOpen && (
        <section
          aria-label="Ignisis Solutions chat"
          className="mb-4 flex w-[min( calc(100vw-2rem),_22rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071426] shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
        >
          <header className="flex items-center justify-between bg-[#123C6B] px-4 py-4">
            <div>
              <p className="font-semibold text-white">Ignisis Assistant</p>
              <p className="mt-0.5 text-xs text-cyan-100/75">Usually replies instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-lg p-1.5 text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </header>

          <div className="max-h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[90%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    message.sender === 'user'
                      ? 'bg-[#17A2C7] text-white'
                      : 'bg-white/[0.08] text-slate-200'
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-white/10 px-3 py-3">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => addReply(reply)}
                  className="shrink-0 rounded-full border border-[#17A2C7]/45 px-3 py-1.5 text-left text-xs text-cyan-100 transition hover:bg-[#17A2C7]/15"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <label htmlFor="chat-message" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#17A2C7]"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#17A2C7] text-white transition hover:bg-[#48c4e0]"
              >
                <Send size={16} />
              </button>
            </form>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-emerald-400/30 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
            >
              <FaWhatsapp size={15} />
              Continue on WhatsApp
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/30 bg-[#17A2C7] text-white shadow-[0_8px_30px_rgba(23,162,199,0.4)] transition hover:scale-105 hover:bg-[#48c4e0]"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={25} />}
      </button>
    </div>
  )
}
