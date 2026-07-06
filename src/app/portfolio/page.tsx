'use client'

import { useState } from 'react'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Eye, ArrowRight, Zap, Award, Code2, X, ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react'

export default function Portfolio() {
  const categories = ['all', 'web', 'Digital Marketing', 'branding']
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = projects.filter(p => activeCategory === 'all' || p.category === activeCategory)
  const featuredProjects = projects.slice(0, 2)
  
  const activeProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null
  const currentProject = activeProjectData

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Global glow background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30"></div>
      
      
{/* MINIMAL IMAGE MODAL */}
{selectedProject && currentProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4">
    
    <div className="relative w-full max-w-6xl rounded-[32px] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl shadow-black/70">
      
      {/* Close */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 z-20 p-4 bg-slate-900/90 border border-white/10 rounded-full text-gray-200 hover:bg-slate-800 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden bg-slate-900">
        <img
          src={currentProject.images[currentImageIndex]}
          alt={currentProject.title}
          className="w-full max-h-[85vh] object-cover"
        />

        {/* Left Arrow */}
        {currentProject.images.length > 1 && (
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0
                  ? currentProject.images.length - 1
                  : prev - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 rounded-full transition"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Right Arrow */}
        {currentProject.images.length > 1 && (
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === currentProject.images.length - 1
                  ? 0
                  : prev + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 rounded-full transition"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

    
{/* Bottom minimal info */}
<div className="bg-slate-950 p-8 md:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
  
  {/* Left content */}
  <div className="space-y-4 md:max-w-2xl">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">
      {currentProject.title}
    </h3>

    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
      {currentProject.description}
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 pt-1">
      {currentProject.techStack.slice(0, 3).map((tech) => (
        <span
          key={tech}
          className="px-3 py-1.5 text-xs md:text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
    {currentProject.liveUrl && (
      <a
        href={currentProject.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 text-sm font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
      >
        <ArrowRight size={16} />
        Live Demo
      </a>
    )}
    <button
      onClick={() => setSelectedProject(null)}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium text-white"
    >
      Close
    </button>
  </div>
</div>
</div>
</div>
)}




      {/* Content wrapper */}
      <div className="relative z-10 animate-fadeIn">
        {/* PREMIUM HERO SECTION */}
        <section className="container max-w-7xl mx-auto px-6 py-20 md:py-28 relative mt-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full w-fit">
                <Star size={16} className="text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-400">Premium Portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital Projects
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Explore our collection of expertly crafted web, mobile, and branding projects that showcase innovation and excellence in every pixel.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-400">Quality</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 blur-3xl rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3 animate-slideUp" style={{ animationDelay: '0.1s' }}>
                    <div className="h-32 bg-gradient-to-br from-indigo-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center">
                      <Code2 size={40} className="text-indigo-400" />
                    </div>
                    <div className="text-sm font-semibold text-gray-200">Web Dev</div>
                  </div>
                  <div className="space-y-3 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                    <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center">
                      <Award size={40} className="text-cyan-400" />
                    </div>
                    <div className="text-sm font-semibold text-gray-200">Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS - IMAGE GALLERY FOCUS */}
        <section className="container max-w-7xl mx-auto px-6 py-16 relative">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Showcase</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
           {featuredProjects.map((project, idx) => (
  <div
    key={project.id}
    className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-slideUp"
    style={{ animationDelay: `${idx * 0.1}s` }}
    onClick={() => {
      setSelectedProject(project.id)
      setCurrentImageIndex(0)
    }}
  >
    <div className="relative overflow-hidden h-96 bg-slate-950">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-contain transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 transition-opacity duration-300"></div>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-8">
      
      <h3 className="text-3xl font-bold mb-4">
        {project.title}
      </h3>

      <div className="flex gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setSelectedProject(project.id)
            setCurrentImageIndex(0)
          }}
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg text-sm font-semibold transition"
        >
          View Gallery
        </button>

        {project.liveUrl && (
          <a
            onClick={(e) => e.stopPropagation()}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
))}
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="container max-w-7xl mx-auto px-6 py-8 relative">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">All Projects Gallery</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
          </div>

          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                    : 'border-slate-700 text-gray-400 hover:border-slate-600 hover:text-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

         
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project, idx) => (
    <div
      key={project.id}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 bg-slate-800/30 backdrop-blur hover:bg-slate-800/60 animate-slideUp h-full"
      style={{ animationDelay: `${idx * 0.05}s` }}
    >
      {/* Project Image */}
      <div
        className="relative overflow-hidden h-56 cursor-pointer"
        onClick={() => {
          setSelectedProject(project.id)
          setCurrentImageIndex(0)
        }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col h-full">
        <div
          className="space-y-2 flex-1 cursor-pointer"
          onClick={() => {
            setSelectedProject(project.id)
            setCurrentImageIndex(0)
          }}
        >
          <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex gap-2 flex-wrap">
          {project.techStack.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full"
            >
              {tech}
            </span>
          ))}

          {project.techStack.length > 2 && (
            <span className="px-3 py-1 text-xs font-semibold text-gray-400">
              +{project.techStack.length - 2}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-3">
          <button
            onClick={() => {
              setSelectedProject(project.id)
              setCurrentImageIndex(0)
            }}
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View Gallery
          </button>

          {project.liveUrl && (
            <>
              <span className="text-slate-600">•</span>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Live Demo
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
</section>


        {/* PREMIUM STATS SECTION */}
        <section className="container max-w-7xl mx-auto px-6 py-20 relative">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur hover:border-indigo-500/30 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur hover:border-blue-500/30 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur hover:border-cyan-500/30 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">15+</div>
              <p className="text-gray-400">Industries</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur hover:border-indigo-500/30 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">4+</div>
              <p className="text-gray-400">Years of Excellence</p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="container max-w-7xl mx-auto px-6 py-20 relative">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Let&apos;s discuss your project and bring your vision to life with our proven expertise.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl hover:shadow-indigo-500/50 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


