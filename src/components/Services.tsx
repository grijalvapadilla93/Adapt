"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ServiceItem } from "../types";
import FlipWord from "./FlipWord";

const servicesData: ServiceItem[] = [
  {
    id: "train",
    number: "01",
    title: "TRAIN",
    image: "/images/service_train_1779577817591.png",
    description: "Access elite training equipment, custom Olympic lifting platforms, premium performance metrics, and specialized coaches."
  },
  {
    id: "recharge",
    number: "02",
    title: "RECHARGE",
    image: "/images/service_recharge_1779577832383.png",
    description: "Somatic decompression zones, contrast cold plunge therapy, custom infrared saunas, and active localized recovery protocols."
  },
  {
    id: "workspace",
    number: "03",
    title: "WORKSPACE",
    image: "/images/service_workspace_1779577850280.png",
    description: "Ultra-quiet athletic focus bays, hyper-fast gigabit internet, ergonomic posture seating, and professional tech integrations."
  },
  {
    id: "nutrition",
    number: "04",
    title: "NUTRITION",
    image: "/images/service_nutrition_1779577867362.png",
    description: "Customized elite meal coaching, precision metabolic assessments, and premium whole-foods fuel to maximize baseline energy."
  }
];

export default function Services() {
  const router = useRouter();

  const tickerItems = [
    "STRENGTH", "SPEED", "ENDURANCE", "POWER",
    "RESILIENCE", "GRIT", "PRECISION", "DISCIPLINE",
  ];

  return (
    <section id="services" className="bg-surface relative overflow-hidden border-t border-white/10 py-24 md:py-[120px] px-6 md:px-16">
      {/* Hyrox ticker beams - tilted background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[120%] rotate-[12deg] opacity-[0.35]">
          <div className="hyrox-ticker">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="font-display-xl text-[60px] md:text-[140px] text-white uppercase font-bold mx-8 leading-none tracking-tight whitespace-nowrap">
                {item}
                <span className="text-primary-container mx-6 font-thin">×</span>
              </span>
            ))}
          </div>
        </div>
        <div className="absolute top-[45%] left-[-10%] w-[120%] -rotate-[8deg] opacity-[0.27]">
          <div className="hyrox-ticker" style={{ animationDirection: "reverse" }}>
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="font-display-xl text-[50px] md:text-[110px] text-white uppercase font-bold mx-8 leading-none tracking-tight whitespace-nowrap">
                {item}
                <span className="text-primary-container mx-6 font-thin">×</span>
              </span>
            ))}
          </div>
        </div>
        <div className="absolute top-[75%] left-[-10%] w-[120%] rotate-[15deg] opacity-[0.18]">
          <div className="hyrox-ticker">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="font-display-xl text-[45px] md:text-[90px] text-white uppercase font-bold mx-8 leading-none tracking-tight whitespace-nowrap">
                {item}
                <span className="text-primary-container mx-6 font-thin">×</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto bg-surface/70 backdrop-blur-sm rounded-xl px-6 py-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-display-xl text-5xl md:text-7xl uppercase mb-4 text-primary-container"
          >
            <FlipWord word="WHAT WE DO" triggerOnView />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            We are the architects of elite performance. A multidisciplinary ecosystem designed to push the boundaries of human potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => router.push(`/${service.id}`)}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] hover:border-primary/30 transition-all duration-500 cursor-pointer bg-[#0A0A0A] min-h-[260px] sm:min-h-[320px] md:min-h-[400px]"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-xs text-primary/70 uppercase tracking-widest">
                    {service.number}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h3 className="font-display-xl text-4xl md:text-5xl text-white uppercase mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body-md text-sm text-white/70 max-w-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}