import React, { useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import { Factory, Zap, Users } from "lucide-react";

const StatCard = ({ stat, index, darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const displayValue = useTransform(
    count,
    (latest) => `${Math.floor(latest)}${stat.suffix}`
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, stat.value, {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 1,
      });
      return () => controls.stop();
    }
  }, [isInView, count, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <div
        className={`relative rounded-2xl ${
          darkMode
            ? "bg-slate-800/50 backdrop-blur-md border border-slate-700/50 shadow-lg"
            : "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md"
        } overflow-hidden transition-all duration-300 hover:shadow-xl`}
      >
        {/* Gradient top accent bar — now using linear gradient via Tailwind + inline style */}
        <div
          className="absolute top-0 left-0 w-full h-1.5"
          style={{
            background: `linear-gradient(90deg, ${stat.gradientStart}, ${stat.gradientEnd})`,
          }}
        />

        <div className="p-6 sm:p-7 text-center">
          {/* Icon container */}
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
              darkMode
                ? "bg-slate-700 text-slate-300"
                : "bg-gray-100 text-gray-700"
            } group-hover:scale-110 transition-transform duration-300`}
          >
            <motion.div
              animate={isInView ? { rotate: 360 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={stat.color}
            >
              {stat.icon}
            </motion.div>
          </div>

          {/* Animated stat value */}
          <motion.p
            className={`text-3xl sm:text-4xl font-extrabold ${stat.color} mb-1`}
          >
            {displayValue}
          </motion.p>

          <p
            className={`text-sm font-semibold mt-1 ${
              darkMode ? "text-slate-300" : "text-gray-700"
            }`}
          >
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const StatsSection = ({ darkMode }) => {
  const stats = [
    {
      value: 800,
      label: "MW Capacity",
      suffix: "MW",
      icon: <Zap className="w-6 h-6" />,
      gradientStart: darkMode ? "#fbbf24" : "#2563eb",
      gradientEnd: darkMode ? "#f59e0b" : "#1d4ed8",
      color: darkMode ? "text-amber-400" : "text-blue-600",
    },
    {
      value: 100,
      label: "Automation",
      suffix: "%",
      icon: <Factory className="w-6 h-6" />,
      gradientStart: darkMode ? "#06b6d4" : "#10b981",
      gradientEnd: darkMode ? "#0891b2" : "#059669",
      color: darkMode ? "text-cyan-400" : "text-emerald-600",
    },

    {
      value: 100,
      label: "Team Members",
      suffix: "+",
      icon: <Users className="w-6 h-6" />,
      gradientStart: darkMode ? "#c084fc" : "#ef4444",
      gradientEnd: darkMode ? "#a855f7" : "#dc2626",
      color: darkMode ? "text-violet-400" : "text-rose-600",
    },
  ];

  return (
    <section
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? "bg-slate-950" : "bg-gradient-to-b from-gray-50 to-gray-100"
      }`}
    >
      {/* Floating Dot Background — more subtle & elegant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: darkMode ? "#818cf8" : "#93c5fd",
            }}
            animate={{
              y: [0, -12, 0],
              x: [0, Math.sin(i * 0.7) * 12, 0],
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            By The Numbers
          </h2>
          <div className="mt-6 max-w-3xl mx-auto">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Delivering impact at scale — powering innovation, sustainability,
              and growth across the globe.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
