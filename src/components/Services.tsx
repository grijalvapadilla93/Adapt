import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { ServiceItem } from "../types";
import FlipWord from "./FlipWord";

import serviceTrain from "../assets/images/service_train_1779577817591.png";
import serviceRecharge from "../assets/images/service_recharge_1779577832383.png";
import serviceWorkspace from "../assets/images/service_workspace_1779577850280.png";
import serviceNutrition from "../assets/images/service_nutrition_1779577867362.png";

const servicesData: ServiceItem[] = [
  {
    id: "train",
    number: "01",
    title: "TRAIN",
    image: serviceTrain,
    description: "Access elite training equipment, custom Olympic lifting platforms, premium performance metrics, and specialized coaches engineered to build strength, mobility, and physical robustness."
  },
  {
    id: "recharge",
    number: "02",
    title: "RECHARGE",
    image: serviceRecharge,
    description: "Somatic decompression zones, contrast cold plungetherapy, custom infrared saunas, and active localized recovery protocols designed to accelerate muscular restoration and mental balance."
  },
  {
    id: "workspace",
    number: "03",
    title: "WORKSPACE",
    image: serviceWorkspace,
    description: "Ultra-quiet athletic focus bays, hyper-fast gigabit internet, ergonomic posture seating, and professional tech integrations built seamlessly right alongside your physical recovery hub."
  },
  {
    id: "nutrition",
    number: "04",
    title: "NUTRITION",
    image: serviceNutrition,
    description: "Customized elite meal coaching, precision metabolic assessments, state-of-the-art diagnostic metrics, and premium whole-foods fuel designed to supplement and maximize baseline energy metrics."
  }
];

export default function Services() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-surface relative overflow-hidden border-t border-white/10"
    >
      {/* Precision Tech Grid Backing */}
      <div className="absolute top-0 left-0 w-full h-[650px] bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Elegant Technical Horizon Lines & Coordinates */}
      <div className="absolute top-0 left-0 w-full h-[650px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>
        <div className="absolute top-[48%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-mono text-[9px] tracking-[0.25em] text-primary/15 uppercase">
          [ ADAPT CORE ENGINE // STRENGTH &amp; RECOVERY CODES ]
        </div>
      </div>

      {/* Massive Cinematic Backing Watermark */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-display-xl text-[13vw] uppercase tracking-[0.3em] text-white/[0.012] font-black leading-none break-keep whitespace-nowrap z-0">
        PERFORMANCE
      </div>

      {/* Soft drifting luxury glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] rounded-full bg-primary/4 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 30, -35, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] rounded-full bg-primary/3 blur-[130px]"
        />
      </div>

      {/* Dynamic Ambient Spotlight following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
        style={{
          opacity: isHovered ? 1 : 0.3,
          background: isHovered
            ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(42, 183, 255, 0.08), transparent 80%)`
            : "radial-gradient(800px circle at 50% 50%, rgba(42, 183, 255, 0.04), transparent 80%)",
        }}
      />

      <div className="px-6 md:px-16 pt-24 pb-12 border-b border-white/10 text-center flex flex-col items-center relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-display-xl text-5xl md:text-7xl uppercase mb-6 text-primary-container"
        >
          <FlipWord word="WHAT WE DO" triggerOnView />
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          We are the architects of elite performance. A multidisciplinary ecosystem designed to push the boundaries of human potential.
        </motion.p>
      </div>
      <div className="flex flex-col w-full relative z-10">
        {servicesData.map((service, index) => {
          const isOpen = activeItem === service.id;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleItem(service.id)}
              onMouseEnter={() => setActiveItem(service.id)}
              onMouseLeave={() => setActiveItem(null)}
              className={`accordion-tab group border-b border-white/10 py-12 md:py-16 px-6 md:px-16 cursor-pointer flex justify-between items-center bg-transparent backdrop-blur-sm relative overflow-hidden transition-all duration-700 ${
                isOpen ? "py-24 md:py-36 bg-white/[0.02]" : ""
              }`}
            >
              {/* Background image preview with transition */}
              <div
                className={`absolute inset-0 z-0 pointer-events-none transition-all duration-700 ${
                  isOpen ? "opacity-60 scale-105" : "opacity-30 scale-100"
                }`}
              >
                <img
                  alt={service.title}
                  className="w-full h-full object-cover"
                  src={service.image}
                />
                <div className="absolute inset-0 bg-[#081018]/35"></div>
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-3 relative z-10 select-none max-w-[80%]">
                <div className="flex items-center gap-8">
                  <span className="font-label-md text-outline opacity-40 transition-opacity group-hover:opacity-80 min-w-10">
                    {service.number}
                  </span>
                  <h2
                    className={`service-name font-display-xl text-4xl sm:text-5xl md:text-7xl text-white uppercase transition-all duration-500 transform ${
                      isOpen ? "text-primary translate-x-4 md:translate-x-6" : ""
                    }`}
                  >
                    {service.title}
                  </h2>
                </div>
                {/* Dynamically shown description text on hover */}
                <div
                  className={`transition-all duration-500 overflow-hidden transform origin-left ${
                    isOpen
                      ? "max-h-96 opacity-100 translate-y-0 pl-12 sm:pl-16 md:pl-[7.5rem] mt-2"
                      : "max-h-0 opacity-0 -translate-y-2 pl-12 sm:pl-16 md:pl-[7.5rem] pointer-events-none"
                  }`}
                >
                  <p className="text-gray-200/95 font-sans text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Plus icon */}
              <div
                className={`plus-icon w-12 h-12 md:w-16 md:h-16 border rounded-full flex items-center justify-center transition-all duration-500 relative z-10 select-none ${
                  isOpen
                    ? "border-primary bg-primary text-on-primary rotate-45 scale-110 shadow-[0_0_15px_rgba(42,183,255,0.4)]"
                    : "border-white/20 text-white"
                }`}
              >
                <Plus className="w-5 h-5 md:w-6 h-6" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
