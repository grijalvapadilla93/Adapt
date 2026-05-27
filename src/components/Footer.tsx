"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-surface-container-lowest w-full py-12 border-t border-white/5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <img alt="ADAPT Icon Logo" className="h-7 w-auto filter brightness-110" src="/images/AdaptIconLogo.png" />
            <img alt="ADAPT Logo Text" className="h-4 w-auto filter brightness-110" src="/images/AdaptLogoText.png" />
          </Link>
          <p className="font-label-md text-label-md text-on-surface-variant text-center md:text-left uppercase tracking-widest text-[10px]">
            © 2026 ADAPT PERFORMANCE. ENGINEERED FOR ELITE ATHLETES.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[{ label: "Services", id: "services" }, { label: "Facilities", id: "arena" }, { label: "Pricing", id: "pricing" }, { label: "Location", id: "location" }].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollToSection(id)}
              className="font-label-md text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
