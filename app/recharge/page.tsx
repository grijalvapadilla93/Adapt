"use client";

import { motion } from "motion/react";
import NoiseOverlay from "@/src/components/NoiseOverlay";
import DotGrid from "@/src/components/DotGrid";
import FlipWord from "@/src/components/FlipWord";

const rechargeServices = [
  {
    title: "Physical Therapy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh-1H9ysfdOYYCgVUMUDdEAvZI5OdSZCg_Dv1xugu0dGtO8f8IJnG3sFtkP07E_zUyEEqTMcKqq1gMTLM7zJeTJbjSKn33Mz28R84hhHMLvktVUGvEBFpGLAuZ7BZO4VGWoLEwg0PoyiK9g0lSGKInQiguVc4_HaG1jTOIeh77nzljwIJ4J48bkmkDDRhvR7Md7nJ6Ewyf-JF5MewijG2iz7-3qKb8nCBtrKoBVz71E-T9PzxNiVPA4W56oSHPU43qZd7Se9L0rrX9",
    description: "Expert diagnosis and treatment to restore movement, alleviate pain, and prevent injury through targeted exercises and manual techniques."
  },
  {
    title: "Massage Therapy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFMk6K8zWEGJaIC3eziGfS8DGb0Tz8N8kQk2Zr_S-i9Oy_a21kL9r6HtkmLDdpcmQZLZsfurgEOAa0-fgYxj_juuyUFDB_Nqr_qYNlTdWnn4ryGwva42VScVC8SZqYzgl4XrzethBmNhxqF29m8JLK0ms59pyZ0lHEFVK5ROEo3Eq67FecVnvgQWtX_c2ErS899fKDcJfYRxGGqzKnm084LNIKuNolKzEA_L2c0-Dzf5j5Ve_Zb8Pms_TXtn-SHVuCDD4h5WqBZ0F8",
    description: "Deep tissue and sports massage modalities designed to release muscle tension, improve circulation, and expedite recovery."
  },
  {
    title: "Stretch Therapy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4NRHFxPesk9xzv_1MKhPV0nb87mA40X53oUcEwWjnuv7riK6YlS0EKb1izaoL4GYxd40Xe6R6dj-unjOLjSb1jvqRATolowB62hf-VjYWMUBqK9p4qRT3JDPi3OfCfo_v-RLK6zIvVSnVLm_BOgcmXkWvpHsc1EDjsmr5qVodaUBC2oATfnOp6vxY-u4PJhUK8g3QVVYh9x5XXPQFTfObd3youm-O6FCUrviDpgLRE6_wxHhMMrIxAxw_3zz5I7vHo5sxrzuqma1K",
    description: "Assisted stretching protocols to enhance joint mobility, increase flexibility, and correct muscular imbalances for peak performance."
  },
  {
    title: "Chiropractic",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_tSYc2Alh_Z5ksfYp5R0nYGH8zqVTPcCah20LvG6jI53HN8kz3zfC6WlWUDidemL6Zfo7d19GQngn8cRknExSMIGCOKoQmJQT8hLl2Zg4VcyP6y7U5CTQpc54f8oUl6FhoiZfCPEtVB1a9gEwWxj0DL9Q2gRaTjHco49Lg6EVxF4I5CguLNphi2fi-1fcOb4cZ3PxQB9u292lCPe_1o5It8pKB5W5DZQb5XBM_6KPHeyAkKQIW4H-PRoY7KP8af0mProzqa-8p-E_",
    description: "Spinal alignment and joint adjustments to optimize nervous system function, reduce mechanical stress, and support structural health."
  },
  {
    title: "Hybrid",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTaYpt9hDI5HXDA4HwzpVoOijqpWskVB6q8PSFHirN8SM3PohZhFrmHR4G9x4fT5TqWtjS1c9YuYkmOoyL9E_yqWOf4mqVyV74mhdaty4ZMTYFkNWLbbz9VbwZm_VSETU-IOPEptho2HVuEB3ZJ5Fjkn32TaAmL0BCH4oKjvDniHs-gtL7TlmKliLUZ84q3A9WMihu-Tf6INhknThZnfy646xRQ8rF5AJHk1Y9gIgJUuPnu25-AXUrfCWuYeUTgLiV1Xjw5g7nrBW4",
    description: "A comprehensive integration of multiple modalities tailored to your specific needs, providing a holistic approach to recovery."
  },
  {
    title: "Spa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdACCELhuijt3lT4imfG5cU_QCjRZb4IhzjII0Sny8G8PZ0RPXhU5PdQ0zOE-kOZDwNzVdNGKA5-RJuUIx6SFEKDuC9tFfDDj87Nt27AcVEDcP99DUNxhEE91SM4JLosmAk3fyRp6A6n7BJflBYwPtzvWOuqL1JYz-kBAbZSMNuSHwKdokz-ss246besGnxuU3iwZnxnYOwltaE3lm_YZir-3RcdCcMAZiXI-qEeQ7wX-KEgnrgLxsnnk-7io51tBuPNOtGi87Zbvq",
    description: "Rejuvenating spa treatments combining relaxation with therapeutic benefits to calm the mind and soothe the body."
  }
];

export default function RechargePage() {
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Pro" } }));
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section — bg-background */}
      <section className="px-6 md:px-16 py-16 max-w-[1440px] mx-auto bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-8 z-10">
            <div>
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-3"
              >
                Recovery &amp; Wellness
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display-xl text-5xl sm:text-7xl text-on-surface mb-6 uppercase"
              >
                <FlipWord word="RECHARGE" />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-body-lg text-body-lg text-on-surface-variant max-w-lg"
              >
                We offer a range of wellness services including stretch therapy, chiropractic care, physical therapy, and massage therapy. Our goal is to improve flexibility, reduce pain, enhance performance, and support your overall well-being.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={openLeadModal}
                className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-8 py-4 font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] w-full sm:w-auto cursor-pointer"
              >
                BOOK SESSION
              </button>
              <button className="border border-primary text-primary font-label-md text-label-md uppercase rounded px-8 py-4 font-bold hover:bg-primary/10 transition-colors w-full sm:w-auto cursor-pointer">
                VIEW PROTOCOLS
              </button>
            </motion.div>
          </div>
          <div className="lg:col-span-7 relative">
            {/* Subtle radial glow behind hero image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[85%] aspect-square rounded-full bg-[radial-gradient(ellipse_at_center,rgba(42,183,255,0.18)_0%,rgba(42,183,255,0.06)_40%,transparent_70%)] blur-[50px]"></div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-low border-t border-primary/30 z-[1]">
              <img
                alt="Recovery Lounge"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                src="https://lh3.googleusercontent.com/aida/ADBb0ujipl9g5m59Cd54HoF9_0ZHYlM_egx0BasMwrFh5G3Z6bF7AONL81AJN9i9EmYm5jq_aqZmaYcnWUAQStWZwXmkjiCGH6G4QJL09U1vJjDl97UcMFMsrLQy0N51L_aXhlMsH02PiVzergIX0_y4ZFrso6zu2dGnRZKA0BBQkMjbUT_etFdm9lXCk5JCi_mU2S8UWRB8sd1dW6SqssHHgIGd52QdLav5Yq19Wkw633nYhZdlhpv7GhDXr2oH"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full z-[-1]"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/10 blur-[100px] rounded-full z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Services Grid — bg-surface-container-lowest */}
      <div className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070f17 0%, #0c1c2e 40%, #0a1625 60%, #070f17 100%)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"></div>
        <NoiseOverlay />
        <DotGrid />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/8 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 blur-[200px] rounded-full pointer-events-none"></div>
        <section className="px-6 md:px-16 py-20 max-w-[1440px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display-xl text-4xl sm:text-5xl text-on-surface uppercase mb-4">
              <FlipWord word="OUR SERVICES" />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
            >
              Choose from our comprehensive suite of recovery modalities, each designed to restore, rejuvenate, and optimize your body.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rechargeServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-xl overflow-hidden h-[450px] shadow-2xl border-t border-primary/30 bg-surface-container-low"
              >
                <img
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={service.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-0 md:translate-y-[130px] md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-4 drop-shadow-md">{service.title}</h3>
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 h-auto md:h-[130px]">
                      <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">{service.description}</p>
                      <button
                        onClick={openLeadModal}
                        className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-6 py-2.5 shadow-[0_0_20px_rgba(42,183,255,0.3)] transition-shadow font-bold w-max cursor-pointer"
                      >
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Banner — Experience Total Recovery */}
      <section className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-surface-container-low to-secondary/10 border border-primary/20 p-12 md:p-20 text-center"
        >
          <div className="absolute -top-30 -right-30 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-30 -left-30 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,183,255,0.12)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div>
              <p className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4">
                Ready to Begin
              </p>
              <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase leading-tight">
                <FlipWord word="Experience Total Recovery" />
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Book your session today and unlock your body&rsquo;s full potential with our expert recovery specialists.
            </p>
            <button
              onClick={openLeadModal}
              className="bg-primary-container text-black font-label-md text-label-md uppercase rounded px-10 py-5 font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:shadow-[0_0_30px_rgba(42,183,255,0.5)] cursor-pointer"
            >
              Book Your Session
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}