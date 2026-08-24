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

const process = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We learn about your business, target audience, competitors, market and the perception you want your brand to create.',
  },
  {
    number: '02',
    title: 'Strategy',
    text: 'We establish the brand direction, positioning, personality and visual approach before design begins.',
  },
  {
    number: '03',
    title: 'Concept',
    text: 'We develop visual concepts that translate your strategy into a distinctive and meaningful identity.',
  },
  {
    number: '04',
    title: 'Refinement',
    text: 'The selected direction is refined across logo variations, colors, typography and supporting visual elements.',
  },
  {
    number: '05',
    title: 'Brand Launch',
    text: 'You receive the finalized identity and guidelines ready to use across your website, social media and marketing.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function BrandingPage() {
  return (
    <main className="overflow-x-hidden bg-[#0A1930] text-white">

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
          <div className="absolute left-[8%] top-0 h-[25rem] w-[25rem] rounded-full bg-[#17A2C7]/15 blur-[130px]" />
          <div className="absolute right-[-5rem] top-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-20">

          <div className="max-w-4xl">

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#66d4eb] transition hover:text-white"
            >
              <ArrowRight size={15} className="rotate-180" />
              All Services
            </Link>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17A2C7]/15 text-[#66d4eb]">
              <Palette size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Branding Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Brands people{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_30px_rgba(23,162,199,0.2)]"
              >
                Build Your Brand
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-[#17A2C7]/60 hover:bg-white/5"
              >
                View Our Work
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 bg-[#08182e]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Why branding matters
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                More than a logo.
                <span className="block text-[#66d4eb]">
                  A recognizable identity.
                </span>
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">

              <p>
                Your brand is often the first thing customers notice and
                one of the things they remember after interacting with your
                business. A strong identity helps communicate who you are
                before a customer ever speaks to you.
              </p>

              <p>
                Our branding services combine strategy and design to create
                a visual identity that is distinctive, consistent and
                aligned with your business positioning and target audience.
              </p>

              <p>
                Whether you are launching a new business, refreshing an
                existing identity or preparing for growth, we build branding
                systems that can work across your website, social media,
                advertising and customer touchpoints.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-[#17A2C7]/40 hover:bg-white/[0.04]"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
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
      <section className="border-y border-white/10 bg-[#08182e]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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
                  className="rounded-xl border border-white/10 bg-[#0A1930] p-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#17A2C7]/15 text-[#66d4eb]">
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

      {/* WHAT WE CAN BRAND */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Branding applications
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              A brand system that works everywhere.
            </h2>

            <p className="mt-6 leading-relaxed text-slate-400">
              Your identity should remain recognizable whether a customer
              visits your website, sees your Instagram page, receives a
              business card or encounters one of your advertisements.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              'Business & corporate branding',
              'Logo design',
              'Website visual identity',
              'Social media branding',
              'Business cards & stationery',
              'Marketing materials',
              'Packaging & promotional design',
              'Brand guideline documents',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
              >

                <Check
                  size={17}
                  className="shrink-0 text-[#17A2C7]"
                />

                <span className="text-sm font-medium text-slate-200">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
            Our process
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            From strategy to identity.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            A structured branding process helps ensure that your visual
            identity is based on your business rather than design trends
            alone.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

          {process.map(({ number, title, text }) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >

              <span className="text-sm font-bold text-[#66d4eb]">
                {number}
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {text}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* BUSINESS BENEFITS */}
     
      {/* FAQ */}
      <section className="border-b border-white/10 bg-[#08182e]">

        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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
                className="group rounded-2xl border border-white/10 bg-[#0A1930] p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold marker:hidden">
                  <span>{question}</span>
                  <ChevronDown size={20} aria-hidden="true" className="shrink-0 text-[#66d4eb] transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
            Explore Ignisis Solutions
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">

            <Link
              href="/services"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              All Services →
            </Link>

            <Link
              href="/services/web-development"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Web Development →
            </Link>

            <Link
              href="/services/digital-marketing"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Digital Marketing →
            </Link>

            <Link
              href="/services/social-media-management"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Social Media Management →
            </Link>

            <Link
              href="/services/graphic-designing"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Graphic Designing →
            </Link>

            <Link
              href="/portfolio"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Our Portfolio →
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Contact Ignisis Solutions →
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1930] px-4 pb-16 pt-2 sm:px-6 lg:pb-20">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#123C6B] px-6 py-14 text-center sm:px-10">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
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