import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Arena from "../components/Arena";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import { MessageSquare, Send, X, ArrowUp, CheckCircle, Loader2, Sparkles } from "lucide-react";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Lead Capture Modal states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("General");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: "user" | "bot"; text: string; hasButton?: boolean; buttonLabel?: string }>>([
    {
      sender: "bot",
      text: "Welcome to the ADAPT Lab. I am your Performance Strategist assistant. How can we optimize your athletic and recovery lifecycle today?"
    }
  ]);

  // Initial loading splash screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // Scroll tracking (Progress bar + Back to Top visibility)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global window event listener to open Lead Capture Modal from any button
  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      const plan = customEvent.detail?.plan || "General";
      setSelectedPlan(plan);
      setIsLeadModalOpen(true);
      setFormSubmitted(false);
      setLeadForm({ name: "", email: "", phone: "" });
    };
    window.addEventListener("open-lead-modal", handleOpenModal);
    return () => window.removeEventListener("open-lead-modal", handleOpenModal);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email || !leadForm.phone) return;

    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage.trim();
    setChatHistory((prev) => [...prev, { sender: "user", text: userMsg }]);
    setChatMessage("");

    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let reply = "I logged your coordinates. An ADAPT performance manager will reach out shortly. In the meantime, would you like to schedule an elite 1-on-1 diagnostics tour?";
      let hasButton = true;
      let buttonLabel = "BOOK TOUR";

      if (lower.includes("pricing") || lower.includes("cost") || lower.includes("membership") || lower.includes("fee")) {
        reply = "ADAPT offers 3 elite tiers custom engineered to match your goals:\n\n• **Base Tier ($80/mo)**: Full gym floor access, lockers, showers, & guest passes.\n• **Pro Tier ($120/mo)**: 1:1 training consults, assessment diagnostics, tracking app.\n• **Elite Tier ($260/mo)**: Unlimited recovery plunges, saunas, workspace, and premium services.\n\n*Choose yearly billing for an immediate 20% discount ($64/mo, $96/mo, $208/mo).*";
        buttonLabel = "SELECT MEMBERSHIP";
      } else if (lower.includes("hours") || lower.includes("open") || lower.includes("time") || lower.includes("schedule")) {
        reply = "Our multidisciplinary facility operates during peak performance hours:\n\n• **Monday - Friday**: 05:00 - 23:00\n• **Saturday - Sunday**: 07:00 - 20:00\n\n*Lounge services and workspaces are fully accessible to members during all operational hours.*";
        buttonLabel = "EXPLORE SERVICES";
      } else if (lower.includes("location") || lower.includes("address") || lower.includes("where") || lower.includes("miami")) {
        reply = "We are situated in the high-end industrial coordinates of North Miami:\n\n📍 **14901 NE 20th Ave, Studio A, North Miami, FL 33181**\n\n*Our training lab features a full-service turf floor, recovery lounge, and digital workspace. Click below to view the map coordinates.*";
        buttonLabel = "VIEW ON MAP";
      } else if (lower.includes("recovery") || lower.includes("sauna") || lower.includes("plunge") || lower.includes("therapy")) {
        reply = "Our state-of-the-art **Recovery Suite** is a dedicated bio-hacking lounge designed to accelerate cell adaptation:\n\n• **Contrast Plunges**: Sub-50°F cold therapy baths.\n• **Dry Infrared Saunas**: Cellular detoxification.\n• **Hyperbaric Chambers**: High-pressure oxygenation therapy.\n• **Compression Lounge**: Normatec active recovery systems.";
        buttonLabel = "RECOVERY SUITE";
      } else if (lower.includes("coach") || lower.includes("trainer") || lower.includes("personal")) {
        reply = "We house 15+ **Master Performance Coaches** specializing in Olympic lifting, professional velocity mechanics, physical rehabilitation, and biometric analytics. Every coach works collaboratively to ensure your training, recovery, and lifestyle goals are mathematically achieved.";
        buttonLabel = "BOOK DIAGNOSTIC";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("help")) {
        reply = "Hello! I am your ADAPT Performance Strategist. I can assist you with:\n\n1. **Membership & Pricing details**\n2. **Coordinates & Hours of Operation**\n3. **Recovery Suite amenities**\n4. **Coaching & Class information**\n\nHow can I help optimize your lifecycle today?";
        hasButton = false;
      }

      setChatHistory((prev) => [...prev, { sender: "bot", text: reply, hasButton, buttonLabel }]);
    }, 800);
  };

  const handleChatButtonClick = (label?: string) => {
    if (label === "VIEW ON MAP") {
      const element = document.getElementById("location");
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (label === "EXPLORE SERVICES") {
      const element = document.getElementById("services");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      const plan = label === "SELECT MEMBERSHIP" ? "Pro" : "General";
      window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan } }));
    }
  };

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container text-on-surface font-sans antialiased">
      {/* 1. INITIAL SPLASH LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
            className="fixed inset-0 bg-[#081018] z-[9999] flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.85, 1.05, 1], opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-14 w-auto mb-8 filter brightness-110"
                src="/images/AdaptIconLogo.png"
              />
              <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SCROLL PROGRESS INDICATOR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-[60] transition-all duration-75 pointer-events-none shadow-[0_0_10px_rgba(42,183,255,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Hero />
      <Services />
      <Arena />
      <Pricing />
      <Testimonials />
      <Location />

      {/* 4. FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-26 right-8 z-40 hidden md:block"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#151A22]/90 hover:bg-surface-container-high border border-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(42,183,255,0.1)] hover:shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer text-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget FAB */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#151A22]/90 hover:bg-surface-container-high border border-white/10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(42,183,255,0.2)] hover:shadow-[0_0_30px_rgba(42,183,255,0.4)] group active:scale-95 cursor-pointer"
          aria-label="Open support chat"
        >
          <MessageSquare className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* 5. INTERACTIVE CHAT DIALOG DRAWER */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 w-96 max-h-[500px] z-50 bg-[#0c141c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-surface-container-high px-5 py-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(42,183,255,0.8)]"></div>
                <span className="font-label-md text-xs tracking-wider uppercase text-white font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  ADAPT Lab Strategist
                </span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[300px] scrollbar-thin scrollbar-thumb-white/10 scroll-smooth">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[85%] flex flex-col gap-2">
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-primary text-black rounded-tr-none font-semibold shadow-[0_0_15px_rgba(42,183,255,0.15)]"
                          : "bg-surface-container border border-white/5 text-white/90 rounded-tl-none whitespace-pre-line"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === "bot" && msg.hasButton && (
                      <button
                        onClick={() => handleChatButtonClick(msg.buttonLabel)}
                        className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary uppercase text-[10px] tracking-widest font-bold py-2 rounded-xl transition-all cursor-pointer text-center w-full self-start"
                      >
                        {msg.buttonLabel}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-white/10 bg-surface-container-lowest flex gap-2"
            >
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask pricing, hours, location, saunas..."
                className="flex-grow bg-surface border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary placeholder-white/30"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-container p-2.5 rounded-lg text-black transition-all active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(42,183,255,0.3)]"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. DYNAMIC LEAD CAPTURE MODAL */}
      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#0c141c]/95 border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl relative z-10 overflow-hidden"
            >
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="font-display-xl text-xl uppercase text-white font-bold">
                      {selectedPlan === "General" ? "Book A Tour" : `Join Adapt: ${selectedPlan}`}
                    </h3>
                    <p className="text-on-surface-variant text-xs mt-1 uppercase tracking-widest">
                      Enter your details to initiate training.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 font-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary placeholder-white/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 font-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary placeholder-white/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1.5 font-bold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="(786) 555-0199"
                        className="w-full bg-surface border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary placeholder-white/20 transition-colors"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full bg-primary hover:bg-primary-container text-black font-bold uppercase py-3 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
                      >
                        {formLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            SUBMITTING...
                          </>
                        ) : (
                          "SUBMIT"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display-xl text-lg uppercase text-white font-bold mb-2">
                    Request Received
                  </h3>
                  <p className="text-on-surface-variant text-xs max-w-sm mx-auto uppercase tracking-wide leading-relaxed">
                    Thank you, <span className="text-white font-bold">{leadForm.name}</span>. An ADAPT strategist will contact you at <span className="text-white font-bold">{leadForm.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => setIsLeadModalOpen(false)}
                    className="mt-6 bg-transparent hover:bg-white/5 border border-white/20 text-white text-xs font-bold uppercase px-6 py-2.5 rounded-lg transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
