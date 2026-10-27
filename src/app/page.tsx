'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { BarChart3, Check, Code2, Sparkles } from 'lucide-react'
import Testimonials from '@/components/home/Testimonials'

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Digital experiences',
    body: 'Build a clear, useful online experience that helps customers understand your offer and take action.',
    deliverables: ['Business websites', 'E-commerce stores', 'Custom web applications'],
    link: '/services/web-development',
    label: 'Explore web development',
  },
  {
    icon: BarChart3,
    number: '02',
    title: 'Growth & visibility',
    body: 'Reach the right people and turn more of your online attention into meaningful opportunities.',
    deliverables: ['Search engine optimization', 'Google & Meta ad campaigns', 'Social media marketing'],
    link: '/services/digital-marketing',
    label: 'Explore digital marketing',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Brand & identity',
    body: 'Create a consistent, memorable identity that communicates what makes your business different.',
    deliverables: ['Brand strategy', 'Visual identity systems', 'Graphic design & digital assets'],
    link: '/services/branding',
    label: 'Explore branding',
  },
]
const projects = [
  { name: 'Brew & Co.', category: 'Food · Online ordering', description: 'A coffee ordering website that helps customers browse the menu and choose products online.', image: '/images/brew-work.png', alt: 'Brew and Co. coffee ordering website preview', href: 'https://brew-and-co-acyz.vercel.app/' },
  { name: 'Evoo', category: 'Mobility · E-commerce', description: 'An e-commerce website for an electric bike brand, designed to showcase products and support online shopping.', image: '/images/evoo-work.png', alt: 'Evoo electric mobility website preview', href: 'https://e-bikes-gamma.vercel.app/' },
  { name: 'FitPro', category: 'Fitness · Web design', description: 'A fitness website presenting training services and helping potential clients make enquiries.', image: '/images/fitpro-work.png', alt: 'FitPro fitness website preview', href: 'https://fit-pro-frontend.vercel.app/' },
]
const faqs = [
  ['What type of businesses do you work with?', 'We work with startups, small-to-medium businesses and established companies that need a stronger website, brand, software product or digital growth strategy.'],
  ['Do you provide digital marketing services in Lahore?', 'Yes. Ignisis Solutions provides SEO, Google Ads, Meta Ads and digital marketing services for businesses in Lahore and across Pakistan.'],
  ['Do you work with international clients?', 'Yes. Although Ignisis Solutions is based in Lahore, Pakistan, we work and collaborate with international clients remotely.'],
  ['Do you build custom websites and software?', 'Yes. We develop modern websites, e-commerce platforms and custom software solutions tailored to each business and its goals.'],
]
const steps = [
  ['Discover & align', 'We learn about your business, audience and goals, then agree on the challenge to solve.'],
  ['Plan & design', 'We shape the strategy and design a clear direction for your brand and digital experience.'],
  ['Build & launch', 'We create your website, store or software and prepare it to connect with your audience.'],
  ['Measure & improve', 'We use feedback and performance insights to guide useful next steps.'],
]
const capabilities = [
  ['✦', 'Business Strategy'], ['</>', 'Web Development'], ['⌕', 'SEO & Growth'], ['↗', 'Digital Marketing'], ['◉', 'Branding & Design'], ['▯', 'Mobile Experiences'],
]

export default function Home() {
  return <MotionConfig reducedMotion="user"><main className="home-theme" id="top">
    <section className="hero">
      <div className="hero-inner">
        <motion.div className="hero-copy-block" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
          <span className="eyebrow">Digital agency for modern businesses</span>
          <h1 aria-label="We build, market and grow your business with digital marketing, web development, branding and SEO">We Build, Market &amp; <span className="highlight">Grow</span> Your Business <span className="hero-with">with</span><span className="service-rotator" aria-hidden="true"><span>Digital Marketing</span><span>Web Development</span><span>Branding</span><span>SEO</span></span></h1>
          <p className="hero-copy">Ignisis Solutions is a Lahore-based digital agency helping businesses build powerful digital experiences, reach the right audience, and achieve sustainable growth.</p>
          <div className="hero-buttons"><Link className="button button-primary" href="/contact">Request Free Audit <span>↗</span></Link><Link className="button button-secondary" href="/portfolio">View Our Work <span>→</span></Link></div>
          <div className="hero-note"><span className="check"><Check size={13} /></span> One connected team for your next stage of growth.</div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, x: 24, scale: 0.985 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.14, ease: 'easeOut' }}><Image className="hero-art" src="/images/hero-phones.png" alt="Two Ignisis smartphone mockups showing a business website and sales dashboard" width={1536} height={1024} priority /></motion.div>
      </div>
    </section>

    <section className="service-marquee" aria-label="Ignisis Solutions services"><span className="sr-only">Business Strategy, Web Development, SEO and Growth, Digital Marketing, Branding and Design, Mobile Experiences.</span><div className="marquee-track" aria-hidden="true">{[0, 1].map((set) => <div className="marquee-set" key={set}>{capabilities.map(([icon, label], i) => <Fragment key={`${label}-${i}`}><span className="marquee-item"><span className="marquee-icon">{icon}</span>{label}</span><span className="marquee-separator">/</span></Fragment>)}</div>)}</div></section>

    <section className="section services" id="services">
      <div className="section-inner">
        <motion.div
          className="services-heading-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-heading">
            <span className="eyebrow">One partner. Three ways to grow.</span>
            <h2>What your business needs to move forward</h2>
          </div>
          <Link className="text-link services-all-link" href="/services">View all services <span>→</span></Link>
        </motion.div>
        <div className="service-grid mt-10">
          {services.map(({ icon: Icon, number, title, body, deliverables, link, label }, index) => (
            <motion.article
              className="service-card"
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="service-card-top">
                <span className="service-top" aria-hidden="true"><Icon /></span>
                <span className="service-number">{number} / 03</span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <ul className="service-deliverables" aria-label={`${title} services`}>
                {deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <Check size={15} aria-hidden="true" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <Link className="service-link" href={link}>{label} <span aria-hidden="true">↗</span></Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="section work-section" id="work"><div className="section-inner"><motion.div className="work-heading-row" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5 }}><div className="section-heading"><span className="eyebrow">Selected website projects</span><h2>Websites built for growth.</h2></div><Link className="text-link" href="/portfolio">See complete portfolio <span>↗</span></Link></motion.div><div className="project-grid">{projects.map((project, index) => <motion.article className="project-card" key={project.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.6, delay: index * 0.1 }}><a className="project-preview" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View the ${project.name} project`}><Image src={project.image} alt={project.alt} width={800} height={500} loading="lazy" /></a><div className="project-info"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">View live project <span>↗</span></a></div></motion.article>)}</div></div></section>

    <section className="section why-choose" id="why-choose"><div className="section-inner why-inner"><motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5 }}><span className="eyebrow">Why choose Ignisis</span><h2>One team. A clearer way forward.</h2></motion.div><div className="why-points">{[['01 / CONNECTED EXPERTISE','One team across disciplines','Bring web development, SEO, marketing and branding together around one joined-up plan.'],['02 / BUILT AROUND YOU','Focused on your goals','Recommendations start with your business, your customers and the outcomes you want to work toward.'],['03 / MADE TO EVOLVE','Ready for what comes next','Build a digital foundation that can adapt as your services, audience and priorities change.']].map(([eyebrow, title, body], index) => <motion.article className="why-point" key={eyebrow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1 }}><span>{eyebrow}</span><h3>{title}</h3><p>{body}</p></motion.article>)}</div></div></section>

    <Testimonials />

    <section className="section process" id="process"><div className="section-inner process-layout"><motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5 }}><span className="eyebrow">Our process</span><h2>From business idea to digital growth.</h2></motion.div><div className="steps">{steps.map(([title, description], index) => <motion.article className="step" key={title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}><span className="step-no">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></motion.article>)}</div></div></section>

    <section className="section faq" id="faq"><div className="section-inner faq-layout"><motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5 }}><span className="eyebrow">Before we start</span><h2>Questions clients usually ask.</h2></motion.div><div className="faq-list">{faqs.map(([question, answer], index) => <motion.details key={question} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.06 }}><summary>{question}</summary><p>{answer}</p></motion.details>)}</div></div></section>

    <section className="final-cta" id="contact"><motion.div className="cta-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}><div className="cta-copy"><span className="eyebrow">Ready when you are</span><h2>Let’s create something your business can grow with.</h2><p>Tell us what you want to build, improve or launch. We’ll help you find the right next step.</p></div><div className="cta-actions"><Link className="button cta-button" href="/contact">Discuss Your Project <span>↗</span></Link><Link className="button cta-outline" href="/contact">Request a Free Audit <span>→</span></Link></div></motion.div></section>
  </main></MotionConfig>
}
