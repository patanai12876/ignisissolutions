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

const process = [
  {
    number: '01',
    title: 'Growth Audit',
    text: 'We review your current website, digital presence, customer journey and performance to identify growth opportunities.',
  },
  {
    number: '02',
    title: 'Strategy',
    text: 'We prioritize the opportunities that can have the greatest impact and create a clear digital growth roadmap.',
  },
  {
    number: '03',
    title: 'Execution',
    text: 'The strategy is turned into practical improvements across your website, marketing, customer acquisition and digital experience.',
  },
  {
    number: '04',
    title: 'Measure',
    text: 'We monitor relevant KPIs and performance data to understand what is producing results.',
  },
  {
    number: '05',
    title: 'Optimize',
    text: 'Based on the results, we continuously refine the strategy to create sustainable long-term growth.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function DigitalBusinessGrowthPage() {
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
          <div className="absolute right-[-5rem] top-10 h-[28rem] w-[28rem] rounded-full bg-green-500/10 blur-[140px]" />

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
              <TrendingUp size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Digital Business Growth Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Turn digital activity into{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
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
                Why digital growth matters
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                More traffic isn't enough.
                <span className="block text-[#66d4eb]">
                  Growth needs a system.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">
              <p>
                Getting more visitors, followers or clicks does not
                automatically mean your business is growing. Sustainable
                growth comes from understanding your customers and improving
                every important part of their journey.
              </p>

              <p>
                Our digital business growth services combine strategy,
                customer acquisition, conversion optimization and performance
                tracking to create a clearer path from attention to revenue.
              </p>

              <p>
                Whether you are launching a new business, trying to generate
                more leads or looking to scale an existing digital operation,
                we focus on the opportunities that can create meaningful
                business impact.
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

      {/* GROWTH AREAS */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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

      {/* CUSTOMER JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
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

      {/* PROCESS */}
      

      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Digital business growth FAQs.
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
              href="/services/digital-marketing"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Digital Marketing →
            </Link>

            <Link
              href="/services/web-development"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Web Development →
            </Link>

            <Link
              href="/services/social-media-management"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Social Media Management →
            </Link>

            <Link
              href="/services/business-consultancy"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Business Consultancy →
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
              Build a digital growth strategy for your business.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us where your business is today, what you want to achieve
              and where you are facing challenges. We'll help you identify the
              right opportunities for growth.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
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