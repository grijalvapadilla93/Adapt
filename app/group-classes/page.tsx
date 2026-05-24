"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";
import FlipWord from "@/src/components/FlipWord";

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

const scheduleData: Record<Day, Array<{ time: string; className: string; trainer: string; level: string }>> = {
  Monday: [
    { time: "6:00 AM", className: "HIIT Inferno", trainer: "Marcus", level: "Advanced" },
    { time: "7:30 AM", className: "Strength Foundations", trainer: "Elena", level: "All Levels" },
    { time: "12:00 PM", className: "Power Hour", trainer: "David", level: "Intermediate" },
    { time: "5:30 PM", className: "Olympic Lifting", trainer: "Marcus", level: "Advanced" },
    { time: "7:00 PM", className: "Mobility Flow", trainer: "Elena", level: "All Levels" }
  ],
  Tuesday: [
    { time: "6:00 AM", className: "Cardio Combat", trainer: "David", level: "All Levels" },
    { time: "8:00 AM", className: "Strength & Conditioning", trainer: "Marcus", level: "Intermediate" },
    { time: "12:00 PM", className: "Core Crusher", trainer: "Elena", level: "All Levels" },
    { time: "5:30 PM", className: "Velocity Mechanics", trainer: "David", level: "Advanced" },
    { time: "7:00 PM", className: "Recovery Yoga", trainer: "Elena", level: "All Levels" }
  ],
  Wednesday: [
    { time: "6:00 AM", className: "HIIT Inferno", trainer: "Marcus", level: "Advanced" },
    { time: "7:30 AM", className: "Kettlebell Complex", trainer: "David", level: "Intermediate" },
    { time: "12:00 PM", className: "Power Hour", trainer: "Elena", level: "Intermediate" },
    { time: "5:30 PM", className: "Strength Foundations", trainer: "Marcus", level: "All Levels" },
    { time: "7:00 PM", className: "Mobility Flow", trainer: "David", level: "All Levels" }
  ],
  Thursday: [
    { time: "6:00 AM", className: "Cardio Combat", trainer: "Elena", level: "All Levels" },
    { time: "8:00 AM", className: "Olympic Lifting", trainer: "Marcus", level: "Advanced" },
    { time: "12:00 PM", className: "Core Crusher", trainer: "David", level: "All Levels" },
    { time: "5:30 PM", className: "Velocity Mechanics", trainer: "Elena", level: "Advanced" },
    { time: "7:00 PM", className: "Recovery Yoga", trainer: "David", level: "All Levels" }
  ],
  Friday: [
    { time: "6:00 AM", className: "Strength & Conditioning", trainer: "Marcus", level: "Intermediate" },
    { time: "7:30 AM", className: "Kettlebell Complex", trainer: "Elena", level: "Intermediate" },
    { time: "12:00 PM", className: "HIIT Inferno", trainer: "David", level: "Advanced" },
    { time: "5:30 PM", className: "Power Hour", trainer: "Marcus", level: "All Levels" }
  ],
  Saturday: [
    { time: "7:00 AM", className: "Weekend Warrior", trainer: "Marcus", level: "All Levels" },
    { time: "9:00 AM", className: "Mobility Flow", trainer: "Elena", level: "All Levels" },
    { time: "10:30 AM", className: "Olympic Lifting", trainer: "David", level: "Advanced" }
  ],
  Sunday: [
    { time: "8:00 AM", className: "Recovery Yoga", trainer: "Elena", level: "All Levels" },
    { time: "9:30 AM", className: "Strength Foundations", trainer: "David", level: "All Levels" }
  ]
};

const classCards = [
  {
    title: "HIIT Inferno",
    subtitle: "Advanced Metabolic Conditioning",
    description: "High-intensity interval training engineered to push cardiovascular thresholds and maximize caloric burn. Features assault bike sprints, plyometrics, and functional movement patterns.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTze99Gi3csyYeVUysQ_CffyHPN_jbffkXpt2sPv0Toki0WeQjXIFF0cSPA8erUQVxuxvXnc1OPRadgAw1zB1R-lL2cSvRoEZdwOcHd-5qYy27v8-guw8MOla4uxh4PcfxLJBHOHPLWdhrP4WWs-YjBV323Ee67ombRYVMuA6SQ8XZqSPnZbJ-PDx0zxlULpzmFvepDFP0ZLdXess_vBTCnTLUJqrCydCSqg4RrN_3BiYjGkrNvJ4X6_Cs9yLAcqFFrq63qNARUk",
    level: "Advanced",
    duration: "45 min"
  },
  {
    title: "Strength Foundations",
    subtitle: "Compound Movement Mastery",
    description: "Build raw power through progressive overload of compound lifts. Squat, deadlift, bench, and press protocols designed for athletes at all levels of development.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHTghhpdUQb9Gi5yS7GTIi2XeT3i_7mar9q_hOkTRtqhhaRlEdjVkv6Xx9l032rENUfR_tWHPbvXxEG2bRF4NXSAvi81zIhHNHY0nTUWgX2UbWoK8c3h0O5NHDIJASkzpFqEXgpVz5fx0oScXIjJ296gMqko4DDvV1IkDCzZu-BrwQgGQw4mqhGD8ow08dvc803c6d3m_oGgqcePftzNKuxaBy_E8bXnsW8XjAn3mFdqp1D4a7uUNEcYrDY2Z5MO9cguxnpeKpRI9z",
    level: "All Levels",
    duration: "60 min"
  },
  {
    title: "Mobility Flow",
    subtitle: "Joint Liberation Protocol",
    description: "Dynamic mobility work combining yoga principles, functional range conditioning, and myofascial release to unlock restricted movement patterns and improve athletic longevity.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD58a7kqYnWG5fcbEVNLrzUpTx1HZOkRmLsiRwh-yBT2tXvYZ7nR81SMlmUBRwhfSuAtPqgc-SYohKOdROLNMzbJlAxvEtkLM_ZmcvTRr6JH9-hBYVQ_4S8KmK7ZIuZCpIqfkVrr2e1aww5spODo_cLvFixgO4ASx0VPfQ9mdyLL6T5R71103TgnwFQrjuTDdyH4fdIGhgaVRmcVbKrc6vxoITShEKVv53zQ7GXQCpKJQOYA-FYO0OtoKrtzpHWQHLrkJbLo8oHwpcr",
    level: "All Levels",
    duration: "50 min"
  }
];

const pricingPlans = [
  { name: "Drop-In", price: 35, period: "/session", features: ["Access to single group class", "Locker room access"] },
  { name: "Class Pack", price: 120, period: "/5 sessions", features: ["5 class credits", "Flexible scheduling", "Valid for 60 days"], featured: true },
  { name: "Unlimited", price: 199, period: "/month", features: ["Unlimited group classes", "Priority booking", "Monthly assessment"], featured: false }
];

export default function GroupClassesPage() {
  const [activeDay, setActiveDay] = useState<Day>("Monday");
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }));
  };

  const days: Day[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero — bg-background */}
      <section className="bg-background px-6 md:px-16 py-16 max-w-[1440px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-6 bg-surface-container-high px-4 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(42,183,255,0.1)]"
        >
          <span className="mr-1.5"><Zap className="w-4 h-4 text-primary" /></span>
          <span className="font-label-md text-label-md text-on-surface tracking-widest uppercase whitespace-nowrap">Group Training</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display-xl text-5xl sm:text-7xl text-on-surface mb-6 uppercase"
        >
          <FlipWord word="GROUP CLASSES" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Precision-engineered group sessions designed to challenge every athlete. Our classes combine technical coaching with high-energy environments to maximize your potential.
        </motion.p>
      </section>

      {/* Schedule Tabs — bg-surface-container-lowest */}
      <section className="bg-surface-container-lowest px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 hide-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`shrink-0 font-label-md text-label-md uppercase tracking-widest px-6 py-3 rounded-lg transition-all cursor-pointer ${
                activeDay === day
                  ? "bg-primary-container text-black font-bold shadow-[0_0_15px_rgba(42,183,255,0.3)]"
                  : "bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="bg-surface-container-low border border-white/10 rounded-xl overflow-hidden">
          {scheduleData[activeDay].map((cls, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`flex items-center justify-between px-6 py-5 ${idx < scheduleData[activeDay].length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}
            >
              <div className="flex items-center gap-6">
                <span className="font-headline-sm text-headline-sm text-primary min-w-[80px]">{cls.time}</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">{cls.className}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">{cls.trainer} • {cls.level}</p>
                </div>
              </div>
              <button
                onClick={openLeadModal}
                className="hidden sm:block bg-primary-container text-black font-label-md text-label-md uppercase rounded px-5 py-2 font-bold shadow-[0_0_10px_rgba(42,183,255,0.2)] hover:shadow-[0_0_20px_rgba(42,183,255,0.4)] transition-shadow cursor-pointer"
              >
                Book
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Class Cards — bg-background */}
      <section className="bg-background px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display-xl text-3xl md:text-5xl uppercase mb-12 text-primary-container text-center"
        >
          <FlipWord word="FEATURED CLASSES" triggerOnView />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden h-[450px] shadow-2xl border-t border-primary/30 bg-surface-container-low"
            >
              <img
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={card.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-primary/20 text-primary border border-primary/50 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold">{card.level}</span>
                <span className="bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold">{card.duration}</span>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{card.title}</h3>
                  <p className="font-label-md text-label-md text-primary mb-4 uppercase tracking-widest">{card.subtitle}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">{card.description}</p>
                    <button
                      onClick={openLeadModal}
                      className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-6 py-2.5 shadow-[0_0_20px_rgba(42,183,255,0.3)] transition-shadow font-bold w-max cursor-pointer"
                    >
                      BOOK CLASS
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Class Pricing — bg-surface-container-lowest */}
      <section className="bg-surface-container-lowest px-6 md:px-16 py-16 max-w-[1440px] mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display-xl text-3xl md:text-5xl uppercase mb-12 text-primary-container text-center"
        >
          <FlipWord word="CLASS PRICING" triggerOnView />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 border rounded-xl flex flex-col hover:border-primary/50 transition-colors duration-300 relative ${
                plan.featured
                  ? "bg-surface-container-highest border-primary shadow-2xl md:-translate-y-2"
                  : "bg-surface border-outline-variant/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black font-label-md text-label-md uppercase px-4 py-1 rounded-full font-bold whitespace-nowrap text-xs">
                  Best Value
                </div>
              )}
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="font-display-xl text-4xl text-on-surface">${plan.price}</span>
                <span className="font-body-md text-on-surface-variant">{plan.period}</span>
              </div>
              <div className="h-px w-full bg-outline-variant/30 mb-5"></div>
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="font-body-md text-on-surface-variant">{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={openLeadModal}
                className={`w-full font-label-md text-label-md uppercase py-3 rounded font-bold transition-all duration-300 cursor-pointer ${
                  plan.featured
                    ? "bg-primary-container text-black shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:scale-105"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                SELECT {plan.name.toUpperCase()}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner — "Find Your Class" */}
      <section className="bg-surface-container-lowest px-6 md:px-16 py-24 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-high border border-primary/20 rounded-2xl p-12 md:p-16 text-center shadow-[0_0_40px_rgba(42,183,255,0.08)]"
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display-xl text-3xl md:text-5xl uppercase mb-6 text-primary-container"
          >
            <FlipWord word="FIND YOUR CLASS" triggerOnView />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8"
          >
            Not sure which class is right for you? Explore our full schedule and discover the training style that matches your goals.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={openLeadModal}
            className="bg-primary-container text-black font-label-md text-label-md uppercase rounded-full px-10 py-4 font-bold shadow-[0_0_25px_rgba(42,183,255,0.35)] hover:shadow-[0_0_40px_rgba(42,183,255,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
