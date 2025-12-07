import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const SustainabilitySection = () => {
  const { darkMode } = useDarkMode();
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

export default SustainabilitySection;
