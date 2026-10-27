'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  FolderOpen,
  X,
} from 'lucide-react'
import { projects } from '@/data/portfolio'

const categoryLabels: Record<string, string> = {
  all: 'All Projects',
  web: 'Web Development',
  branding: 'Branding',
  'digital-marketing': 'Digital Marketing',
  ecommerce: 'E-commerce',
  software: 'Software',
}

const MotionImage = motion(Image)

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  )
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  )

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === 'all' || project.category === activeCategory
  )

  const featuredProject = projects[featuredIndex]
  const selectedProject = selectedProjectId
    ? projects.find((project) => project.id === selectedProjectId)
    : null

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeaturedIndex((current) =>
        current === projects.length - 1 ? 0 : current + 1
      )
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectId(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) =>
          current === selectedProject.images.length - 1 ? 0 : current + 1
        )
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) =>
          current === 0 ? selectedProject.images.length - 1 : current - 1
        )
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  const openProject = (projectId: string) => {
    setSelectedProjectId(projectId)
    setActiveImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProjectId(null)
    setActiveImageIndex(0)
  }

  const previousImage = () => {
    if (!selectedProject) return

    setActiveImageIndex((current) =>
      current === 0 ? selectedProject.images.length - 1 : current - 1
    )
  }

  const nextImage = () => {
    if (!selectedProject) return

    setActiveImageIndex((current) =>
      current === selectedProject.images.length - 1 ? 0 : current + 1
    )
  }

  return (
    <main className="portfolio-page overflow-x-hidden bg-white pt-20 text-[#071039] lg:pt-20">
      {/* HERO */}
      <section className="portfolio-hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-96 w-96 rounded-full bg-[#2E5DE6]/10 blur-[150px]" />
          <div className="absolute right-[-7rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#2E5DE6]/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="portfolio-hero-layout relative mx-auto grid min-w-0 max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="portfolio-hero-copy w-full max-w-2xl text-left"
          >
            <p className="portfolio-hero-eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-[#1A3BB0]">
              Selected Work
            </p>

             <h1 className="portfolio-hero-title mt-5 max-w-2xl text-3xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
           Ignisis Solution&apos;s{' '}
          <span className="portfolio-hero-highlight block sm:inline">Portfolio.</span>
</h1>

              <p className="portfolio-hero-description mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg">
  Explore Ignisis Solution&apos;s portfolio of web development,
  e-commerce, custom software, branding and digital marketing projects
  created for businesses in Pakistan and beyond.
</p>

            <div className="mt-8 flex w-full flex-nowrap gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('all-projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="portfolio-hero-primary inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-full px-2 py-3 text-[11px] font-semibold whitespace-nowrap text-white transition hover:-translate-y-0.5 sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-base"
              >
                Explore Projects <ArrowRight size={18} />
              </button>

              <Link
                href="/contact"
                className="portfolio-hero-secondary inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-xl border px-2 py-3 text-[11px] font-semibold whitespace-nowrap transition sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-base"
              >
                Start a Similar Project
              </Link>
            </div>

            <div className="portfolio-hero-note mt-10 flex items-center justify-center gap-3 text-center text-sm lg:justify-start lg:text-left">
              <FolderOpen size={17} />
              Select a project to read its case study and explore the gallery.
            </div>
          </motion.div>

          {/* FEATURED PROJECT PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="portfolio-featured-wrap relative mx-auto w-full max-w-xl"
          >
            <div className="absolute inset-0 rounded-3xl bg-[#2E5DE6]/10 blur-3xl" />

            <div className="portfolio-featured-panel relative overflow-hidden rounded-3xl p-4 sm:p-5">
              <div className="portfolio-featured-heading flex flex-col items-center gap-3 border-b px-2 pb-4 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                  <p className="portfolio-featured-eyebrow text-xs font-semibold uppercase tracking-[0.16em]">
                    Featured Project
                  </p>
                  <p className="portfolio-featured-name mt-1 text-xs font-semibold sm:text-sm">{featuredProject.title}</p>
                </div>

                <span className="portfolio-featured-count rounded-full border px-3 py-1 text-xs">
                  0{featuredIndex + 1} / 0{projects.length}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.button
                  key={featuredProject.id}
                  type="button"
                  onClick={() => openProject(featuredProject.id)}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="portfolio-featured-image group relative mt-5 block w-full overflow-hidden rounded-2xl text-left"
                >
                  <Image
                    width={1200}
                    height={700}
                    src={featuredProject.thumbnail}
                    alt={featuredProject.title}
                    className="block h-auto w-full transition duration-700"
                  />

                  <div className="portfolio-featured-overlay absolute inset-0 bg-gradient-to-t from-[#071039]/75 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.16em]">
                      {categoryLabels[featuredProject.category] ||
                        featuredProject.category}
                    </p>
                    <h2 className="mt-1 text-base font-bold sm:mt-2 sm:text-2xl">
                      {featuredProject.title}
                    </h2>
                  </div>

                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#2E5DE6] text-white opacity-0 transition group-hover:opacity-100">
                    <Eye size={19} />
                  </span>
                </motion.button>
              </AnimatePresence>

              <div className="portfolio-featured-dots mt-4 flex gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setFeaturedIndex(index)}
                    aria-label={`Show ${project.title}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === featuredIndex
                        ? 'w-9 bg-[#2E5DE6]'
                        : 'w-3 bg-white/20 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="all-projects"
        className="portfolio-gallery-section mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="portfolio-gallery-eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-[#1A3BB0]">
              Project gallery
            </p>

            <h2 className="portfolio-gallery-title mt-4 text-4xl font-bold text-[#071039] sm:text-5xl">
  Our Web Development & Digital Projects.
</h2>
          </div>

          
        </div>

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`portfolio-filter-button rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'is-active border-[#2E5DE6] bg-[#2E5DE6] text-white'
                    : 'border-[#D5DBEA] bg-white text-[#071039] hover:border-[#2E5DE6]/60 hover:text-[#1A3BB0]'
                }`}
              >
                {categoryLabels[category] ||
                  category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -7 }}
                className="portfolio-project-card group overflow-hidden rounded-2xl border transition"
              >
                <button
                  type="button"
                  onClick={() => openProject(project.id)}
                  className="portfolio-project-preview relative block w-full overflow-hidden text-left"
                  aria-label={`Open ${project.title} case study`}
                >
                  <Image
                    width={1200}
                    height={700}
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-60 w-full object-contain transition duration-700"
                  />

                  <div className="portfolio-project-overlay absolute inset-0 bg-gradient-to-t from-[#071039]/50 via-transparent to-transparent" />

                  <span className="portfolio-project-category absolute left-5 top-5 rounded-full border px-3 py-1 text-xs font-semibold">
                    {categoryLabels[project.category] || project.category}
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#2E5DE6] text-white opacity-0 transition group-hover:opacity-100">
                    <Eye size={19} />
                  </span>
                </button>

                <div className="flex min-h-[280px] flex-col p-6">
                  <h3 className="portfolio-project-title text-xl font-bold transition">
                    {project.title}
                  </h3>

                  <p className="portfolio-project-description mt-3 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="portfolio-tech-pill rounded-full border border-white/10 px-3 py-1 text-xs text-[#36405A]"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.techStack.length > 3 && (
                      <span className="portfolio-tech-more px-2 py-1 text-xs text-[#36405A]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => openProject(project.id)}
                      className="portfolio-view-gallery inline-flex items-center gap-2 text-sm font-semibold text-[#1A3BB0] transition hover:text-[#2E5DE6]"
                    >
                      View Case Study <ArrowRight size={15} />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-live-demo inline-flex items-center gap-1 text-sm font-medium text-[#36405A] transition hover:text-[#2E5DE6]"
                      >
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="portfolio-final-cta">
        <div className="portfolio-cta-panel">
          <div className="portfolio-cta-rings" aria-hidden="true" />
          <div className="portfolio-cta-copy">
            <p>Ready when you are</p>
            <h2>Have a project that deserves this level of attention?</h2>
            <span>
              Let&apos;s turn your business idea into a clear, thoughtful digital
              experience built around the people who will use it.
            </span>
          </div>
          <div className="portfolio-cta-actions">
            <Link href="/contact" className="portfolio-cta-primary">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="portfolio-cta-secondary">
              Request a Free Audit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FULL PROJECT GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071039]/25 p-2 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} case study`}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#dce4f4] bg-white text-[#071039] shadow-[0_28px_90px_rgba(7,16,57,0.24)] sm:rounded-3xl"
            >
              <div className="flex items-center justify-between border-b border-[#e5eaf3] bg-white px-4 py-3.5 sm:px-7 sm:py-4">
                <div className="min-w-0 pr-4">
                  <h2 className="truncate text-base font-bold sm:text-xl">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project case study"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2E5DE6] bg-[#2E5DE6] text-white shadow-[0_4px_12px_rgba(46,93,230,0.22)] transition hover:border-[#1A3BB0] hover:bg-[#1A3BB0] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E5DE6]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto">
                <section className="px-4 pb-5 pt-6 sm:px-8 sm:pb-7 sm:pt-8">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">Project overview</p>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#52617f] sm:text-base">
                    {selectedProject.description}
                  </p>
                </section>

                <section className="border-y border-[#e5eaf3] bg-[#f7f9ff] px-4 py-5 sm:px-8 sm:py-7">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1A3BB0]">Project gallery</p>
                      <p className="mt-1 text-xs text-[#71809e]">Screenshot {activeImageIndex + 1} of {selectedProject.images.length}</p>
                    </div>
                    {selectedProject.images.length > 1 && (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={previousImage}
                          aria-label="Show previous screenshot"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E5DE6] bg-[#2E5DE6] text-white shadow-[0_4px_12px_rgba(46,93,230,0.18)] transition hover:border-[#1A3BB0] hover:bg-[#1A3BB0] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E5DE6]"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          type="button"
                          onClick={nextImage}
                          aria-label="Show next screenshot"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E5DE6] bg-[#2E5DE6] text-white shadow-[0_4px_12px_rgba(46,93,230,0.18)] transition hover:border-[#1A3BB0] hover:bg-[#1A3BB0] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E5DE6]"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-xl border border-[#dce4f4] bg-white">
                    <AnimatePresence mode="wait">
                      <MotionImage
                        fill
                        key={activeImageIndex}
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.015 }}
                        transition={{ duration: 0.28 }}
                        src={selectedProject.images[activeImageIndex].trim()}
                        alt={`${selectedProject.title} project screenshot ${activeImageIndex + 1}`}
                        sizes="(max-width: 768px) 100vw, 90vw"
                        className="object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="mx-auto mt-4 flex max-w-5xl gap-2 overflow-x-auto pb-1">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={`${image}-${index}`}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          aria-label={`Show project screenshot ${index + 1}`}
                          aria-current={index === activeImageIndex}
                          className={`relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg border transition sm:w-32 ${
                            index === activeImageIndex
                              ? 'border-[#2E5DE6] ring-2 ring-[#2E5DE6]/15'
                              : 'border-[#dce4f4] opacity-70 hover:opacity-100'
                          }`}
                        >
                          <Image
                            fill
                            src={image.trim()}
                            alt=""
                            sizes="128px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </section>

                <section className="grid gap-3 px-4 py-5 sm:grid-cols-2 sm:gap-4 sm:px-8 sm:py-7">
                  <article className="rounded-2xl border border-[#e0e6f2] bg-white p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A3BB0]">The challenge</p>
                    <p className="mt-3 text-sm leading-6 text-[#52617f]">{selectedProject.caseStudy.challenge}</p>
                  </article>
                  <article className="rounded-2xl border border-[#e0e6f2] bg-white p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A3BB0]">Our solution</p>
                    <p className="mt-3 text-sm leading-6 text-[#52617f]">{selectedProject.caseStudy.solution}</p>
                  </article>
                  <article className="rounded-2xl border border-[#e0e6f2] bg-white p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A3BB0]">Final result</p>
                    <p className="mt-3 text-sm leading-6 text-[#52617f]">{selectedProject.caseStudy.result}</p>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1A3BB0] transition hover:text-[#2E5DE6]"
                      >
                        Visit live website <ExternalLink size={15} />
                      </a>
                    )}
                  </article>
                  <article className="rounded-2xl border border-[#e0e6f2] bg-white p-4 sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1A3BB0]">Services &amp; technologies</p>
                    <p className="mt-3 text-sm text-[#52617f]">
                      {categoryLabels[selectedProject.category] || selectedProject.category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#dce4f4] bg-[#f7f9ff] px-3 py-1.5 text-xs font-medium text-[#33446c]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </section>

                <section className="mx-4 mb-5 flex flex-col gap-4 rounded-2xl bg-[#1A3BB0] p-5 sm:mx-8 sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#DCE6FF]">Have a similar project?</p>
                    <p className="mt-2 text-lg font-semibold text-white">Let&apos;s talk about what you&apos;re building.</p>
                  </div>
                  <Link
                    href="/contact"
                    onClick={closeProject}
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#1A3BB0] transition hover:bg-[#E6EDFD]"
                  >
                    Discuss a project <ArrowRight size={16} />
                  </Link>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
