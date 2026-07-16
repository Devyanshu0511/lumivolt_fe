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
  Activity,
  Battery,
  Cpu,
  Layers
} from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ICONS = {
  Zap: Zap,
  Factory: Factory,
  ShieldCheck: ShieldCheck,
  Boxes: Boxes,
  Activity: Activity,
  Battery: Battery,
  Cpu: Cpu,
  Layers: Layers
};

const TechnologySection = () => {
  const { darkMode } = useDarkMode();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });
  const x = useMotionValue(0);
  const animationRef = useRef(null);

  // Respect user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [equipmentCards, setEquipmentCards] = useState([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/equipments`);
        if (res.data && res.data.length > 0) {
          setEquipmentCards(res.data);
        }
      } catch (error) {
        console.error('Failed to fetch equipments', error);
      }
    };
    fetchEquipments();
  }, []);

  const getColorClasses = (colorName) => {
    const map = {
      amber: darkMode ? "from-amber-500 to-orange-500 text-amber-500" : "from-amber-600 to-orange-600 text-amber-600",
      blue: darkMode ? "from-blue-500 to-cyan-400 text-blue-500" : "from-blue-600 to-cyan-600 text-blue-600",
      emerald: darkMode ? "from-emerald-500 to-teal-400 text-emerald-500" : "from-emerald-600 to-teal-600 text-emerald-600",
      purple: darkMode ? "from-purple-500 to-pink-400 text-purple-500" : "from-purple-600 to-pink-600 text-purple-600",
      rose: darkMode ? "from-rose-500 to-red-400 text-rose-500" : "from-rose-600 to-red-600 text-rose-600",
      cyan: darkMode ? "from-cyan-500 to-sky-400 text-cyan-500" : "from-cyan-600 to-sky-600 text-cyan-600",
    };
    return map[colorName] || map.amber;
  };

  const renderIcon = (iconName, className) => {
    const IconComponent = ICONS[iconName] || ICONS['Zap'];
    return <IconComponent className={className} />;
  };

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
            {[...equipmentCards, ...equipmentCards].map((eq, i) => {
              const colorClasses = getColorClasses(eq.color);
              const gradientClass = colorClasses.split(' text-')[0];
              const textClass = colorClasses.split(' ').pop();
              return (
              <motion.div
                key={i}
                className="flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 dark:border-slate-700/50"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradientClass}`} />
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
                        className={textClass}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      >
                        {renderIcon(eq.icon, "w-6 h-6")}
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
            )})}
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

export default TechnologySection;
