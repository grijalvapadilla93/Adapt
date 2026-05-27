"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = useCallback(() => {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
    setIsServicesOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push("/#" + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const navItems = ["arena", "pricing", "community", "location"];
  const navLabels: Record<string, string> = { arena: "Facilities", pricing: "Pricing", community: "Community", location: "Location" };

  const serviceLinks = [
    { to: "/train", label: "Train" },
    { to: "/group-classes", label: "Group Classes" },
    { to: "/recharge", label: "Recharge" },
    { to: "/workspace", label: "Workspace" },
    { to: "/nutrition", label: "Nutrition" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4" : "bg-transparent border-b border-transparent"}`}>
        <Link href="/" className="flex items-center cursor-pointer gap-3" scroll={false}>
          <img alt="ADAPT Icon Logo" className="h-8 w-auto filter brightness-110" src="/images/AdaptIconLogo.png" />
          <img alt="ADAPT Logo Text" className="h-5 w-auto filter brightness-110 hidden sm:block" src="/images/AdaptLogoText.png" />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button onClick={() => scrollToSection("services")} className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 pb-1 flex items-center gap-1 cursor-pointer">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-0 mt-1 pt-2 w-52 bg-background/95 backdrop-blur-xl border border-white/10 rounded-lg py-3 transition-all duration-200 shadow-2xl z-50 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"}`}>
              {serviceLinks.map(({ to, label }) => (
                <Link key={to} href={to} onClick={() => setIsServicesOpen(false)} className="block px-6 py-2.5 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          {navItems.map((id) => (
            <button key={id} onClick={() => scrollToSection(id)} className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer">{navLabels[id]}</button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "General" } }))} className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-primary-container transition-colors duration-300 font-bold cursor-pointer">JOIN NOW</button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white hover:text-primary transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-background/98 backdrop-blur-2xl z-[60] md:hidden flex flex-col justify-center items-center gap-8 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        {serviceLinks.map(({ to, label }) => (
          <Link key={to} href={to} onClick={() => setIsMobileMenuOpen(false)} className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors">{label}</Link>
        ))}
        {navItems.map((id) => (
          <button key={id} onClick={() => scrollToSection(id)} className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors capitalize">{navLabels[id]}</button>
        ))}
      </div>
    </>
  );
}
