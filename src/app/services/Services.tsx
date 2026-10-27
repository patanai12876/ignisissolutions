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


const allServices = [

   {
    id: 'marketing',
    icon: Rocket,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    tagline: 'Campaigns connected to real goals.',
    description:
      'Marketing that\u2019s tied to business outcomes, not vanity metrics getting your business in front of the right audience with a clear plan behind every campaign.',
    includes: [
      'Audience and competitor research',
      'Search and social campaign strategy',
      'Paid advertising setup and management',
      'Content and messaging direction',
      'Monthly performance reporting',
      'Ongoing optimization based on results',
    ],
    idealFor: 'Businesses that need consistent, qualified leads not just traffic.',
    color: 'from-[#6E92F2]/20 to-[#0F2270]/5',
  },
  {
    id: 'social-media',
    icon: MessageCircle,
    title: 'Social Media Management',
    slug: 'social-media-management',
    tagline: 'Your presence, consistently managed.',
    description:
      'Strategic social media planning and execution content that engages your audience, builds community and drives business results on the platforms where your customers actually are.',
    includes: [
      'Social media strategy and content calendar',
      'Weekly post creation and scheduling',
      'Community engagement and response management',
      'Campaign planning and execution',
      'Analytics, insights and monthly reporting',
      'Paid social ad management and optimization',
    ],
    idealFor: 'Businesses that need consistent social presence without managing it in-house.',
    color: 'from-[#6E92F2]/20 to-[#0F2270]/5',
  },
   {
    id: 'branding',
    icon: Palette,
    title: 'Branding',
    slug: 'branding',
    tagline: 'Identities people remember and trust.',
    description:
      'A brand system that makes every customer touchpoint your website, packaging, socials, ads feel like one confident, consistent business.',
    includes: [
      'Brand strategy and positioning',
      'Logo and visual identity system',
      'Color palette and typography guidelines',
      'Brand guideline document',
      'Business collateral (cards, letterhead, etc.)',
      'Social media brand kit',
    ],
    idealFor: 'New businesses building an identity, or existing ones outgrowing theirs.',
    color: 'from-[#1A3BB0]/20 to-[#0F2270]/5',
  },
  {
    id: 'web-dev',
    icon: Code2,
    title: 'Web Development',
    slug: 'web-development',
    tagline: 'Fast, scalable websites and web apps.',
    description:
      'We build responsive, high-performance websites and web applications using modern framework built to load fast, rank well and represent your business properly on every device.',
    includes: [
      'Custom-designed, responsive website (not a template)',
      'Next.js / React build for speed and SEO',
      'CMS or code-based content structure, your choice',
      'On-page SEO foundation — metadata, sitemap, semantic HTML',
      'Performance optimization and Core Web Vitals tuning',
      'Deployment and launch support',
    ],
    idealFor: 'Businesses that need a new website or a redesign that actually converts visitors.',
    color: 'from-[#6E92F2]/20 to-[#2E5DE6]/5',
  },
    {
    id: 'saas-development',
    icon: Cloud,
    title: 'SaaS Development',
    slug: 'saas-development',
    tagline: 'Scalable software solutions in the cloud.',
    description:
      'Build your SaaS product from the ground up from idea validation to multi-tenant architecture ready for hundreds of users. We handle the backend, frontend, payments and scaling.',
    includes: [
      'Product roadmap and feature prioritization',
      'Full-stack SaaS application development',
      'Multi-tenant architecture setup',
      'Payment and subscription integration',
      'User authentication and role-based access',
      'Cloud deployment and scalability planning',
    ],
    idealFor: 'Entrepreneurs and businesses building their own SaaS product.',
    color: 'from-[#6E92F2]/20 to-[#6E92F2]/5',
  },
   {
    id: 'software',
    icon: Layers3,
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    tagline: 'Tools built around how you work.',
    description:
      'When off-the-shelf software doesn\u2019t fit, we build internal tools, dashboards or platforms tailored to your actual workflow not the other way around.',
    includes: [
      'Requirements discovery and technical planning',
      'Custom web application or internal tool',
      'Database design (PostgreSQL / Prisma)',
      'API integrations with your existing systems',
      'Role-based access where needed',
      'Documentation and handover support',
    ],
    idealFor: 'Businesses with a workflow or process that generic software doesn\u2019t solve.',
    color: 'from-[#1A3BB0]/20 to-[#2E5DE6]/5',
  },
   {
    id: 'graphic-design',
    icon: Sparkles,
    title: 'Graphic Designing',
    slug: 'graphic-designing',
    tagline: 'On-brand design, every touchpoint.',
    description:
      'Ongoing creative support for the visuals your business needs day-to-day kept consistent with your brand system, not designed in isolation.',
    includes: [
      'Social media post and ad creatives',
      'Marketing and promotional material',
      'Print design (brochures, banners, packaging)',
      'Presentation and pitch deck design',
      'Consistent use of brand guidelines',
    ],
    idealFor: 'Businesses that need regular, on-brand creative without hiring in-house.',
    color: 'from-[#1A3BB0]/20 to-[#0F2270]/5',
  },
   {
    id: 'Business-consultancy',
    icon: Target,
    title: 'Business Consultancy',
    slug: 'business-consultancy',
    tagline: 'Strategy behind the technology.',
    description:
      'Guidance on where to invest your digital budget website, marketing, branding or software based on what will actually move your business forward.',
    includes: [
      'Current digital presence audit',
      'Prioritized roadmap of what to build first',
      'Budget and timeline guidance',
      'Technology and platform recommendations',
      'Ongoing advisory as your business grows',
    ],
    idealFor: 'Business owners who know they need to invest in digital, but not sure where to start.',
    color: 'from-[#2E5DE6]/20 to-[#0F2270]/5',
  },
   {
    id: 'business-growth',
    icon: TrendingUp,
    title: 'Digital Business Growth',
    slug: 'digital-business-growth',
    tagline: 'Sustainable growth strategy and execution.',
    description:
      'End-to-end digital growth from acquisition to retention combining website, marketing, and product optimization to grow your customer base and revenue consistently.',
    includes: [
      'Growth audit and opportunity identification',
      'Customer acquisition strategy',
      'Conversion rate optimization',
      'Customer retention and loyalty programs',
      'Analytics and KPI tracking',
      'Quarterly growth planning and reporting',
    ],
    idealFor: 'Businesses ready to scale and looking for a strategic partner in growth.',
    color: 'from-[#2E5DE6]/20 to-[#0F2270]/5',
  },
  {
    id: 'ecommerce',
    icon: Globe2,
    title: 'E-commerce Solutions',
    slug: 'ecommerce-solutions',
    tagline: 'Stores built to sell and scale.',
    description:
      'Conversion-focused online stores that make it easy for customers to browse, choose and check out built to integrate cleanly with your inventory and payment operations.',
    includes: [
      'Product catalog and category structure',
      'Cart, checkout and payment gateway integration',
      'Order and inventory-ready architecture',
      'Mobile-first, fast-loading product pages',
      'Search and filtering for larger catalogs',
      'Analytics and conversion tracking setup',
    ],
    idealFor: 'Businesses launching or upgrading an online store.',
    color: 'from-[#2E5DE6]/20 to-[#6E92F2]/5',
  },
 
]

const serviceOrder = [
  'digital-marketing',
  'web-development',
  'branding',
  'social-media-management',
  'saas-development',
  'graphic-designing',
  'digital-business-growth',
]
const services = serviceOrder.flatMap((slug) => {
  const service = allServices.find((item) => item.slug === slug)
  return service ? [service] : []
})

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
    <main className="services-page overflow-x-hidden bg-white pt-20 text-[#071039] lg:pt-24">
      {/* PAGE HEADER */}
      <section className="services-hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-[24rem] w-[24rem] rounded-full bg-[#2E5DE6]/15 blur-[120px]" />
          <div className="absolute right-[-6rem] top-6 h-[26rem] w-[26rem] rounded-full bg-[#2E5DE6]/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="services-hero-content relative mx-auto max-w-7xl px-6 pb-14 pt-10 lg:pb-16 lg:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="services-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-[#1A3BB0]"
          >
            What We Do
          </motion.p>

         <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.05 }}
  className="services-title mt-5 max-w-4xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl"
>
  Digital Services for{' '}
  <span className="services-title-highlight bg-gradient-to-r from-[#1A3BB0] via-[#2E5DE6] to-[#2E5DE6] bg-clip-text text-transparent">
    Growing Businesses.
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="services-intro mt-6 max-w-2xl text-lg leading-relaxed text-[#52617F]"
          >
            Click any service to see exactly what&apos;s included no vague
            promises, no scope surprises later.
          </motion.p>
        </div>
      </section>

      {/* SERVICE CARDS GRID */}

      
      <section className="service-catalog-section mx-auto max-w-7xl px-6 pb-24">

       
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
         {services.map(
  ({ id, slug, icon: Icon, title, description }, index) => (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={`/services/${slug}`}
        className="service-catalog-card group relative flex h-full min-h-[390px] flex-col items-center overflow-hidden rounded-[20px] border p-6 text-center transition"
      >
        <div className="service-catalog-icon flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full">
          <Icon size={22} />
        </div>

        <h3 className="service-catalog-title mt-5 text-xl font-semibold">
          {title}
        </h3>

        <p className="service-catalog-description mt-3 line-clamp-4 text-sm leading-relaxed">
          {description}
        </p>

        <span className="service-catalog-link mt-auto inline-flex min-h-[54px] w-full items-center justify-center gap-2 text-sm font-semibold transition">
          Click For More Detail <ArrowRight size={17} />
        </span>
      </Link>
    </motion.div>
  )
)}
        </div>
      </section>
      {/* HOW WE WORK — process timeline */}
<section className="service-process-section">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="mx-auto max-w-2xl text-center">
      <p className="service-process-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
        How we work
      </p>
      <h2 className="service-process-title mt-4 text-4xl font-bold text-[#071039] sm:text-5xl">
        Same process, every service.
      </h2>
      <p className="service-process-intro mt-5 leading-relaxed text-[#36405A]">
        Whatever you bring us a website, a brand, a software idea it moves
        through the same clear stages, so you always know what happens next.
      </p>
    </div>

    <div className="relative mt-16">
      {/* connecting line */}

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-5">
        {[
          { step: '01', title: 'Discovery call', text: 'We learn your business, goals and the real problem behind the request.' },
          { step: '02', title: 'Proposal & scope', text: 'You get a clear scope, timeline and cost no vague estimates.' },
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
            className="service-process-step relative flex gap-4 lg:flex-col lg:gap-0"
          >
        <span className="service-process-marker relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-[0_0_25px_rgba(46,93,230,0.12)]">
              {step}
            </span>
            <div className="pt-1 lg:pt-5">
              <h3 className="font-semibold text-[#071039]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#36405A]">
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


      {/* FINAL CTA */}
      <section className="services-final-cta">
        <div className="services-cta-panel">
          <div className="services-cta-rings" aria-hidden="true" />
          <div className="services-cta-copy">
            <p className="services-eyebrow">Ready when you are</p>
            <h2>Tell us the problem. We&apos;ll figure out the service.</h2>
            <p>Tell us what you want to build, improve or launch. We&apos;ll help you find the right next step.</p>
          </div>
          <div className="services-cta-actions">
            <Link href="/contact" className="services-cta-primary">
              Discuss Your Project <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="services-cta-secondary">
              Request a Free Audit <ArrowRight size={18} />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
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
className="custom-scrollbar relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0F2270] shadow-2xl"            >
              <div className={`relative bg-gradient-to-br ${active.color} p-5 sm:p-9`}>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#071039]/60 text-slate-300 transition hover:border-[#2E5DE6]/50 hover:text-white sm:right-5 sm:top-5"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#071039]/60 text-[#AFC5F8]">
                  <active.icon size={26} />
                </div>

                <h3 className="mt-6 max-w-md pr-10 text-2xl font-bold sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-300">
                  {active.description}
                </p>
              </div>

              <div className="p-5 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#AFC5F8]">
                  What&apos;s included
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {active.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-[#2E5DE6]" />
                      <span className="text-sm leading-relaxed text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-xl border border-[#2E5DE6]/20 bg-[#2E5DE6]/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#AFC5F8]">
                    Ideal for
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {active.idealFor}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] sm:w-auto"
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
