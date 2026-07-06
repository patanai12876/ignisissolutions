export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-x-hidden overflow-y-visible relative animate-slide-up">


      {/* GLOBAL BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px]" />

        <div className="absolute top-[500px] right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[130px]" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[130px]" />

      </div>



      <div className="relative z-10">



        {/* HERO */}

        <section className="container mx-auto px-6 py-20 md:py-28 mt-10 animate-slide-up">


          <div className="grid lg:grid-cols-2 gap-14 items-center">


            {/* TEXT */}

            <div>


              <p className="text-blue-400  mb-5">
                DIGITAL AGENCY & BUSINESS SOLUTIONS
              </p>


              <h1 className="text-3xl md:text-6xl font-bold leading-[1.25] overflow-visible">


                We Build


                <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-[1.1] overflow-visible">

                  Digital Experiences

                </span>


                That Grow Businesses


              </h1>



              <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">

                Ignisis Solutions helps businesses scale with modern websites,
                smart technology and powerful digital strategies.

              </p>




              <div className="flex flex-wrap gap-4 mt-8">


                <a
                  href="/contact"
                  className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 hover:scale-105 transition shadow-lg shadow-blue-500/20"
                >
                  Get Free Consultation
                </a>



                <a
                  href="/services"
                  className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
                >
                  Explore Services
                </a>


              </div>


            </div>





            {/* HERO MOCKUP */}

            <div className="relative">


              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />


              <div className="relative rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-xl p-6 shadow-2xl">


                <div className="flex gap-2 mb-6">

                  <span className="w-3 h-3 bg-red-400 rounded-full"/>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"/>
                  <span className="w-3 h-3 bg-green-400 rounded-full"/>

                </div>



                <div className="space-y-5">


                  <div className="h-5 bg-white/10 rounded w-3/4"/>



                  <div className="grid grid-cols-3 gap-4">


                    <div className="h-28 rounded-xl bg-indigo-500/20"/>
                    <div className="h-28 rounded-xl bg-blue-500/20"/>
                    <div className="h-28 rounded-xl bg-cyan-500/20"/>


                  </div>



                  <div className="h-44 rounded-xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20"/>


                </div>


              </div>


            </div>



          </div>



        </section>







        {/* STATS */}

        <section className="container mx-auto px-6 py-10 animate-slideUp [animation-delay:200ms]">


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">


            {[
              ["150+", "Projects"],
              ["50+", "Clients"],
              ["5+", "Years Experience"],
              ["24/7", "Support"]
            ].map((item,index)=>(

              <div
                key={index}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 text-center backdrop-blur"
              >

                <h3 className="text-3xl font-bold text-blue-400">
                  {item[0]}
                </h3>


                <p className="text-gray-400 mt-2">
                  {item[1]}
                </p>


              </div>


            ))}


          </div>


        </section>








        {/* SERVICES */}


        <section className="container mx-auto px-6 py-20 animate-slideUp [animation-delay:400ms]">


          <h2 className="text-4xl md:text-4xl font-bold text-center mb-10">

            What We Do

          </h2>




          <div className="grid md:grid-cols-3 gap-7">



            {[
              {
                title:"Web Development",
                text:"Fast, modern and conversion-focused websites built for growth."
              },
              {
                title:"Digital Marketing",
                text:"Strategies that improve visibility and bring real customers."
              },
              {
                title:"Business Strategy",
                text:"Technology solutions aligned with your business goals."
              }

            ].map((service,index)=>(


              <div
              key={index}
              className="p-8 rounded-3xl bg-white/[0.07] border border-white/10 hover:border-blue-500/40 transition hover:-translate-y-2"
              >


                <h3 className="text-xl font-semibold mb-3">

                  {service.title}

                </h3>


                <p className="text-gray-400 leading-relaxed">

                  {service.text}

                </p>


              </div>


            ))}


          </div>


        </section>










        {/* FEATURED PROJECT */}


        <section className="container mx-auto px-6 py-16 animate-slideUp [animation-delay:500ms]">


          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/20 via-blue-500/10 to-cyan-500/10 p-10 md:p-16">


            <p className="text-blue-400 tracking-widest text-sm mb-4">

              FEATURED PROJECT

            </p>



            <h2 className="text-4xl md:text-4xl font-bold">

              Brew and CO.

            </h2>



            <p className="text-gray-300 max-w-2xl mt-5 text-clip">

              A professional online Coffee Ordering Platform that allows users to browse the menu, select drinks and snacks, and place orders with a polished, user-friendly interface.

            </p>



            <a
              href="https://brew-and-co-acyz.vercel.app/"
              target="_blank"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 font-semibold hover:scale-105 transition"
            >

              View Live Platform →

            </a>



          </div>


        </section>










        {/* WHY US */}


        <section className="container mx-auto px-6 py-16 animate-slideUp [animation-delay:500ms]">


          <h2 className="text-4xl font-bold text-center mb-10">

            Why Choose Us?

          </h2>



          <div className="grid md:grid-cols-4 gap-5">


            {[
              "Modern Technology",
              "Creative Solutions",
              "Business Focused",
              "Long Term Support"
            ].map((item,index)=>(


              <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.06] border border-white/10 text-center"
              >

                {item}

              </div>


            ))}


          </div>


        </section>










        {/* CTA */}

<section className="container mx-auto px-6 py-16 animate-slideUp [animation-delay:600ms]">


  <div className="relative rounded-3xl bg-white/[0.06] border border-white/10 p-12 text-center overflow-hidden">


    {/* Glow Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-cyan-600/10 rounded-3xl blur-2xl -z-10"></div>


    <h2 className="text-4xl font-bold relative z-10">

      Let&apos;s Build Something Impactful

    </h2>



    <p className="mt-4 text-gray-300 relative z-10">

      Ready to scale your business with smart solutions?

    </p>



    <a
      href="/contact"
      className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl font-semibold hover:scale-105 transition relative z-10"
    >

      Start Now

    </a>


  </div>


</section>


      </div>


    </main>
  )
} 