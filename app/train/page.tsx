"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import NoiseOverlay from "@/src/components/NoiseOverlay";
import DotGrid from "@/src/components/DotGrid";
import FlipWord from "@/src/components/FlipWord";

const trainingCategories = [
  {
    title: "Strength & Conditioning",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn46UfW-JSvoJFLBaJuuXGXRfzeB5Vl5vACsRpR6vTb9ezQ0IXh9phYb36t9T5wf_0l1hmH3PGSndF4LqMFsZIkdzLB7P6xYlrIvIPZHRlCnKt1_JHtg8EqwVAnwoMiVhCoFzKfJceSKh9by4l_BLw2TtUPnfcXlhmK16mmZSOQmAWCYJf2A2c1YKm2qMKUEFhGPmVdXp-5FTjYF5UfirOa9vf40s6bAk7gUci9mLvsXRIM99koB5XqYI-qHDhBd9F_z8fu8ABLweq",
    description: "Elite Olympic lifting platforms, calibrated iron plates, and custom barbells engineered for maximum power output."
  },
  {
    title: "Personal Training",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVkEfBONbCreW6Y3KT77bad7Sqpw0QAq1AxxFjE2LquX9CZH53W0Kyw2frpwU5gtTa2lRSWKHkO-XfGaILmA6vgSonZZx7OC52JwXZ21VmLX3qFIVikYZbX6uI0JhvM_H_rz2rzSA_NNVp9uZ0cC4_E3dx2HgruC471Y5qSMThvbI_jhJ4pgx77Ppb6X7AvD7R5p_FNUkbaDluOpJCJWFatmZm5ec7JWrF0rJD4MN42suzFYbxKdZI4sdZ3QdMuR0Kp7LrgV7cCkWR",
    description: "1-on-1 coaching with master performance strategists specializing in biomechanics, velocity mechanics, and physical rehabilitation."
  },
  {
    title: "Group Classes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD58a7kqYnWG5fcbEVNLrzUpTx1HZOkRmLsiRwh-yBT2tXvYZ7nR81SMlmUBRwhfSuAtPqgc-SYohKOdROLNMzbJlAxvEtkLM_ZmcvTRr6JH9-hBYVQ_4S8KmK7ZIuZCpIqfkVrr2e1aww5spODo_cLvFixgO4ASx0VPfQ9mdyLL6T5R71103TgnwFQrjuTDdyH4fdIGhgaVRmcVbKrc6vxoITShEKVv53zQ7GXQCpKJQOYA-FYO0OtoKrtzpHWQHLrkJbLo8oHwpcr",
    description: "High-intensity functional sessions designed to push cardiovascular thresholds and build raw athletic power in a competitive environment."
  },
  {
    title: "Specialty Programs",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHTghhpdUQb9Gi5yS7GTIi2XeT3i_7mar9q_hOkTRtqhhaRlEdjVkv6Xx9l032rENUfR_tWHPbvXxEG2bRF4NXSAvi81zIhHNHY0nTUWgX2UbWoK8c3h0O5NHDIJASkzpFqEXgpVz5fx0oScXIjJ296gMqko4DDvV1IkDCzZu-BrwQgGQw4mqhGD8ow08dvc803c6d3m_oGgqcePftzNKuxaBy_E8bXnsW8XjAn3mFdqp1D4a7uUNEcYrDY2Z5MO9cguxnpeKpRI9z",
    description: "Youth development, speed acceleration protocols, and elite competition prep for athletes at every stage of their journey."
  }
];

const stats = [
  { value: "15+", label: "Coaches" },
  { value: "24/7", label: "Access" },
  { value: "Olympic", label: "Platforms" }
];

const categoryRoutes: Record<string, string> = {
  "Strength & Conditioning": "/train",
  "Personal Training": "/personal-training",
  "Group Classes": "/group-classes",
  "Specialty Programs": "/specialty-programs",
};

export default function TrainPage() {
  const router = useRouter();
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }));
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-8 z-10">
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="h-px w-12 bg-primary/50"></span>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
                  Performance Training
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display-xl text-5xl sm:text-7xl text-on-surface mb-6 uppercase"
              >
                <FlipWord word="TRAIN" />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-body-lg text-body-lg text-on-surface-variant max-w-lg"
              >
                Access elite training equipment, custom Olympic lifting platforms, premium performance metrics, and specialized coaches engineered to build strength, mobility, and physical robustness.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={openLeadModal}
                className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-8 py-4 font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] w-full sm:w-auto cursor-pointer"
              >
                BOOK A TOUR
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("pricing");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-primary text-primary font-label-md text-label-md uppercase rounded px-8 py-4 font-bold hover:bg-primary/10 transition-colors w-full sm:w-auto cursor-pointer"
              >
                VIEW PRICING
              </button>
            </motion.div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-low border-t border-primary/30">
              <img
                alt="Training Floor"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTze99Gi3csyYeVUysQ_CffyHPN_jbffkXpt2sPv0Toki0WeQjXIFF0cSPA8erUQVxuxvXnc1OPRadgAw1zB1R-lL2cSvRoEZdwOcHd-5qYy27v8-guw8MOla4uxh4PcfxLJBHOHPLWdhrP4WWs-YjBV323Ee67ombRYVMuA6SQ8XZqSPnZbJ-PDx0zxlULpzmFvepDFP0ZLdXess_vBTCnTLUJqrCydCSqg4RrN_3BiYjGkrNvJ4X6_Cs9yLAcqFFrq63qNARUk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full z-[-1]"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/10 blur-[100px] rounded-full z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Training Categories Grid */}
      <section className="relative px-6 md:px-16 py-24 max-w-full mx-0 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070f17 0%, #0c1c2e 40%, #0a1625 60%, #070f17 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        <NoiseOverlay />
        <DotGrid />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/8 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] bg-primary/6 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/4 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display-xl text-3xl md:text-5xl uppercase mb-12 text-primary-container text-center"
          >
            <FlipWord word="TRAINING DISCIPLINES" triggerOnView />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => router.push(categoryRoutes[cat.title])}
                className="group relative rounded-xl overflow-hidden h-[450px] shadow-2xl border-t border-primary/30 bg-surface-container-low cursor-pointer"
              >
                <img
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={cat.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-0 md:translate-y-[130px] md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-4 drop-shadow-md">{cat.title}</h3>
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 h-auto md:h-[130px]">
                      <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">{cat.description}</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); openLeadModal(); }}
                        className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-6 py-2.5 shadow-[0_0_20px_rgba(42,183,255,0.3)] transition-shadow font-bold w-max cursor-pointer"
                      >
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-primary/6 blur-[150px] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative rounded-xl p-8 bg-surface-container-low border-t border-primary/20 flex flex-col items-center text-center gap-2 shadow-lg"
            >
              <span className="font-display-xl text-4xl md:text-5xl text-primary-container uppercase">
                <FlipWord word={stat.value} triggerOnView />
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-16 py-8 max-w-full mx-0">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-surface-container-low border border-primary/30 shadow-2xl"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 px-8 md:px-16 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display-xl text-3xl md:text-4xl uppercase text-on-surface mb-2"
                >
                  Ready to transform?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-body-lg text-body-lg text-on-surface-variant max-w-md"
                >
                  Step inside and experience the difference. Book your tour today.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={openLeadModal}
                  className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-10 py-4 font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] cursor-pointer whitespace-nowrap"
                >
                  BOOK A TOUR
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
