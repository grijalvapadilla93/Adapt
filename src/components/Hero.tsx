"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import FlipWord from "./FlipWord";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let isReversing = false;
    let lastTime = 0;

    const step = (now: number) => {
      if (!video) return;
      if (isReversing) {
        if (lastTime === 0) lastTime = now;
        const elapsed = (now - lastTime) / 1000;
        let newTime = video.currentTime - elapsed;
        if (newTime <= 0) {
          newTime = 0;
          isReversing = false;
          lastTime = 0;
          video.currentTime = 0;
          video.play().catch((err) => console.log("Play error on reverse loop:", err));
        } else {
          video.currentTime = newTime;
          lastTime = now;
          animationFrameId = requestAnimationFrame(step);
        }
      }
    };

    const handleEnded = () => {
      isReversing = true;
      video.pause();
      lastTime = 0;
      animationFrameId = requestAnimationFrame(step);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative flex items-center min-h-screen pt-24 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#081018]">
        <img
          alt="ADAPT performance center exterior"
          src="/images/hero_building_cloudy_dawn_1779578340877.png"
          className="absolute inset-0 w-full h-full object-cover opacity-30 select-none scale-102 z-0"
        />
        <video ref={videoRef} src="/videos/Herosectionvideoadapt.mp4" className="absolute inset-0 w-full h-full object-cover opacity-95 select-none scale-102 z-10 pointer-events-none" autoPlay muted playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081018]/30 via-[#081018]/50 to-[#081018] pointer-events-none z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#081018]/90 via-[#081018]/40 to-transparent pointer-events-none z-20 hidden md:block"></div>
        <div className="absolute inset-0 pointer-events-none md:hidden bg-gradient-to-b from-[#081018]/70 via-[#081018]/45 to-[#081018] z-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_40%,rgba(42,183,255,0.05)_0%,transparent_50%)] pointer-events-none z-30"></div>
        <div className="electric-gradient z-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-3xl lg:max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="font-display-xl text-white uppercase mb-6 leading-tight text-5xl sm:text-7xl md:text-8xl flex flex-col gap-1 sm:gap-2">
              <span className="block"><FlipWord word="MULTIDISCIPLINARY" delayOffset={0.1} /></span>
              <span className="text-white text-transparent bg-clip-text bg-gradient-to-r from-white via-on-surface to-primary block">
                <FlipWord word="PERFORMANCE." delayOffset={0.75} />
              </span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.35, ease: "easeOut" }} className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl">
            Functional training. Elite equipment. Community-driven results.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.55, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "General" } }))}
              className="font-label-md text-label-md uppercase px-8 py-4 rounded font-bold transition-all duration-300 bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-black cursor-pointer text-center shadow-[0_0_20px_rgba(42,183,255,0.4)] hover:shadow-[0_0_30px_rgba(42,183,255,0.6)] hover:scale-102"
            >
              BOOK A TOUR
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="font-label-md text-label-md uppercase px-8 py-4 rounded font-bold transition-all duration-300 bg-transparent hover:bg-white/5 border border-white/20 text-white cursor-pointer text-center"
            >
              EXPLORE SERVICES
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
