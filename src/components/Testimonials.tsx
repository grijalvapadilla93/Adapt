"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialsData } from "../data";
import FlipWord from "./FlipWord";

const testimonialImages = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));

  const current = testimonialsData[currentIndex];

  return (
    <section id="community" className="relative py-[180px] md:py-[220px] px-6 md:px-16 bg-surface overflow-hidden border-t border-white/5">
      {/* Background image - changes with testimonial */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={testimonialImages[currentIndex]}
            alt=""
            className="w-full h-full object-cover grayscale opacity-70"
          />
          <div className="absolute inset-0 bg-surface/80" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display-xl text-5xl md:text-7xl uppercase mb-14 text-primary-container tracking-tight"
        >
          <FlipWord word="VOICES OF THE ELITE" triggerOnView />
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="font-headline-lg text-2xl md:text-4xl text-white uppercase leading-[1.2] mb-10 md:mb-14 font-bold tracking-tight max-w-4xl italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col items-center mb-12">
              <div className="w-12 h-[2px] bg-primary mb-6" />
              <span className="font-headline-sm text-base uppercase text-primary mb-1">
                {current.name}
              </span>
              <span className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest">
                {current.role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="flex gap-3">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}