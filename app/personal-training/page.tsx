"use client";

import { motion } from "motion/react";
import NoiseOverlay from "@/src/components/NoiseOverlay";
import DotGrid from "@/src/components/DotGrid";
import FlipWord from "@/src/components/FlipWord";

const coaches = [
  {
    name: "Marcus Vance",
    specialty: "Strength & Conditioning",
    desc: "Former Olympian specializing in explosive power and biomechanical optimization.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhOk7p06O7YdjbLs5_6JtADBMFu9oG25BT2iljrqbzGj1LHPJtUfoIDi9clE7DZOaKlu3iKGQcSzpshNLjZ1-TdXUJI6SHldT64nw5w4Hk76PX3unpAtFl4mFKFj66x0PS2jYdIM7GzaT6clPcKJ64iMdZ_0mNp3_knKNjz6bGv6so8c0GOPGdP0PQslj2Qw0MqT_m0ib18hfRM2c3WXfLTaYeNHC-Tq_qAIZkQ8wSZJDVChwG4GnaExXBflWwaccat9Siqw8qP9Q"
  },
  {
    name: "Elena Rostova",
    specialty: "Endurance & Agility",
    desc: "Tactical endurance specialist focused on high-intensity sustained output and recovery protocols.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_TwBWqpOMgweHuhYhur6r9KyQjD2B-mTPIRggbbvNC2u7mpuUfEbMwDI4Pr1b3R4f1-Kx3Yqrf7QROM-R5iZIlcx99i93Gpizz7KG96IA1i02qmSFUqx-WFn5yUMCwm1gBMcexX4seUcP5X8hijrpBB1gQv3uq3PVi16UEC-_Dky99imL5e5tvF6zk8C63hTNJw94MPAAoLbBZFYt3135ODoJxZzDF5uoMTAm_bb6_TYDwjlKWWK22pPUmhR6WQkekuqMpcO6SsHE"
  },
  {
    name: "David Chen",
    specialty: "Mobility & Rehab",
    desc: "Expert in kinetic chains, injury prevention, and maximizing functional range of motion.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZap6cwitRBfU6XC2cQo7j7pPgm7L-vFevC-QyUC7X2WMK4vBmDv_Tj6wc2dLjhe30SLbIg4pzA_jWTMlFEBFpgU_ooEXg9CxQMWCMozn9yD0HdJYpYVpq0a_ffBdl5DWaAU7YjplBHxYUFVzfdm4p7Fozearfb1R0RhzKFtlfRDaHaSBPSLQwbrisaZNt4ENkr9bfssjTQMOjxq6ZJeEbRLnSn1MsaDBCsufS72KGDY2qLzoKDgygEMtGd3Osk-pgmx4_ZkFA_xVb"
  }
];

const benefits = [
  {
    title: "Custom Programming",
    desc: "Tailored regimens engineered to your biomechanics, goals, and performance data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    )
  },
  {
    title: "Biometric Tracking",
    desc: "Real-time physiological monitoring with HRV, VO2 max, lactate threshold, and sleep analytics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: "Injury Prevention",
    desc: "Prehab protocols, kinetic chain analysis, and corrective movement patterning by specialists.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

export default function PersonalTrainingPage() {
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }));
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center justify-center px-6 md:px-16 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface z-10"></div>
          <img
            alt="Gym facility"
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVkEfBONbCreW6Y3KT77bad7Sqpw0QAq1AxxFjE2LquX9CZH53W0Kyw2frpwU5gtTa2lRSWKHkO-XfGaILmA6vgSonZZx7OC52JwXZ21VmLX3qFIVikYZbX6uI0JhvM_H_rz2rzSA_NNVp9uZ0cC4_E3dx2HgruC471Y5qSMThvbI_jhJ4pgx77Ppb6X7AvD7R5p_FNUkbaDluOpJCJWFatmZm5ec7JWrF0rJD4MN42suzFYbxKdZI4sdZ3QdMuR0Kp7LrgV7cCkWR"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto p-8 md:p-12 rounded-xl bg-[#151A22]/60 backdrop-blur-xl border border-white/10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-label-md text-label-md text-primary/80 uppercase tracking-[0.25em] mb-4"
          >
            1-on-1 Coaching
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display-xl text-5xl sm:text-7xl text-primary mb-6 uppercase"
          >
            <FlipWord word="PERSONAL TRAINING" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto"
          >
            Custom high-performance coaching engineered for elite athletes and those demanding technical precision. Experience a cinematic, data-driven approach to physical mastery in a state-of-the-art environment.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            onClick={openLeadModal}
            className="bg-primary-container text-background font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded font-bold shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] transition-all hover:scale-105 cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="relative py-16 px-6 md:px-16 overflow-hidden">
        <NoiseOverlay />
        <DotGrid />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-primary/8 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-primary/5 blur-[110px] rounded-full pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative group p-8 rounded-xl bg-[#0D1117]/80 border border-white/5 hover:border-primary/30 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-primary mb-5 p-3 inline-block rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative py-16 px-6 md:px-16 max-w-screen-2xl mx-auto overflow-hidden"
        style={{ background: "linear-gradient(180deg, #081018 0%, #0c1c2e 50%, #081018 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <NoiseOverlay />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
        </div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 font-headline-lg text-3xl md:text-5xl text-on-surface mb-12 uppercase tracking-tight"
        >
          <FlipWord word="MEET THE TEAM" triggerOnView />
        </motion.h2>
        <div className="relative z-10 flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory">
          {coaches.map((coach, idx) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="snap-start shrink-0 w-[300px] md:w-[400px] bg-[#0D1117] rounded-xl border-t border-primary/30 overflow-hidden group"
            >
              <div className="h-[400px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <img
                  alt={`Coach ${coach.name}`}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  src={coach.image}
                />
              </div>
              <div className="p-6 relative z-20 -mt-20">
                <div className="inline-block bg-surface-container text-primary font-label-md text-label-md px-3 py-1 rounded mb-3 border border-primary/20">
                  {coach.specialty}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{coach.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{coach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-8 px-6 md:px-16"
        style={{ background: "linear-gradient(180deg, #081018 0%, #0c1c2e 50%, #081018 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-surface border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Decorative glow blobs */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-2 uppercase tracking-tight">
                Train With The Best
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Unlock your full potential with world-class coaches. Your transformation starts now.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={openLeadModal}
              className="relative z-10 shrink-0 bg-primary-container text-background font-label-md text-label-md uppercase tracking-wider px-10 py-4 rounded font-bold shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] transition-all cursor-pointer"
            >
              Book Your Session
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-xl bg-[#151A22]/60 backdrop-blur-xl border border-white/10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-5xl text-primary mb-2 uppercase tracking-tight"
          >
            <FlipWord word="CONTACT" triggerOnView />
          </motion.h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Request an elite consultation.</p>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); openLeadModal(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Name</label>
                <input
                  className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors select-auto"
                  placeholder="ENTER NAME"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Email</label>
                <input
                  className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors select-auto"
                  placeholder="ENTER EMAIL"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Goal / Specialty Interest</label>
              <select className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors appearance-none select-auto">
                <option>Strength & Conditioning</option>
                <option>Endurance</option>
                <option>Mobility</option>
                <option>General Elite Prep</option>
              </select>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Message</label>
              <textarea
                className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors select-auto"
                placeholder="BRIEF DESCRIPTION OF YOUR OBJECTIVES"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-transparent border border-primary text-primary font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded font-bold hover:bg-primary/10 transition-colors cursor-pointer"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
