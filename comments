import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  useInView,
  useSpring,
} from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  MapPin,
  Mail,
  Phone,
  Boxes,
  Eye,
  Package,
  ArrowRight,
  Factory,
  ShieldCheck,
  Leaf,
  Award,
  Zap,
  Users,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Shield,
  Globe,
} from "lucide-react";

import logo from "../src/assets/image.png";
import Navigation from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import WhatWeDoSection from "./components/WhatWeDoSection";

const RecycleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M17 17H9a4 4 0 0 1 0-8h8" />
    <path d="M13 5h6a2 2 0 0 1 2 2v2" />
    <path d="M7 19H5a2 2 0 0 1-2-2v-2" />
  </svg>
);
const DropletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-4-2.5-6-3-4 1-6 3-2.9 3.4-3 6c0 3.5 2.5 5.5 7 7Z" />
  </svg>
);
const FlowerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v3" />
    <path d="M12 19v3" />
    <path d="m17 7-2.6 2.6" />
    <path d="M21 12h-3" />
    <path d="m17 17 2.6-2.6" />
    <path d="M5 7l2.6 2.6" />
    <path d="M3 12h3" />
    <path d="m5 17-2.6-2.6" />
  </svg>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const getTimeBasedDarkMode = () => {
      const hour = new Date().getHours();
      // Consider night time: 7 PM (19) to 6 AM (6)
      return hour < 6 || hour >= 19;
    };

    setDarkMode(getTimeBasedDarkMode());
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Technology",
    "Products",
    "Sustainability",
    "Careers",
    "Contact",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white"
          : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50 text-slate-900"
      } overflow-x-hidden`}
    >
      {/* Cursor Follower */}
      <motion.div
        className="hidden md:block fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{
          backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
          scaleX: scrollYProgress,
        }}
      />

      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
      />

      <HeroSection darkMode={darkMode} />
      <StatsSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <WhatWeDoSection darkMode={darkMode} />

      <WhyChooseUsSection darkMode={darkMode} />
      <TechnologySection darkMode={darkMode} />
      <ProductsSection darkMode={darkMode} />
      <SustainabilitySection darkMode={darkMode} />
      <LeadershipSection darkMode={darkMode} />
      <CareersSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

const WhyChooseUsSection = ({ darkMode }) => {
  const features = [
    {
      title: "800 MW Fully Automated Line",
      desc: "Precision at scale—ensuring consistency, reliability, and high throughput.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "High-Efficiency Modules",
      desc: "Superior performance & ROI with modules exceeding 22% efficiency.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Global Quality Standards",
      desc: "Compliant with ISO, IEC, and MNRE—trusted from rooftops to utility-scale plants.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Strong R&D Backbone",
      desc: "Continuous innovation in cell tech, materials, and module architecture.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Sustainable Manufacturing",
      desc: "Low-emission, water-positive, and waste-recovery integrated operations.",
      icon: <RecycleIcon />,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className={`py-28 lg:py-32 relative overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-white/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Why Choose Lumivolt?
          </h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Built for performance. Engineered for impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl ${
                darkMode
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className={`mb-3 p-2 rounded-lg inline-block ${
                  darkMode ? "bg-slate-800" : "bg-gray-100"
                }`}
              >
                {React.cloneElement(f.icon, {
                  className: `w-5 h-5 ${
                    darkMode ? "text-yellow-400" : "text-blue-600"
                  }`,
                })}
              </div>
              <h3
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-3xl text-center ${
            darkMode
              ? "bg-gradient-to-r from-slate-900 to-blue-950 border border-slate-700"
              : "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
          }`}
        >
          <h3
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Partner with Lumivolt
          </h3>
          <p
            className={`mt-3 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let’s shape the future of solar energy—together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`mt-6 px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 ${
              darkMode
                ? "bg-yellow-400 text-slate-950 shadow-lg"
                : "bg-blue-600 text-white shadow-md"
            }`}
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const TechnologySection = ({ darkMode }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });
  const x = useMotionValue(0);
  const animationRef = useRef(null);

  // Respect user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Equipment cards — based on your data
  const equipmentCards = [
    {
      title: "Autowell ATW 059 AB",
      desc: "Fully automatic cell cutting, stringing, bussing & pre-EL testing. Precision layup with <0.1mm tolerance.",
      colorClass: darkMode
        ? "from-amber-500 to-orange-500"
        : "from-amber-600 to-orange-600",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Autowell 2787 Laminator",
      desc: "3-chamber oil-heated laminator. Dual-layer curing with uniform pressure & adhesion for >99.5% yield.",
      colorClass: darkMode
        ? "from-blue-500 to-cyan-400"
        : "from-blue-600 to-cyan-600",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Controlled Curing Chamber",
      desc: "Precision climate control (±1°C, ±3% RH) for optimal EVA crosslinking & long-term reliability.",
      colorClass: darkMode
        ? "from-emerald-500 to-teal-400"
        : "from-emerald-600 to-teal-600",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Auto Frame & Glue System",
      desc: "Robotic frame placement with 0.2mm alignment accuracy & consistent adhesive dispensing.",
      colorClass: darkMode
        ? "from-purple-500 to-pink-400"
        : "from-purple-600 to-pink-600",
      icon: <Boxes className="w-6 h-6" />,
    },
  ];

  // Auto-scroll animation
  useEffect(() => {
    let controls;
    const startAnimation = () => {
      if (prefersReducedMotion) return;
      const cardWidth = 320 + 24; // w-80 + gap-6
      const totalWidth = cardWidth * equipmentCards.length;
      controls = animate(x, [0, -totalWidth], {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
      });
      animationRef.current = controls;
    };

    if (isInView) {
      startAnimation();
    } else {
      if (controls) controls.stop();
      x.set(0);
      animationRef.current = null;
    }

    return () => {
      if (controls) controls.stop();
    };
  }, [isInView, x, equipmentCards.length, prefersReducedMotion]);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-gray-50 via-blue-50 to-indigo-50"
      }`}
    >
      {/* Subtle floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: darkMode ? "#818cf8" : "#93c5fd",
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            ⚙️ State-of-the-Art{" "}
            <span className={darkMode ? "text-amber-400" : "text-amber-600"}>
              800 MW Automated Line
            </span>
          </h2>
          <p
            className={`mt-5 max-w-3xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Our integrated facility combines cutting-edge machinery and
            AI-driven automation — ensuring
            <span
              className={`font-medium ${
                darkMode ? "text-amber-400" : "text-amber-600"
              }`}
            >
              {" "}
              consistent quality, high throughput, and near-zero human error.
            </span>
          </p>
        </motion.div>

        {/* Factory Line Diagram — Updated labels */}
        <div className="flex justify-center mb-14">
          <div
            className={`flex items-center gap-6 px-5 py-3 rounded-xl shadow-sm border ${
              darkMode
                ? "bg-slate-800/60 backdrop-blur-sm border-slate-700/70"
                : "bg-white border-gray-200 shadow-md"
            }`}
          >
            {[
              { label: "Cell Layup", icon: <Eye className="w-4.5 h-4.5" /> },
              { label: "Stringing", icon: <Zap className="w-4.5 h-4.5" /> },
              {
                label: "Lamination",
                icon: <Factory className="w-4.5 h-4.5" />,
              },
              { label: "Framing", icon: <Boxes className="w-4.5 h-4.5" /> },
              {
                label: "Testing",
                icon: <ShieldCheck className="w-4.5 h-4.5" />,
              },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center min-w-[72px]">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-1.5 ${
                      darkMode
                        ? "bg-slate-700/80 text-amber-400 border border-slate-600/50"
                        : "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`text-xs font-medium text-center ${
                      darkMode ? "text-slate-300" : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < 4 && (
                  <div className="flex items-center">
                    <div
                      className={`h-0.5 w-6 ${
                        darkMode ? "bg-slate-600" : "bg-gray-300"
                      }`}
                    />
                    <div
                      className={`h-1.5 w-1.5 rounded-full -mx-0.5 ${
                        darkMode ? "bg-amber-500" : "bg-amber-500"
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Testing Suite — Static Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mb-16 p-6 sm:p-8 rounded-2xl border shadow-lg ${
            darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div
              className={`flex-shrink-0 p-3 rounded-xl ${
                darkMode ? "bg-slate-800" : "bg-gray-100"
              }`}
            >
              <ShieldCheck
                className={`w-7 h-7 ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              />
            </div>
            <div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                🔍 Comprehensive Testing Suite
              </h3>
              <p
                className={`mt-2 text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                EL imaging • VI curve tracing • Hi-Pot insulation test • IV
                characterization • Sun Simulator (1000W/m², AM1.5G) — ensuring
                every module meets real-world performance standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Auto-Scrolling Equipment Cards */}
        <div className="relative overflow-hidden -mx-4 px-4 py-2">
          <div
            className="absolute top-0 bottom-0 left-0 w-12 z-20 pointer-events-none"
            style={{
              background: darkMode
                ? "linear-gradient(to right, rgb(15 23 42 / 0.8), transparent)"
                : "linear-gradient(to right, rgb(249 250 251 / 0.9), transparent)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-12 z-20 pointer-events-none"
            style={{
              background: darkMode
                ? "linear-gradient(to left, rgb(15 23 42 / 0.8), transparent)"
                : "linear-gradient(to left, rgb(249 250 251 / 0.9), transparent)",
            }}
          />

          <motion.div
            className="flex gap-6"
            style={{ x }}
            onHoverStart={() => animationRef.current?.pause()}
            onHoverEnd={() => {
              if (animationRef.current && isInView && !prefersReducedMotion) {
                animationRef.current.play();
              }
            }}
            onFocus={() => animationRef.current?.pause()}
            onBlur={() => {
              if (animationRef.current && isInView && !prefersReducedMotion) {
                animationRef.current.play();
              }
            }}
          >
            {[...equipmentCards, ...equipmentCards].map((eq, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 dark:border-slate-700/50"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${eq.colorClass}`} />
                <div
                  className={`p-6 ${
                    darkMode ? "bg-slate-900" : "bg-white"
                  } h-full`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        darkMode ? "bg-slate-800" : "bg-gray-100"
                      }`}
                    >
                      <motion.span
                        className={eq.colorClass
                          .split(" ")[0]
                          .replace("from-", "text-")}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      >
                        {eq.icon}
                      </motion.span>
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-lg ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {eq.title}
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {eq.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hint */}
        <p
          className={`mt-8 text-center text-xs ${
            darkMode ? "text-slate-500" : "text-gray-400"
          }`}
        >
          Precision engineering in motion. Hover to pause & explore.
        </p>
      </div>
    </section>
  );
};

const ProductsSection = ({ darkMode }) => {
  const products = [
    {
      name: "Monofacial PERC",
      tagline: "High Efficiency • Residential & Commercial",
      badge: "PERC Technology",
      color: darkMode ? "#3b82f6" : "#1d4ed8",
      specs: [
        { label: "Power", value: "400–550W" },
        { label: "Efficiency", value: "Up to 22.3%" },
        { label: "Warranty", value: "25 yrs" },
      ],
      details: [
        "Half-cut PERC cells",
        "PID & LID resistant",
        "IEC 61215 / 61730 certified",
      ],
    },
    {
      name: "Bifacial TOPCon",
      tagline: "Double-Sided Yield • Utility & Ground-Mount",
      badge: "TOPCon Technology",
      color: darkMode ? "#10b981" : "#059669",
      specs: [
        { label: "Power", value: "500–600+W" },
        { label: "Bifacial Gain", value: "+10% to +25%" },
        { label: "Degradation", value: "<0.45%/yr" },
      ],
      details: [
        "N-type TOPCon cells",
        "Transparent backsheet / dual-glass",
        "MNRE & ISO 9001 compliant",
      ],
    },
    {
      name: "Ultra Series",
      tagline: "Premium Performance • All Applications",
      badge: "High-Efficiency",
      color: darkMode ? "#fbbf24" : "#3b82f6",
      specs: [
        { label: "Power", value: "550–610W" },
        { label: "Efficiency", value: "Up to 22.5%" },
        { label: "Load Rating", value: "5400/8500 Pa" },
      ],
      details: [
        "Advanced multi-busbar design",
        "Enhanced frame & junction box (IP68)",
        "30-year linear performance warranty",
      ],
    },
  ];

  return (
    <section id="products" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
            : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            High-Efficiency Solar PV Modules
          </h2>
          <p
            className={`mt-4 max-w-3xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Engineered for performance, reliability, and durability.
          </p>
        </motion.div>

        {/* Unified Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mb-12 p-4 sm:p-5 rounded-2xl border ${
            darkMode
              ? "bg-slate-900/50 border-slate-700"
              : "bg-blue-50 border-blue-200"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
            {[
              {
                label: "Monofacial & Bifacial",
                icon: <Sun className="w-4 h-4" />,
              },
              { label: "PERC & TOPCon", icon: <Zap className="w-4 h-4" /> },
              {
                label: "400–600+ Wp",
                icon: <TrendingUp className="w-4 h-4" />,
              },
              {
                label: "Up to 22.5% Efficiency",
                icon: <ShieldCheck className="w-4 h-4" />,
              },
              {
                label: "IEC • MNRE • ISO",
                icon: <Award className="w-4 h-4" />,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className={`p-1 rounded ${
                    darkMode ? "bg-slate-800" : "bg-gray-100"
                  }`}
                >
                  {item.icon}
                </span>
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group"
            >
              <div
                className={`rounded-2xl overflow-hidden h-full flex flex-col ${
                  darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-gray-200"
                }`}
              >
                {/* Header */}
                <div className="p-5 pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode
                            ? "bg-opacity-10 text-opacity-90"
                            : "bg-opacity-20 text-opacity-90"
                        }`}
                        style={{
                          backgroundColor: product.color + "20",
                          color: product.color,
                        }}
                      >
                        {product.badge}
                      </span>
                      <h3
                        className={`mt-2 font-bold text-lg ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <Sun className="w-5 h-5" style={{ color: product.color }} />
                  </div>
                  <p
                    className={`text-sm mt-2 leading-relaxed ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {product.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="h-px mx-5"
                  style={{
                    backgroundColor: product.color + "30",
                  }}
                />

                {/* Specs */}
                <div className="p-5 pt-4 flex-1">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                    {product.specs.map((spec, j) => (
                      <div key={j} className="col-span-1">
                        <div
                          className={`text-xs ${
                            darkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {spec.label}
                        </div>
                        <div
                          className="font-medium text-sm"
                          style={{ color: product.color }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mt-3">
                    {product.details.map((d, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm"
                      >
                        <div
                          className="mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: product.color }}
                        ></div>
                        <span
                          className={
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }
                        >
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Features Banner */}
                  <div
                    className={`mt-5 p-3 rounded-lg text-center text-xs font-medium ${
                      darkMode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    ✅ High conversion efficiency • Enhanced load tolerance •
                    25+ yr lifespan
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p
            className={`text-lg max-w-2xl mx-auto mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Every module undergoes rigorous EL, IV, Hi-Pot, and Sun Simulator
            testing — ensuring real-world performance you can trust.
          </p>
          {/* Optional: Uncomment when datasheet ready */}
          {/* 
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            className="px-6 py-3 rounded-full font-medium bg-blue-600 text-white"
          >
            Download Full Product Catalog
          </motion.button>
          */}
        </motion.div>
      </div>
    </section>
  );
};

const SustainabilitySection = ({ darkMode }) => {
  return (
    <section
      id="sustainability"
      className={`py-28 lg:py-36 relative overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-white/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Leaf
              className={`w-16 h-16 mx-auto ${
                darkMode ? "text-green-400" : "text-emerald-600"
              }`}
            />
          </motion.div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Commitment to Quality & Sustainability
          </h2>
          <p
            className={`mt-5 max-w-3xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Where precision engineering meets environmental responsibility.
          </p>
        </motion.div>

        {/* Two-Column: Quality + Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* ✅ Quality Pillar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 sm:p-8 ${
              darkMode
                ? "bg-slate-900 border border-slate-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-start gap-4 mb-5">
              <ShieldCheck
                className={`w-8 h-8 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <div>
                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Commitment to Quality
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Every Lumivolt module undergoes 100% automated inspection and
                  multi-level testing.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Pre-EL Testing",
                  desc: "Cell-level defect screening before assembly.",
                },
                {
                  title: "Real-Time Monitoring",
                  desc: "AI-driven process control for consistency.",
                },
                {
                  title: "IV & Hi-Pot Verification",
                  desc: "Electrical safety and performance validation.",
                },
                {
                  title: "Sun Simulator Certification",
                  desc: "Final output verified under STC (1000W/m², AM1.5G).",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                      darkMode ? "bg-blue-500" : "bg-blue-600"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-medium ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm mt-0.5 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ✅ Sustainability Pillar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 sm:p-8 ${
              darkMode
                ? "bg-slate-900 border border-slate-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-start gap-4 mb-5">
              <Leaf
                className={`w-8 h-8 ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              />
              <div>
                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Sustainability at Core
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Our operations prioritize energy efficiency, waste reduction,
                  and eco-friendly manufacturing.
                </p>
              </div>
            </div>

            <p
              className={`mb-5 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We’re committed to green growth — ensuring our products help
              reduce carbon footprints across industries and communities.
            </p>

            {/* Stats Visualization */}
            <div className="flex justify-between items-end gap-4">
              {[
                { label: "CO₂ Saved", value: "50K+", unit: "tons" },
                { label: "Renewable Ops", value: "100%", unit: "" },
                { label: "Waste Recycled", value: "95%", unit: "" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center flex-1"
                >
                  <div
                    className={`text-2xl sm:text-3xl font-bold ${
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`mt-1 text-xs sm:text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                    {stat.unit && <span className="block">{stat.unit}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Eco Cards — retain your existing strong trio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Circular Manufacturing",
              desc: "95% material recovery. Zero landfill waste since 2023.",
              icon: <RecycleIcon />,
              color: darkMode ? "text-green-400" : "text-emerald-600",
              bg: darkMode ? "bg-green-900/20" : "bg-emerald-50",
            },
            {
              title: "Water Positive",
              desc: "Harvest 2x more water than we consume via rooftop rain catchment.",
              icon: <DropletIcon />,
              color: darkMode ? "text-blue-400" : "text-blue-600",
              bg: darkMode ? "bg-blue-900/20" : "bg-blue-50",
            },
            {
              title: "Biodiversity Zones",
              desc: "Solar farms double as pollinator habitats — +40% local species.",
              icon: <FlowerIcon />,
              color: darkMode ? "text-amber-400" : "text-amber-600",
              bg: darkMode ? "bg-amber-900/20" : "bg-amber-50",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl ${item.bg} ${
                darkMode ? "border border-slate-700" : "border border-gray-200"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg mb-4 ${
                  darkMode ? "bg-slate-800" : "bg-white"
                }`}
              >
                {React.cloneElement(item.icon, {
                  className: `w-5 h-5 ${item.color}`,
                })}
              </div>
              <h3
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const LeadershipSection = ({ darkMode }) => {
  const leaders = [
    { name: "Devyanshu Singhal", role: "Promoter" },

    { name: "Samarth Wadhwa", role: "Director" },
    { name: "Pankaj Gupta", role: "Director" },
    { name: "Rajkumar Chaudhary", role: "Director" },
    { name: "Mukesh Tyagi", role: "Director" },
    { name: "Surekha", role: "Director" },
  ];

  return (
    <section
      id="leadership"
      className={`py-28 lg:py-36 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Leadership
          </h2>
          <p
            className={`mt-5 max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Visionaries driving innovation and integrity at Lumivolt.
          </p>
        </motion.div>

        {/* Vision Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`mb-16 p-6 sm:p-8 rounded-2xl border text-center ${
            darkMode
              ? "bg-slate-900/60 border-slate-700 backdrop-blur-sm"
              : "bg-white/70 border-gray-200 backdrop-blur-sm"
          }`}
        >
          <Sparkles
            className={`w-8 h-8 mx-auto mb-3 ${
              darkMode ? "text-amber-400" : "text-blue-500"
            }`}
          />
          <h3
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Collective Vision
          </h3>
          <p
            className={`mt-3 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            United by purpose, driven by technology — our leadership team is
            building India’s most advanced solar manufacturing ecosystem.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group p-5 sm:p-6 rounded-2xl transition-all ${
                darkMode
                  ? "bg-slate-800/50 border border-slate-700/60 hover:border-amber-500/30"
                  : "bg-white/70 border border-gray-200 hover:border-blue-400/40"
              }`}
            >
              {/* Placeholder avatar */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto ${
                  darkMode
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <span className="font-bold text-lg">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>

              <h4
                className={`font-bold text-lg text-center ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {leader.name}
              </h4>
              <p
                className={`mt-1 text-sm text-center ${
                  darkMode
                    ? "text-amber-400 font-medium"
                    : "text-blue-600 font-medium"
                }`}
              >
                {leader.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareersSection = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const roles = [
    {
      title: "Solar Engineer",
      type: "Full-time",
      location: "Ghaziabad",
      dept: "Engineering",
    },
    {
      title: "Quality Analyst",
      type: "Full-time",
      location: "Ghaziabad",
      dept: "Quality",
    },
    {
      title: "HR Manager",
      type: "Full-time",
      location: "Ghaziabad",
      dept: "Technology",
    },
  ];

  return (
    <section id="careers" className="py-32 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
            : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 ${
            darkMode ? "text-yellow-400" : "text-blue-600"
          }`}
        >
          Join Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center text-base sm:text-lg md:text-xl mb-12 sm:mb-20 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Be part of the solar revolution. Shape the future of clean energy.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              <div
                className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredIndex === index
                    ? darkMode
                      ? "opacity-100 bg-yellow-400/5"
                      : "opacity-100 bg-blue-500/5"
                    : "opacity-0"
                }`}
              />
              <div
                className={`relative p-6 sm:p-8 rounded-2xl transition-all ${
                  darkMode
                    ? "bg-slate-900/70 backdrop-blur-sm border border-slate-700 group-hover:border-yellow-400/50"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200 group-hover:border-blue-500/50"
                }`}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-opacity-100 transition-colors ${
                        darkMode
                          ? "text-white group-hover:text-yellow-400"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {role.title}
                    </h3>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      {role.dept}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        darkMode ? "text-yellow-400" : "text-blue-500"
                      }`}
                    />
                  </motion.div>
                </div>
                <div className="space-y-1.5">
                  <p
                    className={`text-xs sm:text-sm flex items-center gap-1.5 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        darkMode ? "bg-green-400" : "bg-emerald-500"
                      }`}
                    ></span>
                    {role.type}
                  </p>
                  <p
                    className={`text-xs sm:text-sm flex items-center gap-1.5 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MapPin
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        darkMode ? "text-yellow-400" : "text-blue-500"
                      }`}
                    />
                    {role.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className={`py-24 sm:py-32 relative overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-white/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 ${
            darkMode ? "text-yellow-400" : "text-blue-600"
          }`}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center text-base sm:text-lg md:text-xl mb-12 sm:mb-20 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Let's illuminate the future together
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {[
              {
                icon: <MapPin />,
                title: "Location",
                content:
                  "Balaji Compound, Meerut Road, Morta\nGhaziabad, Uttar Pradesh, India",
              },
              {
                icon: <Mail />,
                title: "Email",
                content: "contact@lumivolt.in",
              },
              {
                icon: <Phone />,
                title: "Phone",
                content: "+91-8745987184",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all group-hover:border-opacity-100 ${
                    darkMode
                      ? "bg-yellow-400/10 border-slate-700 group-hover:border-yellow-400/50"
                      : "bg-blue-500/10 border-gray-200 group-hover:border-blue-500/50"
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    className: `w-5 h-5 sm:w-6 sm:h-6 ${
                      darkMode ? "text-yellow-400" : "text-blue-500"
                    }`,
                  })}
                </motion.div>
                <div>
                  <h3
                    className={`font-bold text-lg sm:text-xl mb-1 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`whitespace-pre-line leading-relaxed text-sm sm:text-base ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="relative"
          >
            <div
              className={`absolute inset-0 rounded-3xl blur-2xl ${
                darkMode ? "bg-yellow-400/5" : "bg-blue-500/5"
              }`}
            />
            <div
              className={`relative p-6 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 ${
                darkMode
                  ? "bg-slate-900/70 backdrop-blur-sm border border-slate-700"
                  : "bg-white/70 backdrop-blur-sm border border-gray-200"
              }`}
            >
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label
                    className={`block text-sm sm:text-base font-medium mb-1.5 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl focus:outline-none transition-all placeholder-opacity-70 text-sm sm:text-base ${
                      darkMode
                        ? "bg-slate-950/50 text-white placeholder-gray-500 " +
                          (focused === field
                            ? "border-yellow-400"
                            : "border-slate-700")
                        : "bg-white/50 text-slate-900 placeholder-gray-400 " +
                          (focused === field
                            ? "border-blue-500"
                            : "border-gray-200")
                    }`}
                    placeholder={`Enter your ${field}`}
                    required
                  />
                </div>
              ))}

              <div>
                <label
                  className={`block text-sm sm:text-base font-medium mb-1.5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Message
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ scale: 1.02 }}
                  rows="4"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl focus:outline-none transition-all placeholder-opacity-70 resize-none text-sm sm:text-base ${
                    darkMode
                      ? "bg-slate-950/50 text-white placeholder-gray-500 " +
                        (focused === "message"
                          ? "border-yellow-400"
                          : "border-slate-700")
                      : "bg-white/50 text-slate-900 placeholder-gray-400 " +
                        (focused === "message"
                          ? "border-blue-500"
                          : "border-gray-200")
                  }`}
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: darkMode
                    ? "0 0 30px rgba(251, 191, 36, 0.5)"
                    : "0 0 30px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg ${
                  darkMode
                    ? "bg-yellow-400 text-slate-950 shadow-yellow-400/30"
                    : "bg-blue-600 text-white shadow-blue-600/30"
                }`}
              >
                {submitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Message Sent!</span>
                  </motion.span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }) => {
  return (
    <footer className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-t from-slate-950 to-slate-900"
            : "bg-gradient-to-t from-sky-50 to-white"
        }`}
      />
      <div
        className={`absolute inset-0 border-t ${
          darkMode ? "border-slate-800" : "border-gray-200"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Logo + Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 sm:space-x-4"
          >
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.img
                src={logo}
                alt="Lumivolt Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {/* Optional Glow Animation */}
              <motion.div
                className="absolute inset-0 blur-xl opacity-40"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
                  borderRadius: "9999px",
                }}
              />
            </motion.div>

            <div>
              <span
                className={`text-xl sm:text-2xl font-bold block ${
                  darkMode ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                Lumivolt Tech Solar
              </span>
              <span
                className={`text-xs sm:text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Harnessing the Sun to Power Progress
              </span>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-3 sm:gap-4">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/lumivolt-solar/",
                },
                {
                  name: "WhatsApp",
                  url: "https://wa.me/918745987184?text=I%20want%20more%20information",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} profile`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    darkMode
                      ? "bg-yellow-400/10 border border-slate-700 hover:border-yellow-400 hover:bg-yellow-400/20"
                      : "bg-blue-500/10 border border-gray-200 hover:border-blue-500 hover:bg-blue-500/20"
                  }`}
                >
                  <span
                    className={`text-xs sm:text-sm font-bold ${
                      darkMode ? "text-yellow-400" : "text-blue-500"
                    }`}
                  >
                    {social.name[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            className={`text-center md:text-right text-xs sm:text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <p className="font-medium">© 2025 Lumivolt Tech Solar Pvt. Ltd.</p>
            <p>Engineering a sustainable future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
