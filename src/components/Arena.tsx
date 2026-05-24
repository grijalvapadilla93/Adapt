"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ArenaFeature } from "../types";
import FlipWord from "./FlipWord";

const arenaSlides: ArenaFeature[] = [
  { title: "THE ARENA: TURF", image: "/images/hero_turf_arena_1779577723990.png", items: ["Performance Turf", "Elite Power Racks", "Recovery Zone", "Specialized Conditioning"] },
  { title: "THE ARENA: RIGS & RIGIDITY", image: "/images/arena_rigs_rigidity_1779577946724.png", items: ["Olympic Lifting Platforms", "Calibrated Iron Plates", "Custom Barbells & Rigs", "Technique Analysis Grid"] },
  { title: "THE RECOVERY SUITE", image: "/images/arena_recovery_suite_1779577964741.png", items: ["Contrast Water Plunges", "Dry Infrared Saunas", "Hyperbaric Chambers", "Compression Lounge"] },
  { title: "THE INTENSITY GRID", image: "/images/arena_intensity_grid_1779577981685.png", items: ["Assault AirBike Sprints", "Concept2 Performance Rowers", "SkiErg Resistance Invasives", "Stamina Analytics Suite"] }
];

export default function Arena() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrentSlide((prev) => (prev === arenaSlides.length - 1 ? 0 : prev + 1)), 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="arena" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="relative min-h-screen flex items-center overflow-hidden border-t border-white/5 py-[120px]">
      <div className="absolute top-8 left-6 sm:top-12 sm:left-12 md:top-24 md:left-32 z-20">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display-xl text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-widest font-black">
          <FlipWord word="FACILITIES" triggerOnView />
        </motion.h2>
      </div>

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img key={currentSlide} alt="The Arena" className="w-full h-full object-cover select-none" src={arenaSlides[currentSlide].image} initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#081018]/80 via-[#081018]/20 to-transparent"></div>
      </div>

      <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? arenaSlides.length - 1 : prev - 1))} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-primary transition-colors p-2 cursor-pointer bg-black/20 hover:bg-black/40 rounded-full">
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
      </button>
      <button onClick={() => setCurrentSlide((prev) => (prev === arenaSlides.length - 1 ? 0 : prev + 1))} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-primary transition-colors p-2 cursor-pointer bg-black/20 hover:bg-black/40 rounded-full">
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 md:pl-32">
        <motion.div key={currentSlide} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl bg-surface/60 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="font-display-xl text-primary-container uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 tracking-tight leading-tight">{arenaSlides[currentSlide].title}</h2>
          <p className="font-body-lg text-white/90">Elite environments for peak performance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/20">
            {arenaSlides[currentSlide].items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_rgba(42,183,255,0.8)]"></div>
                <h3 className="font-label-md uppercase tracking-wider text-white">{item}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-8 justify-start">
            {arenaSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === i ? "w-8 bg-primary" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
