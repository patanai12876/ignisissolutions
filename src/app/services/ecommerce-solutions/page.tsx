import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  ShoppingCart,
  Smartphone,
  CreditCard,
  Search,
  BarChart3,
  Package,
  ShieldCheck,
  Zap,
  Users,
} from 'lucide-react'

export const metadata = {
  title: 'E-commerce Development Services in Lahore | Ignisis Solutions',
  description:
    'Ignisis Solutions provides e-commerce development services in Lahore and Pakistan, building fast, responsive and conversion-focused online stores with secure checkout, payment integration, product management and scalable architecture.',
  keywords: [
    'e-commerce development services',
    'e-commerce development company Lahore',
    'ecommerce website development Lahore',
    'e-commerce website development Pakistan',
    'online store development Lahore',
    'custom ecommerce development',
    'ecommerce solutions Pakistan',
    'ecommerce website design',
    'online store development services',
    'ecommerce development company Pakistan',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/ecommerce-solutions',
  },
  openGraph: {
    title: 'E-commerce Development Services in Lahore | Ignisis Solutions',
    description:
      'Custom, responsive and conversion-focused e-commerce websites built to help businesses sell online and scale.',
    url: 'https://ignisissolutions.com/services/ecommerce-solutions',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Development Services in Lahore | Ignisis Solutions',
    description:
      'Build a fast, responsive and conversion-focused online store with Ignisis Solutions.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-commerce Development',
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
    'E-commerce development services including online store development, product catalogs, shopping carts, checkout systems, payment integration, inventory-ready architecture and conversion optimization.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'E-commerce Development Services',
    itemListElement: [
      'Custom E-commerce Websites',
      'Online Store Development',
      'Product Catalog Development',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Inventory-Ready Architecture',
      'E-commerce SEO',
      'Conversion Optimization',
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
      question: 'How much does an e-commerce website cost in Lahore?',
      answer:
        'E-commerce website costs depend on the number of products, design requirements, payment integrations, features and overall project scope. Contact Ignisis Solutions with your requirements to discuss the right solution and pricing.',
    },
    {
      question: 'Do you build custom e-commerce websites?',
      answer:
        'Yes. We build custom e-commerce websites around your products, customers, business workflow and growth requirements instead of relying on a one-size-fits-all approach.',
    },
    {
      question: 'Can you integrate payment gateways into an online store?',
      answer:
        'Yes. Depending on your requirements and available payment provider, we can integrate appropriate online payment solutions into your e-commerce website.',
    },
    {
      question: 'Are your e-commerce websites mobile-friendly?',
      answer:
        'Yes. E-commerce websites are developed with responsive layouts so customers can browse products, add items to their cart and complete purchases across mobile, tablet and desktop devices.',
    },
    {
      question: 'Can you build an e-commerce website for businesses in Pakistan?',
      answer:
        'Yes. Ignisis Solutions provides e-commerce development services for businesses in Lahore and across Pakistan, with solutions tailored to local and international selling requirements.',
    },
    {
      question: 'Can you optimize an existing online store?',
      answer:
        'Yes. We can improve an existing e-commerce website by addressing design, performance, mobile experience, navigation, product pages, conversion opportunities and technical SEO.',
    },
  ],
}

const features = [
  {
    icon: ShoppingCart,
    title: 'Custom Online Stores',
    text: 'We build e-commerce websites around your products, customers and business model instead of forcing your store into a generic design.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    text: 'Your customers can browse products, manage their cart and move through checkout smoothly on phones, tablets and desktops.',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    text: 'We structure secure checkout experiences and integrate suitable payment solutions based on your business requirements.',
  },
  {
    icon: Package,
    title: 'Product & Catalog Structure',
    text: 'Organized product catalogs, categories, variations and product information make it easier for customers to find what they need.',
  },
  {
    icon: Search,
    title: 'E-commerce SEO',
    text: 'We build a strong technical foundation with clean URLs, structured content, metadata and search-friendly product pages.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Conversion Tracking',
    text: 'Track important customer actions and understand how visitors interact with your store so you can make better decisions.',
  },
]

const ecommerceSolutions = [
  'Custom online stores',
  'Product catalog development',
  'Product categories and filters',
  'Shopping cart functionality',
  'Checkout systems',
  'Payment gateway integration',
  'Order management architecture',
  'Inventory-ready structure',
  'Customer accounts',
  'E-commerce analytics',
  'Technical SEO foundation',
  'Conversion optimization',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function EcommerceSolutionsPage() {
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
              <Globe2 size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              E-commerce Development Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl">
              Build an online store designed to{' '}
              <span className="bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
                sell and scale.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions develops fast, responsive and conversion-focused
              e-commerce websites that make it easier for customers to discover
              your products, shop online and complete their purchases.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                Start Your Store
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
            E-commerce development built around your business.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            From product discovery to checkout, every part of your online store
            is planned to create a clear and convenient customer experience.
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

      {/* SOLUTIONS */}
      <section className="border-y border-white/10 bg-[#0F2270]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
                What we build
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Everything your store needs to sell online.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Your e-commerce requirements determine the structure, features
                and integrations we build. We create solutions that can evolve
                as your product catalog and customer base grow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ecommerceSolutions.map((item) => (
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

      {/* SHOPPING EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Built around your customer
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Make shopping simple from product discovery to checkout.
            </h2>

            <p className="mt-6 leading-relaxed text-slate-400">
              A good online store removes unnecessary friction. Customers
              should be able to discover products, compare options, understand
              the value and complete their purchase through a clear and
              trustworthy journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Search,
                title: 'Discover',
                text: 'Clear categories, navigation and search help customers find products quickly.',
              },
              {
                icon: Users,
                title: 'Explore',
                text: 'Product pages provide useful information to help customers make confident decisions.',
              },
              {
                icon: ShoppingCart,
                title: 'Add to Cart',
                text: 'A simple cart experience makes it easy to review products before checkout.',
              },
              {
                icon: CreditCard,
                title: 'Checkout',
                text: 'A streamlined checkout reduces unnecessary steps and makes purchasing easier.',
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
              E-commerce development FAQs.
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
              Ready to sell online?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Build an e-commerce store your customers want to use.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your products, customers and business goals.
              We&apos;ll help you plan the right e-commerce solution.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0]"
            >
              Discuss Your Store
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
