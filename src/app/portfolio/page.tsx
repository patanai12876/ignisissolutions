'use client'

import Link from 'next/link'
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
  Code2,
  ExternalLink,
  Eye,
  FolderOpen,
  Grid2X2,
  Layers3,
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
    <main className="overflow-x-hidden bg-[#0A1930] pt-16 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
          <div className="absolute right-[-7rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[#17A2C7]/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
              Selected Work
            </p>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
              A closer look at{' '}
              <span className="text-[#66d4eb]">what we build.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Explore digital experiences designed around real business needs:
              from premium brand websites to customer-focused online platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('all-projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#62d7ec]"
              >
                Explore Projects <ArrowRight size={18} />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold transition hover:border-[#17A2C7]/70 hover:bg-white/5"
              >
                Start a Similar Project
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
              <FolderOpen size={17} className="text-[#17A2C7]" />
              Click any project to explore its complete visual gallery.
            </div>
          </motion.div>

          {/* FEATURED PROJECT PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-[#17A2C7]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d2542]/85 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66d4eb]">
                    Featured Project
                  </p>
                  <p className="mt-1 text-sm font-semibold">{featuredProject.title}</p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
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
                  className="group relative mt-5 block w-full overflow-hidden rounded-2xl bg-[#071426] text-left"
                >
                  <img
                    src={featuredProject.thumbnail}
                    alt={featuredProject.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {categoryLabels[featuredProject.category] ||
                        featuredProject.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      {featuredProject.title}
                    </h2>
                  </div>

                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#17A2C7] text-white opacity-0 transition group-hover:opacity-100">
                    <Eye size={19} />
                  </span>
                </motion.button>
              </AnimatePresence>

              <div className="mt-4 flex gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setFeaturedIndex(index)}
                    aria-label={`Show ${project.title}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === featuredIndex
                        ? 'w-9 bg-[#17A2C7]'
                        : 'w-3 bg-white/20 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO INTRO */}
      <section className="border-b border-white/10 bg-[#08182e]">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-10 md:grid-cols-3">
          {[
            [
              'Real visual work',
              'Every project includes its original screens and visual direction—not just a written summary.',
            ],
            [
              'Built for a purpose',
              'Each platform begins with a different audience, business model and customer journey.',
            ],
            [
              'Explore the details',
              'Open a project gallery to view screens, technology and the live experience.',
            ],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l border-[#17A2C7]/60 pl-5"
            >
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="all-projects"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66d4eb]">
              Project gallery
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Browse the work. Open the story.
            </h2>
          </div>

          <p className="max-w-sm leading-relaxed text-slate-400">
            Every project below includes a complete gallery, technology overview
            and direct link to the live platform.
          </p>
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
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'border-[#17A2C7] bg-[#17A2C7] text-white'
                    : 'border-white/10 text-white hover:border-[#17A2C7]/60 hover:text-white'
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
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d203a] transition hover:border-[#17A2C7]/50"
              >
                <button
                  type="button"
                  onClick={() => openProject(project.id)}
                  className="relative block w-full overflow-hidden bg-[#071426] text-left"
                  aria-label={`Open ${project.title} gallery`}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/85 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#0A1930]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {categoryLabels[project.category] || project.category}
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#17A2C7] text-white opacity-0 transition group-hover:opacity-100">
                    <Eye size={19} />
                  </span>
                </button>

                <div className="flex min-h-[280px] flex-col p-6">
                  <h3 className="text-xl font-bold transition group-hover:text-[#66d4eb]">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs text-slate-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => openProject(project.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
                    >
                      View Gallery <ArrowRight size={15} />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition hover:text-white"
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
    {/* FINAL CTA */}
<section className="border-t border-white/10 bg-[#0A1930] px-4 py-10 sm:px-6 lg:py-14">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#123C6B] px-6 py-20 text-center lg:py-24">

    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17A2C7]/20 blur-3xl"
    />

    <div className="relative">
      <Code2
        className="mx-auto text-[#66d4eb]"
        size={30}
      />

      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
        Have a project that deserves this level of attention?
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-200">
        Let&apos;s turn your business idea into a clear, thoughtful digital
        experience built around the people who will use it.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#62d7ec]"
      >
        Start Your Project
        <ArrowRight size={18} />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020814]/95 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} gallery`}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A1930] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <div className="min-w-0 pr-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    {categoryLabels[selectedProject.category] ||
                      selectedProject.category}
                  </p>
                  <h2 className="mt-1 truncate text-lg font-semibold sm:text-xl">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project gallery"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#071426] p-4 sm:p-7">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.015 }}
                    transition={{ duration: 0.28 }}
                    src={selectedProject.images[activeImageIndex].trim()}
                    alt={`${selectedProject.title} screenshot ${
                      activeImageIndex + 1
                    }`}
                    className="max-h-[52vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Show previous image"
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0A1930]/85 text-white transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930] sm:left-7"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Show next image"
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0A1930]/85 text-white transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930] sm:right-7"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="max-h-[34vh] overflow-y-auto border-t border-white/10 p-5 sm:p-7">
                <div className="grid gap-7 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="leading-relaxed text-slate-300">
                      {selectedProject.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-fit items-center justify-center gap-2 rounded-xl bg-[#17A2C7] px-5 py-3 text-sm font-semibold text-[#0A1930] transition hover:bg-[#62d7ec]"
                    >
                      Visit Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`shrink-0 overflow-hidden rounded-lg border transition ${
                          index === activeImageIndex
                            ? 'border-[#17A2C7]'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image.trim()}
                          alt={`${selectedProject.title} preview ${index + 1}`}
                          className="h-14 w-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}