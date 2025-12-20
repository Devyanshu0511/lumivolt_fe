import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const LeadershipSection = () => {
  const { darkMode } = useDarkMode();
  const leaders = [
    {
      name: "Devyanshu Singhal",
      role: "Promoter",
      image: "/leadership/devyanshu-singhal.jpg",
      bio: "Visionary entrepreneur with deep expertise in renewable energy and sustainable technologies.",
    },
    {
      name: "Samarth Wadhwa",
      role: "Director",
      image: "/leadership/samarth-wadhwa.jpg",
      bio: "Strategic leader bringing extensive experience in manufacturing and operations excellence.",
    },
    {
      name: "Pankaj Gupta",
      role: "Director",
      image: "/leadership/pankaj-gupta.jpg",
      bio: "Technical expert specializing in solar technology and photovoltaic manufacturing processes.",
    },
    {
      name: "Rajkumar Chaudhary",
      role: "Director",
      image: "/leadership/rajkumar-chaudhary.jpg",
      bio: "Operations specialist focused on scaling manufacturing capabilities and quality assurance.",
    },
    {
      name: "Mukesh Tyagi",
      role: "Director",
      image: "/leadership/mukesh-tyagi.jpg",
      bio: "Industry veteran with comprehensive knowledge of solar energy markets and distribution.",
    },
    {
      name: "Surekha",
      role: "Director",
      image: "/leadership/surekha.jpg",
      bio: "Strategic advisor contributing expertise in business development and stakeholder management.",
    },
  ];

  return (
    <section
      id="leadership"
      className={`relative overflow-hidden 
       
          `}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group p-6 rounded-2xl transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/50 border border-slate-700/60 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10"
                  : "bg-white/80 border border-gray-200 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10"
              }`}
            >
              {/* Leader Image */}
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-current transition-colors">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback initials */}
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      darkMode
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <span className="font-bold text-xl">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4
                  className={`font-bold text-xl mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {leader.name}
                </h4>
                <p
                  className={`mb-4 text-sm font-medium ${
                    darkMode ? "text-amber-400" : "text-blue-600"
                  }`}
                >
                  {leader.role}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
