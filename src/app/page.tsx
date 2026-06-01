export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden mt-5 relative">
      {/* Global glow background - always visible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30 pointer-events-none"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 animate-fadeIn">
      {/* HERO */}
      <section className="container py-24 md:py-32 text-center relative animate-slideUp" style={{ animationDelay: '0.1s' }}>
      
        {/* gradient glow background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-600/20 via-blue-500/15 to-cyan-500/20 blur-3xl opacity-30 pointer-events-none"></div>

        {/* small badge */}
        <p className="text-sm text-blue-400 mb-4 tracking-wide animate-slideDown relative z-20" style={{ animationDelay: '0.2s' }}>
          BUSINESS CONSULTANCY & DIGITAL AGENCY
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative z-20">
          We Design & Scale{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Modern Businesses
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 relative z-20">
          Ignisis Solutions helps companies grow with strategy, technology, and powerful digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">

          {/* Primary CTA */}
          <a
            href="/contact"
            className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition duration-300"
          >
            Get Free Consultation
          </a>

          {/* Secondary CTA */}
          <a
            href="/services"
            className="px-8 py-4 rounded-xl font-semibold border border-gray-600 hover:bg-gray-800 transition duration-300"
          >
            Explore Services
          </a>

        </div>
      </section>


      {/* WHAT WE DO */}
      <section className="container py-20 animate-slideUp" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
            <p className="text-gray-400">
              Data-driven strategies to grow and optimize your business operations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-400">
              Campaigns that generate traffic, leads, and real business growth.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400">
              Fast, scalable, and modern websites tailored for your brand.
            </p>
          </div>

        </div>

        {/* VIEW ALL SERVICES */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
          >
            View All Services →
          </a>
        </div>
      </section>


      {/* FEATURED SHOWCASE - TRADESYNC */}
      <section className="container py-16 animate-slideUp border-t border-white/10" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-indigo-400 font-semibold tracking-widest uppercase mb-3"> Featured Project</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Check Out <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">TradeSync</span>
          </h2>
          <p className="text-gray-400 mb-6">A professional copy trading platform serving 150K+ traders with real-time trade execution and advanced analytics.</p>
          <a 
            href="https://trade-sync-seven.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 rounded-lg font-semibold transition-all hover:scale-105"
          >
            View Live Platform →
          </a>
        </div>
      </section>


      {/* CTA */}
      <section className="text-center py-20 relative border-t border-white/10" style={{ animationDelay: '0.5s' }}>

        {/* subtle glow */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl opacity-30 pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-20">
          Let’s Build Something Impactful
        </h2>

        <p className="text-gray-400 mb-6 relative z-20">
          Ready to scale your business with smart solutions?
        </p>

        <a
          href="/contact"
          className="inline-block relative z-20 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 transition duration-300"
        >
          Start Now
        </a>
      </section>

      </div>
    </div>
  )
}