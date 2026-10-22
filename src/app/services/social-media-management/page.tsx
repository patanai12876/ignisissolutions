import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CalendarDays,
  MessageCircle,
  BarChart3,
  Palette,
  Target,
  TrendingUp,
  Users,
  Megaphone,
} from 'lucide-react'

export const metadata = {
  title: 'Social Media Management in Lahore | Social Media Marketing – Ignisis Solutions',
  description:
    'Ignisis Solutions provides professional social media management and social media marketing services in Lahore, Pakistan. We create content, manage social platforms, engage audiences and build strategies that support business growth.',
  keywords: [
    'social media management',
    'social media management Lahore',
    'social media marketing Lahore',
    'social media marketing services Pakistan',
    'social media agency Lahore',
    'social media management services',
    'Instagram management Lahore',
    'Facebook marketing Lahore',
    'social media content creation',
    'social media strategy',
    'social media advertising',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/social-media-management',
  },
  openGraph: {
    title: 'Social Media Management Services in Lahore | Ignisis Solutions',
    description:
      'Professional social media management, content strategy, audience engagement and social media marketing for businesses in Lahore and across Pakistan.',
    url: 'https://ignisissolutions.com/services/social-media-management',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Services in Lahore | Ignisis Solutions',
    description:
      'Strategic social media management and content marketing designed to build your online presence and support business growth.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Social Media Management',
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
    'Professional social media management services including social media strategy, content creation, publishing, audience engagement, analytics and social media advertising.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Management Services',
    itemListElement: [
      'Social Media Strategy',
      'Content Planning',
      'Social Media Content Creation',
      'Instagram Management',
      'Facebook Management',
      'Community Management',
      'Social Media Advertising',
      'Analytics and Reporting',
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
      question: 'What does social media management include?',
      answer:
        'Social media management can include social media strategy, content planning, post and creative development, scheduling, publishing, audience engagement, community management, analytics and ongoing optimization.',
    },
    {
      question: 'Which social media platforms do you manage?',
      answer:
        'Depending on your business and target audience, we can manage platforms such as Instagram, Facebook, LinkedIn and other relevant social media channels.',
    },
    {
      question: 'Do you create social media content?',
      answer:
        'Yes. We can plan and create social media posts, captions, promotional creatives and other content based on your brand identity, audience and marketing goals.',
    },
    {
      question: 'Can you manage Instagram and Facebook pages?',
      answer:
        'Yes. We provide Instagram and Facebook management including content planning, publishing, engagement, performance monitoring and campaign support.',
    },
    {
      question: 'Do you provide social media advertising?',
      answer:
        'Yes. Social media advertising can be included as part of a broader social media marketing strategy, including campaign setup, audience targeting, creative direction and performance optimization.',
    },
    {
      question: 'How often should a business post on social media?',
      answer:
        'Posting frequency depends on the platform, industry, audience and available content. We develop a practical content schedule based on your business goals rather than posting simply for the sake of frequency.',
    },
  ],
}

const features = [
  {
    icon: Target,
    title: 'Social Media Strategy',
    text: 'We develop a clear social media strategy based on your business goals, audience, industry and the platforms where your customers spend time.',
  },
  {
    icon: CalendarDays,
    title: 'Content Planning',
    text: 'A structured content calendar keeps your social media presence consistent, organized and aligned with campaigns, offers and business priorities.',
  },
  {
    icon: Palette,
    title: 'Content Creation',
    text: 'We create branded social media content including posts, promotional creatives, captions and campaign-focused visuals.',
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    text: 'We help manage comments, messages and audience interactions so your business can maintain a responsive and professional online presence.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Advertising',
    text: 'Paid social campaigns can help reach targeted audiences, generate leads and promote specific products, services or offers.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    text: 'We monitor important performance indicators and use insights to improve content, campaigns and your overall social media strategy.',
  },
]

const platforms = [
  {
    icon: MessageCircle,
    title: 'Instagram',
    text: 'Content, Reels, Stories, engagement and promotional campaigns.',
  },
  {
    icon: Users,
    title: 'Facebook',
    text: 'Business page management, content publishing and audience engagement.',
  },
  {
    icon: TrendingUp,
    title: 'LinkedIn',
    text: 'Professional content and brand positioning for B2B businesses.',
  },
  {
    icon: Megaphone,
    title: 'Paid Social',
    text: 'Targeted advertising campaigns designed around specific business objectives.',
  },
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function SocialMediaManagementPage() {
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
          <div className="absolute right-[-5rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#6E92F2]/10 blur-[140px]" />

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
              <MessageCircle size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Social Media Management Services in Lahore
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl">
              Social media that{' '}
              <span className="bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
                builds your brand.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Ignisis Solutions provides professional social media management
              and social media marketing services for businesses in Lahore
              and across Pakistan. We plan, create, publish and optimize
              content around your business goals — not just likes and followers.
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:justify-center [&>a]:whitespace-nowrap [&>a]:px-2 [&>a]:text-xs sm:[&>a]:flex-none sm:[&>a]:px-6 sm:[&>a]:text-base">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                Grow Your Social Presence
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
            Complete social media management.
          </h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            From strategy and content planning to publishing, engagement and
            reporting, we manage the key parts of your social media presence.
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

      {/* PLATFORMS */}
      <section className="border-y border-white/10 bg-[#0F2270]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
                Platforms & channels
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Meet your audience where they are.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-400">
                Not every business needs to be everywhere. We help identify
                the platforms that make sense for your audience and business,
                then build a consistent strategy around them.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {platforms.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-[#071039] p-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E5DE6]/15 text-[#AFC5F8]">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Content strategy
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Content with a purpose.
            </h2>

            <p className="mt-6 leading-relaxed text-slate-400">
              Good social media content should do more than fill a content
              calendar. We create content around different stages of the
              customer journey — from building awareness and trust to
              promoting products and generating enquiries.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              'Educational content',
              'Brand awareness posts',
              'Product & service promotions',
              'Customer-focused content',
              'Engagement content',
              'Seasonal campaigns',
              'Reels & short-form content',
              'Lead generation campaigns',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
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
      </section>


      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#0F2270]">

        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Social media management FAQs.
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
              Ready to improve your social presence?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
              Let&apos;s build a social media strategy that works.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
              Tell us about your business, audience and goals. We&apos;ll
              help you determine the right social media strategy for your
              brand.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0]"
            >
              Discuss Your Social Media
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  )
}
