'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Working with Ignisis Solutions was a smooth and professional experience. They understood our requirements quickly and delivered a modern digital presence that represents our construction business really well.',
    name: 'Seco',
    role: 'Construction Company',
  },
  {
    quote:
      'Ignisis Solutions did an excellent job understanding our brand and presenting our E-bike business in a clean and modern way. The communication was clear throughout the project and we are very happy with the final result.',
    name: 'Evoo',
    role: 'E-Bikes Company',
  },
  {
    quote:
      'The team understood our business and created a professional online presence that reflects the quality of our tensile shade solutions. The design is clean, modern and easy for our customers to navigate.',
    name: 'Tensile Shades',
    role: 'Tensile Shades Company',
  },
  {
    quote:
      'Ignisis Solutions turned our ideas into a professional digital experience that feels both modern and practical. They were responsive, creative and paid attention to the small details that made a big difference.',
    name: 'TTT Global Services',
    role: 'International Compnay',
  },
  {
    quote:
      'From the initial discussion to the final delivery, the process was straightforward and well organized. The team brought a fresh perspective to our brand and delivered a website that looks professional and works beautifully.',
    name: 'Client',
    role: 'Growing Business',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      )
    }, 5500)

    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section className="border-t border-white/10 bg-[#0d203a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]">
            Client feedback
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built with clarity. Remembered for the result.
          </h2>

          <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
            We believe the best digital work starts with listening properly,
            communicating clearly and staying focused on what the business needs.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Show previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Show next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#17A2C7] hover:bg-[#17A2C7] hover:text-[#0A1930]"
            >
              <ChevronRight size={18} />
            </button>

            <span className="ml-2 text-sm text-slate-500">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
          </div>
        </div>

        <div className="relative min-h-[310px] overflow-hidden rounded-2xl border border-white/10 bg-[#0A1930]/65 p-7 sm:p-10">
          <Quote
            size={58}
            className="absolute right-7 top-7 text-[#17A2C7]/20 sm:right-10 sm:top-10"
          />

          <AnimatePresence mode="wait">
            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.45 }}
              className="flex min-h-[230px] flex-col justify-between"
            >
              <blockquote className="max-w-2xl text-xl font-medium leading-relaxed text-white sm:text-2xl">
                “{activeTestimonial.quote}”
              </blockquote>

              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-[#66d4eb]">
                  {activeTestimonial.name}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {activeTestimonial.role}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="absolute bottom-5 right-7 flex gap-2 sm:right-10">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-7 bg-[#17A2C7]'
                    : 'w-2 bg-white/20 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}