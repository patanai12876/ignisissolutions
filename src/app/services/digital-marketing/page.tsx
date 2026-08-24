import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  BarChart3,
  Target,
  Search,
  Megaphone,
  TrendingUp,
  Users,
  MousePointerClick,
  Globe,
} from 'lucide-react'

export const metadata = {
  title: 'Digital Marketing Agency in Lahore | SEO, Google & Meta Ads – Ignisis Solutions',
  description:
    'Ignisis Solutions is a digital marketing agency in Lahore, Pakistan offering SEO, Google Ads, Meta Ads, social media marketing and performance-driven digital marketing strategies to help businesses generate leads and grow online.',
  keywords: [
    'digital marketing agency in Lahore',
    'digital marketing services Lahore',
    'digital marketing company Pakistan',
    'SEO services Lahore',
    'Google Ads agency Lahore',
    'Meta Ads agency Lahore',
    'Facebook Ads agency Lahore',
    'social media marketing Lahore',
    'performance marketing Pakistan',
    'online marketing agency Lahore',
    'lead generation services Lahore',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Lahore | Ignisis Solutions',
    description:
      'Performance-driven digital marketing including SEO, Google Ads, Meta Ads and social media marketing designed to generate qualified leads and business growth.',
    url: 'https://ignisissolutions.com/services/digital-marketing',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Lahore | Ignisis Solutions',
    description:
      'SEO, Google Ads, Meta Ads and social media marketing focused on real business growth.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Marketing',
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
    'Digital marketing services including SEO, Google Ads, Meta Ads, social media marketing, content strategy and performance marketing for businesses.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      'Search Engine Optimization',
      'Google Ads',
      'Meta Ads',
      'Social Media Marketing',
      'Paid Advertising',
      'Lead Generation',
      'Content Marketing',
      'Performance Marketing',
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
      question: 'What digital marketing services do you offer?',
      answer:
        'Ignisis Solutions provides SEO, Google Ads, Meta Ads, social media marketing, paid advertising, lead generation, content strategy and performance marketing services.',
    },
    {
      question: 'Do you provide SEO services in Lahore?',
      answer:
        'Yes. We provide SEO services for businesses in Lahore and across Pakistan, focusing on technical SEO, on-page optimization, keyword targeting, content and search visibility.',
    },
    {
      question: 'Do you manage Google Ads campaigns?',
      answer:
        'Yes. We can plan, set up, manage and optimize Google Ads campaigns based on your business objectives, target audience and available advertising budget.',
    },
    {
      question: 'Do you offer Facebook and Instagram advertising?',
      answer:
        'Yes. We manage Meta advertising campaigns across Facebook and Instagram, including campaign strategy, audience targeting, creative direction, optimization and performance tracking.',
    },
    {
      question: 'How long does digital marketing take to show results?',
      answer:
        'Results depend on the service, competition, industry, budget and starting point. Paid advertising can generate data and leads quickly, while SEO generally requires consistent optimization over a longer period.',
    },
    {
      question: 'Can you create a complete digital marketing strategy for my business?',
      answer:
        'Yes. We can evaluate your current online presence, identify opportunities and create a digital marketing strategy covering SEO, paid advertising, social media and conversion-focused improvements.',
    },
  ],
}

const features = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    text: 'Improve your website visibility in search engines through technical SEO, on-page optimization, keyword targeting and content strategy.',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads',
    text: 'Create targeted Google Ads campaigns designed to reach people actively searching for your products or services.',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads',
    text: 'Reach relevant audiences through Facebook and Instagram advertising with structured campaigns and continuous optimization.',
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    text: 'Build a consistent social media presence through strategic content, audience engagement and platform-specific marketing.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    text: 'Turn digital traffic into potential customers through targeted campaigns, landing pages, offers and conversion-focused strategies.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    text: 'Monitor campaigns and business metrics to understand what is working and make better marketing decisions.',
  },
]

const channels = [
  'Search Engine Optimization',
  'Google Search Ads',
  'Google Display Ads',
  'Facebook Advertising',
  'Instagram Advertising',
  'Social Media Marketing',
  'Content Marketing',
  'Lead Generation',
]

const process = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We understand your business, target audience, competitors, current marketing efforts and growth objectives.',
  },
  {
    number: '02',
    title: 'Strategy',
    text: 'We identify the right channels, audiences, keywords, campaigns and content opportunities for your business.',
  },
  {
    number: '03',
    title: 'Launch',
    text: 'Campaigns, tracking systems, content and optimization processes are implemented according to the strategy.',
  },
  {
    number: '04',
    title: 'Optimize',
    text: 'We analyze campaign and website performance and continuously refine targeting, messaging and marketing activities.',
  },
  {
    number: '05',
    title: 'Grow',
    text: 'Successful strategies are strengthened and scaled while new opportunities are identified for sustainable growth.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function DigitalMarketingPage() {
  return (
    <main className="overflow-x-hidden bg-[#0A1930] text-white">
      {/* JSON-LD */}
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
          <div className="absolute right-[-5rem] top-10 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[140px]" />
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
              <Megaphone size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Digital Marketing Agency in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Digital marketing built for{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                real business growth.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions helps businesses grow online through SEO,
              Google Ads, Meta Ads, social media marketing and
              performance-focused digital strategies designed to attract,
              convert and retain customers.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_30px_rgba(23,162,199,0.2)]"
              >
                Grow Your Business
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
                Why digital marketing matters
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Visibility is only the beginning.
                <span className="block text-[#66d4eb]">
                  Growth is the goal.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">
              <p>
                Having a website or social media presence is not enough if
                potential customers cannot find your business. Digital
                marketing helps you reach the right audience at the right
                stage of their buying journey.
              </p>

              <p>
                As a digital marketing agency in Lahore, Ignisis Solutions
                combines SEO, paid advertising, social media and conversion
                strategy to create a connected digital presence around your
                business goals.
              </p>

              <p>
                Instead of chasing likes, impressions or traffic alone, we
                focus on meaningful outcomes such as qualified leads,
                customer acquisition, stronger visibility and sustainable
                online growth.
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
            Digital marketing services that work together.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            Your marketing channels should support each other. We build
            strategies that connect search, advertising, social media and
            conversion opportunities.
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

              <h3 className="mt-6 text-xl font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETING CHANNELS */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Where we market
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Reach customers across the digital landscape.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Every business has a different audience. We choose marketing
                channels based on where your customers search, discover and
                make purchasing decisions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0A1930] p-4"
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
        </div>
      </section>

      {/* STRATEGY */}
     
      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Our process
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From strategy to measurable growth.
            </h2>

            <p className="mt-5 leading-relaxed text-slate-400">
              A structured process keeps your marketing focused and gives
              you a clear understanding of what is being done and why.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map(({ number, title, text }) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#0A1930] p-6"
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
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
     

      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Digital marketing FAQs.
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
              href="/services/saas-development"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              SaaS Development →
            </Link>

            <Link
              href="/services/custom-software-development"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Custom Software Development →
            </Link>

            <Link
              href="/services/social-media-management"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Social Media Management →
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
              Ready to grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s build a digital marketing strategy for your business.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your business, your audience and your goals.
              We&apos;ll help you identify the right digital marketing
              opportunities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
            >
              Discuss Your Marketing
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}