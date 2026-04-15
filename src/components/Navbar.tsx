import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Navbar = ({ onQuoteClick }: { onQuoteClick: (service?: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const servicesLinks = [
    { label: "Auto Detailing", path: "/services" },
    { label: "Ceramic Coatings", path: "/services/protective/ceramic" },
    { label: "Window Tint", path: "/services/protective/tint" },
    { label: "Paint Protection Film (PPF)", path: "/services/protective/ppf" },
  ];

  const navLinks = [
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#0B1F3A] text-white text-center py-2 px-4 relative z-[110]">
        <p className="text-[10px] font-condensed font-bold uppercase tracking-[0.25em]">
          🇺🇸 &nbsp;Fully Mobile — We Come To You &nbsp;·&nbsp; Free Quotes &nbsp;·&nbsp;
          <a href="tel:5550000000" className="underline underline-offset-2 hover:no-underline">(555) 000-0000</a>
        </p>
      </div>

      {/* White Navbar */}
      <nav className="sticky top-0 left-0 right-0 z-[100] bg-white border-b border-[#0B1F3A]/10 h-[60px] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#C8192A] flex items-center justify-center shrink-0">
              <span className="text-white font-display text-lg leading-none">A</span>
            </div>
            <div className="leading-none">
              <span className="font-display text-lg tracking-widest text-[#0B1F3A] uppercase leading-none block">
                All American
              </span>
              <span className="font-condensed font-700 text-[9px] uppercase tracking-[0.3em] text-[#C8192A] leading-none block">
                Detailing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[11px] font-condensed font-bold uppercase tracking-[0.2em] transition-colors ${
                  location.pathname.startsWith("/services") ? "text-[#C8192A]" : "text-[#0B1F3A]/60 hover:text-[#0B1F3A]"
                }`}
              >
                Services <ChevronDown size={12} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`absolute top-full left-0 w-64 pt-4 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="bg-white border border-[#0B1F3A]/10 shadow-xl p-4 flex flex-col gap-3">
                  <div className="h-[3px] bg-[#C8192A] w-8 mb-1" />
                  {servicesLinks.map(l => (
                    <Link
                      key={l.label}
                      to={l.path}
                      onClick={() => setServicesOpen(false)}
                      className="text-[10px] font-condensed font-bold uppercase tracking-widest text-[#0B1F3A]/60 hover:text-[#C8192A] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map(l => (
              <Link
                key={l.label}
                to={l.path}
                className={`text-[11px] font-condensed font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive(l.path) ? "text-[#C8192A]" : "text-[#0B1F3A]/60 hover:text-[#0B1F3A]"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <a
              href="tel:5550000000"
              className="flex items-center gap-2 text-[11px] font-condensed font-bold uppercase tracking-[0.2em] text-[#0B1F3A]/50 hover:text-[#0B1F3A] transition-colors"
            >
              <Phone size={12} /> (555) 000-0000
            </a>

            <button
              onClick={() => onQuoteClick()}
              className="btn-red text-[10px] px-6 py-3"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-[#0B1F3A]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[180] lg:hidden">
          <div
            className="absolute inset-0 bg-[#0B1F3A]/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[85vw] max-w-sm bg-white p-8 shadow-2xl flex flex-col gap-8 pt-24 border-l border-[#0B1F3A]/10 overflow-y-auto">
            {/* Stripe accent */}
            <div className="americana-stripe absolute top-0 left-0 right-0" />

            <Link
              onClick={() => setMobileOpen(false)}
              to="/"
              className="font-condensed font-black text-3xl uppercase tracking-tight text-[#0B1F3A]"
            >
              Home
            </Link>

            <div className="space-y-4">
              <p className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em] text-[#0B1F3A]/40 border-b border-[#0B1F3A]/10 pb-2">Services</p>
              <div className="flex flex-col gap-4 pl-2">
                {servicesLinks.map(l => (
                  <Link
                    key={l.label}
                    onClick={() => setMobileOpen(false)}
                    to={l.path}
                    className="text-sm font-condensed font-bold uppercase tracking-widest text-[#0B1F3A]/70 hover:text-[#C8192A] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map(l => (
              <Link
                key={l.label}
                onClick={() => setMobileOpen(false)}
                to={l.path}
                className="font-condensed font-black text-3xl uppercase tracking-tight text-[#0B1F3A] hover:text-[#C8192A] transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <a href="tel:5550000000" className="font-condensed font-bold text-xl text-[#0B1F3A]/60 flex items-center gap-2">
              <Phone size={16} /> (555) 000-0000
            </a>

            <button
              onClick={() => { onQuoteClick(); setMobileOpen(false); }}
              className="btn-red w-full mt-auto py-5 text-sm"
            >
              Book Now — Free Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
