import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Factory, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ darkMode }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const navigate = useNavigate();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf844?auto=format&fit=crop&w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            darkMode
              ? "from-slate-950/90 via-slate-950/70 to-transparent"
              : "from-white/70 via-white/40 to-transparent"
          }`}
        />
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              darkMode ? "#fbbf24" : "#3b82f6"
            } 1px, transparent 1px),
                             linear-gradient(to bottom, ${
                               darkMode ? "#fbbf24" : "#3b82f6"
                             } 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            y,
          }}
        />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            backgroundColor: darkMode
              ? "rgba(251, 191, 36, 0.15)"
              : "rgba(59, 130, 246, 0.15)",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            backgroundColor: darkMode
              ? "rgba(59, 130, 246, 0.15)"
              : "rgba(251, 191, 36, 0.15)",
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className={`text-lg sm:text-xl font-medium italic mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          “Harnessing the Sun to Power Progress.”
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className={darkMode ? "text-yellow-400" : "text-blue-600"}>
            Powering Tomorrow
          </span>
          <br />
          <span className={darkMode ? "text-white" : "text-slate-900"}>
            with Next-Gen Solar
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-block mb-8 px-4 py-2 rounded-full backdrop-blur-sm border"
          style={{
            background: darkMode
              ? "rgba(251, 191, 36, 0.08)"
              : "rgba(59, 130, 246, 0.08)",
            borderColor: darkMode
              ? "rgba(251, 191, 36, 0.3)"
              : "rgba(59, 130, 246, 0.3)",
          }}
        >
          <span
            className={`text-sm sm:text-base font-semibold flex items-center gap-2 ${
              darkMode ? "text-yellow-300" : "text-blue-600"
            }`}
          >
            <Factory className="w-4 h-4" />
            Next-Generation Solar Module Manufacturing | 800 MW Fully Automated
            Line
          </span>
        </motion.div>

        <motion.p
          className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Driving India’s clean energy revolution — where precision engineering
          meets sustainable innovation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button
            onClick={() => navigate("/products")}
            whileHover={{
              scale: 1.05,
              boxShadow: darkMode
                ? "0 0 40px rgba(251, 191, 36, 0.6)"
                : "0 0 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`group px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-xl ${
              darkMode
                ? "bg-yellow-400 text-slate-950 shadow-yellow-400/30"
                : "bg-blue-600 text-white shadow-blue-600/30"
            }`}
          >
            Explore Our Solutions
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg border-2 hover:bg-opacity-10 transition-all ${
              darkMode
                ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                : "border-blue-600 text-blue-600 hover:bg-blue-600/10"
            }`}
          >
            Partner with Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Scroll to discover more
          </span>
          <ChevronDown
            className={`w-6 h-6 ${
              darkMode ? "text-yellow-400" : "text-blue-500"
            }`}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
