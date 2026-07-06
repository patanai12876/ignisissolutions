"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "High-performance scalable websites & web apps.",
    image: "/images/web1.jpg",
    features: [
      "Custom Website Development",
      "Responsive Design",
      "SEO Optimization",
      "Fast Performance",
    ],
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads and growth strategies.",
    image: "/images/digital.jpg",
    features: [
      "SEO Optimization",
      "Paid Ads Campaigns",
      "Social Media Growth",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Branding",
    desc: "Strong brand identity with modern visuals.",
    image: "/images/branding.png",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color System",
      "Visual Identity",
    ],
  },
  {
    title: "Social Media Management",
    desc: "Social presence building to grow engagement and leads.",
    image: "/images/sMM.png",
    features: [
      "Content Strategy",
      "Post Scheduling",
      "Community Engagement",
      "Performance Reporting",
    ],
  },
  {
    title: "Business Consultation",
    desc: "Strategic growth planning for businesses.",
    image: "/images/business1.jpg",
    features: [
      "Business Strategy",
      "Growth Planning",
      "Process Optimization",
      "Market Analysis",
    ],
  },
  {
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure checkout.",
    image: "/images/commerce.webp",
    features: [
      "Online Store Development",
      "Payment Integration",
      "Admin Dashboard",
      "Secure Checkout",
    ],
  },
];

const process = [
  { title: "Discovery", desc: "Understanding your business and goals" },
  { title: "Strategy", desc: "Planning the best approach" },
  { title: "Design", desc: "Creating UI/UX and structure" },
  { title: "Development", desc: "Building the solution" },
  { title: "Launch", desc: "Deploy and optimize" },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<{
    title: string;
    desc: string;
    image: string;
    features: string[];
  } | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Global glow background - always visible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 relative">

        {/* HEADING */}
        <section className="text-center max-w-3xl mx-auto mt-16 relative animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="absolute -inset-20 bg-gradient-to-b from-indigo-600/20 to-transparent blur-2xl z-0 opacity-30"></div>
          
          <p className="text-sm text-blue-400 mb-4 tracking-wide">
            COMPREHENSIVE SOLUTIONS
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We provide end-to-end digital solutions tailored to help businesses grow, scale, and succeed in the modern digital landscape.
          </p>
        </section>

        {/* SERVICES */}
        <section className="relative animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s: {title: string; desc: string; image: string; features: string[]}, i: number) => (
              <div
                key={i}
                onClick={() => setSelected(s)}
                className="group cursor-pointer relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-300"></div>
                
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-indigo-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
                  <div className="relative h-[200px] w-full overflow-hidden flex-shrink-0">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition">{s.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 flex-grow">{s.desc}</p>
                    <div className="mt-4 text-indigo-400 text-sm opacity-0 group-hover:opacity-100 transition">Learn more →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS (CLICKABLE) */}
        <section className="relative py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-400 mt-4">How we transform your ideas into reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step: any, i: number) => {
              const isActive = activeStep === i;

              return (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`cursor-pointer rounded-xl p-6 border transition-all duration-300 backdrop-blur-sm ${
                    isActive
                      ? "bg-gradient-to-br from-indigo-600/30 to-blue-600/20 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-105"
                      : "bg-slate-800/40 border-slate-700 hover:border-indigo-400/50 hover:bg-slate-800/60"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold mb-3 ${
                      isActive ? "text-indigo-400" : "text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </div>

                  <h3 className="font-semibold text-lg">{step.title}</h3>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-cyan-600/10 rounded-3xl blur-2xl -z-10"></div>
          
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center backdrop-blur-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to bring your vision to life. Contact us today to discuss your project and get a personalized consultation.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition duration-300">
                Get Started Now
              </button>
            </Link>
          </div>
        </section>

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6 relative grid grid-cols-1 md:grid-cols-2 gap-6">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white z-10"
            >
              ✕
            </button>

            {/* Left: Image */}
            <div className="relative h-56 md:h-[360px] w-full rounded-xl overflow-hidden">
              <Image src={selected.image} alt={selected.title} fill className="object-cover" />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>

                <p className="text-gray-300 mb-4">{selected.desc}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key features</h4>
                  <div className="space-y-2">
                    {selected.features.map((f: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                        <span className="text-indigo-500">✔</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <div className="text-gray-400">Ideal for</div>
                    <div className="text-white font-medium">Startups, SMEs, Agencies</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Typical timeline</div>
                    <div className="text-white font-medium">4 - 8 weeks</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-400 text-sm">Starting from</div>
                  <div className="text-white font-semibold">Contact for pricing</div>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Link href={`/contact?service=${encodeURIComponent(selected.title)}`}>
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg font-semibold hover:scale-105 transition">
                    Get Started
                  </button>
                </Link>

                <Link href={`/contact?service=${encodeURIComponent(selected.title)}&intent=proposal`} className="flex-1">
                  <button className="w-full px-4 py-2 border border-white/10 rounded-lg text-sm text-white hover:bg-white/5 transition">Request Proposal</button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      </div>
    </div>
  );
}