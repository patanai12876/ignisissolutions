import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  RefreshCw,
  Search,
  Lightbulb,
  Zap,
} from 'lucide-react'

export const metadata = {
  title: 'Digital Business Growth Services in Lahore | Ignisis Solutions',
  description:
    'Ignisis Solutions helps businesses grow through digital business growth strategies, customer acquisition, conversion optimization, retention, analytics and performance-driven digital solutions in Lahore and Pakistan.',
  keywords: [
    'digital business growth services',
    'business growth services Lahore',
    'digital growth agency Lahore',
    'business growth agency Pakistan',
    'digital business growth strategy',
    'customer acquisition strategy',
    'conversion rate optimization',
    'business growth consultant Lahore',
    'digital growth solutions Pakistan',
    'online business growth services',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/digital-business-growth',
  },
  openGraph: {
    title: 'Digital Business Growth Services in Lahore | Ignisis Solutions',
    description:
      'Strategic digital growth solutions combining acquisition, conversion, retention and optimization to help businesses grow consistently.',
    url: 'https://ignisissolutions.com/services/digital-business-growth',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Business Growth Services in Lahore | Ignisis Solutions',
    description:
      'Strategic digital growth solutions designed to help businesses attract customers, improve conversions and grow consistently.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Business Growth',
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
    'Digital business growth services including growth strategy, customer acquisition, conversion optimization, retention, analytics and performance improvement.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Business Growth Services',
    itemListElement: [
      'Growth Strategy',
      'Customer Acquisition',
      'Conversion Rate Optimization',
      'Customer Retention',
      'Analytics and KPI Tracking',
      'Digital Performance Optimization',
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
      question: 'What is digital business growth?',
      answer:
        'Digital business growth is the process of using websites, digital marketing, analytics, conversion optimization and customer retention strategies to attract more customers and grow business revenue.',
    },
    {
      question: 'How can digital growth help my business?',
      answer:
        'A structured digital growth strategy can help your business attract the right audience, generate qualified leads, improve website conversions, retain customers and make better decisions using performance data.',
    },
    {
      question: 'Do you provide digital business growth services in Lahore?',
      answer:
        'Yes. Ignisis Solutions provides digital business growth services for businesses in Lahore and across Pakistan, with strategies tailored to the company, audience and business goals.',
    },
    {
      question: 'Do you provide customer acquisition strategies?',
      answer:
        'Yes. We develop customer acquisition strategies using digital channels such as search, social media, paid advertising, content and optimized websites depending on the business and target audience.',
    },
    {
      question: 'Can you improve my website conversion rate?',
      answer:
        'Yes. We can review your website, user journey, messaging, calls to action and overall experience to identify opportunities for improving conversions.',
    },
    {
      question: 'Do you track business growth and performance?',
      answer:
        'Yes. We use relevant analytics and key performance indicators to monitor growth, understand what is working and identify opportunities for ongoing improvement.',
    },
  ],
}

const features = [
  {
    icon: Target,
    title: 'Growth Strategy',
    text: 'We identify the biggest growth opportunities in your digital presence and create a practical strategy around your business goals.',
  },
  {
    icon: Users,
    title: 'Customer Acquisition',
    text: 'Reach the right audience through targeted digital channels designed to generate qualified traffic, leads and customers.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    text: 'Improve the customer journey, messaging and website experience so more of your existing traffic turns into meaningful business results.',
  },
  {
    icon: RefreshCw,
    title: 'Customer Retention',
    text: 'Build strategies that encourage existing customers to return, engage with your business and increase their long-term value.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & KPIs',
    text: 'Track the metrics that actually matter so business decisions are based on performance data instead of assumptions.',
  },
  {
    icon: Zap,
    title: 'Continuous Optimization',
    text: 'Digital growth is ongoing. We review performance, identify opportunities and refine strategies as your business evolves.',
  },
]

const growthAreas = [
  'Growth strategy and planning',
  'Customer acquisition',
  'Lead generation',
  'Conversion rate optimization',
  'Website performance optimization',
  'Digital marketing strategy',
  'Customer retention',
  'Analytics and KPI tracking',
  'User journey optimization',
  'Digital product optimization',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function DigitalBusinessGrowthPage() {
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
          <div className="absolute right-[-5rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#2E5DE6]/10 blur-[140px]" />

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
              <TrendingUp size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Digital Business Growth Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl">
              Turn digital activity into{' '}
              <span className="bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
                business growth.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions helps businesses build sustainable digital
              growth through customer acquisition, conversion optimization,
              retention, analytics and practical growth strategies built
              around real business goals.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                Grow Your Business
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
            A complete approach to digital growth.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            We connect strategy, acquisition, conversion and retention so your
            digital presence works toward the same business objective.
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

              <h3 className="mt-6 text-xl font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH AREAS */}
      <section className="border-y border-white/10 bg-[#0F2270]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
                What we focus on
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Growth across the entire digital journey.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Every business has different growth challenges. We identify
                where customers are being lost and where digital improvements
                can create the biggest opportunities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {growthAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#071039] p-4"
                >
                  <Check
                    size={17}
                    className="shrink-0 text-[#2E5DE6]"
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

      {/* CUSTOMER JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              The growth journey
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From first impression to loyal customer.
            </h2>

            <p className="mt-6 leading-relaxed text-slate-400">
              Digital growth is not one campaign or one website change. It is
              a connected customer journey where every stage has an opportunity
              to improve.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Search,
                title: 'Attract',
                text: 'Reach the right people through relevant digital channels.',
              },
              {
                icon: Users,
                title: 'Engage',
                text: 'Give visitors useful information and a strong brand experience.',
              },
              {
                icon: Target,
                title: 'Convert',
                text: 'Make it easier for interested visitors to become customers.',
              },
              {
                icon: RefreshCw,
                title: 'Retain',
                text: 'Create reasons for customers to return and continue engaging.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2E5DE6]/15 text-[#AFC5F8]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#0F2270]">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:py-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Digital business growth FAQs.
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl border border-white/10 bg-[#071039] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">
                  <span>{question}</span>
                  <ChevronDown size={20} aria-hidden="true" className="shrink-0 text-[#AFC5F8] transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p>
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
              Ready to grow?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Build a digital growth strategy for your business.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us where your business is today, what you want to achieve
              and where you are facing challenges. We&apos;ll help you identify the
              right opportunities for growth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0]"
            >
              Discuss Your Growth
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
