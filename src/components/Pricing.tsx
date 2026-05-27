"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { pricingPlans } from "../data";
import FlipWord from "./FlipWord";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div id="pricing" className="py-[120px] bg-background">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <button
            onClick={() => setIsYearly(false)}
            className={`font-label-md uppercase tracking-wider cursor-pointer transition-colors ${!isYearly ? "text-primary font-bold" : "text-on-surface-variant"}`}
          >
            MONTHLY
          </button>
          <div
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-surface-container-high rounded-full relative p-1 cursor-pointer transition-colors"
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-primary-container rounded-full shadow-lg transition-all duration-300 ${isYearly ? "left-9" : "left-1"}`}
            ></div>
          </div>
          <button
            onClick={() => setIsYearly(true)}
            className={`font-label-md uppercase tracking-wider cursor-pointer transition-colors flex items-center gap-2 ${isYearly ? "text-primary font-bold" : "text-on-surface-variant"}`}
          >
            YEARLY
            <span className="text-primary text-[10px] bg-primary/10 px-2 py-0.5 rounded-full font-bold">
              SAVE 20%
            </span>
          </button>
        </motion.div>
      </section>

      <section className="px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
          {pricingPlans.map((plan, index) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const isPro = plan.featured;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: isPro ? 1.04 : 1.02 }}
                className={`relative flex flex-col h-full rounded-xl p-10 transition-all duration-500 ${
                  isPro
                    ? "bg-[#0A0A0A] border border-primary/30 md:scale-105 z-10"
                    : "bg-[#0A0A0A] border border-white/[0.06] hover:border-primary/30"
                }`}
              >
                {/* Subtle glow behind PRO card */}
                {isPro && (
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-30 pointer-events-none" />
                )}

                {isPro && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(42,183,255,0.3)]">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-headline-md text-2xl uppercase mb-2 text-on-surface">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-xl text-5xl md:text-6xl font-bold text-white">
                      ${price}
                    </span>
                    <span className="font-label-md text-on-surface-variant">
                      /MONTH
                    </span>
                  </div>
                </div>

                <p className="mb-8 font-body-md text-sm text-on-surface-variant">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-primary" />
                      <span className="font-body-md text-sm text-on-surface">
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
                    isPro
                      ? "bg-primary text-black hover:bg-[#6edfff] shadow-[0_0_20px_rgba(42,183,255,0.3)]"
                      : plan.name === "Enterprise"
                      ? "border border-primary text-primary hover:bg-primary/5"
                      : "border border-white/[0.1] text-on-surface hover:border-on-surface/40"
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