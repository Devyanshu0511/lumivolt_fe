import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useDarkMode } from "../components/Layout";
import LeadershipSection from "./Leadership";

const AboutSection = () => {
  const { darkMode } = useDarkMode();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      title: "Integrity",
      desc: "Doing what’s right—for our customers, partners, and the planet.",
    },
    {
      title: "Innovation",
      desc: "Pushing the boundaries of what solar can achieve.",
    },
    {
      title: "Quality",
      desc: "Excellence in every panel, process, and partnership.",
    },
    {
      title: "Sustainability",
      desc: "Clean energy is our product—and our purpose.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 lg:py-36 relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        }`}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Who We Are
          </h2>
          <p
            className={`mt-5 max-w-3xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Lumivolt Tech Solar Pvt. Ltd. is a next-generation solar technology
            company based in Ghaziabad, Uttar Pradesh—establishing an 800 MW
            fully automated PV module manufacturing line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Intro Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              We combine cutting-edge automation, precision engineering, and
              global quality standards to deliver high-efficiency solar modules
              built for reliability, performance, and sustainability.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Our mission is simple:
              <span
                className={`font-bold ml-1 ${
                  darkMode ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                harness the power of the sun to build a cleaner, smarter, and
                more energy-independent future.
              </span>
            </p>

            {/* Vision & Mission Side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div
                className={`p-5 rounded-xl ${
                  darkMode
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-blue-50 border border-blue-100"
                }`}
              >
                <h3
                  className={`font-bold text-lg ${
                    darkMode ? "text-yellow-400" : "text-blue-600"
                  }`}
                >
                  Vision
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Redefine solar manufacturing in India through automation,
                  quality, and innovation.
                </p>
              </div>
              <div
                className={`p-5 rounded-xl ${
                  darkMode
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-emerald-50 border border-emerald-100"
                }`}
              >
                <h3
                  className={`font-bold text-lg ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Mission
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Make high-performance solar energy accessible and
                  affordable—advancing India’s energy self-reliance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Core Values
            </h3>
            <div className="space-y-3">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className={`flex items-start gap-3 p-4 rounded-xl ${
                    darkMode
                      ? "bg-slate-900/70 border border-slate-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2.5 ${
                      darkMode ? "bg-yellow-400" : "bg-blue-600"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-bold ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      {v.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <LeadershipSection />
    </section>
  );
};

export default AboutSection;
