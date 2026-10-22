import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  CreditCard,
  Gauge,
  Lock,
  Users,
  Database,
  ShieldCheck,
  Layers3,
} from 'lucide-react'

export const metadata = {
  title: 'SaaS Development Company in Lahore | SaaS Solutions – Ignisis Solutions',
  description:
    'Ignisis Solutions provides custom SaaS development services in Lahore and Pakistan. We build scalable SaaS applications with modern frontend, backend, authentication, subscriptions, payments and cloud architecture.',
  keywords: [
    'SaaS development services',
    'SaaS development company in Lahore',
    'SaaS development company Pakistan',
    'custom SaaS development',
    'SaaS application development',
    'SaaS product development',
    'SaaS developers Lahore',
    'SaaS development services Pakistan',
    'multi tenant SaaS development',
    'SaaS software development',
    'cloud based SaaS development',
    'custom SaaS solutions',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/saas-development',
  },
  openGraph: {
    title: 'SaaS Development Company in Lahore | Ignisis Solutions',
    description:
      'Custom SaaS applications built for scalability, performance and long-term growth. From product architecture to cloud deployment and subscriptions.',
    url: 'https://ignisissolutions.com/services/saas-development',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Company in Lahore | Ignisis Solutions',
    description:
      'Build scalable SaaS products with custom development, secure architecture, subscriptions and cloud deployment.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SaaS Development',
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
    'Custom SaaS development services including SaaS product development, multi-tenant applications, authentication, subscription systems, payment integration and cloud deployment.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SaaS Development Services',
    itemListElement: [
      'Custom SaaS Application Development',
      'Multi-Tenant SaaS Development',
      'SaaS MVP Development',
      'SaaS Product Development',
      'Subscription & Payment Integration',
      'Cloud SaaS Development',
      'SaaS Dashboard Development',
      'SaaS API Development',
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
      question: 'What is SaaS development?',
      answer:
        'SaaS development is the process of building cloud-based software that customers can access through the internet, usually through a web browser and subscription-based model.',
    },
    {
      question: 'How much does SaaS development cost?',
      answer:
        'The cost of SaaS development depends on the product complexity, number of features, user roles, integrations, database requirements, authentication, payment systems and scalability requirements. Contact Ignisis Solutions with your product requirements for a suitable development plan.',
    },
    {
      question: 'Do you build custom SaaS applications?',
      answer:
        'Yes. We build custom SaaS applications around your business model, target users, workflows and technical requirements rather than relying on a generic software structure.',
    },
    {
      question: 'Can you build a SaaS MVP?',
      answer:
        'Yes. We can help businesses and startups turn an idea into a functional SaaS MVP with the core features required to validate the product before investing in larger-scale development.',
    },
    {
      question: 'Do you develop multi-tenant SaaS applications?',
      answer:
        'Yes. SaaS platforms can be designed with multi-tenant architecture so multiple customers can use the same application while their data and access remain properly separated.',
    },
    {
      question: 'Can you integrate subscriptions and online payments?',
      answer:
        'Yes. Depending on the project and target market, subscription plans, billing workflows and payment gateway integrations can be included in the SaaS application.',
    },
  ],
}

const features = [
  {
    icon: Code2,
    title: 'Custom SaaS Development',
    text: 'We build SaaS products around your business model, users, workflows and product requirements instead of adapting your idea to an existing template.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Architecture',
    text: 'Build platforms where multiple businesses or customers can use the same application while keeping their data and access properly separated.',
  },
  {
    icon: Lock,
    title: 'Authentication & User Roles',
    text: 'Secure user authentication, role-based permissions and account management can be built around the needs of your SaaS product.',
  },
  {
    icon: CreditCard,
    title: 'Subscriptions & Payments',
    text: 'Create subscription-based products with plans, billing workflows and payment integrations designed around your revenue model.',
  },
  {
    icon: Gauge,
    title: 'Performance & Scalability',
    text: 'We structure your SaaS application so it can support growing users, increasing data and additional features as your product evolves.',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    text: 'From development to production deployment, we help establish a reliable cloud environment for your SaaS application.',
  },
]

const saasTypes = [
  'B2B SaaS Platforms',
  'B2C SaaS Applications',
  'Business Management Software',
  'CRM & Sales Platforms',
  'Project Management Tools',
  'Analytics Dashboards',
  'Booking & Management Platforms',
  'AI-Powered SaaS Products',
]

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function SaaSDevelopmentPage() {
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
              <ArrowRight
                size={15}
                className="rotate-180"
              />
              All Services
            </Link>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E5DE6]/15 text-[#AFC5F8]">
              <Cloud size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              SaaS Development Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl">
              Build a SaaS product{' '}
              <span className="bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
                ready to scale.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions develops custom SaaS applications for
              startups and businesses across Lahore and Pakistan —
              combining product strategy, modern technology, secure
              architecture and scalable cloud solutions.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                Build Your SaaS
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
            SaaS development built for growth.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            From product architecture to cloud deployment, we build the
            technical foundation your SaaS product needs to serve users
            reliably and grow over time.
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

      {/* TYPES OF SAAS */}

      <section className="border-y border-white/10 bg-[#0F2270]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
                What we build
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                SaaS products for different business models.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Every SaaS product has different users, workflows and
                business requirements. We design the architecture around
                what your product actually needs.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {saasTypes.map((item) => (

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

      {/* TECHNOLOGY */}






      {/* FAQ */}

      <section className="border-y border-white/10 bg-[#0F2270]">

        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              SaaS development FAQs.
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
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-[#AFC5F8] transition-transform duration-200 group-open:rotate-180"
                  />
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
              Have a SaaS idea?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s turn your idea into a SaaS product.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your product, target users and business
              goals. We&apos;ll help you define the right SaaS
              development approach.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0]"
            >
              Discuss Your SaaS Project
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}
