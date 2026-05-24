import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + (id ? `#${id}` : ""));
      // Delay scroll for navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
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

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center cursor-pointer gap-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            alt="ADAPT Icon Logo"
            className="h-8 w-auto filter brightness-110"
            src="/images/AdaptIconLogo.png"
          />
          <img
            alt="ADAPT Logo Text"
            className="h-5 w-auto filter brightness-110 hidden sm:block"
            src="/images/AdaptLogoText.png"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center">
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => scrollToSection("services")}
              className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 pb-1 flex items-center gap-1 cursor-pointer"
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-white/10 rounded-lg py-3 transition-all duration-300 shadow-2xl z-50 ${
                isServicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              <Link
                to="/train"
                onClick={() => setIsServicesOpen(false)}
                className="w-full text-left block px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
              >
                Train
              </Link>
              <Link
                to="/group-classes"
                onClick={() => setIsServicesOpen(false)}
                className="w-full text-left block px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
              >
                Group Classes
              </Link>
              <Link
                to="/recharge"
                onClick={() => setIsServicesOpen(false)}
                className="w-full text-left block px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
              >
                Recharge
              </Link>
              <Link
                to="/workspace"
                onClick={() => setIsServicesOpen(false)}
                className="w-full text-left block px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
              >
                Workspace
              </Link>
              <Link
                to="/nutrition"
                onClick={() => setIsServicesOpen(false)}
                className="w-full text-left block px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
              >
                Nutrition
              </Link>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("arena")}
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Facilities
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("community")}
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Community
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            Location
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "General" } }))}
            className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-primary-container transition-colors duration-300 font-bold cursor-pointer"
          >
            JOIN NOW
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center items-center gap-8 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <Link
          to="/train"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Train
        </Link>
        <Link
          to="/group-classes"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Group Classes
        </Link>
        <Link
          to="/recharge"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Recharge
        </Link>
        <Link
          to="/workspace"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Workspace
        </Link>
        <Link
          to="/nutrition"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Nutrition
        </Link>
        <button
          onClick={() => scrollToSection("arena")}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Facilities
        </button>
        <button
          onClick={() => scrollToSection("pricing")}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Pricing
        </button>
        <button
          onClick={() => scrollToSection("community")}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Community
        </button>
        <button
          onClick={() => scrollToSection("location")}
          className="font-display-xl text-3xl text-white uppercase tracking-wider hover:text-primary transition-colors"
        >
          Location
        </button>
      </div>
    </>
  );
}
