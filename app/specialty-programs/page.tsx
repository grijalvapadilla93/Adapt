"use client";

import { motion } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";
import NoiseOverlay from "@/src/components/NoiseOverlay";
import DotGrid from "@/src/components/DotGrid";
import FlipWord from "@/src/components/FlipWord";

const programs = [
  {
    title: "ADAPT Kids",
    subtitle: "Ages 8-12",
    tag: "Foundations",
    description: "Fun, high-energy training focused on building essential motor skills, coordination, and athletic confidence in a supportive, dynamic environment.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn46UfW-JSvoJFLBaJuuXGXRfzeB5Vl5vACsRpR6vTb9ezQ0IXh9phYb36t9T5wf_0l1hmH3PGSndF4LqMFsZIkdzLB7P6xYlrIvIPZHRlCnKt1_JHtg8EqwVAnwoMiVhCoFzKfJceSKh9by4l_BLw2TtUPnfcXlhmK16mmZSOQmAWCYJf2A2c1YKm2qMKUEFhGPmVdXp-5FTjYF5UfirOa9vf40s6bAk7gUci9mLvsXRIM99koB5XqYI-qHDhBd9F_z8fu8ABLweq",
    wide: true
  },
  {
    title: "ASAP",
    subtitle: "Speed & Performance",
    tag: "Elite",
    description: "Advanced protocols for acceleration, top-end velocity, and multi-directional mechanics. For dedicated youth and adult competitors.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTze99Gi3csyYeVUysQ_CffyHPN_jbffkXpt2sPv0Toki0WeQjXIFF0cSPA8erUQVxuxvXnc1OPRadgAw1zB1R-lL2cSvRoEZdwOcHd-5qYy27v8-guw8MOla4uxh4PcfxLJBHOHPLWdhrP4WWs-YjBV323Ee67ombRYVMuA6SQ8XZqSPnZbJ-PDx0zxlULpzmFvepDFP0ZLdXess_vBTCnTLUJqrCydCSqg4RrN_3BiYjGkrNvJ4X6_Cs9yLAcqFFrq63qNARUk",
    wide: false
  },
  {
    title: "YDP",
    subtitle: "Youth Development Program",
    tag: "Ages 12-17",
    tag2: "Development",
    description: "A systematic approach to building raw power, linear speed, and proper lifting technique. Designed to prepare young athletes for varsity competition and long-term athletic success while fortifying injury resilience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHTghhpdUQb9Gi5yS7GTIi2XeT3i_7mar9q_hOkTRtqhhaRlEdjVkv6Xx9l032rENUfR_tWHPbvXxEG2bRF4NXSAvi81zIhHNHY0nTUWgX2UbWoK8c3h0O5NHDIJASkzpFqEXgpVz5fx0oScXIjJ296gMqko4DDvV1IkDCzZu-BrwQgGQw4mqhGD8ow08dvc803c6d3m_oGgqcePftzNKuxaBy_E8bXnsW8XjAn3mFdqp1D4a7uUNEcYrDY2Z5MO9cguxnpeKpRI9z",
    wide: true
  }
];

export default function SpecialtyProgramsPage() {
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }));
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <header className="text-center mb-16 px-6 md:px-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-6 bg-surface-container-high px-4 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(42,183,255,0.1)]"
        >
          <span className="mr-1.5"><Zap className="w-4 h-4 text-primary" /></span>
          <span className="font-label-md text-label-md text-on-surface tracking-widest uppercase whitespace-nowrap">Specialty & Youth Development</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display-xl text-4xl sm:text-7xl text-on-surface mb-6 uppercase"
        >
          PRECISION TRAINING<br />
          <span className="text-primary">FOR THE NEXT GENERATION</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Our specialty programs are engineered to build foundational athleticism, explosive power, and injury resilience. From youth development to elite acceleration protocols, we forge athletes at every stage of their journey.
        </motion.p>
      </header>

      {/* Bento Grid Section */}
      <section className="relative py-16 w-full overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070f17 0%, #0c1c2e 40%, #0a1625 60%, #070f17 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        <NoiseOverlay />
        <DotGrid />
        <div className="px-6 md:px-16 pb-0 max-w-screen-2xl mx-auto relative z-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full"></div>
          </div>
          <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-primary/8 blur-[180px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/4 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px] relative z-10">
          {/* ADAPT KIDS - Wide card */}
          <article className="md:col-span-8 relative rounded-xl overflow-hidden group bg-surface-container border border-surface-bright/50">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${programs[0].image}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
            <div className="absolute inset-0 border-t border-primary/30 rounded-xl"></div>
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-surface/80 backdrop-blur-md text-primary border border-primary/20 px-3 py-1 rounded font-label-md text-label-md uppercase tracking-wider">{programs[0].subtitle}</span>
                <span className="bg-surface/80 backdrop-blur-md text-on-surface border border-surface-bright px-3 py-1 rounded font-label-md text-label-md uppercase tracking-wider">{programs[0].tag}</span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-3 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">{programs[0].title}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-6">{programs[0].description}</p>
              <button
                onClick={openLeadModal}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider hover:text-on-surface transition-colors cursor-pointer"
              >
                Explore Program <ArrowRight className="w-4 h-4 inline" />
              </button>
            </div>
          </article>

          {/* ASAP - Narrow card */}
          <article className="md:col-span-4 relative rounded-xl overflow-hidden group bg-surface-container border border-surface-bright/50">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${programs[1].image}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-black/40"></div>
            <div className="absolute inset-0 border-t border-primary/30 rounded-xl"></div>
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="mb-auto">
                <span className="bg-primary/20 text-primary border border-primary/50 px-3 py-1 rounded font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> {programs[1].tag}
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-3 uppercase tracking-tight">{programs[1].title}</h2>
              <h3 className="font-label-md text-label-md text-primary mb-3 uppercase tracking-widest">{programs[1].subtitle}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{programs[1].description}</p>
              <button
                onClick={openLeadModal}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider hover:text-on-surface transition-colors cursor-pointer"
              >
                View Details <ArrowRight className="w-4 h-4 inline" />
              </button>
            </div>
          </article>

          {/* YDP - Full width card */}
          <article className="md:col-span-12 relative rounded-xl overflow-hidden group bg-surface-container border border-surface-bright/50 h-[400px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${programs[2].image}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:hidden"></div>
            <div className="absolute inset-0 border-t border-primary/30 rounded-xl"></div>
            <div className="relative h-full flex flex-col justify-center p-8 md:p-12 w-full md:w-2/3 lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-surface/80 backdrop-blur-md text-primary border border-primary/20 px-3 py-1 rounded font-label-md text-label-md uppercase tracking-wider">{programs[2].tag}</span>
                <span className="bg-surface/80 backdrop-blur-md text-on-surface border border-surface-bright px-3 py-1 rounded font-label-md text-label-md uppercase tracking-wider">{programs[2].tag2}</span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-2 uppercase tracking-tight">{programs[2].title}</h2>
              <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mb-4 uppercase tracking-wide">{programs[2].subtitle}</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">{programs[2].description}</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openLeadModal}
                  className="bg-primary-container text-background font-label-md text-label-md uppercase px-8 py-4 rounded font-bold shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] transition-all duration-300 cursor-pointer"
                >
                  Enroll Now
                </button>
                <button className="border border-primary text-primary font-label-md text-label-md uppercase px-8 py-4 rounded font-bold hover:bg-primary/10 transition-colors duration-300 cursor-pointer">
                  Curriculum
                </button>
              </div>
            </div>
          </article>
        </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-6 md:px-16 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #081018 0%, #0c1c2e 50%, #081018 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <NoiseOverlay />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl blur-3xl opacity-50 pointer-events-none"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="text-primary font-label-md uppercase tracking-[0.2em] text-xs mb-4 block">Next Generation Athletics</span>
            <h2 className="font-display-xl text-3xl md:text-5xl text-on-surface uppercase mb-6">
              <FlipWord word="BUILD THE FUTURE" triggerOnView />
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
              From foundational motor skills to elite competition prep — every athlete deserves a program engineered for their stage.
            </p>
            <button
              onClick={openLeadModal}
              className="bg-primary-container text-black font-label-md text-label-md uppercase px-10 py-4 rounded font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] cursor-pointer"
            >
              Enroll Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
