'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Brush,
  Check,
  ChevronDown,
  Code2,
  Lightbulb,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    id: 'web-development',
    number: '01',
    icon: Code2,
    label: 'Web Development',
    title: 'Websites that do more than look good.',
    description:
      'Fast, scalable and SEO-ready websites built to make your business easier to find, understand and choose.',
    outcome:
      'A digital home that turns visits into stronger business opportunities.',
    capabilities: [
      'Business and corporate websites',
      'Landing pages built for conversions',
      'Next.js and React development',
      'Responsive and SEO-ready architecture',
    ],
  },
  {
    id: 'digital-marketing',
    number: '02',
    icon: Rocket,
    label: 'Digital Marketing',
    title: 'Make the right people notice your business.',
    description:
      'Data-driven digital marketing that helps your brand reach the right audience and turn attention into qualified leads.',
    outcome:
      'A clearer growth strategy built around real customer action.',
    capabilities: [
      'Social media marketing',
      'Paid advertising campaigns',
      'SEO and search visibility',
      'Content and campaign strategy',
    ],
  },
  {
    id: 'branding',
    number: '03',
    icon: Palette,
    label: 'Branding',
    title: 'Build a brand people can recognise instantly.',
    description:
      'Distinct visual identities and brand systems that help your business look credible, clear and memorable everywhere it appears.',
    outcome:
      'A confident brand that earns recognition and trust.',
    capabilities: [
      'Brand positioning direction',
      'Logo and visual identity design',
      'Brand colours and typography',
      'Practical brand guidelines',
    ],
  },
  {
    id: 'graphic-designing',
    number: '04',
    icon: Brush,
    label: 'Graphic Designing',
    title: 'Creative design that stays true to your brand.',
    description:
      'Purposeful designs for digital, print and marketing that help your business communicate clearly at every touchpoint.',
    outcome:
      'Consistent creative material that makes your message stronger.',
    capabilities: [
      'Social media creative design',
      'Marketing and campaign assets',
      'Print and promotional materials',
      'Presentation and business collateral',
    ],
  },
  {
    id: 'ecommerce',
    number: '05',
    icon: ShoppingBag,
    label: 'E-commerce Solutions',
    title: 'Online stores built to make buying easy.',
    description:
      'Conversion-focused e-commerce experiences designed to help customers discover products, trust your brand and complete their purchase.',
    outcome:
      'An online store ready to sell, scale and support your operations.',
    capabilities: [
      'Product and category experiences',
      'Cart and checkout journeys',
      'Storefront UI and UX design',
      'E-commerce integrations',
    ],
  },
  {
    id: 'custom-software',
    number: '06',
    icon: MonitorSmartphone,
    label: 'Custom Software Development',
    title: 'Software shaped around the way you work.',
    description:
      'Tailored web applications and internal tools that solve specific business problems instead of forcing your team into generic systems.',
    outcome:
      'Simpler processes, better visibility and tools that fit your business.',
    capabilities: [
      'Custom web applications',
      'Internal dashboards and portals',
      'Workflow and process automation',
      'Scalable software foundations',
    ],
  },
  {
    id: 'business-consultancy',
    number: '07',
    icon: Lightbulb,
    label: 'Business Consultancy',
    title: 'Make smarter digital decisions before you invest.',
    description:
      'Strategic guidance to help you connect technology, marketing and business priorities before time and budget are spent in the wrong direction.',
    outcome:
      'A clearer plan for what to build, improve and prioritise next.',
    capabilities: [
      'Digital strategy planning',
      'Technology direction',
      'Customer journey review',
      'Growth and process consultation',
    ],
  },
]

const faqs = [
  {
    question: 'Which service should I start with?',
    answer:
      'Start with the area creating the biggest business challenge right now. If you are unsure, contact us with your goal and we will help you identify the best first step.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Yes. Many projects combine branding, web development, e-commerce, marketing and strategy. The value comes from making these parts work together, not separately.',
  },
  {
    question: 'Do you work with businesses outside Lahore?',
    answer:
      'Yes. Ignisis works digitally with businesses across Pakistan and internationally, depending on the project requirements.',
  },
  {
    question: 'Can you improve an existing website or brand?',
    answer:
      'Yes. You do not always need to begin from zero. We can review, redesign, rebuild or improve the part of your digital presence that needs attention.',
  },
]

export default function ServicesPageClient() {
  const shouldReduceMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollToService = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-24 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute right-[-6rem] top-8 h-96 w-96 rounded-full bg-[#17A2C7]/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]"
          >
            Our Services
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
          >
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
              Digital services built around{' '}
              <span className="text-[#66d4eb]">where your business needs to go.</span>
            </h1>

            <p className="max-w-xl border-l border-[#17A2C7]/60 pl-5 leading-relaxed text-slate-300">
              Whether you need a new website, a stronger brand, smarter software
              or a better growth strategy, we help you make the next digital
              decision with confidence.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => scrollToService(service.id)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-[#17A2C7]/70 hover:bg-[#17A2C7]/10 hover:text-white"
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 bg-[#08182e]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
          {[
            ['Start with your goal', 'We look at the business outcome before recommending a service or solution.'],
            ['Get one clear direction', 'Strategy, design, technology and growth work together instead of pulling apart.'],
            ['Build for what comes next', 'Every solution is designed to support your business beyond launch day.'],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l border-[#17A2C7]/60 pl-5"
            >
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
            Find your starting point
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            What can Ignisis help you solve?
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon
            const reverse = index % 2 !== 0

            return (
              <motion.article
                id={service.id}
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="scroll-mt-28"
              >
                <div
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-[#17A2C7]">
                        {service.number}
                      </span>
                      <span className="h-px w-12 bg-[#17A2C7]/50" />
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {service.label}
                      </span>
                    </div>

                    <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
                      {service.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
                    >
                      Discuss this service <ArrowRight size={16} />
                    </Link>
                  </div>

                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -7 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d2542] p-7 sm:p-9"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,162,199,0.11),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px]" />

                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
                          <Icon size={24} />
                        </div>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                          Outcome focused
                        </span>
                      </div>

                      <p className="mt-9 text-sm font-semibold uppercase tracking-[0.16em] text-[#66d4eb]">
                        What this helps create
                      </p>

                      <p className="mt-3 text-2xl font-semibold leading-snug text-white">
                        {service.outcome}
                      </p>

                      <div className="mt-8 border-t border-white/10 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                          What you can expect
                        </p>

                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {service.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
                            >
                              <Check
                                size={16}
                                className="mt-0.5 shrink-0 text-[#17A2C7]"
                              />
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* CONNECTED SERVICES CTA */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
              Need more than one service?
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Your digital presence works better when the pieces connect.
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0A1930]/65 p-7 sm:p-9">
            <BarChart3 className="text-[#66d4eb]" size={28} />

            <p className="mt-6 text-xl font-semibold leading-relaxed">
              Combine branding, web development, software and marketing into
              one connected strategy—built around the same business goal.
            </p>

            <p className="mt-4 leading-relaxed text-slate-400">
              We will help you decide what needs to happen first, what can wait
              and where your investment can create the strongest impact.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-5 py-3 text-sm font-semibold text-[#0A1930] transition hover:bg-[#63d7ec]"
            >
              Plan your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Before we start, let&apos;s make things clear.
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

      {/* FINAL CTA */}
      <section className="bg-[#123C6B]">
        <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 text-center lg:py-24">
          <motion.div
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.12, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
              Let&apos;s find the right next step
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Tell us what your business needs to do better.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Share your idea, challenge or goal. We will help you identify the
              right service, strategy and next move.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-[#0A1930] transition hover:-translate-y-0.5 hover:bg-[#63d7ec]"
            >
              Discuss Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}