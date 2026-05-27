"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FlipWord from "./FlipWord";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="relative flex items-center min-h-dvh pt-24 overflow-hidden bg-[#081018]">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#081018]">
        {/* Video with subtle parallax */}
        <motion.div className="absolute inset-0 md:inset-[-10%]" style={{ y: videoY }}>
          <video
            src="/videos/Herosectionvideoadapt.mp4"
            className="w-full h-full object-cover opacity-95 select-none pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero_building_cloudy_dawn_1779578340877.png"
          />
        </motion.div>
        {/* Bottom fade + mobile top darkening (consolidated) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081018]/80 md:from-[#081018]/30 via-[#081018]/50 to-[#081018] pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081018]/95 via-[#081018]/40 to-transparent pointer-events-none z-20 hidden md:block" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(42,183,255,0.04)_0%,transparent_50%)] pointer-events-none z-30"></div>
        <div className="electric-gradient z-30 hidden md:block"></div>
      </div>

      {/* Hours badge - top right */}
      <div className="absolute top-28 right-6 md:top-32 md:right-16 z-20 hidden sm:block">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
          <span className="font-label-md text-[10px] tracking-widest text-white/70 uppercase">OPEN NOW · 5AM - 11PM</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-3xl lg:max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="font-display-xl text-white uppercase mb-6 leading-tight text-4xl sm:text-6xl md:text-8xl flex flex-col gap-1 sm:gap-2">
              <span className="block"><FlipWord word="MULTIDISCIPLINARY" delayOffset={0.1} /></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-on-surface to-primary block">
                <FlipWord word="PERFORMANCE." delayOffset={0.75} />
              </span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.35, ease: "easeOut" }} className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Functional training. Elite equipment. Community-driven results. Train like your competition is watching.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.55, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "General" } }))}
              className="font-label-md text-label-md uppercase px-8 py-4 rounded font-bold transition-all duration-300 bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-black cursor-pointer text-center shadow-[0_0_20px_rgba(42,183,255,0.4)] hover:shadow-[0_0_30px_rgba(42,183,255,0.6)] active:scale-95"
            >
              BOOK A TOUR
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="font-label-md text-label-md uppercase px-8 py-4 rounded font-bold transition-all duration-300 bg-transparent hover:bg-white/5 border border-white/20 text-white cursor-pointer text-center active:scale-95"
            >
              EXPLORE SERVICES
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-label-md text-[9px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}