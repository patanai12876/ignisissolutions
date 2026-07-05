'use client'

import { useForm } from 'react-hook-form'
import { Mail, Send, Clock, CheckCircle, MessageCircle, ArrowRight, ChevronDown, User, Phone, MessageSquare } from 'lucide-react'
import { useState } from 'react'

type ContactFormData = {
  fullName: string
  email: string
  phone: string
  services: string[]
  message: string
}

const servicesList = [
  'Web Development',
  'UI/UX Design',
  'Business Consulting',
  'AI Automation',
  'Mobile App Development',
  'E-Commerce Solutions',
  'Branding',
  'Digital Marketing',
]

const WHATSAPP_NUMBER = '923289459359'
const WHATSAPP_MESSAGE = 'Hello, I want to know more about your services.'

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitted }, reset, watch, setValue } = useForm<ContactFormData>({
    defaultValues: { services: [] }
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showServices, setShowServices] = useState(false)
  const selectedServices = watch('services') || []

  const toggleService = (service: string) => {
    const current = selectedServices.includes(service)
    if (current) {
      setValue('services', selectedServices.filter(s => s !== service))
    } else {
      setValue('services', [...selectedServices, service])
    }
  }

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  const onSubmit = async (data: ContactFormData) => {
    // Validate services
    if (!data.services || data.services.length === 0) {
      return
    }

    try {
      // Send to Resend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          services: data.services,
          message: data.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        reset()
        setShowServices(false)
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Global glow background - always visible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 animate-fadeIn">
      <div className="container max-w-6xl mx-auto py-16 px-6 relative mt-20">
        {/* HEADING SECTION */}
        <section className="text-center mb-20 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <p className="text-sm text-blue-400 mb-4 tracking-wide">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let&apos;s Create Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We&apos;re excited to hear about it. Reach out and let&apos;s build something extraordinary.
          </p>
        </section>

        {/* FORM SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start animate-slideUp" style={{ animationDelay: '0.5s' }}>
          {/* FORM */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/70 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="group/input relative">
                  <label className="flex text-sm font-semibold mb-3 text-white items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    Full Name
                  </label>
                  <input
                    {...register('fullName', { required: 'Name required' })}
                    className="w-full px-5 py-3.5 bg-slate-700/40 border border-slate-600/60 rounded-2xl text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:bg-slate-700/60 transition duration-300 hover:border-slate-500 group-focus-within/input:shadow-lg group-focus-within/input:shadow-indigo-500/10"
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-400 text-sm mt-2 flex items-center gap-1"><span>✗</span> {errors.fullName.message}</p>}
                </div>

                {/* Email Field */}
                <div className="group/input relative">
                  <label className="flex text-sm font-semibold mb-3 text-white items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Mail className="w-3 h-3 text-white" />
                    </div>
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email required' })}
                    className="w-full px-5 py-3.5 bg-slate-700/40 border border-slate-600/60 rounded-2xl text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:bg-slate-700/60 transition duration-300 hover:border-slate-500 group-focus-within/input:shadow-lg group-focus-within/input:shadow-indigo-500/10"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2 flex items-center gap-1"><span>✗</span> {errors.email.message}</p>}
                </div>

                {/* Phone Field */}
                <div className="group/input relative">
                  <label className="flex text-sm font-semibold mb-3 text-white items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-5 py-3.5 bg-slate-700/40 border border-slate-600/60 rounded-2xl text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:bg-slate-700/60 transition duration-300 hover:border-slate-500 group-focus-within/input:shadow-lg group-focus-within/input:shadow-indigo-500/10"
                    placeholder="+92 300 1234567"
                  />
                </div>

                {/* Services Dropdown */}
                <div className="group/input relative">
                  <label className="flex text-sm font-semibold mb-3 text-white items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">✓</span>
                    </div>
                    Services Interested In
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowServices(!showServices)}
                    className="w-full flex items-center justify-between px-5 py-3.5 bg-slate-700/40 border border-slate-600/60 rounded-2xl text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:bg-slate-700/60 transition duration-300 hover:border-slate-500 group-hover/input:shadow-lg group-hover/input:shadow-indigo-500/10"
                  >
                    <span className="text-left">
                      {selectedServices.length === 0
                        ? 'Select services...'
                        : `${selectedServices.length} service${selectedServices.length !== 1 ? 's' : ''} selected`}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {showServices && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 border border-slate-600/70 rounded-2xl shadow-2xl z-50 backdrop-blur-xl">
                      <style>{`
                        .services-dropdown {
                          scrollbar-width: thin;
                          scrollbar-color: rgba(99, 102, 241, 0.8) rgba(51, 65, 85, 0.3);
                        }
                        .services-dropdown::-webkit-scrollbar {
                          width: 8px;
                        }
                        .services-dropdown::-webkit-scrollbar-track {
                          background: rgba(51, 65, 85, 0.3);
                          border-radius: 10px;
                          margin: 8px 0;
                        }
                        .services-dropdown::-webkit-scrollbar-thumb {
                          background: linear-gradient(180deg, rgba(99, 102, 241, 0.9), rgba(59, 130, 246, 0.9));
                          border-radius: 10px;
                          border: 2px solid rgba(51, 65, 85, 0.3);
                        }
                        .services-dropdown::-webkit-scrollbar-thumb:hover {
                          background: linear-gradient(180deg, rgba(129, 140, 248, 1), rgba(96, 165, 250, 1));
                        }
                      `}</style>
                      <div className="services-dropdown max-h-80 overflow-y-auto space-y-1 p-3">
                        {servicesList.map((service) => {
                          const isChecked = selectedServices.includes(service)
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className="w-full flex items-center gap-3 cursor-pointer hover:bg-slate-700/60 px-4 py-3 rounded-xl transition group/service text-left"
                            >
                              <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition flex-shrink-0 ${
                                isChecked 
                                  ? 'bg-gradient-to-br from-indigo-600 to-blue-600 border-indigo-500 shadow-lg shadow-indigo-500/50' 
                                  : 'border-slate-500 group-hover/service:border-slate-400'
                              }`}>
                                {isChecked && <CheckCircle className="w-3 h-3 text-white" />}
                              </div>
                              <span className={`text-sm flex-1 ${
                                isChecked ? 'text-indigo-300 font-semibold' : 'text-gray-300 group-hover/service:text-gray-100'
                              }`}>
                                {service}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                  {isSubmitted && selectedServices.length === 0 && <p className="text-red-400/90 text-sm mt-2 flex items-center gap-1">✗ Please select at least one service</p>}
                </div>

                {/* Message Field */}
                <div className="group/input relative">
                  <label className="flex text-sm font-semibold mb-3 text-white items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 text-white" />
                    </div>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    {...register('message', { required: 'Message required' })}
                    className="w-full px-5 py-3.5 bg-slate-700/40 border border-slate-600/60 rounded-2xl text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:bg-slate-700/60 transition duration-300 hover:border-slate-500 resize-none group-focus-within/input:shadow-lg group-focus-within/input:shadow-indigo-500/10"
                    placeholder="Tell us about your project, vision, and goals..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-2 flex items-center gap-1"><span>✗</span> {errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl font-semibold text-white hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/50 rounded-2xl flex items-center gap-3 animate-slideDown">
                    <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Message sent successfully! ✓</p>
                      <p className="text-green-300 text-xs mt-0.5">We&apos;ll reply within 24 hours.</p>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-gradient-to-r from-red-500/20 to-rose-500/10 border border-red-500/50 rounded-2xl flex items-center gap-3 animate-slideDown">
                    <div className="w-6 h-6 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0 text-lg">⚠</div>
                    <div>
                      <p className="text-red-400 font-semibold text-sm">Something went wrong</p>
                      <p className="text-red-300 text-xs mt-0.5">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* PERKS */}
          <div className="space-y-6">
            {/* Quick Response */}
            <div className="group/card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-blue-600/10 opacity-0 group-hover/card:opacity-100 blur-2xl transition duration-300 rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-indigo-600/20 to-blue-600/15 border border-indigo-500/40 hover:border-indigo-400/60 rounded-2xl p-6 transition-all duration-300 group-hover/card:shadow-xl group-hover/card:shadow-indigo-500/20 hover:translate-y-[-2px]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/40 to-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition duration-300">
                    <CheckCircle className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-white">Quick Response</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">We typically respond to inquiries within 24 business hours with personalized attention.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Times */}
            <div className="group/card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/10 opacity-0 group-hover/card:opacity-100 blur-2xl transition duration-300 rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/15 border border-blue-500/40 hover:border-blue-400/60 rounded-2xl p-6 transition-all duration-300 group-hover/card:shadow-xl group-hover/card:shadow-blue-500/20 hover:translate-y-[-2px]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/40 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition duration-300">
                    <Clock className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-white">Available Times</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Monday - Friday, 9 AM - 6 PM PKT. Let&apos;s connect at a time that works best for you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Channels */}
            <div className="group/card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-indigo-600/10 opacity-0 group-hover/card:opacity-100 blur-2xl transition duration-300 rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-cyan-600/20 to-indigo-600/15 border border-cyan-500/40 hover:border-cyan-400/60 rounded-2xl p-6 transition-all duration-300 group-hover/card:shadow-xl group-hover/card:shadow-cyan-500/20 hover:translate-y-[-2px]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/40 to-indigo-500/30 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition duration-300">
                    <Mail className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-white">Multiple Channels</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Reach us via email, phone, WhatsApp, or contact form - whatever works best for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EMAIL SECTION */}
        <section className="mt-24 pt-24 border-t border-slate-700/50 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-blue-600/20 to-cyan-600/30 opacity-0 group-hover:opacity-100 blur-3xl transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/70 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-600/40 to-blue-600/30 flex-shrink-0 group-hover:scale-110 transition duration-300">
                    <Mail className="w-8 h-8 text-indigo-300" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Prefer to Email?</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">Send us an email directly and we&apos;ll get back to you within 24 hours with a personalized response.</p>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    const subject = "Let's Connect - Ignisis Solutions"
                    const body = "Hello,\n\nI'm interested in learning more about your services. Please tell me more about how you can help my business.\n\nThank you!"
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ignisissolutions@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:shadow-2xl hover:shadow-indigo-500/50 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 mt-8 group/btn relative overflow-hidden"
                >
                  <Mail className="w-5 h-5" />
                  <span>ignisissolutions@gmail.com</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed WhatsApp Button - Bottom Right */}
        <div className="fixed bottom-8 right-8 z-40 group">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 hover:shadow-2xl hover:shadow-green-500/60 transition-all duration-300 hover:scale-125 active:scale-95 border border-green-400/50 hover:border-green-300/80 relative"
            title="Chat with us on WhatsApp"
            aria-label="Open WhatsApp chat"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/10 animate-pulse"></div>
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-125 transition duration-300 relative z-10" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none border border-slate-700 shadow-lg">
            💬 Chat on WhatsApp
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold animate-bounce">
            1
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
