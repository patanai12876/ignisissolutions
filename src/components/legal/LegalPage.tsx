'use client'

import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { MotionConfig, motion } from 'framer-motion'

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
  sections: LegalSection[]
}

export default function LegalPage({ eyebrow, title, highlightedTitle, intro, sections }: LegalPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-hidden bg-white pt-20 text-[#071039] lg:pt-24">
        <section className="relative isolate overflow-hidden border-b border-[#e5eaf3] bg-[#fbfcff]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(7,16,57,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,16,57,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)]" />
            <div className="absolute right-[10%] top-0 h-[25rem] w-[25rem] rounded-full bg-[#2E5DE6]/[0.08] blur-[120px]" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="flex items-center gap-3 text-[#1A3BB0]">
                <ShieldCheck size={17} aria-hidden="true" />
                <p className="text-xs font-extrabold uppercase tracking-[0.16em]">{eyebrow}</p>
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#071039] sm:text-5xl lg:text-6xl">
                {title} <span className="text-[#2E5DE6]">{highlightedTitle}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52617f] sm:text-lg">{intro}</p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:py-14 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16 lg:py-16">
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[#e0e6f2] bg-[#f7f9ff] p-5 sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">In this document</p>
              <nav className="mt-4 grid gap-1" aria-label="Page sections">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className="group flex items-start gap-3 rounded-lg px-2.5 py-2.5 text-sm font-medium text-[#52617f] transition hover:bg-white hover:text-[#1A3BB0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2E5DE6]">
                  <span className="font-mono text-xs font-bold text-[#2E5DE6]">{String(index + 1).padStart(2, '0')}</span>
                  <span>{section.title}</span>
                </a>
              ))}
              </nav>
            </div>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 px-2 text-sm font-bold text-[#1A3BB0] transition hover:text-[#2E5DE6]">
              Questions? Contact us <ArrowRight size={15} />
            </Link>
          </aside>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-[#e0e6f2] bg-white shadow-[0_12px_36px_rgba(7,16,57,0.045)]">
            {sections.map((section, index) => (
              <motion.article key={section.id} id={section.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: index * 0.025 }} className={`scroll-mt-28 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 ${index ? 'border-t border-[#e8ecf4]' : ''}`}>
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="mt-0.5 font-mono text-sm font-bold tracking-wide text-[#2E5DE6]">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0 max-w-3xl">
                    <h2 className="text-xl font-bold tracking-[-0.025em] text-[#071039] sm:text-2xl">{section.title}</h2>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#71809e]">{section.summary}</p>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#52617f] sm:text-base">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-[#52617f]"><Check size={16} className="mt-0.5 shrink-0 text-[#2E5DE6]" /><span>{bullet}</span></li>)}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
            </div>

            <div className="relative isolate flex flex-col items-start justify-between gap-7 overflow-hidden rounded-[26px] bg-[#1A3BB0] p-6 text-white sm:p-9 lg:flex-row lg:items-center lg:p-11">
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-48 -z-10 h-[390px] w-[390px] rounded-full border border-white/15 shadow-[0_0_0_42px_rgba(255,255,255,0.035),0_0_0_88px_rgba(255,255,255,0.025)]" />
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#dbe6ff]">Questions? We can help.</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">Need something clarified?</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#e6edfd] sm:text-base">Talk with our team about this policy or how these terms apply to your project.</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#1A3BB0] shadow-[0_8px_22px_rgba(7,16,57,0.16)] transition hover:-translate-y-0.5 hover:bg-[#eaf0ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Talk to Ignisis <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/55 px-6 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Get Free Audit <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  )
}
