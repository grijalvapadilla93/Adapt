import React, { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { pricingPlans } from "../data";
import FlipWord from "./FlipWord";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div id="pricing" className="py-[120px] bg-background">
      {/* Hero Header */}
      <section className="text-center px-6 mb-24 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-label-md uppercase tracking-widest mb-4 block"
        >
          Engineered Excellence
        </motion.span>
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-headline-lg text-4xl sm:text-5xl md:text-6xl uppercase mb-6 tracking-tight text-white font-display-xl"
        >
          <FlipWord word="Simple, transparent pricing" triggerOnView />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Elite athletic performance demands precision. Our memberships are built to provide the exact tools you need for peak physical evolution. No contracts. No surprise fees.
        </motion.p>
        
        {/* Toggle with standard button state and micro movement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <button
            onClick={() => setIsYearly(false)}
            className={`font-label-md uppercase tracking-wider cursor-pointer transition-colors ${
              !isYearly ? "text-primary font-bold" : "text-on-surface-variant"
            }`}
          >
            MONTHLY
          </button>
          <div
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-surface-container-high rounded-full relative p-1 cursor-pointer transition-colors"
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-primary-container rounded-full shadow-lg transition-all duration-300 ${
                isYearly ? "left-9" : "left-1"
              }`}
            ></div>
          </div>
          <button
            onClick={() => setIsYearly(true)}
            className={`font-label-md uppercase tracking-wider cursor-pointer transition-colors flex items-center gap-2 ${
              isYearly ? "text-primary font-bold" : "text-on-surface-variant"
            }`}
          >
            YEARLY 
            <span className="text-primary text-[10px] bg-primary/10 px-2 py-0.5 rounded-full font-bold">
              SAVE 20%
            </span>
          </button>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
          {pricingPlans.map((plan, index) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: plan.featured ? 1.04 : 1.01 }}
                onMouseMove={handleMouseMove}
                className={`flex flex-col h-full rounded-xl p-10 transition-colors duration-300 relative ${
                  plan.featured
                    ? "bg-secondary-container pro-highlight text-white md:scale-105 border border-primary shadow-2xl z-10"
                    : "glass-panel text-on-surface hover:border-primary/30"
                }`}
                style={{
                  boxShadow: plan.featured
                    ? "0 0 40px rgba(42, 183, 255, 0.4)"
                    : undefined
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3
                    className={`font-headline-md text-2xl uppercase mb-2 ${
                      plan.featured ? "text-white" : "text-on-surface"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-display-xl text-5xl md:text-6xl font-bold ${
                        plan.featured ? "text-white" : "text-white"
                      }`}
                    >
                      ${price}
                    </span>
                    <span
                      className={`font-label-md ${
                        plan.featured ? "text-white/70" : "text-on-surface-variant"
                      }`}
                    >
                      /MONTH
                    </span>
                  </div>
                </div>

                <p
                  className={`mb-8 font-body-md text-sm ${
                    plan.featured ? "text-white/95" : "text-on-surface-variant"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.featured ? "text-white" : "text-primary"
                        }`}
                      />
                      <span
                        className={`font-body-md text-sm ${
                          plan.featured ? "text-white" : "text-on-surface"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}

                  {plan.unsupportedFeatures?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 flex-shrink-0 text-on-surface-variant/30" />
                      <span className="text-on-surface-variant/50 font-body-md text-sm line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: plan.name } }))}
                  className={`w-full font-label-md py-4 rounded-lg font-bold transition-all cursor-pointer text-center ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-100 shadow-xl"
                      : plan.name === "Enterprise"
                      ? "border border-primary text-primary hover:bg-primary/5 shadow-[0_0_15px_rgba(42,183,255,0.1)]"
                      : "border border-outline text-on-surface hover:bg-surface-variant"
                  }`}
                >
                  {plan.ctaText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
