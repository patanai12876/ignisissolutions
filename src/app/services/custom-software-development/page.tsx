import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Gauge,
  Layers3,
  Lock,
  Settings2,
  ShieldCheck,
  Workflow,
  Users,
  Zap,
} from 'lucide-react'

export const metadata = {
  title:
    'Custom Software Development Company in Lahore | Ignisis Solutions',
  description:
    'Ignisis Solutions provides custom software development services in Lahore and Pakistan. We build scalable business software, internal tools, dashboards, web applications and custom solutions around your workflow.',
  keywords: [
    'custom software development',
    'custom software development company in Lahore',
    'custom software development Pakistan',
    'software development company Lahore',
    'business software development',
    'custom business software',
    'software development services Lahore',
    'custom web application development',
    'internal business software',
    'enterprise software development Pakistan',
    'custom software solutions',
    'business application development',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical:
      'https://ignisissolutions.com/services/custom-software-development',
  },
  openGraph: {
    title:
      'Custom Software Development Company in Lahore | Ignisis Solutions',
    description:
      'Custom business software, web applications, dashboards and internal tools built around your workflows and business requirements.',
    url:
      'https://ignisissolutions.com/services/custom-software-development',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Custom Software Development Company in Lahore | Ignisis Solutions',
    description:
      'Custom software solutions built around your business processes, workflows and long-term goals.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Software Development',
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
    'Custom software development services including business applications, internal tools, dashboards, workflow systems, database-driven applications and custom web software.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom Software Development Services',
    itemListElement: [
      'Custom Business Software',
      'Internal Business Tools',
      'Custom Web Applications',
      'Business Dashboards',
      'Workflow Automation Software',
      'Database-Driven Applications',
      'API Development & Integrations',
      'Role-Based Business Systems',
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
      question: 'What is custom software development?',
      answer:
        'Custom software development is the process of designing and building software specifically around a business, its workflows, users and requirements instead of relying on generic off-the-shelf software.',
    },
    {
      question: 'How much does custom software development cost in Lahore?',
      answer:
        'The cost depends on the software requirements, number of users, features, integrations, database complexity and project scope. Contact Ignisis Solutions with your requirements to discuss the appropriate solution and pricing.',
    },
    {
      question: 'Why should a business use custom software?',
      answer:
        'Custom software can be useful when existing software does not properly support your workflow. A custom solution can be designed around your processes, integrations, user roles and specific business requirements.',
    },
    {
      question: 'Can you build internal business software?',
      answer:
        'Yes. We develop internal tools, dashboards, management systems and workflow-based applications designed to help businesses manage their operations more efficiently.',
    },
    {
      question: 'Can custom software integrate with existing systems?',
      answer:
        'Yes. Custom software can integrate with APIs, databases, payment systems, CRM platforms and other business tools depending on their available integration capabilities.',
    },
    {
      question: 'Do you build web-based custom software?',
      answer:
        'Yes. We build browser-based custom software and web applications that can be accessed across modern desktop, tablet and mobile devices.',
    },
  ],
}

const features = [
  {
    icon: Code2,
    title: 'Custom-Built Software',
    text: 'We build software around your actual business requirements instead of forcing your workflow into a generic platform.',
  },
  {
    icon: Workflow,
    title: 'Workflow-Based Solutions',
    text: 'Your processes, approvals and day-to-day operations are translated into software that fits how your business works.',
  },
  {
    icon: Users,
    title: 'User Roles & Permissions',
    text: 'Create different access levels for administrators, managers, employees, customers and other users.',
  },
  {
    icon: Database,
    title: 'Database-Driven Applications',
    text: 'Structured databases help your software securely store, organize and manage the information your business depends on.',
  },
  {
    icon: Zap,
    title: 'Automation & Integrations',
    text: 'Connect your software with APIs and external business systems to reduce repetitive work and improve operational efficiency.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Scalable',
    text: 'We focus on maintainable architecture, appropriate access controls and a technical foundation that can evolve with your business.',
  },
]

const softwareTypes = [
  'Business Management Systems',
  'Internal Management Tools',
  'Admin Dashboards',
  'CRM & Customer Systems',
  'Inventory Management Software',
  'Booking & Scheduling Systems',
  'Employee & HR Platforms',
  'Custom Web Applications',
]

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
]

const process = [
  {
    number: '01',
    title: 'Requirements Discovery',
    text: 'We understand your current workflow, business problems, users and the outcomes your software needs to achieve.',
  },
  {
    number: '02',
    title: 'System Planning',
    text: 'We define features, user roles, database structure, workflows and technical architecture before development begins.',
  },
  {
    number: '03',
    title: 'Design & Development',
    text: 'The interface and underlying functionality are developed together to create a practical and easy-to-use system.',
  },
  {
    number: '04',
    title: 'Testing & Refinement',
    text: 'We test workflows, permissions, responsiveness and functionality to identify and resolve issues before launch.',
  },
  {
    number: '05',
    title: 'Deployment & Support',
    text: 'Your software is deployed and prepared for ongoing improvements, maintenance and future business requirements.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function CustomSoftwareDevelopmentPage() {
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
              <Code2 size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Custom Software Development Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Software built around{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                your business.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions develops custom software and web
              applications for businesses across Lahore and Pakistan —
              turning complex workflows, manual processes and business
              requirements into practical digital solutions.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_30px_rgba(23,162,199,0.2)]"
              >
                Build Your Software
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
                Why custom software?
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Your business is unique.
                <span className="block text-[#66d4eb]">
                  Your software can be too.
                </span>
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">

              <p>
                Off-the-shelf software can be useful, but it does not
                always match the way a business actually operates.
                Teams often end up adapting their processes to fit the
                software instead of having software support their
                processes.
              </p>

              <p>
                As a custom software development company in Lahore,
                Ignisis Solutions builds business applications around
                your specific workflows, users, data and operational
                requirements.
              </p>

              <p>
                From internal management tools and dashboards to
                customer-facing web applications, we create software
                designed to solve a real business problem and remain
                flexible as your organization grows.
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
            Custom software built around your workflow.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            We combine product thinking, software engineering and
            business understanding to create applications that support
            how your organization actually works.
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

      {/* TYPES OF SOFTWARE */}

      <section className="border-y border-white/10 bg-[#08182e]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                What we build
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Software for real business operations.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Whether you need to manage customers, employees,
                inventory, bookings or internal processes, we can build
                a solution around the requirements of your organization.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {softwareTypes.map((item) => (

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

      {/* TECHNOLOGY */}

     

      {/* PROCESS */}

     
      {/* BUSINESS BENEFITS */}

      

      {/* FAQ */}

      <section className="border-y border-white/10 bg-[#08182e]">

        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Custom software FAQs.
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
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-[#66d4eb] transition-transform duration-200 group-open:rotate-180"
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
              href="/services/ecommerce-solutions"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              E-commerce Solutions →
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
              Have a software idea?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s build software that works for your business.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your workflow, business problem and what you
              want your software to achieve. We&apos;ll help you define
              the right solution.
            </p>

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

    </main>
  )
}