import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  onQuoteClick: (service?: string, location?: string) => void;
}

const Footer = ({ onQuoteClick }: FooterProps) => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Americana stripe top */}
      <div className="americana-stripe" />

      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C8192A] flex items-center justify-center shrink-0">
                <span className="text-white font-display text-xl leading-none">A</span>
              </div>
              <div className="leading-none">
                <span className="font-display text-xl tracking-widest text-white uppercase leading-none block">All American</span>
                <span className="font-condensed font-bold text-[10px] uppercase tracking-[0.3em] text-[#C8192A] leading-none block">Detailing</span>
              </div>
            </div>
            <p className="text-white/60 text-[12px] leading-relaxed font-condensed font-semibold uppercase tracking-wider">
              Built on Pride. Polished to Perfection. Professional mobile detailing — we come to you.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C8192A] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C8192A] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-condensed font-black text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-[#C8192A]" />
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "About", path: "/about" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map(l => (
                <Link
                  key={l.label}
                  to={l.path}
                  className="text-white/60 text-sm font-condensed font-bold hover:text-[#C8192A] transition-colors uppercase tracking-widest"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-condensed font-black text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-[#C8192A]" />
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-xs text-white/60 font-condensed font-bold uppercase tracking-wider">
              <a href="tel:5550000000" className="flex items-center gap-3 hover:text-[#C8192A] transition-colors">
                <Phone size={14} className="shrink-0" />(555) 000-0000
              </a>
              <a href="mailto:hello@allamericandetailing.com" className="flex items-center gap-3 hover:text-[#C8192A] transition-colors">
                <Mail size={14} className="shrink-0" />hello@allamericandetailing.com
              </a>
              <span className="flex items-start gap-3">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Mobile Service —<br />We Come to You
              </span>
              <span className="flex items-center gap-3">
                <Clock size={14} className="shrink-0" />Mon–Sun 8AM–6PM
              </span>
            </div>
          </div>

          {/* Col 4 — Service Area */}
          <div>
            <h4 className="font-condensed font-black text-sm uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-[#C8192A]" />
              Service Area
            </h4>
            <p className="text-white/60 text-sm font-condensed font-bold leading-relaxed uppercase tracking-widest mb-6">
              Serving the greater metro area and surrounding communities within 50 miles.
            </p>
            <button
              onClick={() => onQuoteClick()}
              className="btn-red text-[10px] px-5 py-3 w-full"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[10px] font-condensed font-black uppercase tracking-widest">
            © {new Date().getFullYear()} All American Detailing. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px] font-condensed uppercase tracking-widest">
            Licensed · Insured · Mobile Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
