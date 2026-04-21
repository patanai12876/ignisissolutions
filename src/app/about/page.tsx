import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Global glow background - always visible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative mt-10">

        {/* SECTION 1: INTRO */}
        <div className="grid md:grid-cols-2 gap-16 items-center animate-slideUp" style={{ animationDelay: '0.1s' }}>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Build{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Ignisis Solutions is a modern business consultancy and digital agency
              dedicated to helping companies scale through technology, innovation,
              and strategic thinking.
            </p>

            <p className="mt-4 text-gray-400">
              We combine design, development, and business intelligence to deliver
              impactful and future-ready solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-slate-800/40 border border-slate-700 backdrop-blur-xl rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To empower businesses with intelligent digital solutions that drive
                growth, efficiency, and long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* SECTION 2: VALUES */}
        <div className="mt-24 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Innovation",
                desc: "We embrace modern technologies to build future-ready solutions.",
              },
              {
                title: "Integrity",
                desc: "Transparency and trust are at the core of everything we do.",
              },
              {
                title: "Excellence",
                desc: "We deliver high-quality results that exceed expectations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group bg-slate-800/40 border border-slate-700 rounded-2xl p-6 backdrop-blur-xl transition-all hover:scale-[1.03] hover:border-indigo-500 animate-slideUp"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition"></div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: STATS */}
        <div className="mt-28 grid md:grid-cols-3 gap-10 text-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
          {[
            { number: "50+", label: "Clients Served" },
            { number: "100+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 backdrop-blur hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-28 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* SECTION 4: APPROACH */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center animate-slideUp" style={{ animationDelay: '0.4s' }}>

          <div className="bg-slate-800/40 border border-slate-700 backdrop-blur-xl rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Our Approach
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We follow a structured and client-focused approach where every
              solution is tailored to specific business goals. From strategy to
              execution, we ensure clarity, collaboration, and performance.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Why Choose Us
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-cyan-400 transition">• Strategic + technical expertise</li>
              <li className="hover:text-cyan-400 transition">• Scalable modern solutions</li>
              <li className="hover:text-cyan-400 transition">• Business-focused outcomes</li>
              <li className="hover:text-cyan-400 transition">• Long-term partnership mindset</li>
            </ul>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-32 text-center animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <div className="relative bg-slate-800/40 border border-slate-700 rounded-2xl p-12 backdrop-blur-xl overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-blue-500/10 to-cyan-500/10"></div>

            <h2 className="text-3xl font-semibold mb-4 relative text-white">
              Let’s Build Something Exceptional
            </h2>

            <p className="text-gray-300 mb-6 relative">
              Partner with us to transform your ideas into powerful digital solutions.
            </p>

            <a
              href="/contact"
              className="inline-block relative px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 hover:scale-105 transition-all shadow-lg shadow-indigo-500/20 font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}