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

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'We understand your business, audience, message and the purpose of the design before starting the creative work.',
  },
  {
    number: '02',
    title: 'Creative Direction',
    text: 'We determine the appropriate visual direction, layout, typography and design style based on your brand.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'Our designers create the visual concepts while keeping your brand identity and communication goals in focus.',
  },
  {
    number: '04',
    title: 'Review & Refine',
    text: 'You review the designs and provide feedback so we can refine the final creative.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    text: 'Final designs are prepared in the appropriate digital or print-ready formats for your business.',
  },
]

const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function GraphicDesigningPage() {
  return (
    <main className="overflow-x-hidden bg-[#0A1930] text-white">
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
              <Palette size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Graphic Designing Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Designs that make your{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_30px_rgba(23,162,199,0.2)]"
              >
                Start Your Design Project
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
                Why graphic design matters
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Good design gets attention.
                <span className="block text-[#66d4eb]">
                  Great design builds recognition.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300 [&>p:nth-child(3)]:hidden sm:[&>p:nth-child(3)]:block">
              <p>
                Your visual identity influences how customers perceive your
                business before they read a single word. Inconsistent or
                poorly designed graphics can make even a strong business look
                unprofessional.
              </p>

              <p>
                At Ignisis Solutions, we create graphic designs that combine
                visual appeal with clear communication. Every design is
                created around your brand, audience and marketing objective.
              </p>

              <p>
                From social media content and digital advertisements to
                brochures, presentations and business materials, we help
                businesses maintain a professional visual presence across
                every platform.
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

      {/* DESIGN TYPES */}
      <section className="border-y border-white/10 bg-[#08182e]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                What we design
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Creative solutions for digital and print.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Whether you need graphics for social media, marketing
                campaigns, business communication or print, we create designs
                suited to the platform and purpose.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {designTypes.map((item) => (
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

      {/* DIGITAL VS PRINT */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
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
                  <Check size={16} className="text-[#17A2C7]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
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
                  <Check size={16} className="text-[#17A2C7]" />
                  {item}
                </div>
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
              Graphic design FAQs.
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
              href="/services/branding"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Branding Services →
            </Link>

            <Link
              href="/services/social-media-management"
              className="text-sm font-medium text-slate-300 hover:text-[#66d4eb]"
            >
              Social Media Management →
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
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb]"
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