'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const serviceOptions = [
  'Web Development',
  'E-commerce Solutions',
  'Custom Software Development',
  'Digital Marketing',
  'Business Consultancy',
  'Branding',
  'Graphic Designing',
  'Other',
]

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ignisissolutions@gmail.com',
    href: 'mailto:ignisissolutions@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+92 302 5708769',
    href: 'https://wa.me/923025708769',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: '280 N Block, Model Town, Lahore, 54700',
    href: 'https://www.google.com/maps/place/Ignisis+Solutions/data=!4m2!3m1!1s0x0:0xced23207e01bfe9d?sa=X&ved=1t:2428&ictx=111',
  },
]

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function validate(): boolean {
    const next: Partial<FormState> = {}
    if (form.name.trim().length < 2) next.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (form.phone.trim().length < 10) next.phone = 'Enter a valid phone number.'
    if (form.company.trim().length < 2) next.company = 'Enter your business name.'
    if (!form.service) next.service = 'Select a service.'
    if (form.message.trim().length < 10) next.message = 'Tell us a bit more about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          services: [form.service],
          message: form.message,
        }),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Contact submit error', err)
      setStatus('error')
    }
  }

  return (
    <main className="overflow-x-hidden bg-[#0A1930] pt-24 text-white">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-0 h-[24rem] w-[24rem] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute right-[-6rem] top-6 h-[26rem] w-[26rem] rounded-full bg-[#17A2C7]/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 lg:pb-16 lg:pt-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66d4eb]"
          >
            Let&apos;s Talk
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 max-w-3xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl"
          >
            Tell us what you&apos;re trying to{' '}
            <span className="bg-gradient-to-r from-[#66d4eb] via-[#3da7e9] to-[#7187ff] bg-clip-text text-transparent">
              build or fix.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Share a few details below and we&apos;ll get back to you with next
            steps usually within one business day.
          </motion.p>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            {status === 'success' ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#17A2C7]/15 text-[#66d4eb]">
                  <Check size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Message sent.</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                  Thanks for reaching out we&apos;ll review your message and
                  get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* honeypot — hidden from real users, catches bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Full name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`mt-2 w-full rounded-xl border bg-[#0A1930] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#17A2C7] ${
                        errors.name ? 'border-red-400/60' : 'border-white/10'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`mt-2 w-full rounded-xl border bg-[#0A1930] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#17A2C7] ${
                        errors.email ? 'border-red-400/60' : 'border-white/10'
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Company / business <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={`mt-2 w-full rounded-xl border bg-[#0A1930] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#17A2C7] ${
                        errors.company ? 'border-red-400/60' : 'border-white/10'
                      }`}
                      placeholder="Business name"
                    />
                    {errors.company && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Phone number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`mt-2 w-full rounded-xl border bg-[#0A1930] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#17A2C7] ${
                        errors.phone ? 'border-red-400/60' : 'border-white/10'
                      }`}
                      placeholder="+92 302 5708769"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Service of interest <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`mt-2 w-full rounded-xl border bg-[#0A1930] px-4 py-3 text-sm text-white outline-none transition focus:border-[#17A2C7] ${
                      errors.service ? 'border-red-400/60' : 'border-white/10'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Project details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`mt-2 w-full resize-none rounded-xl border bg-[#0A1930] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#17A2C7] ${
                      errors.message ? 'border-red-400/60' : 'border-white/10'
                    }`}
                    placeholder="What are you trying to build, fix or improve?"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong sending your message. Please try again
                    or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#17A2C7] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5cd5eb] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* CONTACT INFO SIDE */}
          <div className="space-y-5">
            {contactChannels.map(({ icon: Icon, label, value, href }, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={href ? { y: -4 } : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#17A2C7]/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#17A2C7]/15 text-[#66d4eb]">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{value}</p>
                  </div>
                </motion.div>
              )

              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl border border-[#17A2C7]/20 bg-[#17A2C7]/5 p-5"
            >
              <div className="flex items-center gap-3">
                <Clock size={17} className="text-[#66d4eb]" />
                <p className="text-sm font-semibold">Response time</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                We reply to every inquiry within one business day usually
                sooner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={17} className="text-[#66d4eb]" />
                <p className="text-sm font-semibold">Not ready to commit?</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                A quick message is enough. We&apos;ll help you figure out
                scope and next steps together.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#66d4eb] transition hover:text-white"
              >
                Browse our services <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}