import React from "react";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, Award, Zap, TrendingUp } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const ProductsSection = () => {
  const { darkMode } = useDarkMode();
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

export default ProductsSection;
