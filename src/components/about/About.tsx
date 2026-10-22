'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Char & Ember',
    category: 'Food · Online ordering',
    description: 'An online ordering experience for exploring a menu, customizing orders, and making payments.',
    image: '/food/pic1.png',
    alt: 'Char & Ember online food ordering website preview',
    href: 'https://char-ember.vercel.app/',
  },
  {
    name: 'Tensile Shades',
    category: 'Architecture · Shade solutions',
    description: 'A responsive business website presenting shade solutions, services, and customer stories.',
    image: '/shade/sz1.png',
    alt: 'S.Z. Tensile shade solutions website preview',
    href: 'https://www.sztensile.com/',
  },
  {
    name: 'Seco Developers',
    category: 'Construction · Corporate website',
    description: 'A corporate website introducing construction and infrastructure services and projects.',
    image: '/seco/s1.png',
    alt: 'Seco Developers construction company website preview',
    href: 'https://secodevelopers.com/',
  },
]

const approach = [
  {
    number: '01',
    title: 'Understand',
    copy: 'We learn about your business, audience, and objectives before defining the right direction.',
  },
  {
    number: '02',
    title: 'Strategize',
    copy: 'We develop a focused plan that connects the right solutions with your business goals.',
  },
  {
    number: '03',
    title: 'Create',
    copy: 'We turn ideas into purposeful websites and marketing campaigns through thoughtful execution.',
  },
  {
    number: '04',
    title: 'Refine',
    copy: 'We look for opportunities to improve, adapt, and make our work more effective over time.',
  },
]

export default function About() {
  return (
    <main className="about-page overflow-x-hidden bg-[#071039] pt-20 text-white lg:pt-24">
      {/* Keep the existing About hero intact. */}
      <section className="about-hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="about-hero-glow absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full blur-[140px]" />
          <div className="about-hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="about-hero-content relative mx-auto max-w-7xl px-6 py-16 lg:py-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-hero-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC5F8]"
          >
            About Ignisis Solutions | Digital Agency in Lahore
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="about-hero-title mt-6 max-w-5xl text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-6xl"
          >
            A digital agency built for{' '}
            <span className="about-hero-highlight bg-gradient-to-r from-[#AFC5F8] via-[#6E92F2] to-[#6E92F2] bg-clip-text text-transparent">
              business growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="about-hero-copy mt-10 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Ignisis Solutions is a digital agency in Lahore, helping businesses in Pakistan and abroad build a stronger digital presence through web development, custom software, e-commerce, branding, SEO and digital marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="about-hero-primary inline-flex items-center gap-2 rounded-xl bg-[#2E5DE6] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1A3BB0] hover:shadow-[0_10px_28px_rgba(46,93,230,0.25)] sm:px-6 sm:text-base"
            >
              Work With Us <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="about-hero-secondary inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5 sm:px-6 sm:text-base"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="about-who-section">
        <div className="about-content about-who-layout">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="about-eyebrow">Who We Are</p>
            <h2>More Than Digital. Built Around Business.</h2>
          </motion.div>
          <motion.div
            className="about-who-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08 }}
          >
            <p>
              Ignisis Solutions is a digital agency bringing strategy, technology, and creativity together to help businesses move forward.
            </p>
            <p>
              We create purposeful digital experiences and marketing solutions that connect businesses with their audiences, strengthen their online presence, and support meaningful growth.
            </p>
            <p>
              Our approach is simple: understand the business, find the right direction, and turn ideas into work that makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-content about-mission-grid">
          <motion.article
            className="about-purpose-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="about-purpose-label">Our Mission</p>
            <h2>To Turn Digital Potential Into Real Progress.</h2>
            <p className="about-purpose-copy">
              Our mission is to help businesses grow through purposeful web solutions and strategic digital marketing. We combine creativity, technology, and clear thinking to turn business goals into meaningful digital outcomes.
            </p>
          </motion.article>

          <motion.article
            className="about-purpose-card about-purpose-card-alt"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 }}
          >
            <p className="about-purpose-label">Our Vision</p>
            <h2>To Shape What&apos;s Next in Digital Growth.</h2>
            <p className="about-purpose-copy">
              Our vision is to become a trusted digital partner for businesses worldwide, creating impactful digital experiences and growth solutions that help brands evolve, compete, and thrive.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="about-driven-section">
        <div className="about-content about-driven-layout">
          <motion.div
            className="about-approach-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="about-eyebrow">Our Approach</p>
            <h2>Thoughtful Strategy. Meaningful Execution.</h2>
            
          </motion.div>
          <div className="about-approach-steps">
            {approach.map((step, index) => (
              <motion.article
                key={step.number}
                className="about-approach-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
              >
                <p className="about-approach-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p className="about-approach-copy">{step.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-work-section">
        <div className="about-content about-work-inner">
          <div className="about-work-heading">
            <div>
              <p className="about-eyebrow">Ideas Into Reality</p>
              <h2>Work made for the real world.</h2>
            </div>
            <Link href="/portfolio" className="about-work-all">
              See complete portfolio <ArrowRight size={17} />
            </Link>
          </div>

          <div className="about-project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className={`about-project-card${index === 1 ? ' is-featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="about-project-image" aria-label={`View the ${project.name} project`}>
                  <Image src={project.image} alt={project.alt} width={800} height={500} sizes="(max-width: 760px) 100vw, 34vw" />
                  <span className="about-project-open" aria-hidden="true"><ArrowRight size={18} /></span>
                </a>
                <div className="about-project-info">
                  <p>{project.category}</p>
                  <h3>{project.name}</h3>
                  <span>{project.description}</span>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="about-project-link">View live project <ArrowRight size={15} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-content about-cta-inner">
          <div className="about-cta-orbit" aria-hidden="true" />
          <motion.div
            className="about-cta-copy-block"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="about-eyebrow">Ready when you are</p>
            <h2>Let&apos;s create something your business can grow with.</h2>
            <p className="about-cta-copy">
              Tell us what you want to build, improve or launch. We&apos;ll help you find the right next step.
            </p>
          </motion.div>
          <div className="about-cta-actions">
            <Link href="/contact" className="about-cta-button">
              Discuss Your Project <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="about-cta-outline">
              Request a Free Audit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
