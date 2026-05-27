"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Arena from "@/src/components/Arena";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import Location from "@/src/components/Location";
import { MessageSquare, Send, X, ArrowUp, CheckCircle, Loader2, Sparkles } from "lucide-react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("General");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: "user" | "bot"; text: string; hasButton?: boolean; buttonLabel?: string }>>([
    { sender: "bot", text: "Welcome to the ADAPT Lab. I am your Performance Strategist assistant. How can we optimize your athletic and recovery lifecycle today?" }
  ]);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 600); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const h = () => { const ts = document.documentElement.scrollHeight - window.innerHeight; if (ts > 0) setScrollProgress((window.scrollY / ts) * 100); setShowBackToTop(window.scrollY > 400); };
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => {
    const h = (e: Event) => { const ce = e as CustomEvent; setSelectedPlan(ce.detail?.plan || "General"); setIsLeadModalOpen(true); setFormSubmitted(false); setLeadForm({ name: "", email: "", phone: "" }); };
    window.addEventListener("open-lead-modal", h); return () => window.removeEventListener("open-lead-modal", h);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault(); if (!leadForm.name || !leadForm.email || !leadForm.phone) return;
    setFormLoading(true); setTimeout(() => { setFormLoading(false); setFormSubmitted(true); }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(); if (!chatMessage.trim()) return;
    const msg = chatMessage.trim(); setChatHistory((p) => [...p, { sender: "user", text: msg }]); setChatMessage("");
    setTimeout(() => {
      const l = msg.toLowerCase(); let reply = "I logged your coordinates. An ADAPT performance manager will reach out shortly. Would you like to schedule an elite 1-on-1 diagnostics tour?";
      let hb = true, bl = "BOOK TOUR";
      if (l.includes("pricing") || l.includes("cost")) { reply = "ADAPT offers 3 elite tiers:\n\n• **Base ($80/mo)**: Full gym floor, lockers, showers.\n• **Pro ($120/mo)**: 1:1 coaching, diagnostics, app.\n• **Elite ($260/mo)**: Unlimited recovery, workspace, premium services.\n\n*20% off with yearly billing.*"; bl = "SELECT MEMBERSHIP"; }
      else if (l.includes("hours") || l.includes("open")) { reply = "• **Mon-Fri**: 05:00 - 23:00\n• **Sat-Sun**: 07:00 - 20:00"; bl = "EXPLORE SERVICES"; }
      else if (l.includes("location") || l.includes("address") || l.includes("miami")) { reply = "**14901 NE 20th Ave, Studio A, North Miami, FL 33181**"; bl = "VIEW ON MAP"; }
      else if (l.includes("recovery") || l.includes("sauna") || l.includes("plunge")) { reply = "**Recovery Suite**: Contrast Plunges, Infrared Saunas, Hyperbaric Chambers, Compression Lounge."; bl = "RECOVERY SUITE"; }
      else if (l.includes("coach") || l.includes("trainer")) { reply = "15+ **Master Performance Coaches** in Olympic lifting, velocity mechanics, rehab, and analytics."; bl = "BOOK DIAGNOSTIC"; }
      else if (l.includes("hello") || l.includes("hi") || l.includes("help")) { reply = "I can help with:\n1. Membership & Pricing\n2. Hours & Location\n3. Recovery Suite\n4. Coaching\n\nHow can I help?"; hb = false; }
      setChatHistory((p) => [...p, { sender: "bot", text: reply, hasButton: hb, buttonLabel: bl }]);
    }, 800);
  };

  const handleChatButtonClick = (label?: string) => {
    if (label === "VIEW ON MAP") document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
    else if (label === "EXPLORE SERVICES") document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    else window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: label === "SELECT MEMBERSHIP" ? "Pro" : "General" } }));
  };

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container text-on-surface font-sans antialiased">
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0, transition: { duration: 0.4 } }} className="fixed inset-0 bg-[#081018] z-[9999] flex flex-col items-center justify-center touch-none" style={{ overscrollBehavior: "none" }}>
            <motion.img initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: [0.85, 1.05, 1], opacity: 1 }} transition={{ duration: 0.6 }} className="h-14 w-auto mb-8 filter brightness-110" src="/images/AdaptIconLogo.png" />
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div initial={{ left: "-100%" }} animate={{ left: "100%" }} transition={{ repeat: Infinity, duration: 1.2 }} className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed top-0 left-0 h-[3px] bg-primary z-[60] transition-all duration-75 pointer-events-none shadow-[0_0_10px_rgba(42,183,255,0.8)]" style={{ width: `${scrollProgress}%` }} />
      <Hero /><Services /><Arena /><Pricing /><Testimonials /><Location />

      <AnimatePresence>
        {showBackToTop && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed bottom-26 right-8 z-40">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-[#151A22]/90 hover:bg-surface-container-high border border-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(42,183,255,0.1)] hover:shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer text-primary"><ArrowUp className="w-5 h-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 z-40">
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-[#151A22]/90 hover:bg-surface-container-high border border-white/10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(42,183,255,0.2)] hover:shadow-[0_0_30px_rgba(42,183,255,0.4)] group active:scale-95 cursor-pointer"><MessageSquare className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" /></button>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.95 }} transition={{ duration: 0.3 }} className="fixed bottom-24 right-8 w-96 max-h-[500px] z-50 bg-[#0c141c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-surface-container-high px-5 py-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(42,183,255,0.8)]" /><span className="font-label-md text-xs tracking-wider uppercase text-white font-semibold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-primary" />ADAPT Lab Strategist</span></div>
              <button onClick={() => setIsChatOpen(false)} className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[300px]">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%] flex flex-col gap-2">
                    <div className={`p-3.5 rounded-2xl text-xs leading-relaxed ${msg.sender === "user" ? "bg-primary text-black rounded-tr-none font-semibold shadow-[0_0_15px_rgba(42,183,255,0.15)]" : "bg-surface-container border border-white/5 text-white/90 rounded-tl-none whitespace-pre-line"}`}>{msg.text}</div>
                    {msg.sender === "bot" && msg.hasButton && <button onClick={() => handleChatButtonClick(msg.buttonLabel)} className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary uppercase text-[10px] tracking-widest font-bold py-2 rounded-xl transition-all cursor-pointer text-center w-full self-start">{msg.buttonLabel}</button>}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-surface-container-lowest flex gap-2">
              <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} placeholder="Ask pricing, hours, location..." className="flex-grow bg-surface border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary placeholder-white/30" />
              <button type="submit" className="bg-primary hover:bg-primary-container p-2.5 rounded-lg text-black transition-all active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(42,183,255,0.3)]"><Send className="w-3.5 h-3.5" /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsLeadModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 15 }} className="bg-[#0c141c]/95 border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl relative z-10 overflow-hidden">
              <button onClick={() => setIsLeadModalOpen(false)} className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors cursor-pointer p-1"><X className="w-5 h-5" /></button>
              {!formSubmitted ? (
                <>
                  <div className="mb-6"><h3 className="font-display-xl text-xl uppercase text-white font-bold">{selectedPlan === "General" ? "Book A Tour" : `Join Adapt: ${selectedPlan}`}</h3><p className="text-on-surface-variant text-xs mt-1 uppercase tracking-widest">Enter your details to initiate training.</p></div>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    {[{ label: "Name", key: "name", type: "text", placeholder: "John Doe" }, { label: "Email", key: "email", type: "email", placeholder: "john@example.com" }, { label: "Phone", key: "phone", type: "tel", placeholder: "(786) 555-0199" }].map(({ label, key, type, placeholder }) => (
                      <div key={key}><label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 font-bold">{label}</label><input type={type} required value={(leadForm as any)[key]} onChange={(e) => setLeadForm({ ...leadForm, [key]: e.target.value })} placeholder={placeholder} className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary placeholder-white/20 transition-colors" /></div>
                    ))}
                    <div className="pt-2"><button type="submit" disabled={formLoading} className="w-full bg-primary hover:bg-primary-container text-black font-bold uppercase py-3 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]">{formLoading ? <><Loader2 className="w-4 h-4 animate-spin" />SUBMITTING...</> : "SUBMIT"}</button></div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20"><CheckCircle className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-display-xl text-lg uppercase text-white font-bold mb-2">Request Received</h3>
                  <p className="text-on-surface-variant text-xs max-w-sm mx-auto uppercase tracking-wide leading-relaxed">Thank you, <span className="text-white font-bold">{leadForm.name}</span>. An ADAPT strategist will contact you at <span className="text-white font-bold">{leadForm.phone}</span> shortly.</p>
                  <button onClick={() => setIsLeadModalOpen(false)} className="mt-6 bg-transparent hover:bg-white/5 border border-white/20 text-white text-xs font-bold uppercase px-6 py-2.5 rounded-lg transition-all cursor-pointer">Close</button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
