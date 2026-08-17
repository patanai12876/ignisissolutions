'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  Megaphone,
  Palette,
  Rocket,
  Sparkles,
  Target,
  X,
  Handshake,
  LifeBuoy,
  ShieldCheck,
  Cloud,
  MessageCircle,
  TrendingUp,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'


const services = [
  {
    id: 'web-dev',
    icon: Code2,
    title: 'Web Development',
    tagline: 'Fast, scalable websites and web apps.',
    description:
      'We build responsive, high-performance websites and web applications using modern frameworks — built to load fast, rank well and represent your business properly on every device.',
    includes: [
      'Custom-designed, responsive website (not a template)',
      'Next.js / React build for speed and SEO',
      'CMS or code-based content structure, your choice',
      'On-page SEO foundation — metadata, sitemap, semantic HTML',
      'Performance optimization and Core Web Vitals tuning',
      'Deployment and launch support',
    ],
    idealFor: 'Businesses that need a new website or a redesign that actually converts visitors.',
    color: 'from-cyan-400/20 to-blue-500/5',
  },
    {
    id: 'saas-development',
    icon: Cloud,
    title: 'SaaS Development',
    tagline: 'Scalable software solutions in the cloud.',
    description:
      'Build your SaaS product from the ground up — from idea validation to multi-tenant architecture ready for hundreds of users. We handle the backend, frontend, payments and scaling.',
    includes: [
      'Product roadmap and feature prioritization',
      'Full-stack SaaS application development',
      'Multi-tenant architecture setup',
      'Payment and subscription integration',
      'User authentication and role-based access',
      'Cloud deployment and scalability planning',
    ],
    idealFor: 'Entrepreneurs and businesses building their own SaaS product.',
    color: 'from-sky-400/20 to-cyan-500/5',
  },
   {
    id: 'software',
    icon: Layers3,
    title: 'Custom Software Development',
    tagline: 'Tools built around how you work.',
    description:
      'When off-the-shelf software doesn\u2019t fit, we build internal tools, dashboards or platforms tailored to your actual workflow — not the other way around.',
    includes: [
      'Requirements discovery and technical planning',
      'Custom web application or internal tool',
      'Database design (PostgreSQL / Prisma)',
      'API integrations with your existing systems',
      'Role-based access where needed',
      'Documentation and handover support',
    ],
    idealFor: 'Businesses with a workflow or process that generic software doesn\u2019t solve.',
    color: 'from-indigo-500/20 to-blue-500/5',
  },
   {
    id: 'marketing',
    icon: Rocket,
    title: 'Digital Marketing',
    tagline: 'Campaigns connected to real goals.',
    description:
      'Marketing that\u2019s tied to business outcomes, not vanity metrics — getting your business in front of the right audience with a clear plan behind every campaign.',
    includes: [
      'Audience and competitor research',
      'Search and social campaign strategy',
      'Paid advertising setup and management',
      'Content and messaging direction',
      'Monthly performance reporting',
      'Ongoing optimization based on results',
    ],
    idealFor: 'Businesses that need consistent, qualified leads — not just traffic.',
    color: 'from-cyan-400/20 to-indigo-500/5',
  },
  {
    id: 'social-media',
    icon: MessageCircle,
    title: 'Social Media Management',
    tagline: 'Your presence, consistently managed.',
    description:
      'Strategic social media planning and execution — content that engages your audience, builds community and drives business results on the platforms where your customers actually are.',
    includes: [
      'Social media strategy and content calendar',
      'Weekly post creation and scheduling',
      'Community engagement and response management',
      'Campaign planning and execution',
      'Analytics, insights and monthly reporting',
      'Paid social ad management and optimization',
    ],
    idealFor: 'Businesses that need consistent social presence without managing it in-house.',
    color: 'from-pink-500/20 to-rose-500/5',
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding',
    tagline: 'Identities people remember and trust.',
    description:
      'A brand system that makes every customer touchpoint — your website, packaging, socials, ads — feel like one confident, consistent business.',
    includes: [
      'Brand strategy and positioning',
      'Logo and visual identity system',
      'Color palette and typography guidelines',
      'Brand guideline document',
      'Business collateral (cards, letterhead, etc.)',
      'Social media brand kit',
    ],
    idealFor: 'New businesses building an identity, or existing ones outgrowing theirs.',
    color: 'from-violet-500/20 to-indigo-500/5',
  },
   {
    id: 'graphic-design',
    icon: Sparkles,
    title: 'Graphic Designing',
    tagline: 'On-brand design, every touchpoint.',
    description:
      'Ongoing creative support for the visuals your business needs day-to-day — kept consistent with your brand system, not designed in isolation.',
    includes: [
      'Social media post and ad creatives',
      'Marketing and promotional material',
      'Print design (brochures, banners, packaging)',
      'Presentation and pitch deck design',
      'Consistent use of brand guidelines',
    ],
    idealFor: 'Businesses that need regular, on-brand creative without hiring in-house.',
    color: 'from-indigo-500/20 to-violet-500/5',
  },
   {
    id: 'seo-consultancy',
    icon: Target,
    title: 'Business Consultancy',
    tagline: 'Strategy behind the technology.',
    description:
      'Guidance on where to invest your digital budget — website, marketing, branding or software — based on what will actually move your business forward.',
    includes: [
      'Current digital presence audit',
      'Prioritized roadmap of what to build first',
      'Budget and timeline guidance',
      'Technology and platform recommendations',
      'Ongoing advisory as your business grows',
    ],
    idealFor: 'Business owners who know they need to invest in digital, but not sure where to start.',
    color: 'from-blue-500/20 to-indigo-500/5',
  },
   {
    id: 'business-growth',
    icon: TrendingUp,
    title: 'Digital Business Growth',
    tagline: 'Sustainable growth strategy and execution.',
    description:
      'End-to-end digital growth from acquisition to retention — combining website, marketing, and product optimization to grow your customer base and revenue consistently.',
    includes: [
      'Growth audit and opportunity identification',
      'Customer acquisition strategy',
      'Conversion rate optimization',
      'Customer retention and loyalty programs',
      'Analytics and KPI tracking',
      'Quarterly growth planning and reporting',
    ],
    idealFor: 'Businesses ready to scale and looking for a strategic partner in growth.',
    color: 'from-green-500/20 to-emerald-500/5',
  },
  {
    id: 'ecommerce',
    icon: Globe2,
    title: 'E-commerce Solutions',
    tagline: 'Stores built to sell and scale.',
    description:
      'Conversion-focused online stores that make it easy for customers to browse, choose and check out — built to integrate cleanly with your inventory and payment operations.',
    includes: [
      'Product catalog and category structure',
      'Cart, checkout and payment gateway integration',
      'Order and inventory-ready architecture',
      'Mobile-first, fast-loading product pages',
      'Search and filtering for larger catalogs',
      'Analytics and conversion tracking setup',
    ],
    idealFor: 'Businesses launching or upgrading an online store.',
    color: 'from-blue-500/20 to-cyan-400/5',
  },
 
]

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = services.find((s) => s.id === activeId) || null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveId(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = activeId ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeId])

  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-24 text-white">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-[24rem] w-[24rem] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute right-[-6rem] top-6 h-[26rem] w-[26rem] rounded-full bg-[#17A2C7]/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 lg:pb-16 lg:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]"
          >
            What We Do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 max-w-3xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl"
          >
            Seven disciplines.{' '}
            <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
              One connected team.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Click any service to see exactly what&apos;s included — no vague
            promises, no scope surprises later.
          </motion.p>
        </div>
      </section>

      {/* SERVICE CARDS GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, tagline, color }, index) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => setActiveId(id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-6 text-left transition hover:border-[#17A2C7]/50`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1930]/60 text-[#66d4eb]">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {tagline}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition group-hover:gap-3">
                See what&apos;s included
                <ArrowRight size={15} />
              </span>
            </motion.button>
          ))}
        </div>
      </section>
      {/* HOW WE WORK — process timeline */}
<section className="border-y border-white/10 bg-[#08182e]">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
        How we work
      </p>
      <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
        Same process, every service.
      </h2>
      <p className="mt-5 leading-relaxed text-slate-400">
        Whatever you bring us — a website, a brand, a software idea — it moves
        through the same clear stages, so you always know what happens next.
      </p>
    </div>

    <div className="relative mt-16">
      {/* connecting line */}

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-5">
        {[
          { step: '01', title: 'Discovery call', text: 'We learn your business, goals and the real problem behind the request.' },
          { step: '02', title: 'Proposal & scope', text: 'You get a clear scope, timeline and cost — no vague estimates.' },
          { step: '03', title: 'Design & build', text: 'Design, development and content are built together, not in isolation.' },
          { step: '04', title: 'Review & refine', text: 'You review real progress at each milestone, not just at the end.' },
          { step: '05', title: 'Launch & support', text: 'We launch with you and stay reachable for what comes after.' },
        ].map(({ step, title, text }, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-4 lg:flex-col lg:gap-0"
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#17A2C7]/30 bg-[#0A1930] text-sm font-bold text-[#66d4eb] shadow-[0_0_25px_rgba(23,162,199,0.12)]">
              {step}
            </span>
            <div className="pt-1 lg:pt-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* WHY WORK WITH US — qualitative facts, no fabricated numbers */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {[
      { icon: Handshake, title: 'Direct communication', text: 'You talk to the people doing the work — not an account manager relaying messages.' },
      { icon: ShieldCheck, title: 'Fixed scope, no surprises', text: 'What\u2019s agreed is what\u2019s delivered. Scope changes are discussed, not silently added.' },
      { icon: Layers3, title: 'One team, every discipline', text: 'Design, development, branding and marketing come from the same team — not four vendors.' },
      { icon: LifeBuoy, title: 'Support after launch', text: 'Launch isn\u2019t the finish line. We stay available for fixes, updates and next steps.' },
    ].map(({ icon: Icon, title, text }, index) => (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#17A2C7]/40"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
          <Icon size={20} />
        </div>
        <h3 className="mt-5 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* FINAL CTA */}
      {/* CTA */}
<section className="bg-[#0A1930] px-4 py-10 sm:px-6 lg:py-14">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#123C6B] px-6 py-20 text-center lg:py-24">

    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl"
    />

    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
        Not sure which service you need?
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
        Tell us the problem. We&apos;ll figure out the service.
      </h2>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
      >
        Discuss Your Project
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>

      {/* SERVICE DETAIL MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* backdrop */}
            <motion.div
              onClick={() => setActiveId(null)}
              className="absolute inset-0 bg-[#050d1c]/80 backdrop-blur-sm"
            />

            {/* panel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
className="custom-scrollbar relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d2542] shadow-2xl"            >
              <div className={`relative bg-gradient-to-br ${active.color} p-7 sm:p-9`}>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0A1930]/60 text-slate-300 transition hover:border-[#17A2C7]/50 hover:text-white"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A1930]/60 text-[#66d4eb]">
                  <active.icon size={26} />
                </div>

                <h3 className="mt-6 max-w-md text-3xl font-bold">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-300">
                  {active.description}
                </p>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#66d4eb]">
                  What&apos;s included
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {active.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-[#17A2C7]" />
                      <span className="text-sm leading-relaxed text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-xl border border-[#17A2C7]/20 bg-[#17A2C7]/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#66d4eb]">
                    Ideal for
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {active.idealFor}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
                >
                  Discuss This Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}