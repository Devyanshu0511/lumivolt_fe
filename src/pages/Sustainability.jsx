import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const SustainabilitySection = () => {
  const { darkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const navigationItems = [
    { id: "overview", label: "Overview", icon: "🌱" },
    { id: "calculator", label: "Calculator", icon: "🧮" },
    { id: "path", label: "Carbon Path", icon: "🛤️" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "goals", label: "Goals 2030", icon: "🎯" },
    { id: "comparison", label: "Technology", icon: "⚡" },
  ];
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

        {/* Interactive Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div
            className={`rounded-2xl p-6 ${
              darkMode
                ? "bg-slate-900/50 border border-slate-800"
                : "bg-white/50 border border-gray-200"
            } backdrop-blur-sm`}
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                    activeSection === item.id
                      ? darkMode
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-blue-600 text-white shadow-lg"
                      : darkMode
                      ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two-Column: Quality + Sustainability */}
        <div
          id="overview"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
        >
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

            {/* Key Impact Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              {[
                { label: "CO₂ Saved", value: "50K+", unit: "tons annually" },
                {
                  label: "Renewable Energy",
                  value: "100%",
                  unit: "operations",
                },
                { label: "Waste Recycled", value: "95%", unit: "of materials" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`text-3xl font-bold ${
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`mt-2 text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                  <div
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {stat.unit}
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
              desc: "Zero landfill waste. All materials recovered and reused.",
              icon: <RecycleIcon />,
              color: darkMode ? "text-green-400" : "text-emerald-600",
              bg: darkMode ? "bg-green-900/20" : "bg-emerald-50",
            },
            {
              title: "Water Positive",
              desc: "Harvest more water than we consume through sustainable practices.",
              icon: <DropletIcon />,
              color: darkMode ? "text-blue-400" : "text-blue-600",
              bg: darkMode ? "bg-blue-900/20" : "bg-blue-50",
            },
            {
              title: "Biodiversity Enhancement",
              desc: "Solar farms create habitats that support local wildlife.",
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

        {/* Interactive Carbon Calculator */}
        <motion.div
          id="calculator"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-20"
        >
          <div className="text-center mb-12">
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Calculate Your Impact
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              See how Lumivolt solar panels can reduce your carbon footprint
            </p>
          </div>
          <CarbonCalculator darkMode={darkMode} />
        </motion.div>

        {/* Path to Carbon Neutrality */}
        <motion.div
          id="path"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Path to Carbon Neutrality
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Our roadmap to achieve complete carbon neutrality by 2030
            </p>
          </div>
          <CarbonNeutralityPath darkMode={darkMode} />
        </motion.div>

        {/* Certifications Showcase */}
        <motion.div
          id="certifications"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Certifications & Standards
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Recognized excellence in sustainable manufacturing
            </p>
          </div>
          <CertificationsShowcase darkMode={darkMode} />
        </motion.div>

        {/* Environmental Impact Dashboard */}
        <motion.div
          id="dashboard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Environmental Impact Dashboard
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Real-time metrics from our operations
            </p>
          </div>
          <EnvironmentalDashboard darkMode={darkMode} />
        </motion.div>

        {/* Future Goals */}
        <motion.div
          id="goals"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              2030 Sustainability Targets
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Our roadmap to carbon neutrality
            </p>
          </div>
          <FutureGoals darkMode={darkMode} />
        </motion.div>

        {/* Interactive Technology Comparison */}
        <motion.div
          id="comparison"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technology Impact Comparison
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Compare environmental benefits across our solar technologies
            </p>
          </div>
          <TechnologyComparison darkMode={darkMode} />
        </motion.div>
      </div>
    </section>
  );
};

// Interactive Carbon Calculator Component
const CarbonCalculator = ({ darkMode }) => {
  const [energyUsage, setEnergyUsage] = useState(500);
  const [panelType, setPanelType] = useState("bifacial");
  const [location, setLocation] = useState("high");

  const calculateSavings = () => {
    const baseEfficiency =
      panelType === "bifacial" ? 0.22 : panelType === "monofacial" ? 0.2 : 0.18;
    const locationMultiplier =
      location === "high" ? 1.3 : location === "moderate" ? 1.0 : 0.8;
    const annualGeneration =
      energyUsage * 365 * baseEfficiency * locationMultiplier * 0.85; // 85% system efficiency
    const carbonSaved = annualGeneration * 0.4; // kg CO2 per kWh
    const treesEquivalent = carbonSaved / 21; // kg CO2 absorbed per tree per year

    return {
      generation: Math.round(annualGeneration),
      carbon: Math.round(carbonSaved),
      trees: Math.round(treesEquivalent),
      costSavings: Math.round(annualGeneration * 0.12), // $0.12 per kWh average
    };
  };

  const savings = calculateSavings();

  return (
    <div
      className={`rounded-2xl p-8 ${
        darkMode
          ? "bg-slate-900 border border-slate-800"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Monthly Energy Usage (kWh)
            </label>
            <input
              type="range"
              min="100"
              max="2000"
              value={energyUsage}
              onChange={(e) => setEnergyUsage(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs mt-1">
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                100 kWh
              </span>
              <span
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {energyUsage} kWh
              </span>
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                2000 kWh
              </span>
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Panel Technology
            </label>
            <select
              value={panelType}
              onChange={(e) => setPanelType(e.target.value)}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              <option value="ultra">Ultra Series (22% efficiency)</option>
              <option value="bifacial">Bifacial TOPCon (21% efficiency)</option>
              <option value="monofacial">
                Monofacial PERC (19% efficiency)
              </option>
            </select>
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Sunlight Conditions
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              <option value="high">
                High Sun (Rajasthan, Gujarat, Karnataka)
              </option>
              <option value="moderate">
                Moderate Sun (Most Indian States)
              </option>
              <option value="low">Low Sun (Northern Hilly Regions)</option>
            </select>
          </div>
        </div>

        {/* Results Display */}
        <div className="space-y-4">
          <h4
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Your Annual Impact
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-50"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                {savings.carbon.toLocaleString()}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                kg CO₂ Saved
              </div>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-50"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {savings.trees}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Trees Equivalent
              </div>
            </div>

            <div
              className={`col-span-2 p-4 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-50"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  darkMode ? "text-amber-400" : "text-amber-600"
                }`}
              >
                ₹{Math.round(savings.costSavings * 83).toLocaleString()}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Annual Savings (₹)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Certifications Showcase Component
const CertificationsShowcase = ({ darkMode }) => {
  const certifications = [
    {
      name: "ISO 14001",
      issuer: "Environmental Management",
      description:
        "Certified sustainable operations and environmental management systems.",
    },
    {
      name: "IEC Standards",
      issuer: "Safety & Performance",
      description:
        "International standards for solar panel safety and reliability.",
    },
    {
      name: "Carbon Neutral",
      issuer: "Climate Certified",
      description:
        "Verified carbon neutral operations across entire value chain.",
    },
    {
      name: "Water Positive",
      issuer: "Water Stewardship",
      description:
        "Harvest and return more water than consumed in manufacturing.",
    },
    {
      name: "Zero Waste",
      issuer: "Waste Management",
      description:
        "95% waste diversion from landfills through recycling programs.",
    },
    {
      name: "B Corporation",
      issuer: "Social Impact",
      description:
        "Certified for social and environmental performance excellence.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className={`p-6 rounded-2xl ${
            darkMode
              ? "bg-slate-900 border border-slate-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <ShieldCheck
              className={`w-8 h-8 ${
                darkMode ? "text-green-400" : "text-green-600"
              }`}
            />
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                darkMode
                  ? "bg-green-900 text-green-300"
                  : "bg-green-100 text-green-800"
              }`}
            >
              Certified
            </span>
          </div>

          <h4
            className={`text-lg font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {cert.name}
          </h4>

          <p
            className={`text-sm mb-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {cert.issuer}
          </p>

          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {cert.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

// Environmental Dashboard Component
const EnvironmentalDashboard = ({ darkMode }) => {
  const [selectedMetric, setSelectedMetric] = useState("carbon");

  const metrics = {
    carbon: {
      title: "Carbon Neutral",
      current: 95,
      target: 100,
      unit: "%",
      status: "On Track",
      color: "green",
    },
    waste: {
      title: "Zero Waste",
      current: 95,
      target: 100,
      unit: "%",
      status: "Excellent",
      color: "amber",
    },
    energy: {
      title: "Renewable Energy",
      current: 100,
      target: 100,
      unit: "%",
      status: "Achieved",
      color: "emerald",
    },
  };

  const currentMetric = metrics[selectedMetric];

  return (
    <div
      className={`rounded-2xl p-8 ${
        darkMode
          ? "bg-slate-900 border border-slate-800"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Metric Selector */}
        <div className="space-y-4">
          <h4
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Select Metric
          </h4>
          {Object.entries(metrics).map(([key, metric]) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                selectedMetric === key
                  ? darkMode
                    ? "bg-slate-800 border-2 border-blue-400"
                    : "bg-blue-50 border-2 border-blue-400"
                  : darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {metric.title}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {metric.status}
              </div>
            </button>
          ))}
        </div>

        {/* Main Dashboard */}
        <div className="lg:col-span-2">
          <div className="text-center mb-8">
            <h3
              className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {currentMetric.title}
            </h3>
            <div
              className={`text-4xl font-bold mb-2 ${
                currentMetric.color === "green"
                  ? darkMode
                    ? "text-green-400"
                    : "text-green-600"
                  : currentMetric.color === "blue"
                  ? darkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : currentMetric.color === "amber"
                  ? darkMode
                    ? "text-amber-400"
                    : "text-amber-600"
                  : darkMode
                  ? "text-emerald-400"
                  : "text-emerald-600"
              }`}
            >
              {currentMetric.current.toLocaleString()}
              {currentMetric.unit}
            </div>
            <div
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Target: {currentMetric.target.toLocaleString()}{" "}
              {currentMetric.unit}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div
              className={`w-full bg-gray-200 rounded-full h-4 ${
                darkMode ? "bg-slate-700" : "bg-gray-200"
              }`}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    (currentMetric.current /
                      Math.max(currentMetric.current, currentMetric.target)) *
                    100
                  }%`,
                }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-4 rounded-full ${
                  currentMetric.color === "green"
                    ? "bg-green-500"
                    : currentMetric.color === "blue"
                    ? "bg-blue-500"
                    : currentMetric.color === "amber"
                    ? "bg-amber-500"
                    : "bg-emerald-500"
                }`}
              />
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Current
              </span>
              <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Target
              </span>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-50"
              }`}
            >
              <div
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Status
              </div>
              <div
                className={`text-sm ${
                  currentMetric.color === "green"
                    ? darkMode
                      ? "text-green-400"
                      : "text-green-600"
                    : currentMetric.color === "blue"
                    ? darkMode
                      ? "text-blue-400"
                      : "text-blue-600"
                    : currentMetric.color === "amber"
                    ? darkMode
                      ? "text-amber-400"
                      : "text-amber-600"
                    : darkMode
                    ? "text-emerald-400"
                    : "text-emerald-600"
                }`}
              >
                {currentMetric.status}
              </div>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-50"
              }`}
            >
              <div
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Progress
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {Math.round(
                  (currentMetric.current /
                    Math.max(currentMetric.current, currentMetric.target)) *
                    100
                )}
                % Complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Future Goals Component
const FutureGoals = ({ darkMode }) => {
  const goals = [
    {
      year: 2025,
      title: "Carbon Neutral",
      description: "Zero carbon emissions across all operations",
      progress: 85,
      status: "On Track",
    },
    {
      year: 2027,
      title: "Circular Economy",
      description: "100% recyclable products and sustainable materials",
      progress: 65,
      status: "In Progress",
    },
    {
      year: 2030,
      title: "Climate Positive",
      description: "Remove more CO₂ than we emit",
      progress: 40,
      status: "Research",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {goals.map((goal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-2xl ${
            darkMode
              ? "bg-slate-900 border border-slate-800"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`text-2xl font-bold ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {goal.year}
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                goal.status === "On Track"
                  ? darkMode
                    ? "bg-green-900 text-green-300"
                    : "bg-green-100 text-green-800"
                  : goal.status === "In Progress"
                  ? darkMode
                    ? "bg-blue-900 text-blue-300"
                    : "bg-blue-100 text-blue-800"
                  : goal.status === "Planning"
                  ? darkMode
                    ? "bg-amber-900 text-amber-300"
                    : "bg-amber-100 text-amber-800"
                  : darkMode
                  ? "bg-purple-900 text-purple-300"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              {goal.status}
            </span>
          </div>

          <h4
            className={`text-lg font-semibold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {goal.title}
          </h4>

          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {goal.description}
          </p>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Progress
              </span>
              <span className={darkMode ? "text-white" : "text-gray-900"}>
                {goal.progress}%
              </span>
            </div>
            <div
              className={`w-full bg-gray-200 rounded-full h-2 ${
                darkMode ? "bg-slate-700" : "bg-gray-200"
              }`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${goal.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`h-2 rounded-full ${
                  goal.status === "On Track"
                    ? "bg-green-500"
                    : goal.status === "In Progress"
                    ? "bg-blue-500"
                    : goal.status === "Planning"
                    ? "bg-amber-500"
                    : "bg-purple-500"
                }`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Technology Comparison Component
const TechnologyComparison = ({ darkMode }) => {
  const [selectedTech, setSelectedTech] = useState("bifacial");

  const technologies = {
    ultra: {
      name: "Ultra Series",
      efficiency: 22,
      lifespan: 30,
      carbonPayback: 1.2,
      energyOutput: 440,
      description:
        "Next-generation solar technology with maximum efficiency and performance.",
    },
    bifacial: {
      name: "Bifacial TOPCon",
      efficiency: 21,
      lifespan: 30,
      carbonPayback: 1.5,
      energyOutput: 420,
      description:
        "Advanced bifacial technology capturing sunlight from both sides for optimal energy generation.",
    },
    monofacial: {
      name: "Monofacial PERC",
      efficiency: 19,
      lifespan: 25,
      carbonPayback: 2.1,
      energyOutput: 380,
      description:
        "Reliable and proven technology with strong performance in various conditions.",
    },
  };

  const currentTech = technologies[selectedTech];

  return (
    <div
      className={`rounded-2xl p-8 ${
        darkMode
          ? "bg-slate-900 border border-slate-800"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Technology Selector */}
        <div className="space-y-4">
          <h4
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Select Technology
          </h4>
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setSelectedTech(key)}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                selectedTech === key
                  ? darkMode
                    ? "bg-slate-800 border-2 border-blue-400"
                    : "bg-blue-50 border-2 border-blue-400"
                  : darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {tech.name}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {tech.efficiency}% Efficiency
              </div>
            </button>
          ))}
        </div>

        {/* Comparison Display */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h3
              className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {currentTech.name}
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {currentTech.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div
                  className={`text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Efficiency
                </div>
                <div
                  className={`text-2xl font-bold ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {currentTech.efficiency}%
                </div>
              </div>

              <div>
                <div
                  className={`text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Lifespan
                </div>
                <div
                  className={`text-2xl font-bold ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {currentTech.lifespan} years
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div
                  className={`text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Carbon Payback
                </div>
                <div
                  className={`text-2xl font-bold ${
                    darkMode ? "text-amber-400" : "text-amber-600"
                  }`}
                >
                  {currentTech.carbonPayback} years
                </div>
              </div>

              <div>
                <div
                  className={`text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Annual Energy Output
                </div>
                <div
                  className={`text-2xl font-bold ${
                    darkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  {currentTech.energyOutput} kWh
                </div>
                <div
                  className={`text-xs ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  per kW installed
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div
            className={`mt-6 p-4 rounded-lg ${
              darkMode ? "bg-slate-800" : "bg-gray-50"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  CO₂ Saved (30 years):
                </span>
                <div
                  className={`font-semibold ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {Math.round((currentTech.energyOutput * 30 * 0.4) / 1000)}{" "}
                  tons
                </div>
              </div>
              <div>
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Carbon Payback:
                </span>
                <div
                  className={`font-semibold ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {currentTech.carbonPayback} years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Path to Carbon Neutrality Component
const CarbonNeutralityPath = ({ darkMode }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const phases = [
    {
      phase: "Phase 1",
      period: "2023-2024",
      title: "Foundation & Assessment",
      description:
        "Establish comprehensive carbon footprint baseline across operations, supply chain, and product lifecycle.",
      status: "Completed",
      impact: "Carbon accounting framework established",
    },
    {
      phase: "Phase 2",
      period: "2024-2026",
      title: "Operations Transformation",
      description:
        "Transition to 100% renewable energy for all manufacturing facilities. Implement carbon offset programs.",
      status: "In Progress",
      impact: "Zero operational emissions target",
    },
    {
      phase: "Phase 3",
      period: "2025-2027",
      title: "Supply Chain Integration",
      description:
        "Partner with suppliers for carbon reduction. Implement circular economy principles for materials.",
      status: "Planning",
      impact: "Sustainable procurement network",
    },
    {
      phase: "Phase 4",
      period: "2026-2028",
      title: "Product Innovation",
      description:
        "Design carbon-neutral products with net-zero lifecycle footprint. Generate carbon credits.",
      status: "Research",
      impact: "Climate-positive product portfolio",
    },
    {
      phase: "Phase 5",
      period: "2028-2030",
      title: "Climate Impact Leadership",
      description:
        "Remove more CO₂ than emitted. Support global reforestation and carbon sequestration projects.",
      status: "Future",
      impact: "Climate positive company",
    },
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${
          darkMode ? "bg-slate-700" : "bg-gray-300"
        }`}
      />

      <div className="space-y-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  setSelectedPhase(selectedPhase === index ? null : index)
                }
                className={`p-6 rounded-2xl cursor-pointer transition-all ${
                  selectedPhase === index
                    ? darkMode
                      ? "bg-slate-800 border-2 border-blue-400"
                      : "bg-blue-50 border-2 border-blue-400"
                    : darkMode
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-2 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {phase.phase}
                </div>
                <div
                  className={`text-sm font-medium mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {phase.period}
                </div>
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {phase.title}
                </h4>
                <p
                  className={`text-sm mb-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {phase.description}
                </p>
                <div
                  className={`text-sm font-medium ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {phase.impact}
                </div>

                <div
                  className={`mt-3 px-2 py-1 rounded-full text-xs font-medium inline-block ${
                    phase.status === "Completed"
                      ? darkMode
                        ? "bg-green-900 text-green-300"
                        : "bg-green-100 text-green-800"
                      : phase.status === "In Progress"
                      ? darkMode
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-800"
                      : phase.status === "Planning"
                      ? darkMode
                        ? "bg-amber-900 text-amber-300"
                        : "bg-amber-100 text-amber-800"
                      : phase.status === "Research"
                      ? darkMode
                        ? "bg-emerald-900 text-emerald-300"
                        : "bg-emerald-100 text-emerald-800"
                      : darkMode
                      ? "bg-gray-900 text-gray-300"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {phase.status}
                </div>

                {selectedPhase === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Detailed roadmap and milestones for{" "}
                      {phase.title.toLowerCase()}...
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Timeline Dot */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                darkMode ? "bg-blue-400" : "bg-blue-600"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilitySection;
