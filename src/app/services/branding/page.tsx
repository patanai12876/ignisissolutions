import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Palette,
  Target,
  Sparkles,
  Layers3,
  PenTool,
  BookOpen,
  Megaphone,
  RefreshCw,
} from 'lucide-react'

export const metadata = {
  title: 'Branding Agency in Lahore | Brand Identity Design – Ignisis Solutions',
  description:
    'Ignisis Solutions is a branding agency in Lahore, Pakistan helping businesses build memorable brand identities through logo design, brand strategy, visual identity, typography, color systems and brand guidelines.',
  keywords: [
    'branding agency in Lahore',
    'branding services Lahore',
    'brand identity design Lahore',
    'branding company Pakistan',
    'brand strategy services',
    'logo design Lahore',
    'visual identity design',
    'corporate branding Lahore',
    'business branding services',
    'brand identity Pakistan',
    'professional branding agency',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/branding',
  },
  openGraph: {
    title: 'Branding Agency in Lahore | Brand Identity Design – Ignisis Solutions',
    description:
      'Build a strong, memorable and consistent brand identity with Ignisis Solutions. Branding, logo design, visual identity and brand strategy for businesses in Lahore and across Pakistan.',
    url: 'https://ignisissolutions.com/services/branding',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding Agency in Lahore | Ignisis Solutions',
    description:
      'Professional branding and visual identity services designed to help businesses build recognition, trust and consistency.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Branding',
  provider: {
    '@type': 'Organization',
    name: 'Ignisis Solutions',
    url: 'https://ignisissolutions.com',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Lahore',
    },
    {
      '@type': 'Country',
      name: 'Pakistan',
    },
  ],
  description:
    'Professional branding services including brand strategy, logo design, visual identity systems, typography, color palettes and brand guidelines.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Branding Services',
    itemListElement: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity',
      'Color Palette Development',
      'Typography Systems',
      'Brand Guidelines',
      'Corporate Branding',
      'Social Media Brand Kit',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
      },
    })),
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      question: 'What does branding include?',
      answer:
        'Branding can include brand strategy, positioning, logo design, visual identity, color palette, typography, brand guidelines and branded marketing materials.',
    },
    {
      question: 'Do you provide logo design in Lahore?',
      answer:
        'Yes. Ignisis Solutions provides professional logo design and complete visual identity services for businesses in Lahore and across Pakistan.',
    },
    {
      question: 'What is the difference between a logo and a brand?',
      answer:
        'A logo is one visual element of a brand. A complete brand includes the visual identity, messaging, positioning, personality and overall experience customers associate with the business.',
    },
    {
      question: 'Can you rebrand an existing business?',
      answer:
        'Yes. We can help businesses refresh or completely redesign an existing brand identity while considering their current audience, market position and business goals.',
    },
    {
      question: 'Do you create brand guidelines?',
      answer:
        'Yes. Brand guidelines can define how your logo, colors, typography, imagery and other visual elements should be used consistently across different platforms.',
    },
    {
      question: 'Why is branding important for a business?',
      answer:
        'Strong branding helps businesses communicate their value clearly, create recognition, build trust and maintain a consistent identity across websites, social media, advertising and other customer touchpoints.',
    },
  ],
}

const features = [
  {
    icon: Target,
    title: 'Brand Strategy',
    text: 'We define the direction behind your brand including positioning, audience, personality and the message you want customers to remember.',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    text: 'Distinctive logo concepts designed to represent your business and work effectively across digital and physical applications.',
  },
  {
    icon: Palette,
    title: 'Visual Identity',
    text: 'A cohesive visual system combining colors, typography, imagery and design elements to create a recognizable brand.',
  },
  {
    icon: Layers3,
    title: 'Brand Guidelines',
    text: 'Clear guidelines that explain how your visual identity should be used so your brand stays consistent as your business grows.',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    text: 'A consistent creative direction for websites, social media, advertising and other customer-facing brand experiences.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Brand Assets',
    text: 'Branded materials designed to keep your campaigns, promotions and communications visually aligned with your identity.',
  },
]

const brandElements = [
  {
    icon: PenTool,
    title: 'Logo & Mark',
    text: 'A recognizable visual symbol that represents your business.',
  },
  {
    icon: Palette,
    title: 'Colors',
    text: 'A purposeful color system that supports recognition and brand personality.',
  },
  {
    icon: BookOpen,
    title: 'Typography',
    text: 'Font choices and hierarchy that create a consistent visual voice.',
  },
  {
    icon: Layers3,
    title: 'Visual System',
    text: 'Supporting design elements that make the brand recognizable beyond the logo.',
  },
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function BrandingPage() {
  return (
    <main className="service-detail-page overflow-x-hidden bg-white text-[#071039]">

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-8 lg:pt-10">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-[25rem] w-[25rem] rounded-full bg-[#2E5DE6]/15 blur-[130px]" />
          <div className="absolute right-[-5rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#1A3BB0]/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-20">

          <div className="max-w-4xl">

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#AFC5F8] transition hover:text-white"
            >
              <ArrowRight size={15} className="rotate-180" />
              All Services
            </Link>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E5DE6]/15 text-[#AFC5F8]">
              <Palette size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Branding Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl">
              Brands people{' '}
              <span className="bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
                remember.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions is a branding agency in Lahore helping
              businesses build memorable and consistent brand identities
              through strategy, logo design, visual identity and brand
              systems designed for long-term growth.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                Build Your Brand
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-[#2E5DE6]/60 hover:bg-white/5"
              >
                View Our Work
              </Link>

            </div>

          </div>
        </div>
      </section>



      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
            What we provide
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Complete branding solutions.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            From brand strategy and logo design to complete visual identity
            systems, every part of your brand is developed with consistency
            and recognition in mind.
          </p>

        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-[#2E5DE6]/40 hover:bg-white/[0.04]"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E5DE6]/15 text-[#AFC5F8]">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {text}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* BRAND ELEMENTS */}
      <section className="border-y border-white/10 bg-[#0F2270]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
                Brand identity
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Every element should feel like the same brand.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                A professional brand is more than a standalone logo. We
                develop the visual elements that allow your business to
                maintain a consistent identity wherever customers encounter
                it.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {brandElements.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-[#071039] p-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E5DE6]/15 text-[#AFC5F8]">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 bg-[#0F2270]">

        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Branding FAQs.
            </h2>

          </div>

          <div className="mt-10 space-y-4">

            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-white/10 bg-[#071039] p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold marker:hidden">
                  <span>{question}</span>
                  <ChevronDown size={20} aria-hidden="true" className="shrink-0 text-[#AFC5F8] transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="bg-[#071039] px-4 pb-16 pt-2 sm:px-6 lg:pb-20">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1A3BB0] px-6 py-14 text-center sm:px-10">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E5DE6]/20 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Ready to build your brand?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s create a brand people remember.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your business, your audience and where you want
              your brand to go. We&apos;ll help you build the right identity.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0]"
            >
              Discuss Your Brand
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  )
}
