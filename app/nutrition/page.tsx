"use client";

import { motion } from "motion/react";
import { FlaskConical, ArrowRight, ClipboardList, Dna, TrendingUp } from "lucide-react";
import NoiseOverlay from "@/src/components/NoiseOverlay";
import DotGrid from "@/src/components/DotGrid";
import FlipWord from "@/src/components/FlipWord";

const nutritionFeatures = [
  {
    title: "Custom Meal Prep",
    description:
      "Macro-calculated meals designed by clinical nutritionists to fuel your specific training discipline and accelerate recovery windows.",
    linkLabel: "Explore Menus",
  },
  {
    title: "Performance Supplements",
    description:
      "Access our curated vault of elite-tier supplements. Tested for purity, dosed for impact, and available on-demand at the Fuel Bar.",
    linkLabel: "View Stack",
  },
  {
    title: "Nutrition Consultation",
    description:
      "1-on-1 sessions with our dietary engineers. We analyze your biometrics and metabolic rate to construct a bulletproof nutritional protocol.",
    linkLabel: "Book Session",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Book Consultation",
    description:
      "Schedule a 1-on-1 session with our dietary engineers. We assess your biometrics, metabolic rate, and training goals to build your baseline profile.",
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
  },
  {
    step: "02",
    title: "Get Your Plan",
    description:
      "Receive a fully custom nutrition protocol — macro-calculated meals, supplement stack, and hydration strategy tailored to your discipline and recovery windows.",
    icon: <Dna className="w-8 h-8 text-primary" />,
  },
  {
    step: "03",
    title: "Track & Optimize",
    description:
      "Continuous biometric feedback and check-ins refine your protocol. We adjust macros, timing, and supplementation as your performance evolves.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
];

const mealPreviews = [
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    alt: "Performance macro bowl with lean protein and greens",
    label: "Macro Bowl",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    alt: "Fresh recovery salad with avocado and seeds",
    label: "Recovery Plate",
  },
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    alt: "Pre-workout energy bowl with fruits and grains",
    label: "Pre-Workout Fuel",
  },
];

export default function NutritionPage() {
  const openLeadModal = () => {
    window.dispatchEvent(
      new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }),
    );
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 z-10 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]"
            >
              Fuel Science
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display-xl text-3xl sm:text-5xl lg:text-7xl text-on-surface uppercase drop-shadow-lg"
            >
              <FlipWord word="NUTRITION ASSESSMENT" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-lg"
            >
              Speak 1:1 with our Accountability Team. Build obtainable goals.
              Receive practical tips and tools to reach your goals.
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
              <FlaskConical className="w-6 h-6 text-primary" />
              <div>
                <div className="font-label-md text-label-md text-on-surface-variant uppercase text-[10px]">
                  Precision Formula
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface">
                  100% Custom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 md:px-16 pb-16 max-w-[1440px] mx-auto overflow-hidden"
        style={{ background: "linear-gradient(180deg, #081018 0%, #0c1c2e 50%, #081018 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <NoiseOverlay />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-primary/8 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">
            The Process
          </span>
          <h2 className="font-display-md text-4xl sm:text-5xl text-on-surface uppercase mt-3">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative bg-[#0D1117] p-8 rounded-xl border border-white/5 group hover:border-primary/20 transition-colors duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                <span className="font-label-md text-label-md text-primary font-bold">
                  {step.step}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-5">{step.icon}</div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line between steps (desktop only) */}
              {idx < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-primary/20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 md:px-16 pb-16 max-w-[1440px] mx-auto overflow-hidden"
        style={{ background: "linear-gradient(180deg, #081018 0%, #0c1c2e 50%, #081018 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <NoiseOverlay />
        <DotGrid />
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-primary/8 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-20 left-1/4 w-[350px] h-[350px] bg-primary/5 blur-[130px] rounded-full pointer-events-none"></div>
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
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                {feat.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                {feat.description}
              </p>
              <button
                onClick={openLeadModal}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase hover:gap-3 transition-all cursor-pointer"
              >
                {feat.linkLabel} <ArrowRight className="w-3.5 h-3.5 inline" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meal Gallery Section */}
      <section className="relative px-6 md:px-16 pb-16 max-w-[1440px] mx-auto overflow-hidden"
        style={{ background: "linear-gradient(180deg, #081018 0%, #0c1c2e 50%, #081018 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        <NoiseOverlay />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/6 blur-[140px] rounded-full pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">
            Inside The Kitchen
          </span>
          <h2 className="font-display-md text-4xl sm:text-5xl text-on-surface uppercase mt-3">
            Meal Previews
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mealPreviews.map((meal, idx) => (
            <motion.div
              key={meal.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group rounded-xl overflow-hidden border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={meal.src}
                  alt={meal.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/20 to-transparent pointer-events-none"></div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">
                  {meal.label}
                </span>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-primary/5"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative px-6 md:px-16 py-24 max-w-[1440px] mx-auto">
        <NoiseOverlay />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-primary/8 blur-[80px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0D1117] border border-primary/20 rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

          <h2 className="font-display-md text-3xl sm:text-5xl text-on-surface uppercase mb-4">
            Fuel Your Performance
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-8">
            Stop guessing. Start fueling. Let our team build your custom
            nutrition protocol and unlock your next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openLeadModal}
              className="bg-primary-container text-background font-label-md text-label-md uppercase px-10 py-4 rounded font-bold shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] transition-all cursor-pointer"
            >
              Start Your Protocol
            </button>
            <button
              onClick={openLeadModal}
              className="border border-primary/30 text-primary font-label-md text-label-md uppercase px-10 py-4 rounded hover:bg-primary/5 transition-all cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
