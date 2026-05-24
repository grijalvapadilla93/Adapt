"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialsData } from "../data";
import FlipWord from "./FlipWord";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="community" className="py-[120px] bg-surface relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display-xl text-5xl md:text-7xl uppercase mb-4 text-primary-container tracking-tight"
          >
            <FlipWord word="VOICES OF THE ELITE" triggerOnView />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Real results from athletes who refuse to settle.
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows for Slider (Mobile focus or desktop cyclic highlighted control) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-8 z-30 text-outline hover:text-primary transition-colors cursor-pointer bg-background/50 hover:bg-background/80 p-2 rounded-full border border-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Grid for desktop, Single Slider with animation for Mobile */}
          <div className="w-full">
            {/* Desktop layout: Show all 3 */}
            <div className="hidden md:grid grid-cols-3 gap-6 w-full">
              {testimonialsData.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  onMouseMove={handleMouseMove}
                  className={`glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-primary/40 transition-colors duration-500 hover:bg-white/[0.02] ${
                    currentIndex === idx ? "border-primary/30" : ""
                  }`}
                >
                  <div className="mb-6 flex justify-between items-start">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border-2 border-primary/20 flex items-center justify-center font-display-xl text-primary font-bold text-lg shadow-[0_0_15px_rgba(42,183,255,0.1)]">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-widest font-semibold border border-primary/20">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Verified
                    </div>
                  </div>
                  <p className="text-white italic mb-6 font-body-md text-sm leading-relaxed flex-grow">
                     {testimonial.quote}
                  </p>
                  <div>
                    <h4 className="font-headline-sm text-lg uppercase text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile layout: Dynamic card slider */}
            <div className="md:hidden w-full max-w-sm mx-auto overflow-hidden px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onMouseMove={handleMouseMove}
                  className="glass-panel p-8 rounded-2xl border border-white/20 flex flex-col hover:border-primary/40 transition-all duration-500 bg-white/5"
                >
                  <div className="mb-6 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border-2 border-primary/20 flex items-center justify-center font-display-xl text-primary font-bold text-xl shadow-[0_0_15px_rgba(42,183,255,0.1)]">
                      {testimonialsData[currentIndex].name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-widest font-semibold border border-primary/20">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Verified Member
                    </div>
                  </div>
                  <p className="text-white italic mb-6 font-body-md text-sm text-center leading-relaxed">
                     {testimonialsData[currentIndex].quote}
                  </p>
                  <div className="text-center">
                    <h4 className="font-headline-sm text-lg uppercase text-primary">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">
                      {testimonialsData[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-8 z-30 text-outline hover:text-primary transition-colors cursor-pointer bg-background/50 hover:bg-background/80 p-2 rounded-full border border-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-primary/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
}
