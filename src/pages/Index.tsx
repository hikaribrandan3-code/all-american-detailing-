import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Star, Phone, CheckCircle, Award, Shield, ChevronRight, MapPin, Zap, Droplets, Car, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import { useState, useEffect, useRef } from "react";

// Animated counter
const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start = Math.min(start + step, end);
            setCount(start);
            if (start >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const StarRow = ({ n = 5 }: { n?: number }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} size={14} fill="#D4A833" stroke="none" />
    ))}
  </span>
);

const Index = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  const services = [
    {
      image: "/images/assets/interior_detailing_focus_1776187301149.png",
      name: "Interior Detail",
      price: "$199+",
      desc: "Deep clean every surface. Leather treated. Carpets steam-extracted. Like new inside.",
      time: "2–3 hrs",
      bullets: ["Full vacuum & steam", "Leather conditioning", "Door jambs & glass", "Odor elimination"],
      service: "Interior Detail",
    },
    {
      image: "/images/assets/exterior_paint_gloss_1776187353898.png",
      name: "Full Detail",
      price: "$350+",
      desc: "Hand wash, decontamination, clay, and premium wax. Mirror-finish showroom shine.",
      time: "5–6 hrs",
      bullets: ["Multi-stage hand wash", "Clay bar decon", "Paint sealant", "Tire & trim dressing"],
      service: "Full Detail",
      popular: true,
    },
    {
      image: "/images/assets/ceramic_coating_bottle_glow_1776187427504.png",
      name: "Ceramic Coating",
      price: "$600+",
      desc: "Professional-grade nano-coating. 3–5 year protection. UV-resistant hydrophobic gloss.",
      time: "8+ hrs",
      bullets: ["Multi-stage paint prep", "Nano-ceramic bond", "UV & chemical shield", "Extreme hydrophobics"],
      service: "Ceramic Coating",
    },
    {
      image: "/images/assets/window_tint_luxury_1776189700411.png",
      name: "Window Tint",
      price: "Call for Quote",
      desc: "Heat rejection, UV blocking, privacy, and a clean factory look. Carbon or ceramic film.",
      time: "3–4 hrs",
      bullets: ["Carbon or ceramic film", "99% UV blockage", "Computer precision cut", "No-peel guarantee"],
      service: "Window Tint",
    },
    {
      image: "/images/assets/ppf_application_background_1776191964267.png",
      name: "PPF (Clear Bra)",
      price: "Call for Quote",
      desc: "Self-healing film for rock chips, road rash, and paint damage. Front-end or full car.",
      time: "1–3 days",
      bullets: ["XPEL or SunTek film", "Self-healing tech", "Rock chip protection", "10-year warranty"],
      service: "PPF",
    },
    {
      image: "/images/assets/exterior_paint_gloss_1776187353898.png",
      name: "Paint Correction",
      price: "Call for Quote",
      desc: "Remove swirls, scratches, and oxidation. Mandatory consultation before any ceramic.",
      time: "4–8+ hrs",
      bullets: ["Paint depth check", "Multi-stage polish", "Swirl & scratch removal", "Pre-ceramic prep"],
      service: "Paint Correction",
    },
  ];

  const gallery = [
    { img: "/images/portfolio/jeep-green.jpg", title: "Jeep Wrangler", tag: "Full Exterior Detail" },
    { img: "/images/portfolio/tesla-masked.jpg", title: "Tesla Model Y", tag: "Paint Correction Prep" },
    { img: "/images/portfolio/hot-rod.jpg", title: "Classic Hot Rod", tag: "Full Restoration" },
    { img: "/images/portfolio/paint-correction-5050.jpg", title: "50/50 Split", tag: "Paint Correction" },
    { img: "/images/portfolio/ceramic-red-car.jpg", title: "Red Sport", tag: "Ceramic Coating" },
    { img: "/images/portfolio/sb3-alpha.jpg", title: "SB3 Alpha", tag: "Ceramic Application" },
  ];

  const testimonials = [
    {
      name: "Marcus T.",
      vehicle: "2022 Ford F-150",
      text: "Best detail I've ever had on my truck. They came right to my driveway and the result was showroom quality. Absolutely worth every dollar.",
      stars: 5,
    },
    {
      name: "Sarah L.",
      vehicle: "2021 Tesla Model 3",
      text: "The ceramic coating has held up perfectly for over a year now. Water just beads right off. These guys know what they're doing.",
      stars: 5,
    },
    {
      name: "Jimmy R.",
      vehicle: "1969 Chevy Camaro",
      text: "Trusted them with my classic and they treated it with the respect it deserves. The paint correction brought it back to life. 10/10.",
      stars: 5,
    },
    {
      name: "Diana M.",
      vehicle: "2023 BMW X5",
      text: "Booked the full detail and PPF package. Couldn't be happier. Professional, punctual, and the results speak for themselves.",
      stars: 5,
    },
    {
      name: "Carlos V.",
      vehicle: "2020 Toyota Tundra",
      text: "Super easy to book, they were on time, and my truck looks absolutely incredible. Will be booking again for the ceramic coating.",
      stars: 5,
    },
    {
      name: "Amber K.",
      vehicle: "2022 Audi Q5",
      text: "Incredible attention to detail. They even cleaned areas I didn't expect. My car looks better than the day I bought it.",
      stars: 5,
    },
  ];

  const packages = [
    {
      name: "The Patriot",
      badge: "Entry",
      price: "$149",
      desc: "Essential interior or exterior clean. Perfect for regular maintenance.",
      items: ["Exterior hand wash & dry", "Tire & wheel clean", "Interior vacuum", "Window clean"],
      color: "border-[#0B1F3A]/20",
      cta: "white",
    },
    {
      name: "The Eagle",
      badge: "Most Popular",
      price: "$350",
      desc: "Full interior + exterior detail. The complete transformation package.",
      items: ["Everything in Patriot", "Steam interior clean", "Leather conditioning", "Clay bar & sealant", "Engine bay wipe"],
      color: "border-[#C8192A]",
      featured: true,
      cta: "red",
    },
    {
      name: "The Commander",
      badge: "Premium",
      price: "$600+",
      desc: "Ceramic or PPF protection with full detail. The ultimate investment.",
      items: ["Everything in Eagle", "Paint decontamination", "Multi-stage correction", "Ceramic or PPF install", "1-year warranty"],
      color: "border-[#0B1F3A]/20",
      cta: "navy",
    },
  ];

  const marqueeItems = [
    "FULLY MOBILE", "WE COME TO YOU", "LICENSED & INSURED",
    "CERAMIC COATING", "PAINT CORRECTION", "PPF INSTALLATION",
    "WINDOW TINT", "FREE QUOTES", "SATISFACTION GUARANTEED",
    "FULLY MOBILE", "WE COME TO YOU", "LICENSED & INSURED",
    "CERAMIC COATING", "PAINT CORRECTION", "PPF INSTALLATION",
    "WINDOW TINT", "FREE QUOTES", "SATISFACTION GUARANTEED",
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#0B1F3A]">
      <SEO
        title="All American Detailing | Professional Mobile Auto Detailing"
        description="Built on Pride. Polished to Perfection. Professional mobile detailing, ceramic coatings, PPF, and window tint. We come to you — free quotes."
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center pt-[80px]">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portfolio/paint-correction-5050.jpg"
            alt="Professional auto detailing"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 via-[#0B1F3A]/40 to-[#F5F0E8]" />
        </div>

        {/* Americana stripe overlay top */}
        <div className="absolute top-0 left-0 right-0 americana-stripe z-10 opacity-80" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col items-start max-w-5xl">
          <p className="section-label mb-4 text-white/80">Fully Mobile · Licensed &amp; Insured</p>

          <h1 className="font-condensed font-black italic uppercase leading-[0.9] text-white text-[70px] sm:text-[100px] lg:text-[130px] tracking-tight mb-6"
            style={{ textShadow: "0 8px 40px rgba(0,0,0,0.8)" }}
          >
            Built on Pride.<br />
            <span className="text-[#C8192A]">Polished to</span><br />
            Perfection.
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <StarRow />
            <span className="font-condensed font-bold text-sm text-white/80 uppercase tracking-wider">
              5.0 · 100+ Five-Star Reviews
            </span>
          </div>

          <p className="font-body text-white/70 text-base lg:text-lg max-w-xl leading-relaxed mb-8">
            Professional mobile auto detailing, ceramic coatings, and paint protection —
            we bring the shop to your driveway.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => openQuote()}
              className="btn-red text-sm px-8 py-4"
            >
              Get a Free Quote →
            </button>
            <a
              href="tel:5550000000"
              className="btn-outline-navy bg-white/10 border-white text-white hover:bg-white hover:text-[#0B1F3A] text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <Phone size={14} /> Call Direct
            </a>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / TRUST BAR ─── */}
      <section className="bg-[#0B1F3A] py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              { icon: <Star size={24} fill="#D4A833" stroke="none" />, stat: "100+", label: "5-Star Reviews" },
              { icon: <Award size={24} className="text-[#C8192A]" />, stat: "15+", label: "Years Experience" },
              { icon: <Shield size={24} className="text-[#C8192A]" />, stat: "100%", label: "Satisfaction Guaranteed" },
              { icon: <Car size={24} className="text-[#C8192A]" />, stat: "$50M+", label: "In Vehicles Detailed" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-condensed font-black text-2xl text-white leading-none">
                    {i === 0 ? <><Counter end={100} />+</> : item.stat}
                  </p>
                  <p className="font-condensed font-bold text-[10px] uppercase tracking-widest text-white/40 mt-0.5">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCROLLING MARQUEE ─── */}
      <div className="bg-[#C8192A] py-3 overflow-hidden">
        <div className="animate-marquee flex gap-0 whitespace-nowrap w-max">
          {marqueeItems.map((item, i) => (
            <span key={i} className="font-display text-white text-lg tracking-widest px-8 flex items-center gap-8">
              {item} <span className="text-white/40 text-lg">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section id="services-grid" className="py-16 lg:py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="font-condensed font-black italic uppercase text-[50px] lg:text-[70px] leading-none tracking-tight text-[#0B1F3A]">
              Our Services
            </h2>
            <div className="h-1 w-16 bg-[#C8192A] mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-white border border-[#0B1F3A]/10 overflow-hidden hover:border-[#C8192A]/50 transition-all duration-300 card-hover"
              >
                {s.popular && (
                  <div className="absolute top-0 left-0 right-0 z-10 bg-[#C8192A] text-white text-[9px] font-condensed font-black uppercase tracking-widest text-center py-1">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <span className="font-condensed font-black text-white uppercase tracking-wider text-lg leading-none">
                      {s.name}
                    </span>
                    <span className="font-condensed font-black text-[#C8192A] text-lg leading-none">{s.price}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={12} className="text-[#0B1F3A]/40 shrink-0" />
                    <span className="font-condensed font-bold text-[10px] uppercase tracking-widest text-[#0B1F3A]/40">{s.time}</span>
                  </div>
                  <p className="text-sm font-body text-[#0B1F3A]/70 leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-[10px] font-condensed font-bold uppercase tracking-wider text-[#0B1F3A]/60">
                        <div className="w-1.5 h-1.5 bg-[#C8192A] rotate-45 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openQuote(s.service)}
                    className="w-full btn-red text-[10px] py-3"
                  >
                    Book {s.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline-navy text-sm px-8 py-4 inline-flex items-center gap-2">
              View All Services <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className="bg-[#0B1F3A] py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3 text-white/60">Why Choose Us</p>
              <h2 className="font-condensed font-black italic uppercase text-[44px] lg:text-[60px] leading-none tracking-tight text-white mb-6">
                Tired of<br />
                <span className="text-[#C8192A]">Shops That<br />Cut Corners?</span>
              </h2>
              <div className="space-y-5 text-white/70 font-body leading-relaxed">
                <p>
                  Most "detailers" show up with a bucket, a sponge, and no real training. You pay good money and get
                  swirl marks, missed spots, and a car that looks worse than before.
                </p>
                <p>
                  <strong className="text-white">We built our business differently.</strong> Every job uses professional-grade
                  equipment, proven techniques, and the same care you'd give your own vehicle. We're fully self-contained —
                  generator, pressure washer, fresh water tank — no shortcuts, no excuses.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Zap size={22} className="text-[#C8192A]" />, title: "Fully Mobile", desc: "We come to your home, office, or wherever your car is parked." },
                { icon: <Shield size={22} className="text-[#C8192A]" />, title: "Certified Tech", desc: "XPEL certified, STEK authorized, 3M trained — the real credentials." },
                { icon: <Droplets size={22} className="text-[#C8192A]" />, title: "Self-Contained", desc: "Generator, pressure washer, fresh water — no hookup needed." },
                { icon: <CheckCircle size={22} className="text-[#C8192A]" />, title: "Guaranteed", desc: "100% satisfaction guaranteed or we come back and make it right." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 hover:border-[#C8192A]/40 transition-colors">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-condensed font-black text-white text-base uppercase tracking-wider mb-2">{item.title}</h4>
                  <p className="text-white/50 text-xs font-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="py-16 lg:py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">Simple Pricing</p>
            <h2 className="font-condensed font-black italic uppercase text-[50px] lg:text-[70px] leading-none tracking-tight text-[#0B1F3A]">
              Choose Your Package
            </h2>
            <div className="h-1 w-16 bg-[#C8192A] mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative bg-white border-2 ${pkg.color} overflow-hidden flex flex-col ${pkg.featured ? "shadow-xl scale-[1.02]" : ""}`}
              >
                {pkg.featured && (
                  <div className="americana-stripe" />
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className={`font-condensed font-black text-[9px] uppercase tracking-widest ${pkg.featured ? "text-[#C8192A]" : "text-[#0B1F3A]/40"}`}>
                      {pkg.badge}
                    </span>
                    <h3 className="font-condensed font-black text-2xl uppercase tracking-wider text-[#0B1F3A] mt-1">{pkg.name}</h3>
                    <p className="font-condensed font-black text-4xl text-[#0B1F3A] mt-2">{pkg.price}</p>
                  </div>

                  <p className="text-sm font-body text-[#0B1F3A]/60 leading-relaxed mb-5">{pkg.desc}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs font-condensed font-bold uppercase tracking-wider text-[#0B1F3A]/70">
                        <CheckCircle size={13} className="text-[#C8192A] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openQuote(pkg.name)}
                    className={
                      pkg.cta === "red" ? "btn-red w-full text-[10px] py-3.5 mt-auto" :
                      pkg.cta === "navy" ? "btn-navy w-full text-[10px] py-3.5 mt-auto" :
                      "btn-outline-navy w-full text-[10px] py-3.5 mt-auto"
                    }
                  >
                    Book {pkg.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs font-condensed font-bold uppercase tracking-widest text-[#0B1F3A]/40 mt-8">
            Prices vary by vehicle size & condition · Free consultation available
          </p>
        </div>
      </section>

      {/* ─── GALLERY STRIP ─── */}
      <section className="py-16 lg:py-24 px-6 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
            <div>
              <p className="section-label mb-3 text-white/50">Our Work</p>
              <h2 className="font-condensed font-black italic uppercase text-[50px] lg:text-[70px] leading-none tracking-tight text-white">
                The Results
              </h2>
              <div className="h-1 w-16 bg-[#C8192A] mt-4" />
            </div>
            <Link to="/gallery" className="btn-red text-[10px] px-6 py-3 self-start lg:self-auto">
              View Full Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {gallery.map((item, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-condensed font-black text-white text-sm uppercase tracking-wider leading-none">{item.title}</p>
                  <p className="font-condensed font-bold text-[#C8192A] text-[10px] uppercase tracking-widest mt-1">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 lg:py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">Real Customers</p>
            <h2 className="font-condensed font-black italic uppercase text-[50px] lg:text-[70px] leading-none tracking-tight text-[#0B1F3A]">
              What They're Saying
            </h2>
            <div className="h-1 w-16 bg-[#C8192A] mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-[#0B1F3A]/10 p-6">
                <StarRow n={t.stars} />
                <p className="font-body text-sm text-[#0B1F3A]/70 leading-relaxed mt-4 mb-5 italic">
                  "{t.text}"
                </p>
                <div className="border-t border-[#0B1F3A]/10 pt-4">
                  <p className="font-condensed font-black text-[#0B1F3A] uppercase tracking-wider text-sm">{t.name}</p>
                  <p className="font-condensed font-bold text-[10px] uppercase tracking-widest text-[#0B1F3A]/40 flex items-center gap-1 mt-0.5">
                    <Car size={10} /> {t.vehicle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 lg:py-24 px-6 bg-white border-y border-[#0B1F3A]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">The Process</p>
            <h2 className="font-condensed font-black italic uppercase text-[50px] lg:text-[70px] leading-none tracking-tight text-[#0B1F3A]">
              How It Works
            </h2>
            <div className="h-1 w-16 bg-[#C8192A] mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Request a Quote", desc: "Fill out the form or call us. Free estimates, no commitment." },
              { step: "02", title: "We Schedule", desc: "Pick a time that works for you. We confirm and show up on time." },
              { step: "03", title: "We Come To You", desc: "Fully equipped van arrives. No shop trip needed. Ever." },
              { step: "04", title: "Inspect & Enjoy", desc: "We walk you through the results. Drive away proud." },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="font-display text-[80px] leading-none text-[#0B1F3A]/5 select-none absolute -top-4 left-0">{s.step}</div>
                <div className="relative z-10 pt-6">
                  <div className="w-8 h-8 bg-[#C8192A] flex items-center justify-center mb-4">
                    <span className="font-condensed font-black text-white text-sm">{s.step}</span>
                  </div>
                  <h4 className="font-condensed font-black text-[#0B1F3A] uppercase tracking-wider text-lg mb-2">{s.title}</h4>
                  <p className="text-sm font-body text-[#0B1F3A]/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA ─── */}
      <section className="py-10 px-6 bg-[#F5F0E8] border-b border-[#0B1F3A]/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-[#C8192A] shrink-0" />
            <div>
              <p className="font-condensed font-black text-[#0B1F3A] uppercase tracking-wider text-base">Mobile Service — We Come To You</p>
              <p className="font-condensed font-bold text-[10px] uppercase tracking-widest text-[#0B1F3A]/50 mt-0.5">
                Serving the greater area within 50 miles · No shop visit required
              </p>
            </div>
          </div>
          <button onClick={() => openQuote()} className="btn-red text-[10px] px-8 py-3.5 shrink-0">
            Check My Area →
          </button>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/portfolio/ceramic-red-car.jpg"
            alt="Detail work"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="americana-stripe absolute top-0 left-0 right-0 z-10" />
        <div className="americana-stripe absolute bottom-0 left-0 right-0 z-10" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4 text-white/60">Ready to Book?</p>
          <h2 className="font-condensed font-black italic uppercase text-[55px] lg:text-[80px] leading-none tracking-tight text-white mb-6">
            Your Car Deserves<br />
            <span className="text-[#C8192A]">The Best.</span>
          </h2>
          <p className="font-body text-white/60 text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Professional results, delivered to your door. No shop required.
            Free quotes — just book and we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuote()}
              className="btn-red text-sm px-10 py-4"
            >
              Book Now — Free Quote →
            </button>
            <a
              href="tel:5550000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-condensed font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-white hover:text-[#0B1F3A] transition-all"
            >
              <Phone size={14} /> (555) 000-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
