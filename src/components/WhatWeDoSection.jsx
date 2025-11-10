import React from "react";
import { motion } from "framer-motion";
import { Sun, Factory, Leaf } from "lucide-react";

const WhatWeDoSection = ({ darkMode }) => {
  const items = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Advanced PV Module Manufacturing",
      desc: "State-of-the-art, automated production lines ensure consistent quality and world-class efficiency.",
      color: darkMode ? "text-yellow-400" : "text-blue-600",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Innovation & Technology",
      desc: "Leveraging robotics, AI-driven quality checks, and material science to exceed industry standards.",
      color: darkMode ? "text-cyan-400" : "text-emerald-600",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability at Core",
      desc: "From sourcing to manufacturing, we minimize carbon footprint and maximize solar adoption.",
      color: darkMode ? "text-emerald-400" : "text-emerald-600",
    },
  ];

  return (
    <section
      id="what-we-do"
      className={`py-28 lg:py-32 relative overflow-hidden ${
        darkMode ? "bg-slate-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl ${
                darkMode
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              <div
                className={`inline-flex p-3 rounded-xl mb-4 ${
                  darkMode ? "bg-slate-800" : "bg-gray-100"
                }`}
              >
                {React.cloneElement(item.icon, {
                  className: `w-6 h-6 ${item.color}`,
                })}
              </div>
              <h3
                className={`font-bold text-lg mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
