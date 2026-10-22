import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Palette,
  Layers3,
  Image,
  FileText,
  Presentation,
  Megaphone,
  Sparkles,
  PenTool,
  Monitor,
  Printer,
} from 'lucide-react'

export const metadata = {
  title:
    'Graphic Designing Services in Lahore | Creative Design Agency – Ignisis Solutions',

  description:
    'Ignisis Solutions provides professional graphic designing services in Lahore, Pakistan, including social media designs, marketing creatives, brochures, banners, presentations, packaging and branded visual content.',

  keywords: [
    'graphic designing services',
    'graphic design company in Lahore',
    'graphic designing agency Lahore',
    'graphic designer Lahore',
    'graphic design services Pakistan',
    'professional graphic design Lahore',
    'social media graphic design',
    'marketing graphic design',
    'brochure design Lahore',
    'banner design Lahore',
    'presentation design services',
    'branding and graphic design',
    'creative design agency Lahore',
    'Ignisis Solutions',
  ],

  alternates: {
    canonical: 'https://ignisissolutions.com/services/graphic-designing',
  },

  openGraph: {
    title: 'Graphic Designing Services in Lahore | Ignisis Solutions',
    description:
      'Professional graphic design services for social media, marketing, print and digital platforms. Creative, consistent and designed around your brand.',
    url: 'https://ignisissolutions.com/services/graphic-designing',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Graphic Designing Services in Lahore | Ignisis Solutions',
    description:
      'Creative and professional graphic design services for businesses across Lahore and Pakistan.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Graphic Designing',
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
    'Professional graphic designing services including social media graphics, marketing creatives, brochures, banners, presentations, packaging and branded visual content.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Graphic Designing Services',
    itemListElement: [
      'Social Media Graphics',
      'Marketing Creatives',
      'Brochure Design',
      'Banner Design',
      'Presentation Design',
      'Print Design',
      'Packaging Design',
      'Digital Advertising Creatives',
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
      question: 'What graphic designing services do you offer?',
      answer:
        'We provide social media graphics, advertising creatives, brochures, banners, presentations, print materials, packaging designs and other branded visual content for businesses.',
    },
    {
      question: 'Do you provide social media graphic design?',
      answer:
        'Yes. We create branded social media posts, promotional graphics, carousel designs, campaign creatives and advertising visuals for different social platforms.',
    },
    {
      question: 'Can you design marketing materials for my business?',
      answer:
        'Yes. We design marketing materials such as brochures, flyers, banners, promotional graphics, presentations and digital advertising creatives according to your brand identity.',
    },
    {
      question: 'Do you follow existing brand guidelines?',
      answer:
        'Yes. We can work with your existing brand guidelines including your logo, colors, typography and visual style to maintain consistency across all designs.',
    },
    {
      question: 'Can you create designs for both digital and print?',
      answer:
        'Yes. We create graphics for websites, social media, digital advertising and other online platforms as well as print materials such as brochures, banners, flyers and business collateral.',
    },
    {
      question: 'How much do graphic design services cost in Lahore?',
      answer:
        'Pricing depends on the type, quantity and complexity of the designs required. Contact Ignisis Solutions with your requirements to discuss the appropriate design solution and pricing.',
    },
  ],
}

const features = [
  {
    icon: Palette,
    title: 'Creative Visual Design',
    text: 'We create visually engaging designs that communicate your message clearly while maintaining a professional and consistent brand appearance.',
  },
  {
    icon: Image,
    title: 'Social Media Graphics',
    text: 'Professional social media posts, promotional graphics, carousel designs and campaign creatives designed around your brand.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Creatives',
    text: 'Attention-grabbing graphics for campaigns, advertisements, promotions and digital marketing activities.',
  },
  {
    icon: FileText,
    title: 'Business & Print Design',
    text: 'Brochures, flyers, banners, business documents and other professional materials designed for your business.',
  },
  {
    icon: Presentation,
    title: 'Presentation Design',
    text: 'Professional presentations and pitch decks that make your information easier to understand and more visually engaging.',
  },
  {
    icon: Sparkles,
    title: 'Consistent Branding',
    text: 'Every design follows your visual identity so your business looks consistent across digital and physical touchpoints.',
  },
]

const designTypes = [
  'Social Media Posts',
  'Social Media Carousels',
  'Digital Ad Creatives',
  'Brochures & Flyers',
  'Business Banners',
  'Presentation & Pitch Decks',
  'Marketing Materials',
  'Packaging Design',
  'Website Graphics',
  'Promotional Designs',
  'Business Collateral',
  'Print-Ready Designs',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function GraphicDesigningPage() {
  return (
    <main className="service-detail-page overflow-x-hidden bg-white text-[#071039]">
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
              <Palette size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Graphic Designing Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl">
              Designs that make your{' '}
              <span className="bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
                brand stand out.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions provides professional graphic designing
              services for businesses across Lahore and Pakistan — creating
              social media graphics, marketing creatives, business materials
              and branded visuals that communicate your message clearly.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                Start Your Design Project
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
            Professional graphic design for every business need.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            From individual creative assets to ongoing design support, we
            create visuals that keep your business looking consistent and
            professional.
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



      {/* DIGITAL VS PRINT */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
            Designed for your platform
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            One brand. Consistent everywhere.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            Your customers interact with your business across multiple
            platforms. Your visual identity should feel recognizable wherever
            they see you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E5DE6]/15 text-[#AFC5F8]">
              <Monitor size={22} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Digital Graphics
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Social media posts, digital advertisements, website graphics,
              promotional creatives and campaign visuals designed for online
              platforms.
            </p>

            <div className="mt-6 space-y-3">
              {[
                'Social media content',
                'Digital advertising creatives',
                'Website graphics',
                'Marketing campaigns',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <Check size={16} className="text-[#2E5DE6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E5DE6]/15 text-[#AFC5F8]">
              <Printer size={22} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Print & Business Materials
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Professional print-ready designs for brochures, flyers, banners,
              business materials, packaging and other physical marketing
              assets.
            </p>

            <div className="mt-6 space-y-3">
              {[
                'Brochures and flyers',
                'Business banners',
                'Packaging materials',
                'Print-ready artwork',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <Check size={16} className="text-[#2E5DE6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#0F2270]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Graphic design FAQs.
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
              Need professional designs?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s create visuals your customers remember.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your business, your brand and the designs you
              need. We&apos;ll help you create a consistent visual presence
              across your digital and print platforms.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0]"
            >
              Discuss Your Design Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
