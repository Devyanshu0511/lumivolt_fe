import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const CareersSection = () => {
  const { darkMode } = useDarkMode();

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

export default CareersSection;
