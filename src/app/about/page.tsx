'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Code2,
  Compass,
  Globe2,
  Handshake,
  Layers3,
  Lightbulb,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import { motion } from 'framer-motion'

const approach = [
  {
    icon: Compass,
    label: 'Understand',
    text: 'Every engagement starts with your business goal, not a template what you need to grow, not just what you need built.',
  },
  {
    icon: Layers3,
    label: 'Connect',
    text: 'Technology, design and marketing are handled by one team, working from the same direction instead of separate vendors.',
  },
  {
    icon: Target,
    label: 'Execute',
    text: 'We build with intent, clean code, considered design and messaging that moves people to act.',
  },
  {
    icon: Rocket,
    label: 'Sustain',
    text: 'Launch is a starting point. Every solution is structured to evolve as your business and audience grow.',
  },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Clarity',
    text: 'No jargon, no inflated promises. You always know what is being built, why, and what it will do for your business.',
  },
  {
    icon: Sparkles,
    title: 'Craft',
    text: 'Every detail from a button state to a headline is made deliberately, not defaulted to a template.',
  },
  {
    icon: Handshake,
    title: 'Accountability',
    text: 'We treat your project like our own. Deadlines, scope and communication are commitments, not estimates.',
  },
  {
    icon: Lightbulb,
    title: 'Momentum',
    text: 'Good work should keep working. We design for the next stage of your business, not just the launch date.',
  },
]

const capabilities = [
  { icon: Code2, label: 'Web Development' },
  { icon: Globe2, label: 'E-commerce Solutions' },
  { icon: Layers3, label: 'Custom Software' },
  { icon: Rocket, label: 'Digital Marketing' },
  { icon: Target, label: 'Business Consultancy' },
  { icon: Palette, label: 'Branding' },
  { icon: Sparkles, label: 'Graphic Designing' },
]

export default function About() {
  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-16 text-white">
      {/* PAGE HEADER */}
      {/* PAGE HEADER — editorial style, no side panel */}
<section className="relative overflow-hidden border-b border-white/10">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#17A2C7]/10 blur-[140px]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-16">
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]"
    >
      About Ignisis Solutions
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="mt-6 max-w-5xl text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-6xl"
    >
      Technology, design and{' '}
      <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
        growth.
      </span>
      
    </motion.h1>

    {/* ASYMMETRIC SPLIT — intro + manifesto highlight */}
    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-lg leading-relaxed text-slate-300"
      >
        Ignisis Solutions exists because most businesses don&apos;t need
        more vendors, they need one team that understands how a website,
        a brand and a marketing plan are supposed to work together.
      </motion.p>

     
    </div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="mt-10 flex flex-wrap gap-4"
    >
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_28px_rgba(23,162,199,0.25)]"
      >
        Work With Us
        <ArrowRight size={18} />
      </Link>
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold transition hover:border-[#17A2C7]/70 hover:bg-white/5"
      >
        View Our Work
      </Link>
    </motion.div>
  </div>

  {/* SCROLLING CAPABILITIES MARQUEE */}
  <div className="relative border-t border-white/10 bg-[#08182e] py-5">
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="flex shrink-0 items-center gap-10 pr-10"
      >
        {[...capabilities, ...capabilities].map(({ icon: Icon, label }, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-400"
          >
            <Icon size={15} className="text-[#66d4eb]" />
            {label}
            <span className="ml-8 text-[#17A2C7]/40">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  </div>
</section>

      {/* STORY */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Why we exist
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Our story.</h2>
          </div>

          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-slate-300"
            >
              Ignisis Solutions was built on a simple belief:{' '}
              <span className="font-semibold text-white">
                technology, design and marketing work best when they work
                together
              </span>
              , not in silos. Most businesses end up hiring a developer, a
              designer and a marketer separately and spend more time
              managing the gap between them than actually growing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed text-slate-300"
            >
              We bring web development, software, branding and marketing
              under one team, so every part of your digital presence, your
              site, your identity, your campaigns, is built from the same
              understanding of your business, not reassembled from
              disconnected vendors.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-slate-300"
            >
              That&apos;s the difference we build for: not just a finished
              website, but a digital direction your business can keep growing
              with.
            </motion.p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
            How we work
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            One approach, from first call to launch.
          </h2>
        </motion.div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-4">

          {approach.map(({ icon: Icon, label, text }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#17A2C7]/40 hover:bg-white/[0.05]"
            >
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                What we hold ourselves to
              </p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Our working principles.
              </h2>
            </div>
            
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-[#0A1930] p-6 transition hover:border-[#17A2C7]/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES / SERVICES STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              What that looks like in practice
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Everything your business needs, under one roof.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
          >
            See all services <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Code2, title: 'Web Development', text: 'Fast, scalable websites and web apps.' },
            { icon: Globe2, title: 'E-commerce Solutions', text: 'Stores built to convert and scale.' },
            { icon: Layers3, title: 'Custom Software', text: 'Tools built around how you work.' },
            { icon: Rocket, title: 'Digital Marketing', text: 'Campaigns connected to real goals.' },
            { icon: Palette, title: 'Branding', text: 'Identities people remember and trust.' },
            { icon: Sparkles, title: 'Graphic Designing', text: 'On-brand design, every touchpoint.' },
          ].map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#17A2C7]/15 text-[#66d4eb]">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
   {/* FINAL CTA */}
<section className="bg-[#0A1930] px-4 py-24 sm:px-6">
  <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#123C6B] px-6 py-14 text-center sm:px-10 lg:py-16">

    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl"
    />

    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
        Let&apos;s build together
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
        One team. Every part of your digital presence.
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
        Tell us where your business is today and where you want it to
        go. We&apos;ll help you figure out the right starting point.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
      >
        Work With Us
        <ArrowRight size={18} />
      </Link>

      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-sm text-slate-300">
        <Check size={16} className="text-[#66d4eb]" />
        One team for strategy, creativity and technology.
      </div>
    </div>
  </div>
</section>
    </main>
  )
}