'use client'

import { useState } from 'react'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Eye, ArrowRight, Zap, Award, Code2, X, ChevronLeft, ChevronRight, Star, Calendar, Briefcase, Users, TrendingUp } from 'lucide-react'

export default function Portfolio() {
  const categories = ['all', 'web', 'mobile', 'branding', 'ai']
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = projects.filter(p => activeCategory === 'all' || p.category === activeCategory)
  const featuredProjects = projects.slice(0, 3)
  
  const activeProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null
  const currentProject = activeProjectData

  // Portfolio Statistics
  const stats = [
    { icon: Briefcase, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Global glow background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30"></div>
      
      {/* HERO SECTION */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6 animate-slideUp">
            <div className="space-y-2">
              <p className="text-sm text-teal-400 font-semibold tracking-widest uppercase">
                ✨ Creative Portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Showcase Our{" "}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Best Work
                </span>
              </h1>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              We've delivered cutting-edge solutions across web, mobile, and branding. See how we've helped businesses transform their digital presence.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-lg hover:shadow-teal-500/30 rounded-lg font-semibold transition-all hover:scale-105">
                Start Your Project
              </a>
              <a href="/services" className="px-8 py-3 border border-gray-600 hover:bg-white/10 rounded-lg font-semibold transition-all">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Card - Portfolio Stats */}
          <div className="relative animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-teal-500/30 transition">
              <h3 className="text-2xl font-bold mb-6">Portfolio Overview</h3>
              
              {/* Performance Badge */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Total Projects</p>
                  <p className="text-3xl font-bold">{projects.length}+</p>
                </div>
                <div className="text-right">
                  <p className="text-teal-400 font-semibold text-lg flex items-center gap-1 justify-end">
                    <TrendingUp size={18} /> 98% Success
                  </p>
                </div>
              </div>

              {/* Featured Stats */}
              <div className="space-y-3">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-500/20 rounded-lg">
                          <Icon size={18} className="text-teal-400" />
                        </div>
                        <span className="text-sm text-gray-400">{stat.label}</span>
                      </div>
                      <span className="font-bold text-lg">{stat.value}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-10 container mx-auto px-4 py-20 border-t border-white/10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-400">Hand-picked selection of our best work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-b from-teal-500/20 to-transparent">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute top-4 right-4">
                  <Eye size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-teal-300 transition-colors">{project.title}</h3>
                  <Badge variant="default" className="capitalize">{project.category}</Badge>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.slice(0, 2).map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs bg-teal-500/20 text-teal-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-400">+{project.techStack.length - 2}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="relative z-10 container mx-auto px-4 py-12 border-t border-white/10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">All Projects</h2>
          <p className="text-gray-400">Browse our complete portfolio</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-teal-500/50'
              }`}
            >
              {category === 'all' ? '🎯 All' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 animate-slideUp"
              style={{ animationDelay: `${0.1 * (idx % 3)}s` }}
            >
              <div className="relative overflow-hidden h-56 bg-gradient-to-b from-teal-500/10 to-transparent">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 bg-black/60 rounded-full">
                    <Eye size={28} className="text-teal-300" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="default" className="capitalize mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-bold group-hover:text-teal-300 transition-colors mb-2">{project.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs bg-teal-500/20 text-teal-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center border-t border-white/10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-lg hover:shadow-teal-500/30 rounded-lg font-semibold transition-all hover:scale-105">
              Get Started Today
            </a>
            <a href="/services" className="px-8 py-4 border border-gray-600 hover:bg-white/10 rounded-lg font-semibold transition-all">
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY MODAL */}
      {selectedProject && currentProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-lg transition"
            >
              <X size={28} />
            </button>

            {/* Image display */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50">
              <img
                src={currentProject.images[currentImageIndex]}
                alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-96 object-cover"
              />
              
              {/* Navigation arrows */}
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? currentProject.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition backdrop-blur"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(prev => prev === currentProject.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition backdrop-blur"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Image counter and info */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                  <p className="text-gray-400">{currentProject.description}</p>
                </div>
                {currentProject.images.length > 1 && (
                  <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </div>
                )}
              </div>

              {/* Tech stack */}
              <div className="flex gap-2 flex-wrap">
                {currentProject.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action button */}
              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:shadow-indigo-500/50 rounded-lg transition-all font-semibold"
                >
                  <Eye size={18} />
                  Visit Live Project
                </a>
              )}
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
                <span className="text-sm font-semibold text-indigo-400">Award-Winning Portfolio</span>
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
              <div key={project.id} className="group relative overflow-hidden rounded-3xl cursor-pointer animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative overflow-hidden h-96">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Image count badge */}
                  <div className="absolute top-4 right-4 px-3 py-2 bg-black/60 backdrop-blur rounded-lg text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    {project.images.length} images
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{project.description}</p>
                  
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => {
                        setSelectedProject(project.id)
                        setCurrentImageIndex(0)
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:shadow-indigo-500/50 rounded-xl transition-all text-sm font-semibold"
                    >
                      <Eye size={18} />
                      View Gallery
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-semibold"
                      >
                        <ArrowRight size={18} />
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

          {/* PROJECTS GRID - IMAGE SHOWCASE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 bg-slate-800/30 backdrop-blur hover:bg-slate-800/60 animate-slideUp cursor-pointer h-full" style={{ animationDelay: `${idx * 0.05}s` }}>
                {/* Main image with hover effect */}
                <div className="relative overflow-hidden h-56">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Images count overlay */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur rounded text-xs font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    {project.images.length} pics
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col h-full">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.slice(0, 2).map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="px-3 py-1 text-xs font-semibold text-gray-400">+{project.techStack.length - 2}</span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={() => {
                        setSelectedProject(project.id)
                        setCurrentImageIndex(0)
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:shadow-indigo-500/50 rounded-lg transition-all text-sm font-semibold"
                    >
                      <Eye size={16} />
                      Gallery
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-semibold"
                      >
                        <ArrowRight size={16} />
                        Visit
                      </a>
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


