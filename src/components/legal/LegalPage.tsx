'use client'

import Link from 'next/link'
import { ArrowRight, Check, ChevronDown, FileText, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

type LegalSection = {
  id: string
  title: string
  summary: string
  paragraphs: string[]
  bullets?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  highlightedTitle: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export default function LegalPage({
  eyebrow,
  title,
  highlightedTitle,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  const [openSection, setOpenSection] = useState(sections[0]?.id ?? '')

  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-24 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-[24rem] w-[24rem] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute right-[-6rem] top-8 h-[28rem] w-[28rem] rounded-full bg-[#17A2C7]/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 text-[#66d4eb]">
              <ShieldCheck size={18} />
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">{eyebrow}</p>
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.08] sm:text-6xl">
              {title}{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                {highlightedTitle}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>
            <p className="mt-8 text-sm text-slate-500">Last updated: {updated}</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[220px_1fr] lg:gap-20">
        <aside className="h-fit lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">On this page</p>
          <nav className="mt-5 space-y-2 border-l border-white/10 pl-4">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-start gap-2 py-1.5 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="font-mono text-xs text-[#17A2C7]">0{index + 1}</span>
                <span>{section.title}</span>
              </a>
            ))}
          </nav>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#66d4eb]"
          >
            Questions? Contact us <ArrowRight size={16} />
          </Link>
        </aside>

        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openSection === section.id
            return (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="scroll-mt-28 border-t border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(isOpen ? '' : section.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-sm text-[#17A2C7]">0{index + 1}</span>
                    <span>
                      <span className="block text-2xl font-semibold">{section.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-slate-400">{section.summary}</span>
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#66d4eb] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="max-w-3xl animate-fadeIn pb-8 pl-9 text-sm leading-7 text-slate-300">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mb-4 last:mb-0">{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <Check size={17} className="mt-1 shrink-0 text-[#17A2C7]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </motion.article>
            )
          })}

          <div className="mt-12 flex items-start gap-4 border border-[#17A2C7]/25 bg-[#0d2542] p-6">
            <FileText className="mt-0.5 shrink-0 text-[#66d4eb]" size={20} />
            <div>
              <p className="font-semibold text-white">Need something clarified?</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                We are happy to explain how these terms apply to your project or answer a privacy question directly.
              </p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] hover:text-white">
                Talk to Ignisis <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
