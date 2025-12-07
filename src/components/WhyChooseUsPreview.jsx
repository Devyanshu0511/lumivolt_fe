import React from "react";
import { motion } from "framer-motion";
import { Factory, Zap, ShieldCheck, Award, RecycleIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

const WhyChooseUsSection = ({ darkMode }) => {
  const features = [
    {
      title: "800 MW Fully Automated Line",
      desc: "Precision at scale—ensuring consistency, reliability, and high throughput.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "High-Efficiency Modules",
      desc: "Superior performance & ROI with modules exceeding 22% efficiency.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Global Quality Standards",
      desc: "Compliant with ISO, IEC, and MNRE—trusted from rooftops to utility-scale plants.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Strong R&D Backbone",
      desc: "Continuous innovation in cell tech, materials, and module architecture.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Sustainable Manufacturing",
      desc: "Low-emission, water-positive, and waste-recovery integrated operations.",
      icon: <RecycleIcon />,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className={`py-28 lg:py-32 relative overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-white/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Why Choose Lumivolt?
          </h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Built for performance. Engineered for impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl ${
                darkMode
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className={`mb-3 p-2 rounded-lg inline-block ${
                  darkMode ? "bg-slate-800" : "bg-gray-100"
                }`}
              >
                {React.cloneElement(f.icon, {
                  className: `w-5 h-5 ${
                    darkMode ? "text-yellow-400" : "text-blue-600"
                  }`,
                })}
              </div>
              <h3
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-3xl text-center ${
            darkMode
              ? "bg-gradient-to-r from-slate-900 to-blue-950 border border-slate-700"
              : "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
          }`}
        >
          <h3
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Partner with Lumivolt
          </h3>
          <p
            className={`mt-3 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let’s shape the future of solar energy—together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`mt-6 px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 ${
              darkMode
                ? "bg-yellow-400 text-slate-950 shadow-lg"
                : "bg-blue-600 text-white shadow-md"
            }`}
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
