"use client";

import { MapPin, Phone, Clock, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { ViewOnMap } from "./ui/view-on-map";

export default function Location() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="location" className="py-[120px] bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & Contact */}
          <div className="order-1 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display-xl text-5xl md:text-7xl uppercase mb-6 text-primary-container tracking-tight"
            >
              VISIT THE LAB
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body-lg text-white/95 mb-10 text-lg leading-relaxed"
            >
              Experience the pinnacle of performance in person.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-start gap-4"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-white uppercase tracking-wider text-xs font-semibold">
                    Address
                  </h4>
                  <p className="font-body-md text-on-surface-variant mt-1 text-sm leading-relaxed">
                    14901 NE 20th Ave, Studio A
                    <br />
                    North Miami, FL 33181
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-start gap-4"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-white uppercase tracking-wider text-xs font-semibold">
                    Phone
                  </h4>
                  <p className="font-body-md text-on-surface-variant mt-1 text-sm">
                    786-717-7470
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-start gap-4"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-white uppercase tracking-wider text-xs font-semibold">
                    Email
                  </h4>
                  <p className="font-body-md text-on-surface-variant mt-1 text-sm">
                    info@trainadapt.com
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-start gap-4"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label-md text-white uppercase tracking-wider text-xs font-semibold">
                    Hours
                  </h4>
                  <p className="font-body-md text-on-surface-variant mt-1 text-sm leading-relaxed">
                    Mon-Fri: 05:00 - 23:00
                    <br />
                    Sat-Sun: 07:00 - 20:00
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToPricing}
                className="font-label-md text-label-md uppercase px-10 py-5 rounded font-bold blue-glow blue-glow-hover transition-all duration-300 bg-transparent backdrop-blur-xl border border-white/10 text-primary-container cursor-pointer"
              >
                BOOK A TOUR
              </motion.button>

              <div className="flex gap-4">
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-white/70 hover:text-primary flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-white/70 hover:text-primary flex items-center justify-center transition-all duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-white/70 hover:text-primary flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-2 flex items-center justify-center"
          >
            <ViewOnMap
              locationName="ADAPT Lab"
              address="14901 NE 20th Ave, Studio A, North Miami, FL 33181"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
