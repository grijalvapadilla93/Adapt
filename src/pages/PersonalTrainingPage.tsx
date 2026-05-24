import { motion } from "motion/react";
import FlipWord from "../components/FlipWord";

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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display-xl text-5xl sm:text-7xl text-primary mb-6 uppercase"
          >
            <FlipWord word="PERSONAL TRAINING" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto"
          >
            Custom high-performance coaching engineered for elite athletes and those demanding technical precision. Experience a cinematic, data-driven approach to physical mastery in a state-of-the-art environment.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={openLeadModal}
            className="bg-primary-container text-background font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded font-bold shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] transition-all hover:scale-105 cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 md:px-16 max-w-screen-2xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-12 uppercase tracking-tight"
        >
          <FlipWord word="MEET THE TEAM" triggerOnView />
        </motion.h2>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory">
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
                  className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="ENTER NAME"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Email</label>
                <input
                  className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="ENTER EMAIL"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Goal / Specialty Interest</label>
              <select className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors appearance-none">
                <option>Strength & Conditioning</option>
                <option>Endurance</option>
                <option>Mobility</option>
                <option>General Elite Prep</option>
              </select>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase">Message</label>
              <textarea
                className="w-full bg-[#0D1117] border border-outline-variant/20 rounded px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
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