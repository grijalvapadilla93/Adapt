import { motion } from "motion/react";
import FlipWord from "../components/FlipWord";

const nutritionFeatures = [
  {
    title: "Custom Meal Prep",
    description: "Macro-calculated meals designed by clinical nutritionists to fuel your specific training discipline and accelerate recovery windows.",
    linkLabel: "Explore Menus"
  },
  {
    title: "Performance Supplements",
    description: "Access our curated vault of elite-tier supplements. Tested for purity, dosed for impact, and available on-demand at the Fuel Bar.",
    linkLabel: "View Stack"
  },
  {
    title: "Nutrition Consultation",
    description: "1-on-1 sessions with our dietary engineers. We analyze your biometrics and metabolic rate to construct a bulletproof nutritional protocol.",
    linkLabel: "Book Session"
  }
];

export default function NutritionPage() {
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }));
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 z-10 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display-xl text-5xl sm:text-7xl text-on-surface uppercase drop-shadow-lg"
            >
              <FlipWord word="NUTRITION ASSESSMENT" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-lg"
            >
              Speak 1:1 with our Accountability Team. Build obtainable goals. Receive practical tips and tools to reach your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex gap-4"
            >
              <button
                onClick={openLeadModal}
                className="bg-primary-container text-background font-label-md text-label-md uppercase px-8 py-4 rounded font-bold shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] transition-all cursor-pointer"
              >
                Book Consultation
              </button>
            </motion.div>
          </div>
          <div className="lg:col-span-7 mt-12 lg:mt-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <img
                alt="Nutraboost Lounge Nutrition Bar"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC4HCAjY2g4cjxXsks7eOWbtLyZewVru1FbOKPxKnzfzoPop5HaMPghwnAkZBJCm1hCWdd-SQ-trCWTsWelg_GOZx5YS_JvWWVNXRlynvRa-BkHoLJmeJ1-PvzDo_Qche6G9GXKZ6ln03m_JoSvfaWdgLAgK4rU718cGPfgRpIaw5D3BwS43ee9LF1RAG1PVJEfwond4YQZ_3DU3bFH9AUjdhg-tRDDxVNCYx2c_RZgNtmoKEQPw8-cO8L6IYmQYzyX3xgUNCK0RBE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
            <div className="absolute bottom-8 left-8 bg-surface-container-high/80 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center gap-3 shadow-xl">
              <span className="text-primary text-3xl font-bold">⚗</span>
              <div>
                <div className="font-label-md text-label-md text-on-surface-variant uppercase text-[10px]">Precision Formula</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">100% Custom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 pb-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nutritionFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0D1117] relative p-8 rounded-xl border-t border-primary/30 overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{feat.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{feat.description}</p>
              <button
                onClick={openLeadModal}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase hover:gap-3 transition-all cursor-pointer"
              >
                {feat.linkLabel} <span className="text-sm">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
