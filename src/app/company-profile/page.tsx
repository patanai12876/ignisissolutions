'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  Palette,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Megaphone,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Testimonials from '@/components/home/Testimonials'
import { projects as portfolioProjects } from '@/data/portfolio'


const serviceGroups = [
  {
    id: 'marketing',
    label: 'Digital Marketing',
    shortLabel: 'Digital marketing',
    icon: Megaphone,
    title: 'Make the right people notice, trust and choose your business.',
    description:
      'We connect campaign strategy, content and paid media to the business goal behind every click, so marketing becomes a clear growth system instead of disconnected activity.',
    services: ['Paid advertising', 'Social media campaigns', 'Audience targeting', 'Performance tracking'],
    href: '/services/digital-marketing',
    image: '/food/pic1.png',
    color: 'from-cyan-400/20 to-blue-500/5',
  },
  {
    id: 'web',
    label: 'Website Development',
    shortLabel: 'Web development',
    icon: Code2,
    title: 'Build a digital experience your business can grow on.',
    description:
      'We create fast, responsive websites, e-commerce stores and web applications that make your business easier to understand, use and choose.',
    services: ['Custom websites', 'E-commerce', 'Web applications', 'Performance & scalability'],
    href: '/services/web-development',
    image: '/evoo/img-1.png',
    color: 'from-cyan-400/20 to-blue-500/5',
  },
  {
    id: 'branding',
    label: 'Branding',
    shortLabel: 'Brand identity',
    icon: Palette,
    title: 'Give your business a clear identity people remember.',
    description:
      'We shape brand identities and visual systems that make every customer touchpoint feel intentional, consistent and credible.',
    services: ['Brand identity', 'Visual direction', 'Graphic design', 'Brand systems'],
    href: '/services/branding',
    image: '/shade/sz1.png',
    color: 'from-violet-500/20 to-indigo-500/5',
  },
  {
    id: 'seo',
    label: 'SEO',
    shortLabel: 'Search visibility',
    icon: Search,
    title: 'Create a digital presence people can actually find.',
    description:
      'We improve the technical foundation, content and search experience behind your website to build stronger visibility and sustainable organic growth.',
    services: ['Technical SEO', 'On-page SEO', 'Content optimization', 'Search visibility'],
    href: '/services/digital-marketing',
    image: '/images/Tradesyncc.png',
    color: 'from-blue-500/20 to-indigo-500/5',
  },
]

const heroServices = [
  'Digital Marketing',
  'Web Development',
  'SEO Solutions',
  'Custom Software',
  'Branding & Design',
]

const projects = [
  {
    name: 'Evoo',
    category: 'EV Mobility Platform',
    description:
  'A modern e-commerce and web application developed for an E-bikes brand, focused on product presentation, user experience and brand growth.',
    href: 'https://e-bikes-gamma.vercel.app/',
    icon: Globe2,
    visual: 'from-[#1e5559] via-[#12373f] to-[#0A1930]',
    image: '/evoo/img-1.png',
  },
  {
    name: 'Brew and Co.',
    category: 'Coffee Ordering Platform',
    description:
  'A modern coffee ordering platform designed to give customers a fast, intuitive experience across menus, products and online ordering.',
    href: 'https://brew-and-co-acyz.vercel.app/',
    icon: Layers3,
    visual: 'from-[#68442c] via-[#31261f] to-[#0A1930]',
    image: '/brew/p1.png',
  },
  {
    name: 'FitPro',
    category: 'Fitness Platform',
    description:
  'A  fitness website built to showcase services, connect customers with trainers and generate enquiries through a focused digital experience.',
    href: 'https://fit-pro-frontend.vercel.app/',
    icon: Sparkles,
    visual: 'from-[#542738] via-[#291f30] to-[#0A1930]',
    image: '/fitpro/piz1.png',
  },
]

const workCategories = [
  {
    id: 'marketing',
    label: 'Digital Marketing',
    icon: Megaphone,
    title: 'Campaigns built around attention, action and growth.',
    description: 'Digital marketing work and campaign screenshots will be added here when available.',
    projects: [
      {
        id: 'marketing-preview',
        title: 'Campaign Preview',
        category: 'marketing',
        thumbnail: '/brand/google.png',
        images: ['/brand/google.png'],
        description: 'Static campaign preview',
        techStack: [],
        liveUrl: '',
        completedDate: '2025',
      },
      {
        id: 'marketing-preview',
        title: 'Campaign Preview',
        category: 'marketing',
        thumbnail: '/brand/meta.png',
        images: ['/brand/meta.png'],
        description: 'Static campaign preview',
        techStack: [],
        liveUrl: '',
        completedDate: '2025',
      },
    ],

  },
  {
    id: 'web',
    label: 'Website Development',
    icon: Code2,
    title: 'Digital experiences built for real business needs.',
    description: 'A selection of websites and web applications designed around usability, presentation and business growth.',
    projects: portfolioProjects.filter((project) => project.category === 'web'),
  },
  {
    id: 'branding',
    label: 'Branding',
    icon: Palette,
    title: 'Clear identity across every customer touchpoint.',
    description: 'Branding work and creative screenshots will be added here when available.',
    projects: [
      {
        id: 'branding-preview',
        title: 'Brand Identity',
        category: 'branding',
        thumbnail: '/brand/fitpro.png',
        images: ['/brand/fitpro.png'],
        description: 'Static branding preview',
        techStack: [],
        liveUrl: '',
        completedDate: '2025',
      },
      {
        id: 'branding-preview',
        title: 'Brand Identity',
        category: 'branding',
        thumbnail: '/brand/brew.png',
        images: ['/brand/brew.png'],
        description: 'Static branding preview',
        techStack: [],
        liveUrl: '',
        completedDate: '2025',
      },
      {
        id: 'branding-preview',
        title: 'Brand Identity',
        category: 'branding',
        thumbnail: '/brand/brand 2.png',
        images: ['/brand/brand 2.png'],
        description: 'Static branding preview',
        techStack: [],
        liveUrl: '',
        completedDate: '2025',
      },

    ],
  },
]

export default function Home() {
  const [activeService, setActiveService] = useState('marketing')
  const [heroServiceIndex, setHeroServiceIndex] = useState(0)
  const [activeWorkCategory, setActiveWorkCategory] = useState('web')
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const processRef = useRef<HTMLElement>(null)
  const [processProgress, setProcessProgress] = useState(0)

  const activeGroup =
    serviceGroups.find((service) => service.id === activeService) ||
    serviceGroups[0]

  const ActiveIcon = activeGroup.icon
  const activeWork = workCategories.find((category) => category.id === activeWorkCategory) || workCategories[1]
  const ActiveWorkIcon = activeWork.icon
  const activeProject = activeWork.projects[activeProjectIndex]
  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroServiceIndex((current) => (current + 1) % heroServices.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateProcessProgress = () => {
      const section = processRef.current

      if (!section) return

      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollDistance = sectionHeight - viewportHeight * 0.35
      const progress = (window.scrollY - sectionTop + viewportHeight * 0.35) / scrollDistance

      setProcessProgress(Math.min(1, Math.max(0, progress)))
    }

    updateProcessProgress()
    window.addEventListener('scroll', updateProcessProgress, { passive: true })
    window.addEventListener('resize', updateProcessProgress)

    return () => {
      window.removeEventListener('scroll', updateProcessProgress)
      window.removeEventListener('resize', updateProcessProgress)
    }
  }, [])

  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-20 lg:pt-24 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute right-[-8rem] top-12 h-[32rem] w-[32rem] rounded-full bg-[#17A2C7]/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-8 lg:grid-cols-2 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Digital Agency for Modern Businesses
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
              We Build, Market &amp; Grow Your Business with
<span className="mt-3 block overflow-hidden">
  <span className="relative block h-[1.2em] overflow-hidden">
    <AnimatePresence initial={false} mode="sync">
      <motion.span
        key={heroServices[heroServiceIndex]}
        initial={{
          y: '100%',
          opacity: 0,
        }}
        animate={{
          y: '0%',
          opacity: 1,
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        exit={{
          y: '-100%',
          opacity: 0,
        }}
        transition={{
          y: {
            duration: 0.32,
            ease: [0.76, 0, 0.24, 1],
          },
          opacity: {
            duration: 0.28,
            ease: 'easeOut',
          },
          backgroundPosition: {
            duration: 2.9,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{
          backgroundImage:
            'linear-gradient(90deg, #ffffff 0%, #ffffff 28%, #66d4eb 55%, #17a2c7 78%, #66d4eb 100%)',
          backgroundSize: '260% auto',
          backgroundPosition: '0% 50%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
        }}
        className="absolute left-0 top-0 block w-max whitespace-nowrap leading-[1.2]"
      >
        {heroServices[heroServiceIndex]}
      </motion.span>
    </AnimatePresence>
  </span>
</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Ignisis Solutions is a Lahore-based digital agency helping
              businesses build powerful digital experiences, reach the right
              audience, and achieve sustainable growth.
            </p>
            <div className="mt-8 flex flex-nowrap gap-3">
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#17A2C7] px-4 py-3 text-sm font-semibold whitespace-nowrap text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] hover:shadow-[0_10px_28px_rgba(23,162,199,0.25)] sm:px-6 sm:py-3.5 sm:text-base"
              >
                Requst Free Audit
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold whitespace-nowrap transition hover:border-[#17A2C7]/70 hover:bg-white/5 sm:px-6 sm:py-3.5 sm:text-base"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
              <Check size={17} className="text-[#17A2C7]" />
              One team for strategy, creativity and technology.
            </div>
          </motion.div>

         
{/* INTERACTIVE HERO VISUAL — DIGITAL GROWTH ORBIT */}
<motion.div
  initial={{ opacity: 0, x: 35 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-xl"
>
  {/* Ambient glow */}
  <div className="pointer-events-none absolute -inset-20 -z-10">
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.35, 0.5, 0.35],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-[100px]"
    />

    <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-[#123C6B]/30 blur-[90px]" />
  </div>

  <div className="relative flex min-h-[410px] items-center justify-center overflow-visible lg:min-h-[500px]">

    {/* =========================
        OUTER ORBIT
    ========================== */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[410px] w-[410px] rounded-full border border-[#17A2C7]/15"
    >
      {/* orbit particle */}
      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#17A2C7] shadow-[0_0_18px_#17A2C7]" />

      <div className="absolute bottom-8 left-10 h-1.5 w-1.5 rounded-full bg-white/50" />

      <div className="absolute right-8 top-24 h-1.5 w-1.5 rounded-full bg-[#17A2C7]/70" />
    </motion.div>

    {/* =========================
        MIDDLE ORBIT
    ========================== */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[300px] w-[300px] rounded-full border border-white/[0.08]"
    >
      <div className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#66d4eb] shadow-[0_0_20px_rgba(23,162,199,0.8)]" />

      <div className="absolute left-10 top-2 h-1.5 w-1.5 rounded-full bg-[#17A2C7]/60" />
    </motion.div>

    {/* =========================
        SERVICE NODE — WEB
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.55, duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="absolute left-[5%] top-[24%] z-20"
    >
      <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C6B]">
          <Globe2
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          Web Development
        </span>
      </div>
    </motion.div>

    {/* =========================
        SERVICE NODE — MARKETING
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
      }}
      transition={{
        opacity: { delay: 0.7, duration: 0.5 },
        scale: { delay: 0.7, duration: 0.5 },
        y: {
          delay: 1.2,
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.08 }}
      className="absolute right-[3%] top-[18%] z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-[#17A2C7]/20 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17A2C7]/15">
          <Megaphone
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          Marketing
        </span>
      </div>
    </motion.div>

    {/* =========================
        SERVICE NODE — SEO
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.85, duration: 0.5 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="absolute bottom-[21%] left-[4%] z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C6B]">
          <Search
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          SEO
        </span>
      </div>
    </motion.div>

    {/* =========================
        SERVICE NODE — BRANDING
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, 5, 0],
      }}
      transition={{
        opacity: { delay: 1, duration: 0.5 },
        scale: { delay: 1, duration: 0.5 },
        y: {
          delay: 1.4,
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.08 }}
      className="absolute bottom-[20%] right-[2%] z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0A1930]/90 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123C6B]">
          <Sparkles
            size={15}
            className="text-[#66d4eb]"
          />
        </div>

        <span className="pr-1 text-[11px] font-medium text-white/80">
          Branding
        </span>
      </div>
    </motion.div>

    {/* =========================
        CENTRAL CORE
    ========================== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.35,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative z-10 flex h-[185px] w-[185px] items-center justify-center"
    >
      {/* outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#17A2C7]/25 blur-[45px]"
      />

      {/* rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-[#17A2C7]/30"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#66d4eb]" />
      </motion.div>

      {/* core */}
      <div className="relative flex h-[145px] w-[145px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#123C6B] via-[#0d3155] to-[#0A1930] shadow-[0_0_60px_rgba(23,162,199,0.18)]">
        {/* inner radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(102,212,235,0.3),transparent_45%)]" />

        {/* center icon */}
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#17A2C7]/30 bg-[#17A2C7]/10"
          >
            <TrendingUp
              size={28}
              strokeWidth={1.7}
              className="text-[#66d4eb]"
            />
          </motion.div>

          <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Digital Growth
          </span>
        </div>
      </div>
    </motion.div>

    {/* =========================
        CONNECTION LINES
    ========================== */}

    <svg
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
      viewBox="0 0 500 500"
      fill="none"
    >
      <motion.path
        d="M115 155 C170 165 190 190 215 225"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1, duration: 1.2 }}
      />

      <motion.path
        d="M385 145 C330 160 310 190 285 220"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1.15, duration: 1.2 }}
      />

      <motion.path
        d="M105 370 C165 350 190 315 215 285"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1.3, duration: 1.2 }}
      />

      <motion.path
        d="M395 370 C335 350 310 315 285 285"
        stroke="url(#cyanLine)"
        strokeWidth="1"
        strokeDasharray="4 7"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ delay: 1.45, duration: 1.2 }}
      />

      <defs>
        <linearGradient
          id="cyanLine"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#17A2C7"
            stopOpacity="0"
          />
          <stop
            offset="50%"
            stopColor="#66d4eb"
            stopOpacity="0.8"
          />
          <stop
            offset="100%"
            stopColor="#17A2C7"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </svg>

    {/* =========================
        SMALL FLOATING PARTICLES
    ========================== */}

    <motion.span
      animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-[28%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#66d4eb]"
    />

    <motion.span
      animate={{ y: [0, 8, 0], opacity: [0.2, 0.7, 0.2] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-[25%] bottom-[13%] h-1 w-1 rounded-full bg-white/70"
    />

    <motion.span
      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.7, 0.2] }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute right-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#17A2C7]"
    />

  </div>
</motion.div>
          
        </div>
      </section>

      {/* ABOUT — MISSION + VISION */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#08182e]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#17A2C7]/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                About Ignisis Solutions
              </p>
              <h2 className="mt-5 max-w-lg text-4xl font-bold leading-[1.1] sm:text-5xl">
                Digital solutions with{' '}
                <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                  real business purpose.
                </span>
              </h2>
            </div>

            
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {[
              {
                number: '01',
                label: 'Our Mission',
                text: 'To help businesses turn their ideas and goals into meaningful digital solutions through thoughtful strategy, modern technology and creative execution.',
              },
              {
                number: '02',
                label: 'Our Vision',
                text: 'To become a trusted digital partner for businesses looking to build, strengthen and grow their presence in an evolving digital landscape.',
              },
            ].map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1930]/75 p-7 transition hover:border-[#17A2C7]/50 sm:p-9"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#17A2C7] to-transparent opacity-60" />
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold tracking-[0.18em] text-[#66d4eb]">{item.number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#17A2C7]/25 bg-[#17A2C7]/10 text-[#66d4eb]">
                    {index === 0 ? <Target size={20} /> : <Globe2 size={20} />}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-bold">{item.label}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative bg-[#0A1930]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/[0.06] blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Our Approach
              </p>
              <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.1] sm:text-5xl">
                We start with the business,{' '}
                <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                  not just the project.
                </span>
              </h2>
            </div>

           
          </div>

          <div className="relative mt-16">

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Understand',
                  text: 'Understand the business, audience, goals and challenges.',
                  icon: Target,
                },
                {
                  number: '02',
                  title: 'Strategize',
                  text: 'Define the right direction and solution around the business objective.',
                  icon: Layers3,
                },
                {
                  number: '03',
                  title: 'Execute',
                  text: 'Turn strategy into purposeful digital experiences, campaigns and creative solutions.',
                  icon: Code2,
                },
                {
                  number: '04',
                  title: 'Evolve',
                  text: 'Continuously improve and refine the work as the business grows.',
                  icon: TrendingUp,
                },
              ].map(({ number, title, text, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-[#17A2C7]/50 hover:bg-white/[0.05] sm:p-7"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#17A2C7]/25 bg-[#17A2C7]/10 text-[#66d4eb] transition group-hover:bg-[#17A2C7] group-hover:text-[#0A1930]">
                      <Icon size={21} />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.16em] text-slate-500">{number}</span>
                  </div>
                  <h3 className="mt-9 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#08182e]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-8 h-80 w-80 rounded-full bg-[#17A2C7]/10 blur-[110px]" />
          <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Core Services
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">
                The right expertise for{' '}
                <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                  what comes next.
                </span>
              </h2>
            </div>
           
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:gap-5">
            {serviceGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <motion.div
                  key={group.id}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-white/10 bg-[#0A1930]/80 shadow-[0_14px_36px_rgba(0,0,0,0.14)] transition hover:border-[#17A2C7]/55 hover:bg-[#0d203a] hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
                >
                  <Link href={group.href} className="grid min-h-[172px] grid-cols-[3.75rem_1fr_auto] items-center gap-5 p-6 sm:p-8" aria-label={`Explore ${group.label}`}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#17A2C7]/25 bg-[#17A2C7]/10 text-[#66d4eb] shadow-[0_0_0_8px_rgba(23,162,199,0.035)] transition group-hover:bg-[#17A2C7] group-hover:text-[#0A1930]">
                      <Icon size={21} />
                    </span>
                    <span><span className="block text-xl font-bold text-white">{group.label}</span><span className="mt-2.5 block text-sm leading-relaxed text-slate-400">{group.shortLabel}</span></span>
                    <ArrowRight size={19} className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-[#66d4eb]" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CORE SERVICES — INTERACTIVE EXPLORER */}
      {/* INDUSTRY EXPERIENCE */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#08182e]">
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#17A2C7]/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="mb-8 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
              Industry Experience
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
              Different businesses. Different challenges.{' '}
              <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                One adaptable approach.
              </span>
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1930]/70 py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#08182e] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#08182e] to-transparent" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              className="flex w-max items-center gap-4 px-4"
            >
              {[...['Built Environment & Mobility','Education & Learning','Travel & Visa Services','Food & Hospitality','Health & Fitness','Technology & Trading','Built Environment & Mobility','Education & Learning','Travel & Visa Services','Food & Hospitality','Health & Fitness','Technology & Trading']].map((industry, index) => (
                <div
                  key={`${industry}-${index}`}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium tracking-[0.02em] text-slate-200 whitespace-nowrap sm:text-base"
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#17A2C7] shadow-[0_0_12px_rgba(23,162,199,0.8)]" />
                  {industry}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR CLIENTS — LOGOS TO BE SUPPLIED */}
      <section className="bg-[#0A1930]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Our Clients
              </p>
              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Businesses we&apos;ve worked with.</h2>
            </div>
          </div>

         

          <div className="mt-14 grid grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0A1930]/70 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: 'Advisio', src: '/clients/advisio.jpg' },
              { name: 'Bloodline', src: '/clients/bloodline.png' },
              { name: 'SECO', src: '/clients/seco.png' },
              { name: 'Tensile', src: '/clients/tensile.webp' },
              { name: 'TTT', src: '/clients/TTT R.png' },
              { name: 'SwitchU', src: '/clients/switch%20u.png' },
              { name: 'Collab', src: '/clients/collab.png' },
              { name: 'Fastline', src: '/clients/f2.png' },
              { name: 'FitPro', src: '/clients/fitpro.png' },
            ].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex aspect-[1.45/1] items-center justify-center border-b border-r border-white/10 bg-[#0d2340] p-2 sm:aspect-[1.8/1] sm:p-6"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} client logo`}
                  width={320}
                  height={180}
                  className="h-24 w-auto max-w-[90%] object-contain transition duration-300 hover:scale-[1.05] sm:h-24 sm:max-w-[72%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#08182e]">
        <div className="pointer-events-none absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-[#17A2C7]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="max-w-3xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">Our Work</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">Work connected to the{' '}<span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">service behind it.</span></h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {workCategories.map((category) => {
                const Icon = category.icon
                const selected = activeWorkCategory === category.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => { setActiveWorkCategory(category.id); setActiveProjectIndex(0) }}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition sm:p-5 lg:p-6 ${selected ? 'border-[#17A2C7]/60 bg-[#17A2C7]/10' : 'border-white/10 bg-[#0A1930]/50 hover:border-white/25 hover:bg-white/[0.04]'}`}
                  >
                    <span className="flex items-center gap-3 lg:gap-4">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl lg:h-11 lg:w-11 ${selected ? 'bg-[#17A2C7] text-[#0A1930]' : 'bg-white/5 text-[#66d4eb]'}`}>
                        <Icon size={18} className="lg:size-[20px]" />
                      </span>
                      <span className="block text-sm font-semibold sm:text-base lg:text-lg">{category.label}</span>
                    </span>
                    <ArrowRight size={16} className={selected ? 'text-[#66d4eb]' : 'text-slate-500'} />
                  </button>
                )
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A1930]"
              >
                {activeProject ? (
                  activeProject.liveUrl ? (
                    <a href={activeProject.liveUrl} target="_blank" rel="noreferrer" className="group block h-full">
                      <div className="relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[430px]">
                        <Image
                          src={activeProject.thumbnail || activeProject.images?.[0] || '/images/placeholder.png'}
                          alt={activeProject.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08182e]/90 via-[#08182e]/15 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-5 lg:p-6">
                          <div className="flex gap-3">
                            <button
                              type="button"
                              aria-label="Previous project"
                              onClick={(event) => {
                                event.preventDefault()
                                setActiveProjectIndex((index) => index === 0 ? activeWork.projects.length - 1 : index - 1)
                              }}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#08182e]/60 text-white transition hover:border-[#17A2C7] hover:text-[#66d4eb] sm:h-10 sm:w-10"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              type="button"
                              aria-label="Next project"
                              onClick={(event) => {
                                event.preventDefault()
                                setActiveProjectIndex((index) => (index + 1) % activeWork.projects.length)
                              }}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#08182e]/60 text-white transition hover:border-[#17A2C7] hover:text-[#66d4eb] sm:h-10 sm:w-10"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="group block h-full">
                      <div className="relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[430px]">
                        <Image
                          src={activeProject.thumbnail || activeProject.images?.[0] || '/images/placeholder.png'}
                          alt={activeProject.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08182e]/90 via-[#08182e]/15 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-5 lg:p-6">
                          <div className="flex gap-3">
                            <button
                              type="button"
                              aria-label="Previous project"
                              onClick={(event) => {
                                event.preventDefault()
                                setActiveProjectIndex((index) => index === 0 ? activeWork.projects.length - 1 : index - 1)
                              }}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#08182e]/60 text-white transition hover:border-[#17A2C7] hover:text-[#66d4eb] sm:h-10 sm:w-10"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              type="button"
                              aria-label="Next project"
                              onClick={(event) => {
                                event.preventDefault()
                                setActiveProjectIndex((index) => (index + 1) % activeWork.projects.length)
                              }}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#08182e]/60 text-white transition hover:border-[#17A2C7] hover:text-[#66d4eb] sm:h-10 sm:w-10"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="flex h-[260px] items-center justify-center border-t border-white/10 bg-[radial-gradient(circle_at_center,rgba(23,162,199,.14),transparent_55%)] sm:h-[340px] lg:h-[430px]" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      

      <section id="service-explorer" className="hidden" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
            Core Services
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.15] sm:text-5xl">
            One direction. Four ways to <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">move your business forward.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">
            Choose a service to explore the strategy, capability and digital experience behind it.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:block lg:space-y-2">
            {serviceGroups.map((group) => {
              const Icon = group.icon
              const selected = activeService === group.id

              return (
                <motion.button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveService(group.id)}
                  aria-pressed={selected}
                  animate={selected ? { opacity: [1, 0.55, 1] } : { opacity: 1 }}
                  transition={
                    selected
                      ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
                      : { duration: 0.2 }
                  }
                  className={`flex min-h-[92px] w-full items-center justify-center rounded-xl border px-2 py-3 text-center transition lg:min-h-0 lg:justify-between lg:px-5 lg:py-5 lg:text-left ${
                    selected
                      ? 'border-[#17A2C7]/60 bg-[#17A2C7]/10'
                      : 'border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg lg:h-10 lg:w-10 ${
                        selected
                          ? 'bg-[#17A2C7] text-[#0A1930]'
                          : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      <Icon size={19} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold lg:text-lg">
                        {group.label}
                      </span>
                      <span className="mt-1 hidden text-sm text-slate-400 lg:block">
                        {group.shortLabel}
                      </span>
                    </span>
                  </span>

                  <ArrowRight
                    size={18}
                    className={`hidden lg:block ${selected ? 'text-[#66d4eb]' : 'text-slate-500'}`}
                  />
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${activeGroup.color} p-0`}
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
                    <ActiveIcon size={24} />
                  </div>
                  <h3 className="mt-7 max-w-xl text-3xl font-bold leading-tight">
                    {activeGroup.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                    {activeGroup.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5cd5eb]"
                  >
                    Discuss your project <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="relative min-h-[300px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
                  <Image
                    src={activeGroup.image}
                    alt={`${activeGroup.label} project visual`}
                    fill
                    className="object-cover opacity-75 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08182e] via-[#08182e]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {activeGroup.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/20 bg-[#0A1930]/75 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PROJECT PROOF */}
      


      {/* PHILOSOPHY */}
  

      {/* WHY IGNISIS */}
      <section className="bg-[#0A1930]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">Why Ignisis</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">
              One partner for the work that makes a digital business <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">move forward.</span>
            </h2>
          </div>
          <div className="mt-16 grid border-y border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['One Digital Partner', 'Technology, marketing, branding and SEO working from one connected direction.'],
              ['Tailored Solutions', 'We shape the solution around the business instead of forcing every client into one template.'],
              ['Modern Execution', 'Current technologies, thoughtful design and digital strategies built for real users.'],
              ['Long-Term Thinking', 'We focus on foundations and decisions that can keep supporting the next stage of growth.'],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08 }}
                className="border-b border-white/10 p-6 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
              >
                <span className="text-3xl font-bold text-[#17A2C7]">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section ref={processRef} className="border-y border-white/10 bg-[#0A1930] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-5xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#17A2C7]">
              How we work
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-[4.2rem] lg:leading-[0.96]">
              From business idea to digital growth.
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-400">
              Every Ignisis project connects strategy, design, technology and
              marketing so your next step is always built on the last one.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 1040"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-[16.66%] top-0 hidden h-full w-[66.68%] lg:block"
            >
              <path
                d="M375 95 C375 175 375 175 375 215 C375 285 625 285 625 333 C625 405 375 405 375 571 C375 645 625 645 625 809 C625 875 375 875 375 1040"
                fill="none"
                stroke="#29405b"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M375 95 C375 175 375 175 375 215 C375 285 625 285 625 333 C625 405 375 405 375 571 C375 645 625 645 625 809 C625 875 375 875 375 1040"
                fill="none"
                stroke="#17A2C7"
                strokeWidth="7"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={1 - processProgress}
                className="transition-[stroke-dashoffset] duration-150 ease-out"
              />
            </svg>

            <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-0.5 rounded-full bg-[#29405b] lg:hidden">
              <div
                className="w-full rounded-full bg-[#17A2C7] transition-[height] duration-150 ease-out"
                style={{ height: `${processProgress * 100}%` }}
              />
            </div>

            <div className="relative grid gap-8 lg:auto-rows-[190px] lg:grid-cols-[1fr_7rem_1fr] lg:gap-y-12">
              {[
                {
                  number: '01',
                  title: 'Discover the opportunity',
                  text: 'We understand your business, audience, goals and the challenge that needs solving.',
                },
                {
                  number: '02',
                  title: 'Shape the strategy',
                  text: 'We recommend the right mix of consultancy, branding, development and marketing for your goals.',
                },
                {
                  number: '03',
                  title: 'Build the experience',
                  text: 'Our designers and developers turn the strategy into a clear brand, website, store or software solution.',
                },
                {
                  number: '04',
                  title: 'Activate your growth',
                  text: 'We connect your new digital foundation with SEO, campaigns, content and social media that reach the right people.',
                },
                {
                  number: '05',
                  title: 'Measure and improve',
                  text: 'After launch, we use feedback and performance insights to keep your business moving forward.',
                },
              ].map(({ number, title, text }, index) => {
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className={`group grid grid-cols-[3rem_1fr] items-start gap-x-3 pb-6 lg:col-span-3 lg:min-h-0 lg:grid-cols-[1fr_7rem_1fr] lg:grid-rows-none lg:items-center lg:pb-0 ${
                      isLeft ? '' : 'lg:[&>div:first-child]:col-start-3'
                    }`}
                  >
                    <div
                      className={`col-start-2 row-start-1 h-full rounded-2xl border border-white/10 bg-[#08182e] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#17A2C7]/50 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.25)] sm:p-7 ${
                        isLeft ? 'lg:col-start-1' : 'lg:col-start-3'
                      }`}
                    >
                      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-500">{text}</p>
                    </div>
                    <span className={`relative z-10 col-start-1 row-start-1 mx-auto mt-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#17A2C7] bg-[#0A1930] text-sm font-bold text-[#66d4eb] shadow-[0_8px_22px_rgba(23,162,199,0.18)] lg:col-start-2 lg:mt-0 lg:h-16 lg:w-16 lg:text-lg ${
                      isLeft ? 'lg:-translate-x-10' : 'lg:translate-x-10'
                    }`}>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#17A2C7]/60">
                        {number}
                      </span>
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH IMPACT */}
      <section className="relative overflow-hidden bg-[#08182e]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr] xl:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
                Growth impact
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">
                The goal is not just a launch it&apos;s a business that keeps
                <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
                  {' '}performing after it goes live.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  value: 'Clearer',
                  label: 'Brand presence',
                  text: 'A stronger message, visual identity and presentation that reflect the business more accurately.',
                },
                {
                  value: 'Better',
                  label: 'User journeys',
                  text: 'Web experiences designed to help visitors understand the offer and take the next step more naturally.',
                },
                {
                  value: 'Stronger',
                  label: 'Digital reach',
                  text: 'SEO, marketing and content aligned so the business is easier to find and easier to trust.',
                },
                {
                  value: 'More',
                  label: 'Growth-ready systems',
                  text: 'A digital foundation that supports stronger decisions, smoother operations and future expansion.',
                },
              ].map(({ value, label, text }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-[#0A1930]/80 p-6"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#66d4eb]">{value}</span>
                  <h3 className="mt-5 text-2xl font-bold">{label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

     {/* FINAL CTA */}
<section className="bg-[#0A1930] px-6 py-24">
  <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#123C6B] px-6 py-14 text-center lg:px-10 lg:py-16">
    
    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl"
    />

    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
        Ready when you are
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
        Let&apos;s create something your business can grow with.
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
        Tell us what you want to build, improve or launch. We will help
        you find the right next step.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17A2C7] px-8 py-3.5 font-semibold text-white shadow-lg"
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
