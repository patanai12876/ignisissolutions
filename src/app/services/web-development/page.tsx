import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export const metadata = {
  title: 'Web Development Company in Lahore | Custom Websites – Ignisis Solutions',
  description:
    'Ignisis Solutions is a web development company in Lahore, Pakistan, building fast, responsive and SEO-friendly websites and web apps with Next.js, React and TypeScript. Get a custom website that converts visitors into customers.',
  keywords: [
    'web development services',
    'web development company in Lahore',
    'website development Lahore',
    'custom website development Pakistan',
    'Next.js development company',
    'React development services',
    'SEO friendly website design',
    'responsive web development',
    'business website development Lahore',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/web-development',
  },
  openGraph: {
    title: 'Web Development Services in Lahore | Ignisis Solutions',
    description:
      'Custom, fast and SEO-friendly websites and web applications built around your business goals. Serving businesses across Lahore and Pakistan.',
    url: 'https://ignisissolutions.com/services/web-development',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services in Lahore | Ignisis Solutions',
    description:
      'Custom, fast and SEO-friendly websites and web applications built around your business goals.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'Organization',
    name: 'Ignisis Solutions',
    url: 'https://ignisissolutions.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Lahore',
  },
  description:
    'Custom web development services including business websites, web applications, and SaaS platforms built with Next.js, React and TypeScript.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      'Business Websites',
      'Corporate Websites',
      'Landing Pages',
      'Portfolio Websites',
      'Web Applications',
      'E-commerce Websites',
      'SaaS Platforms',
      'Website Redesigns',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      question: 'How much does a website cost in Lahore?',
      answer:
        'Website development costs depend on the number of pages, features, integrations and overall project requirements. Contact us with your requirements and we can discuss the right solution and pricing for your business.',
    },
    {
      question: 'Do you build SEO-friendly websites?',
      answer:
        'Yes. Every website we build is developed on an SEO-friendly technical foundation, including semantic HTML, structured metadata, responsive design, clean URL structures and fast page performance.',
    },
    {
      question: 'Do you develop websites for mobile devices?',
      answer:
        'Yes. Every website is developed with fully responsive layouts so it works properly across mobile phones, tablets and desktop screens.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Yes. We redesign existing websites to improve visual design, responsiveness, performance, user experience and technical SEO foundation.',
    },
    {
      question: 'Which technologies do you use for web development?',
      answer:
        'Depending on the project, we use modern technologies such as Next.js, React, TypeScript, Tailwind CSS, Node.js and PostgreSQL to build fast, scalable websites.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'Timelines vary by project scope. A simple business website typically takes a few weeks, while larger web applications and SaaS platforms take longer. We share a clear timeline after the planning stage.',
    },
  ],
}

const features = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    text: 'We build websites around your business goals and audience instead of forcing your brand into a pre-made template.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    text: 'Every website is designed and developed to work smoothly across desktops, tablets and mobile devices.',
  },
  {
    icon: Search,
    title: 'SEO-Friendly Development',
    text: 'We build with clean semantic HTML, proper metadata, structured content and a strong technical SEO foundation.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    text: 'Optimized assets, efficient code and modern development practices keep your pages loading quickly.',
  },
  {
    icon: Gauge,
    title: 'Scalable Architecture',
    text: 'Our websites are structured so they can grow with your business and support future features.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    text: 'We follow modern development practices to create stable, maintainable and reliable digital experiences.',
  },
]

const technologies = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']

const process = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We learn about your business, audience, goals and the purpose of your website before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Planning',
    text: 'We map out the website structure, pages, features and technical direction so the project has a clear foundation.',
  },
  {
    number: '03',
    title: 'Design & Development',
    text: 'Your website is designed and built with responsive layouts, clean code and performance in mind from day one.',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    text: 'We test across devices and browsers, then refine usability, performance and technical SEO details.',
  },
  {
    number: '05',
    title: 'Launch',
    text: 'Your website goes live, ready for ongoing updates, SEO growth and future improvements.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({ question: item.question, answer: item.answer }))

export default function WebDevelopmentPage() {
  return (
    <main className="overflow-x-hidden bg-[#0A1930] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <Code2 size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Web Development Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Websites built for{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                business growth.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions designs and develops custom, responsive and
              SEO-friendly websites for businesses across Lahore and
              Pakistan — combining strong design, clean code and a clear
              path from visitor to customer.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_30px_rgba(23,162,199,0.2)]"
              >
                Start Your Project
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
                Why your website matters
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                More than a website.
                <span className="block text-[#66d4eb]">A digital asset.</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">
              <p>
                Your website is often the first interaction a potential
                customer has with your business. A slow, outdated or
                confusing website can cost you opportunities before a
                conversation even starts.
              </p>

              <p>
                As a web development company in Lahore, we combine design,
                development, performance and SEO fundamentals to build
                websites that are visually strong and built to support your
                business goals — not just online, but working for you.
              </p>

              <p>
                Whether you need a new business website, a high-converting
                landing page, a web application or a complete redesign, we
                build the solution around your audience and requirements.
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
            Web development built around your needs.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            From the first wireframe to final deployment, every part of your
            website is planned with usability, performance and growth in
            mind.
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

      {/* TYPES OF WEBSITES */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                What we build
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Websites for different stages of business.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Your requirements determine the technology, structure and
                features we use. We don&apos;t believe every business needs
                the same type of website.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Business Websites',
                'Corporate Websites',
                'Landing Pages',
                'Portfolio Websites',
                'Web Applications',
                'E-commerce Websites',
                'SaaS Platforms',
                'Website Redesigns',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0A1930] p-4"
                >
                  <Check size={17} className="shrink-0 text-[#17A2C7]" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      

      {/* PROCESS */}
      
      {/* SEO / BUSINESS BENEFITS */}
      
      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Web development FAQs.
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
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{answer}</p>
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
            <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]">
              All Services →
            </Link>
            <Link href="/services/saas-development" className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]">
              SaaS Development →
            </Link>
            <Link href="/services/custom-software-development" className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]">
              Custom Software Development →
            </Link>
            <Link href="/services/ecommerce-solutions" className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]">
              E-commerce Solutions →
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]">
              Our Portfolio →
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]">
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
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s build your next website.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your business, your goals and what you need.
              We&apos;ll help you figure out the right web development
              solution.
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