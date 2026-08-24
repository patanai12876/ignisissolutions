import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Target,
  Compass,
  Lightbulb,
  BarChart3,
  Layers3,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

export const metadata = {
  title:
    'Business Consultancy Services in Lahore | Digital Strategy – Ignisis Solutions',

  description:
    'Ignisis Solutions provides business consultancy and digital strategy services in Lahore, Pakistan. Get practical guidance on websites, digital marketing, branding, software and online business growth.',

  keywords: [
    'business consultancy services',
    'business consultant in Lahore',
    'business consultancy Lahore',
    'business consultant Pakistan',
    'digital business consultancy',
    'digital strategy consulting Lahore',
    'business growth consultant Lahore',
    'digital transformation consultant Pakistan',
    'business strategy consultant',
    'online business consultant Lahore',
    'digital solutions consultant',
    'Ignisis Solutions',
  ],

  alternates: {
    canonical:
      'https://ignisissolutions.com/services/business-consultancy',
  },

  openGraph: {
    title:
      'Business Consultancy Services in Lahore | Ignisis Solutions',

    description:
      'Practical business and digital strategy consulting to help you decide what to build, where to invest and how to grow your business online.',

    url: 'https://ignisissolutions.com/services/business-consultancy',

    siteName: 'Ignisis Solutions',

    type: 'website',

    locale: 'en_PK',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Business Consultancy Services in Lahore | Ignisis Solutions',

    description:
      'Practical business and digital strategy consulting for businesses looking to grow, improve and scale.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  serviceType: 'Business Consultancy',

  provider: {
    '@type': 'Organization',
    name: 'Ignisis Solutions',
    url: 'https://ignisissolutions.com',
  },

  areaServed: {
    '@type': 'Country',
    name: 'Pakistan',
  },

  description:
    'Business consultancy and digital strategy services helping businesses make better decisions about websites, marketing, branding, software and digital growth.',

  hasOfferCatalog: {
    '@type': 'OfferCatalog',

    name: 'Business Consultancy Services',

    itemListElement: [
      'Digital Presence Audit',
      'Business Strategy Consulting',
      'Digital Strategy',
      'Technology Consulting',
      'Marketing Strategy',
      'Website Strategy',
      'Growth Planning',
      'Digital Transformation Consulting',
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
      question: 'What does a business consultant do?',
      answer:
        'A business consultant helps identify business challenges and opportunities, evaluates current processes and digital presence, and provides practical recommendations to improve performance and growth.',
    },

    {
      question: 'Do you provide business consultancy in Lahore?',
      answer:
        'Yes. Ignisis Solutions provides business consultancy and digital strategy services for businesses in Lahore and across Pakistan.',
    },

    {
      question: 'What areas can you help with?',
      answer:
        'We can help with digital strategy, websites, digital marketing, branding, software requirements, online business growth and technology decisions.',
    },

    {
      question: 'Do you help businesses that do not have a website?',
      answer:
        'Yes. We can evaluate your business goals and recommend the right digital presence, including website structure, technology, content and marketing direction.',
    },

    {
      question: 'Can you help us decide which digital services we need?',
      answer:
        'Yes. We assess your current situation, goals and priorities and create a practical roadmap showing which digital investments should come first.',
    },

    {
      question: 'Do you work with small businesses?',
      answer:
        'Yes. Our consultancy services can be tailored for startups, small businesses and established companies that want clearer direction for their digital growth.',
    },
  ],
}

const features = [
  {
    icon: Compass,
    title: 'Digital Strategy',
    text: 'We help you determine where your business should focus online and which digital activities can have the greatest impact.',
  },

  {
    icon: Target,
    title: 'Business Goal Alignment',
    text: 'Every recommendation starts with your actual business objectives instead of suggesting technology simply because it is popular.',
  },

  {
    icon: Lightbulb,
    title: 'Practical Recommendations',
    text: 'You get clear, actionable recommendations rather than complicated reports that are difficult to implement.',
  },

  {
    icon: BarChart3,
    title: 'Growth Planning',
    text: 'We identify opportunities to improve customer acquisition, conversion, online visibility and overall digital performance.',
  },

  {
    icon: Layers3,
    title: 'Technology Guidance',
    text: 'We help you choose the right platforms, tools and technologies based on your requirements, budget and future plans.',
  },

  {
    icon: ShieldCheck,
    title: 'Digital Presence Audit',
    text: 'We review your website, branding, marketing and online presence to identify weaknesses and areas for improvement.',
  },
]

const consultationAreas = [
  'Business Website Strategy',
  'Digital Marketing Strategy',
  'SEO & Online Visibility',
  'Branding & Positioning',
  'Custom Software Requirements',
  'E-commerce Strategy',
  'Customer Acquisition',
  'Conversion Optimization',
  'Technology Selection',
  'Digital Transformation',
]

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'We learn about your business, current situation, challenges, audience and goals.',
  },

  {
    number: '02',
    title: 'Audit',
    text: 'We review your existing digital presence, processes and opportunities to identify what needs attention.',
  },

  {
    number: '03',
    title: 'Prioritize',
    text: 'We separate what is important from what can wait and create a practical order of execution.',
  },

  {
    number: '04',
    title: 'Recommend',
    text: 'You receive clear recommendations for technology, marketing, branding and other digital investments.',
  },

  {
    number: '05',
    title: 'Execute',
    text: 'If you choose to work with us, our team can help turn the strategy into actual digital solutions.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function BusinessConsultancyPage() {
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
              <ArrowRight
                size={15}
                className="rotate-180"
              />
              All Services
            </Link>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17A2C7]/15 text-[#66d4eb]">
              <Target size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Business Consultancy Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Better decisions for{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                business growth.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions provides practical business consultancy and
              digital strategy for businesses in Lahore and across Pakistan.
              We help you understand what to improve, what to build and where
              to invest your digital resources.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_30px_rgba(23,162,199,0.2)]"
              >
                Book a Consultation
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
                Why consultancy matters
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Know what to do.
                <span className="block text-[#66d4eb]">
                  Before you spend.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">
              <p>
                Businesses often know they need to improve their online
                presence but are not always sure where to start. Should you
                build a new website, invest in SEO, run paid advertising,
                improve your branding or develop custom software?
              </p>

              <p>
                Our business consultancy services help answer those questions
                by looking at your business as a whole. We evaluate your
                current digital presence, goals, audience and challenges before
                recommending what should happen next.
              </p>

              <p>
                The goal is simple: help you make better digital decisions,
                avoid unnecessary investments and create a clear path toward
                sustainable business growth.
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
            Consultancy built around your business.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            We combine business thinking with technology, design and marketing
            knowledge to provide recommendations you can actually use.
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

      {/* CONSULTING AREAS */}

      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                What we can help with
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Strategy across your digital business.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                From your website and marketing to technology and customer
                acquisition, we help connect individual decisions to your
                bigger business objectives.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {consultationAreas.map((item) => (
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

      {/* STRATEGIC APPROACH */}

      
      {/* PROCESS */}

      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Our consultancy process
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From problem to clear direction.
            </h2>

            <p className="mt-5 leading-relaxed text-slate-400">
              A structured process helps us understand your business before
              recommending what you should do next.
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

      {/* BUSINESS GROWTH */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Built for growth
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Turn digital investment into business progress.
            </h2>

            <p className="mt-6 leading-relaxed text-slate-400">
              A good digital strategy should ultimately support the things
              that matter to your business: attracting the right customers,
              building trust, improving conversions and creating a stronger
              foundation for growth.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
              <TrendingUp size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              One strategy. Multiple digital capabilities.
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              Because Ignisis Solutions also works across web development,
              software, branding and digital marketing, we can help connect
              your strategy directly with implementation when you are ready
              to execute.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Web Development',
                'Digital Marketing',
                'SEO',
                'Branding',
                'Software',
                'E-commerce',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-[#0A1930] px-3 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Business consultancy FAQs.
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
              href="/services/branding"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Branding →
            </Link>

            <Link
              href="/services/custom-software-development"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Custom Software Development →
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
              Need a clear direction?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s figure out what your business needs next.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your business, your current challenges and where
              you want to go. We&apos;ll help you identify the right starting
              point.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}