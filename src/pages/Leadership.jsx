import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const LeadershipSection = () => {
  const { darkMode } = useDarkMode();
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
      className={`pt-28 lg:pt-36 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
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

export default LeadershipSection;
