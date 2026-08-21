'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Palette,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  Star,
  Zap,
  Smartphone,
  Megaphone,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Testimonials from '@/components/home/Testimonials'



const serviceGroups = [
  {
    id: 'build',
    label: 'Build',
    icon: Code2,
    title: 'Technology that gives your business a stronger foundation.',
    description:
      'We create fast, scalable websites, e-commerce stores and custom software that make your business easier to find, use and grow.',
    services: ['Web Development', 'E-commerce Solutions', 'Custom Software Development'],
    color: 'from-cyan-400/20 to-blue-500/5',
  },
  {
    id: 'grow',
    label: 'Grow',
    icon: Rocket,
    title: 'Marketing designed to create real business momentum.',
    description:
      'We help you get in front of the right audience with clear messaging, smart campaigns and a strategy connected to your goals.',
    services: ['Digital Marketing', 'SEO & Paid Campaigns', 'Business Consultancy'],
    color: 'from-blue-500/20 to-indigo-500/5',
  },
  {
    id: 'brand',
    label: 'Brand',
    icon: Palette,
    title: 'A clear identity that makes people remember you.',
    description:
      'We shape brands and visual systems that make every customer touchpoint feel more confident, consistent and credible.',
    services: ['Branding', 'Graphic Designing', 'Creative Direction'],
    color: 'from-violet-500/20 to-indigo-500/5',
  },
]

const projects = [
  {
    name: 'Evoo',
    category: 'EV Mobility Platform',
    description:
      'A modern mobility brand experience built around premium storytelling and a smooth digital journey.',
    href: 'https://e-bikes-gamma.vercel.app/',
    icon: Globe2,
    visual: 'from-[#1e5559] via-[#12373f] to-[#0A1930]',
    image: '/evoo/img-1.png',
  },
  {
    name: 'Brew and Co.',
    category: 'Coffee Ordering Platform',
    description:
      'A polished ordering experience that helps customers explore, choose and order with ease.',
    href: 'https://brew-and-co-acyz.vercel.app/',
    icon: Layers3,
    visual: 'from-[#68442c] via-[#31261f] to-[#0A1930]',
    image: '/brew/p1.png',
  },
  {
    name: 'FitPro',
    category: 'Fitness Platform',
    description:
      'A high-energy platform connecting trainers, classes and customer enquiries in one experience.',
    href: 'https://fit-pro-frontend.vercel.app/',
    icon: Sparkles,
    visual: 'from-[#542738] via-[#291f30] to-[#0A1930]',
    image: '/fitpro/piz1.png',
  },
]

const faqs = [
  {
    question: 'What type of businesses do you work with?',
    answer:
      'We work with startups, small-to-medium businesses and established companies that need a stronger website, brand, software product or digital growth strategy.',
  },
  {
    question: 'Can you handle both design and development?',
    answer:
      'Yes. Ignisis brings design, development, branding and marketing together, so your business has one connected digital direction instead of disconnected vendors.',
  },
  {
    question: 'Can I start with one service first?',
    answer:
      'Absolutely. You can begin with a website, brand identity, e-commerce store, software idea or marketing requirement. We will help you identify the best first step.',
  },
]
const testimonial = {
  quote:
    'PASTE A REAL CLIENT REVIEW HERE. Keep it short, specific and exactly as the client said it.',
  name: 'Client Name',
  role: 'Company / Project',
}

export default function Home() {
  const [activeService, setActiveService] = useState('build')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activeGroup =
    serviceGroups.find((service) => service.id === activeService) ||
    serviceGroups[0]

  const ActiveIcon = activeGroup.icon
  const [activeNode, setActiveNode] = useState('business')
  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-16 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute right-[-8rem] top-12 h-[32rem] w-[32rem] rounded-full bg-[#17A2C7]/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-2 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Digital Agency & Business Solutions
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
              We build digital experiences that{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                grow businesses.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Ignisis Solutions helps businesses build stronger websites,
              brands, software and marketing systems so every digital effort
              moves in the same direction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_28px_rgba(23,162,199,0.25)]"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold transition hover:border-[#17A2C7]/70 hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
              <Check size={17} className="text-[#17A2C7]" />
              One team for strategy, creativity and technology.
            </div>
          </motion.div>

          {/* INTERACTIVE HERO VISUAL */}
    {/* INTERACTIVE HERO VISUAL — live product mockup */}
{/* INTERACTIVE HERO VISUAL — DIGITAL GROWTH ORBIT */}
<motion.div
  initial={{ opacity: 0, x: 35 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-xl"
>
  {/* Ambient glow */}
  <div className="pointer-events-none absolute -inset-20 -z-10">
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.35, 0.5, 0.35],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-[100px]"
    />

    <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-[#123C6B]/30 blur-[90px]" />
  </div>

  <div className="relative flex min-h-[500px] items-center justify-center overflow-visible">

    {/* =========================
        OUTER ORBIT
    ========================== */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[410px] w-[410px] rounded-full border border-[#17A2C7]/15"
    >
      {/* orbit particle */}
      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#17A2C7] shadow-[0_0_18px_#17A2C7]" />

      <div className="absolute bottom-8 left-10 h-1.5 w-1.5 rounded-full bg-white/50" />

      <div className="absolute right-8 top-24 h-1.5 w-1.5 rounded-full bg-[#17A2C7]/70" />
    </motion.div>

    {/* =========================
        MIDDLE ORBIT
    ========================== */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[300px] w-[300px] rounded-full border border-white/[0.08]"
    >
      <div className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#66d4eb] shadow-[0_0_20px_rgba(23,162,199,0.8)]" />

      <div className="absolute left-10 top-2 h-1.5 w-1.5 rounded-full bg-[#17A2C7]/60" />
    </motion.div>

    {/* =========================
        SERVICE NODE — WEB
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.55, duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="absolute left-[5%] top-[24%] z-20"
    >
      <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C6B]">
          <Globe2
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          Web Development
        </span>
      </div>
    </motion.div>

    {/* =========================
        SERVICE NODE — MARKETING
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
      }}
      transition={{
        opacity: { delay: 0.7, duration: 0.5 },
        scale: { delay: 0.7, duration: 0.5 },
        y: {
          delay: 1.2,
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.08 }}
      className="absolute right-[3%] top-[18%] z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-[#17A2C7]/20 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17A2C7]/15">
          <Megaphone
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          Marketing
        </span>
      </div>
    </motion.div>

    {/* =========================
        SERVICE NODE — SEO
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.85, duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="absolute bottom-[21%] left-[4%] z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C6B]">
          <Search
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          SEO
        </span>
      </div>
    </motion.div>

    {/* =========================
        SERVICE NODE — BRANDING
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, 5, 0],
      }}
      transition={{
        opacity: { delay: 1, duration: 0.5 },
        scale: { delay: 1, duration: 0.5 },
        y: {
          delay: 1.4,
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.08 }}
      className="absolute bottom-[20%] right-[2%] z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C6B]">
          <Sparkles
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          Branding
        </span>
      </div>
    </motion.div>

    {/* =========================
        CENTRAL CORE
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.35,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative z-10 flex h-[185px] w-[185px] items-center justify-center"
    >
      {/* outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#17A2C7]/25 blur-[45px]"
      />

      {/* rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-[#17A2C7]/30"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#66d4eb]" />
      </motion.div>

      {/* core */}
      <div className="relative flex h-[145px] w-[145px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#123C6B] via-[#0d3155] to-[#0A1930] shadow-[0_0_60px_rgba(23,162,199,0.18)]">
        {/* inner radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(102,212,235,0.3),transparent_45%)]" />

        {/* center icon */}
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#17A2C7]/30 bg-[#17A2C7]/10"
          >
            <TrendingUp
              size={28}
              strokeWidth={1.7}
              className="text-[#66d4eb]"
            />
          </motion.div>

          <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Digital Growth
          </span>
        </div>
      </div>
    </motion.div>

    {/* =========================
        CONNECTION LINES
    ========================== */}

    <svg
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
      viewBox="0 0 500 500"
      fill="none"
    >
      <motion.path
        d="M115 155 C170 165 190 190 215 225"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1, duration: 1.2 }}
      />

      <motion.path
        d="M385 145 C330 160 310 190 285 220"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1.15, duration: 1.2 }}
      />

      <motion.path
        d="M105 370 C165 350 190 315 215 285"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1.3, duration: 1.2 }}
      />

      <motion.path
        d="M395 370 C335 350 310 315 285 285"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1.45, duration: 1.2 }}
      />

      <defs>
        <linearGradient
          id="cyanLine"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#17A2C7"
            stopOpacity="0"
          />
          <stop
            offset="50%"
            stopColor="#66d4eb"
            stopOpacity="0.8"
          />
          <stop
            offset="100%"
            stopColor="#17A2C7"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </svg>

    {/* =========================
        SMALL FLOATING PARTICLES
    ========================== */}

    <motion.span
      animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-[28%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#66d4eb]"
    />

    <motion.span
      animate={{ y: [0, 8, 0], opacity: [0.2, 0.7, 0.2] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-[25%] bottom-[13%] h-1 w-1 rounded-full bg-white/70"
    />

    <motion.span
      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.7, 0.2] }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#17A2C7]"
    />

  </div>
</motion.div>
          
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
            What we can do for your business
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Not just a website. A stronger digital direction.
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">
            Your business may need better technology, clearer branding, stronger
            marketing or all three working together. This is where we help.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-7 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-2">
            {serviceGroups.map((group) => {
              const Icon = group.icon
              const selected = activeService === group.id

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveService(group.id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-5 py-5 text-left transition ${
                    selected
                      ? 'border-[#17A2C7]/60 bg-[#17A2C7]/10'
                      : 'border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        selected
                          ? 'bg-[#17A2C7] text-[#0A1930]'
                          : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      <Icon size={19} />
                    </span>
                    <span>
                      <span className="block text-lg font-semibold">
                        {group.label}
                      </span>
                      <span className="mt-1 block text-sm text-slate-400">
                        {group.id === 'build' && 'Websites, stores and software'}
                        {group.id === 'grow' && 'Marketing and business strategy'}
                        {group.id === 'brand' && 'Identity and visual design'}
                      </span>
                    </span>
                  </span>

                  <ArrowRight
                    size={18}
                    className={selected ? 'text-[#66d4eb]' : 'text-slate-500'}
                  />
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${activeGroup.color} p-7 sm:p-9`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
                <ActiveIcon size={24} />
              </div>

              <h3 className="mt-7 max-w-xl text-3xl font-bold">
                {activeGroup.title}
              </h3>

              <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                {activeGroup.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {activeGroup.services.map((service) => (
                  <div
                    key={service}
                    className="rounded-xl border border-white/10 bg-[#0A1930]/50 p-4 text-sm font-medium text-slate-200"
                  >
                    <Check size={16} className="mb-3 text-[#17A2C7]" />
                    {service}
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
              >
                Explore our services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PROJECT PROOF */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Proof in the work
              </p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Digital experiences made for real industries.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-400">
                Explore selected work across mobility, food, fitness and more.
                Each project begins with a different business need and ends with
                a clearer digital experience.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
            >
              See complete portfolio <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <motion.a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0A1930] transition hover:border-[#17A2C7]/50"
                >
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.visual} p-5`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name + ' screenshot'}
                      fill
                      className="absolute inset-0 object-cover opacity-30"
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.18),transparent_25%)]" />

                    <div className="relative flex h-full items-end justify-between rounded-xl border border-white/10 bg-[#0A1930]/30 p-5 backdrop-blur-sm">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#66d4eb]">
                          {project.category}
                        </p>
                        <h3 className="mt-2 text-3xl font-bold">{project.name}</h3>
                      </div>
                      <Icon size={28} className="text-[#66d4eb]" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#66d4eb]">
                      View live project <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>



      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              A process you can trust
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Clear steps. No unnecessary confusion.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-slate-400">
              We keep the journey transparent, collaborative and connected to
              the result your business needs.
            </p>
          </div>

          <div className="relative space-y-1">
            

            {[
              ['01', 'Understand', 'We learn about your business, audience, offer and the actual goal behind the project.'],
              ['02', 'Plan', 'We define the right direction, scope and experience before we start building.'],
              ['03', 'Create', 'Design, development and content come together into one focused digital solution.'],
              ['04', 'Launch & improve', 'We launch with confidence and support what comes next.'],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 7 }}
                className="relative grid gap-4 rounded-xl p-5 transition hover:bg-white/[0.035] sm:grid-cols-[3.5rem_1fr]"
              >
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#17A2C7]/30 bg-[#0A1930] text-sm font-bold text-[#66d4eb]">
                  {number}
                </span>

                <div className="pt-1">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#08182e]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Before we start
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Questions clients usually ask.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div key={faq.question} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#66d4eb] transition ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 leading-relaxed text-slate-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Testimonials />

     {/* FINAL CTA */}
<section className="bg-[#0A1930] px-6 py-24">
  <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#123C6B] px-6 py-14 text-center lg:px-10 lg:py-16">
    
    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl"
    />

    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
        Ready when you are
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
        Let&apos;s create something your business can grow with.
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
        Tell us what you want to build, improve or launch. We will help
        you find the right next step.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17A2C7] px-8 py-3.5 font-semibold text-white shadow-lg"
      >
        Discuss Your Project
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>
    </main>
  )
}