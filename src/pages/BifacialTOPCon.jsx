import React from "react";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, Award, Zap, TrendingUp, ArrowLeft } from "lucide-react";
import { useDarkMode } from "../components/Layout";
import { Link } from "react-router-dom";

const BifacialTOPCon = () => {
  const { darkMode } = useDarkMode();

  const product = {
    name: "Bifacial TOPCon",
    tagline: "Double-Sided Yield • Utility & Ground-Mount",
    badge: "TOPCon Technology",
    color: darkMode ? "#10b981" : "#059669",
    description: "Our Bifacial TOPCon modules maximize energy generation by capturing sunlight from both sides. Designed for utility-scale and ground-mount installations, these modules deliver superior bifacial gain and long-term performance.",
    specs: [
      { label: "Power Range", value: "500–600+W" },
      { label: "Bifacial Gain", value: "+10% to +25%" },
      { label: "Efficiency", value: "Up to 22.5%" },
      { label: "Cell Type", value: "N-type TOPCon" },
      { label: "Dimensions", value: "2278×1134×35mm" },
      { label: "Weight", value: "32.5 kg" },
    ],
    features: [
      "N-type TOPCon cells with advanced passivation",
      "Transparent backsheet for rear-side energy capture",
      "Dual-glass construction for enhanced durability",
      "Optimized bifaciality ratio for maximum gain",
      "Lower temperature coefficient (-0.30%/°C)",
      "Superior weak light performance",
    ],
    benefits: [
      "Significant energy yield increase from bifacial design",
      "Lower LCOE for utility-scale projects",
      "Enhanced performance in reflective environments",
      "Reduced degradation with TOPCon technology",
      "30-year linear performance warranty",
      "Ideal for ground-mount and tracker systems",
    ],
    certifications: [
      "IEC 61215 (Design qualification)",
      "IEC 61730 (Safety qualification)",
      "UL 1703 (US safety standard)",
      "MNRE approved (India)",
      "ISO 9001 (Quality management)",
      "IEC 62804 (PID resistance)",
    ],
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-950" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-950"
              : "bg-gradient-to-b from-emerald-50 via-green-50 to-emerald-50"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/products"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-slate-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4`}
              style={{
                backgroundColor: product.color + "20",
                color: product.color,
              }}
            >
              {product.badge}
            </span>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {product.name}
            </h1>
            <p
              className={`text-xl mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {product.tagline}
            </p>
            <Sun className="w-16 h-16 mx-auto mb-6" style={{ color: product.color }} />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`text-sm mb-2 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {spec.label}
                </div>
                <div
                  className="font-semibold text-lg"
                  style={{ color: product.color }}
                >
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Key Features
              </h3>
              <div className="space-y-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Benefits
              </h3>
              <div className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Certifications & Standards
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Compliant with international quality and safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 rounded-xl text-center ${
                  darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-gray-200"
                }`}
              >
                <Award className="w-6 h-6 mx-auto mb-2" style={{ color: product.color }} />
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Power Your Project?
            </h3>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Contact our team to discuss your specific requirements and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: product.color }}
              >
                Get Quote
              </Link>
              <Link
                to="/products"
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105 ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BifacialTOPCon;
