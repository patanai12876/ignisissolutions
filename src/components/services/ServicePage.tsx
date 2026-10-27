import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, type LucideIcon } from 'lucide-react'
import ServiceBenefits from '@/components/services/ServiceBenefits'
import { ServiceMotionProvider, ServiceReveal } from '@/components/services/ServiceMotion'

type Feature = { icon: LucideIcon; title: string; text: string }

const pageCopy = {
  branding: {
    eyebrow: 'Branding services in Lahore',
    title: 'Build a brand', accent: 'people remember.',
    description: 'Create a distinctive brand identity that communicates your value clearly and stays consistent wherever customers meet your business.',
    audience: ['Businesses launching a new brand or product', 'Teams ready to refresh an outdated identity', 'Growing companies that need consistent brand guidelines'],
    audienceIntro: 'Branding is most useful when your business needs a clearer identity, a stronger presentation or a consistent way to communicate across channels.',
    cta: 'Build a stronger brand',
  },
  'business-consultancy': {
    eyebrow: 'Business consultancy in Lahore',
    title: 'Make clearer decisions', accent: 'about what comes next.',
    description: 'Get practical guidance on your digital priorities, from websites and marketing to technology choices and business growth opportunities.',
    audience: ['Founders deciding what to build next', 'Businesses unsure where digital investment should go', 'Teams needing an actionable plan across multiple channels'],
    audienceIntro: 'Consultancy helps when the opportunity is clear but the next steps, priorities or technology choices are not.',
    cta: 'Talk through your goals',
  },
  'custom-software-development': {
    eyebrow: 'Custom software development in Lahore',
    title: 'Software shaped', accent: 'around your workflow.',
    description: 'Turn complex processes and specific business requirements into practical software, internal tools and web applications built for your team.',
    audience: ['Teams relying on repetitive manual processes', 'Businesses whose off-the-shelf tools no longer fit', 'Organizations needing connected dashboards or custom workflows'],
    audienceIntro: 'Custom software is a strong fit when existing tools create friction or your processes need a solution designed around them.',
    cta: 'Discuss your software idea',
  },
  'digital-business-growth': {
    eyebrow: 'Digital business growth services',
    title: 'Connect your digital work', accent: 'to business growth.',
    description: 'Bring customer acquisition, website experience and performance insight together in a focused plan for your next stage of growth.',
    audience: ['Businesses ready to improve online performance', 'Teams with disconnected marketing and website activity', 'Companies looking for clearer customer acquisition priorities'],
    audienceIntro: 'A connected growth approach helps when your business is active online but needs a clearer direction and stronger alignment between channels.',
    cta: 'Plan your next stage',
  },
  'digital-marketing': {
    eyebrow: 'Digital marketing agency in Lahore',
    title: 'Reach the right people', accent: 'and earn their attention.',
    description: 'Connect SEO, paid campaigns and social marketing to reach relevant audiences and create clearer paths from discovery to enquiry.',
    audience: ['Businesses looking to strengthen online visibility', 'Teams needing coordinated SEO and paid campaigns', 'Companies ready to build a more consistent source of enquiries'],
    audienceIntro: 'Digital marketing is most effective when your business knows who it needs to reach and is ready to give that audience a useful next step.',
    cta: 'Grow your business',
  },
  'ecommerce-solutions': {
    eyebrow: 'E-commerce development in Lahore',
    title: 'Make online shopping', accent: 'easier for your customers.',
    description: 'Build an online store that presents your products clearly, works smoothly across devices and supports a simpler path to purchase.',
    audience: ['Retailers moving products online', 'Brands needing a better shopping experience', 'Businesses planning a new store or ecommerce redesign'],
    audienceIntro: 'E-commerce development suits businesses that want to sell online with a store experience shaped around their products and customers.',
    cta: 'Plan your online store',
  },
  'graphic-designing': {
    eyebrow: 'Graphic design services in Lahore',
    title: 'Make every message', accent: 'clear and memorable.',
    description: 'Use purposeful visual design to communicate your offer, support campaigns and keep your brand recognizable across digital and print.',
    audience: ['Businesses creating new campaign materials', 'Teams needing consistent social media graphics', 'Organizations preparing brochures, presentations or print collateral'],
    audienceIntro: 'Graphic design helps when your business has something important to communicate and needs visuals that make it easier to understand.',
    cta: 'Discuss your design needs',
  },
  'saas-development': {
    eyebrow: 'SaaS development company in Lahore',
    title: 'Turn your product idea', accent: 'into a SaaS platform.',
    description: 'Plan and build a SaaS product around your users, workflows and business model, with a foundation designed to evolve over time.',
    audience: ['Founders validating a software product idea', 'Businesses turning an internal tool into a platform', 'Teams preparing to modernize or extend an existing SaaS product'],
    audienceIntro: 'SaaS development is for teams with a product need, a defined audience or a platform that is ready for its next iteration.',
    cta: 'Discuss your SaaS idea',
  },
  'social-media-management': {
    eyebrow: 'Social media management in Lahore',
    title: 'Build a social presence', accent: 'people want to follow.',
    description: 'Plan, create and manage social content that reflects your brand, supports your business goals and helps you stay connected to your audience.',
    audience: ['Businesses that need a more consistent social presence', 'Teams short on time for planning and publishing content', 'Brands looking to improve audience engagement and community care'],
    audienceIntro: 'Social media management is a fit for businesses that want a more purposeful, consistent presence without treating every platform the same.',
    cta: 'Plan your social strategy',
  },
  'web-development': {
    eyebrow: 'Web development company in Lahore',
    title: 'Build a website', accent: 'ready for what is next.',
    description: 'Create a fast, responsive website that explains your value, helps visitors find what they need and supports your business goals.',
    audience: ['Businesses launching their first professional website', 'Companies ready to improve an outdated website', 'Teams needing a custom website or web application'],
    audienceIntro: 'Web development is for businesses that need a stronger digital foundation, a more useful customer experience or custom functionality.',
    cta: 'Start your website project',
  },
} satisfies Record<string, {
  eyebrow: string
  title: string
  accent: string
  description: string
  audience: string[]
  audienceIntro: string
  cta: string
}>

export default function ServicePage({ service, features }: { service: keyof typeof pageCopy; features: Feature[] }) {
  const copy = pageCopy[service]
  const HeroIcon = features[0]?.icon

  return (
    <ServiceMotionProvider>
      <main className="service-detail-page service-page-redesign overflow-x-hidden bg-white text-[#071039]">
        <section className="service-page-hero relative overflow-hidden bg-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(7,16,57,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,16,57,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(90deg,transparent,#000_22%,#000_85%,transparent)]" />
            <div className="absolute right-[10%] top-8 h-[28rem] w-[28rem] rounded-full bg-[#2E5DE6]/[0.08] blur-[120px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 lg:pb-24 lg:pt-16">
            <ServiceReveal onLoad>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A3BB0] transition hover:text-[#2E5DE6]">
                <ArrowRight size={15} className="rotate-180" /> All Services
              </Link>
              <p className="service-page-eyebrow mt-7 text-xs font-extrabold uppercase tracking-[0.17em] text-[#1A3BB0]">{copy.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#071039] sm:text-5xl lg:text-[3.8rem]">
                {copy.title} <span className="text-[#2E5DE6]">{copy.accent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52617f] sm:text-lg">{copy.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#2E5DE6] px-7 text-sm font-bold text-white shadow-[0_9px_22px_rgba(46,93,230,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_13px_28px_rgba(46,93,230,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E5DE6]">
                  {copy.cta} <ArrowRight size={17} />
                </Link>
                <Link href="/portfolio" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#d5dbea] bg-white px-7 text-sm font-bold text-[#071039] transition hover:border-[#afc5f8] hover:bg-[#f7f9ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E5DE6]">
                  View Our Work <ArrowUpRight size={16} />
                </Link>
              </div>
            </ServiceReveal>

            <ServiceReveal onLoad delay={0.12}>
              <div className="service-hero-visual relative mx-auto w-full max-w-[540px] overflow-hidden rounded-[28px] border border-[#dfe6f3] bg-[linear-gradient(145deg,#fff,#f4f7ff)] p-6 shadow-[0_22px_65px_rgba(7,16,57,0.09)] sm:p-8">
                <div aria-hidden="true" className="service-hero-orbit absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#2E5DE6]/15 shadow-[0_0_0_30px_rgba(46,93,230,0.025),0_0_0_62px_rgba(46,93,230,0.02)]" />
                <div className="relative flex min-h-[300px] flex-col justify-between sm:min-h-[340px]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">A connected approach</span>
                    <span className="rounded-full border border-[#dfe6f3] bg-white px-3 py-1.5 text-[10px] font-bold text-[#61708f]">IGNISIS / {String(service).replaceAll('-', ' ').toUpperCase()}</span>
                  </div>
                  <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-[#2E5DE6]/20 bg-white shadow-[0_0_0_14px_rgba(46,93,230,0.04),0_14px_40px_rgba(7,16,57,0.08)] sm:h-40 sm:w-40">
                    <div aria-hidden="true" className="absolute inset-3 rounded-full border border-dashed border-[#6E92F2]/40" />
                    {HeroIcon && <HeroIcon size={42} strokeWidth={1.6} className="relative text-[#2E5DE6]" aria-hidden="true" />}
                    <span className="absolute -right-1 top-8 h-2.5 w-2.5 rounded-full bg-[#6E92F2] shadow-[0_0_0_6px_rgba(110,146,242,0.13)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#071039]">Focused on what your business needs.</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {features.slice(0, 3).map((feature, index) => (
                        <div key={feature.title} className="rounded-xl border border-[#e1e7f2] bg-white/90 px-3 py-3">
                          <span className="block text-[10px] font-extrabold text-[#2E5DE6]">0{index + 1}</span>
                          <span className="mt-1 block text-[11px] font-semibold leading-snug text-[#33446c]">{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ServiceReveal>
          </div>
        </section>

        <section className="service-provide-section border-y border-[#e5eaf3] bg-[#f7f9ff]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
            <ServiceReveal className="mx-auto max-w-3xl text-center">
              <p className="service-eyebrow text-xs font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">What we provide</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#071039] sm:text-5xl">The right expertise, built around your needs.</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#52617f]">Explore the practical capabilities we bring together to support your business and its next step.</p>
            </ServiceReveal>
            <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }, index) => (
                <ServiceReveal key={title} delay={index * 0.06}>
                  <article className="service-feature-card group h-full min-h-[220px] rounded-2xl border border-[#e0e6f2] bg-white p-6 shadow-[0_8px_24px_rgba(7,16,57,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#afc5f8] hover:shadow-[0_16px_34px_rgba(7,16,57,0.085)] sm:p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf0ff] text-[#2E5DE6] transition group-hover:bg-[#2E5DE6] group-hover:text-white"><Icon size={21} /></span>
                    <h3 className="mt-6 text-lg font-bold text-[#071039]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#52617f]">{text}</p>
                  </article>
                </ServiceReveal>
              ))}
            </div>
          </div>
        </section>

        <ServiceBenefits service={service} />

        <section className="service-audience-section bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:py-24">
            <ServiceReveal>
              <p className="service-eyebrow text-xs font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">Who this service is for</p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#071039] sm:text-5xl">A good fit for businesses ready to move forward.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-[#52617f]">{copy.audienceIntro}</p>
            </ServiceReveal>
            <div className="grid gap-3">
              {copy.audience.map((item, index) => (
                <ServiceReveal key={item} delay={index * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-[#e0e6f2] bg-[#f7f9ff] p-5 transition hover:border-[#afc5f8] hover:bg-white sm:p-6">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2E5DE6] text-white"><Check size={16} strokeWidth={2.5} /></span>
                    <span className="text-base font-semibold leading-relaxed text-[#14234f]">{item}</span>
                  </div>
                </ServiceReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="service-final-cta bg-[#f7f9ff] px-6 pb-16 pt-2 sm:pb-20">
          <ServiceReveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#1A3BB0] px-6 py-12 text-center shadow-[0_24px_60px_rgba(26,59,176,0.18)] sm:px-12 sm:py-16">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-48 h-[410px] w-[410px] rounded-full border border-white/15 shadow-[0_0_0_42px_rgba(255,255,255,0.035),0_0_0_88px_rgba(255,255,255,0.025)]" />
              <div className="relative mx-auto max-w-3xl">
                <p className="service-eyebrow text-xs font-extrabold uppercase tracking-[0.16em] text-[#dbe6ff]">Ready to take the next step?</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Let&apos;s make this service work for your business.</h2>
                <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#e6edfd]">Tell us what you are working towards. We&apos;ll help you find a practical starting point for {String(service).replaceAll('-', ' ')}.</p>
                <Link href="/contact" className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#2E5DE6] px-7 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#123cbb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Discuss Your Project <ArrowRight size={17} /></Link>
              </div>
            </div>
          </ServiceReveal>
        </section>
      </main>
    </ServiceMotionProvider>
  )
}
