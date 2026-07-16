import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, Award, Zap, TrendingUp } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { Loader2 } from "lucide-react";

const ProductsSection = () => {
  const { darkMode } = useDarkMode();
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products`)
      .then(res => {
        setProductsData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  const products = productsData.map((p) => ({
    ...p,
    color: darkMode ? p.colorDark : p.colorLight,
    specs: p.overviewSpecs,
    details: p.overviewDetails,
  }));

  return (
    <section id="products" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${darkMode
          ? "bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
          : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50"
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            High-Efficiency Solar PV Modules
          </h2>
          <p
            className={`mt-4 max-w-3xl mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Engineered for performance, reliability, and durability.
          </p>
        </motion.div>

        {/* Unified Feature Strip */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mb-12 p-4 sm:p-5 rounded-2xl border ${darkMode
            ? "bg-slate-900/50 border-slate-700"
            : "bg-blue-50 border-blue-200"
            }`}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
            {(() => {
              if (productsData.length === 0) return null;

              // 1. Module Types (Dynamic from first word of product name)
              const types = new Set();
              productsData.forEach(p => {
                if (p.name) {
                  const firstWord = p.name.split(" ")[0];
                  if (firstWord && firstWord.length > 2) {
                    types.add(firstWord);
                  }
                }
              });
              const typeLabel = types.size > 0
                ? Array.from(types).slice(0, 2).join(" & ")
                : "High-Performance Modules";

              // 2. Technologies (Dynamic from badge)
              const techs = new Set();
              productsData.forEach(p => {
                if (p.badge) {
                  // e.g. "PERC Technology" -> "PERC", "High-Efficiency" -> "High-Efficiency"
                  const tech = p.badge.replace(/technology/i, "").trim();
                  if (tech && tech.length > 2) {
                    techs.add(tech);
                  }
                }
              });
              const techLabel = techs.size > 0
                ? Array.from(techs).slice(0, 3).join(" & ")
                : "Advanced Technology";

              // 3. Power Range
              let minPower = Infinity;
              let maxPower = 0;
              let hasPlus = false;
              productsData.forEach(p => {
                const powerSpec = p.specs?.find(s => s.label.toLowerCase().includes("power"))?.value ||
                  p.overviewSpecs?.find(s => s.label.toLowerCase().includes("power"))?.value;
                if (powerSpec) {
                  const nums = powerSpec.match(/\d+/g);
                  if (nums) {
                    nums.forEach(n => {
                      const val = parseInt(n, 10);
                      if (val > 100 && val < 1000) {
                        if (val < minPower) minPower = val;
                        if (val > maxPower) maxPower = val;
                      }
                    });
                  }
                  if (powerSpec.includes("+")) hasPlus = true;
                }
              });
              const powerLabel = minPower !== Infinity && maxPower !== 0
                ? `${minPower}–${maxPower}${hasPlus ? '+' : ''} Wp`
                : "High Power Output";

              // 4. Efficiency
              let maxEff = 0;
              productsData.forEach(p => {
                const effSpec = p.specs?.find(s => s.label.toLowerCase().includes("efficiency"))?.value ||
                  p.overviewSpecs?.find(s => s.label.toLowerCase().includes("efficiency"))?.value;
                if (effSpec) {
                  const match = effSpec.match(/(\d+\.?\d*)/);
                  if (match) {
                    const val = parseFloat(match[1]);
                    if (val > maxEff) maxEff = val;
                  }
                }
              });
              const effLabel = maxEff > 0 ? `Up to ${maxEff}% Efficiency` : "High Efficiency";

              // 5. Certifications
              const certs = new Set();
              productsData.forEach(p => {
                if (p.certifications) {
                  p.certifications.forEach(c => {
                    const firstWord = c.split(' ')[0].replace(/[^a-zA-Z]/g, '');
                    if (firstWord && firstWord.length > 1) {
                      certs.add(firstWord.toUpperCase());
                    }
                  });
                }
              });
              const topCerts = ["IEC", "MNRE", "ISO", "UL", "BIS", "CE"];
              const foundCerts = topCerts.filter(c => certs.has(c));
              const certLabel = foundCerts.length > 0
                ? foundCerts.slice(0, 3).join(" • ")
                : Array.from(certs).slice(0, 3).join(" • ");

              return [
                { label: typeLabel, icon: <Sun className="w-4 h-4" /> },
                { label: techLabel, icon: <Zap className="w-4 h-4" /> },
                { label: powerLabel, icon: <TrendingUp className="w-4 h-4" /> },
                { label: effLabel, icon: <ShieldCheck className="w-4 h-4" /> },
                { label: certLabel || "Certified Quality", icon: <Award className="w-4 h-4" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`p-1 rounded ${darkMode ? "bg-slate-800" : "bg-gray-100"
                      }`}
                  >
                    {item.icon}
                  </span>
                  <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    {item.label}
                  </span>
                </div>
              ));
            })()}
          </div>
        </motion.div> */}

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
            </div>
          ) : products.map((product, i) => (
            <Link key={i} to={product.path} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div
                  className={`rounded-2xl overflow-hidden h-full flex flex-col ${darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-gray-200"
                    }`}
                >
                  {/* Header */}
                  <div className="p-5 pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${darkMode
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
                          className={`mt-2 font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                          {product.name}
                        </h3>
                      </div>
                      <Sun className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <p
                      className={`text-sm mt-2 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {product.tagline}
                    </p>
                  </div>

                  {/* Product Image */}
                  <div className="px-5 pb-4">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                      <img
                        src={product.image?.startsWith('/') ? API_BASE_URL + product.image : product.image}
                        alt={`${product.name} solar panel`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback for missing images */}
                      <div className="hidden w-full h-48 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                        <Sun className="w-12 h-12 text-[#274488] dark:text-[#274488]" />
                      </div>
                    </div>
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
                            className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"
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
                      className={`mt-5 p-3 rounded-lg text-center text-xs font-medium ${darkMode
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
            </Link>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p
            className={`text-lg max-w-2xl mx-auto mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Every module undergoes rigorous EL, IV, Hi-Pot, and Sun Simulator
            testing — ensuring real-world performance you can trust.
          </p>
          {/* Optional: Uncomment when datasheet ready */}
          {/* 
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            className="px-6 py-3 rounded-full font-medium bg-[#274488] text-white"
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
