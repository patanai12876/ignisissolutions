'use client'

import { ArrowUpRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const content: Record<string, { title: string; intro: string; benefits: Array<{ title: string; text: string }> }> = {
  branding: {
    title: 'A brand customers can recognize and trust.',
    intro: 'A clear, consistent identity helps people understand what your business stands for and gives your team a dependable foundation for every customer touchpoint.',
    benefits: [
      { title: 'Be easier to remember', text: 'A distinctive identity helps your business stand apart and stay recognizable across your website, campaigns and materials.' },
      { title: 'Build customer confidence', text: 'A consistent, considered presentation helps customers see your business as credible and professional.' },
      { title: 'Keep every touchpoint aligned', text: 'Practical brand guidelines make it easier to create consistent communications as your business grows.' },
    ],
  },
  'business-consultancy': {
    title: 'Make your next business decisions with clarity.',
    intro: 'Get a clearer view of where to focus, which opportunities fit your goals and what practical steps can move your digital presence forward.',
    benefits: [
      { title: 'Prioritize the right opportunities', text: 'Understand which improvements deserve attention first, based on your objectives and current position.' },
      { title: 'Use resources intentionally', text: 'A focused plan connects your time and investment to work that supports your goals.' },
      { title: 'Move forward with a clear plan', text: 'Turn recommendations into practical next steps across your website, marketing, brand and technology.' },
    ],
  },
  'custom-software-development': {
    title: 'Make everyday work fit the way your business operates.',
    intro: 'Purpose-built software can bring important workflows together, reduce avoidable manual steps and give your team a system shaped around its needs.',
    benefits: [
      { title: 'A better fit for your workflows', text: 'Build around the processes your team actually uses instead of adapting to a one-size-fits-all tool.' },
      { title: 'Less repetitive work', text: 'Connect information and automate suitable tasks to reduce manual handoffs.' },
      { title: 'Room to adapt and grow', text: 'A maintainable solution can evolve with new requirements, users and business priorities.' },
    ],
  },
  'digital-business-growth': {
    title: 'Turn digital activity into a connected growth plan.',
    intro: 'Align customer acquisition, website experience and performance insight so your next growth decisions have a clear purpose.',
    benefits: [
      { title: 'Focus on the right audience', text: 'Connect your offer with people most likely to need it through purposeful channel and customer planning.' },
      { title: 'Improve the customer journey', text: 'Find friction between discovery and action, then make the digital experience easier to use.' },
      { title: 'Make informed improvements', text: 'Use relevant performance indicators to guide decisions and refine your approach.' },
    ],
  },
  'digital-marketing': {
    title: 'Reach the right people and guide them towards action.',
    intro: 'A joined-up marketing approach connects visibility, audience relevance and conversion opportunities across the channels your customers use.',
    benefits: [
      { title: 'Build relevant visibility', text: 'Help more of the right people discover your business through search, social and paid campaigns.' },
      { title: 'Create a clearer path to enquiry', text: 'Connect campaign messages to useful landing pages and clear next steps.' },
      { title: 'Learn what is working', text: 'Track meaningful campaign activity and use the insight to improve future decisions.' },
    ],
  },
  'ecommerce-solutions': {
    title: 'Make it easier for customers to shop with you.',
    intro: 'A well-structured online store helps customers find products, understand their options and complete purchases through a smooth shopping experience.',
    benefits: [
      { title: 'Reduce shopping friction', text: 'Product information, mobile-friendly layouts and intuitive navigation help customers move through your store.' },
      { title: 'Support confident purchases', text: 'A consistent product and checkout experience makes key details easier to find.' },
      { title: 'Manage your store more easily', text: 'Organized catalogs and a scalable foundation help your team maintain products and prepare for future needs.' },
    ],
  },
  'graphic-designing': {
    title: 'Communicate your value with clear, consistent design.',
    intro: 'Purposeful graphics help your business present information clearly, support campaigns and maintain a recognizable visual identity.',
    benefits: [
      { title: 'Make messages easier to notice', text: 'Focused layouts and visual hierarchy help audiences quickly understand your content.' },
      { title: 'Present a consistent brand', text: 'Designs aligned with your identity help communications feel connected across channels.' },
      { title: 'Support campaigns with useful assets', text: 'Get creative materials for promotions, social channels, presentations and business needs.' },
    ],
  },
  'saas-development': {
    title: 'Build a product that can evolve with its users.',
    intro: 'A thoughtful SaaS foundation connects the core product experience, account needs and technical architecture as your product develops.',
    benefits: [
      { title: 'Launch around a clear product need', text: 'Shape the platform around its intended users, essential workflows and business model.' },
      { title: 'Support reliable user experiences', text: 'Well-planned access, account and subscription flows help make the product easier to use.' },
      { title: 'Prepare for future product growth', text: 'A scalable, maintainable foundation gives you room to refine features and support changing needs.' },
    ],
  },
  'social-media-management': {
    title: 'Show up consistently and build stronger audience relationships.',
    intro: 'A thoughtful social presence helps your business share useful content, stay connected to its audience and keep communications aligned with its goals.',
    benefits: [
      { title: 'Stay consistent across platforms', text: 'A clear content plan helps maintain a regular, recognizable presence.' },
      { title: 'Build meaningful engagement', text: 'Relevant content and responsive community management give audiences reasons to interact.' },
      { title: 'Improve with audience insight', text: 'Review performance and engagement patterns to guide better content and campaign decisions.' },
    ],
  },
  'web-development': {
    title: 'Give customers a clearer, more useful online experience.',
    intro: 'A well-built website helps people understand your offer, find the information they need and take the next step across devices.',
    benefits: [
      { title: 'Make your value easier to understand', text: 'Clear structure and purposeful content help visitors see what you offer and who it is for.' },
      { title: 'Serve customers on every device', text: 'Responsive layouts keep key pages and actions accessible across phones, tablets and desktops.' },
      { title: 'Create a foundation for what is next', text: 'A maintainable, search-conscious build can support new content, features and priorities over time.' },
    ],
  },
}

export default function ServiceBenefits({ service }: { service: keyof typeof content }) {
  const { title, intro, benefits } = content[service]
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }} className="service-benefits-section border-y border-[#e5eaf3] bg-[#f7f9ff]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="service-eyebrow text-xs font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">
              Benefits for your business
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#071039] sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl leading-relaxed text-[#52617f]">{intro}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: index * 0.08 }}
              className="group relative min-h-48 overflow-hidden rounded-2xl border border-[#e0e6f2] bg-white p-6 shadow-[0_10px_28px_rgba(7,16,57,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#afc5f8] hover:shadow-[0_16px_34px_rgba(7,16,57,0.09)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf0ff] text-[#2E5DE6]">
                  <Check size={19} strokeWidth={2.5} />
                </span>
                <span className="text-xs font-bold tracking-[0.14em] text-[#8390ad]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-[#071039]">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#52617f]">{benefit.text}</p>
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="absolute bottom-6 right-6 text-[#2E5DE6] opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
