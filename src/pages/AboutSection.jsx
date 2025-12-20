import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useDarkMode } from "../components/Layout";
import LeadershipSection from "./Leadership";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const { darkMode } = useDarkMode();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const values = [
    {
      title: "Integrity",
      desc: "Doing what's right—for our customers, partners, and the planet.",
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

  const strategicGoals = [
    {
      title: "Manufacturing Excellence",
      desc: "Establish world-class 800 MW automated PV module production facility.",
      icon: "🏭",
      image: "/image.png",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Market Leadership",
      desc: "Capture significant market share in India's growing solar sector.",
      icon: "📈",
      image: "/hero.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Innovation & R&D",
      desc: "Invest in cutting-edge solar technologies and efficiency improvements.",
      icon: "🔬",
      image: "/image.png",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Sustainability Impact",
      desc: "Enable clean energy transition and reduce carbon footprint.",
      icon: "🌱",
      image: "/hero.jpg",
      color: "from-emerald-500 to-emerald-600",
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
            ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"
            : "bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50"
        }`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Lumivolt Tech Solar Pvt. Ltd. is a next-generation solar
                technology company based in Ghaziabad, Uttar
                Pradesh—establishing an 800 MW fully automated PV module
                manufacturing line.
              </p>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We combine cutting-edge automation, precision engineering, and
                global quality standards to deliver high-efficiency solar
                modules built for reliability, performance, and sustainability.
              </p>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
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
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero.jpg"
                  alt="Lumivolt Solar Manufacturing Facility"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-linear-to-t from-slate-900/60 via-transparent to-transparent"
                      : "bg-linear-to-t from-blue-900/40 via-transparent to-transparent"
                  }`}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-medium">
                    State-of-the-art 800 MW PV Module Manufacturing
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Mission & Vision
            </h2>
          </div>

          {/* Vision & Mission Cards */}
          <div className=" mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 rounded-xl ${
                  darkMode
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-blue-50 border border-blue-100"
                }`}
              >
                <h3
                  className={`font-bold text-2xl mb-4 ${
                    darkMode ? "text-yellow-400" : "text-blue-600"
                  }`}
                >
                  Vision
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Redefine solar manufacturing in India through automation,
                  quality, and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`p-8 rounded-xl ${
                  darkMode
                    ? "bg-slate-900 border border-slate-700"
                    : "bg-emerald-50 border border-emerald-100"
                }`}
              >
                <h3
                  className={`font-bold text-2xl mb-4 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Mission
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Make high-performance solar energy accessible and
                  affordable—advancing India's energy self-reliance.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3
                className={`text-2xl sm:text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Core Values
              </h3>
              <p
                className={`mt-3 max-w-2xl mx-auto ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                The principles that guide our every decision and action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-start gap-4 p-6 rounded-xl ${
                    darkMode
                      ? "bg-slate-900/70 border border-slate-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full mt-2 shrink-0 ${
                      darkMode ? "bg-yellow-400" : "bg-blue-600"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-bold text-lg mb-2 ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      {v.title}
                    </h4>
                    <p
                      className={`leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h3
                className={`text-2xl sm:text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Strategic Goals
              </h3>
              <p
                className={`mt-3 max-w-2xl mx-auto ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our roadmap for transforming India's solar energy landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicGoals.map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative overflow-hidden rounded-2xl shadow-xl group ${
                    darkMode
                      ? "bg-slate-900/80 border border-slate-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={goal.image}
                      alt={goal.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-t ${goal.color} opacity-80`}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Icon Overlay */}
                    <div className="absolute top-4 left-4 text-3xl">
                      {goal.icon}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-xl mb-2">
                        {goal.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {goal.desc}
                      </p>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode
                            ? "bg-slate-800 text-slate-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        Strategic Priority
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full bg-linear-to-r ${goal.color}`}
                      />
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Driving force behind our {goal.title.toLowerCase()}{" "}
                      initiatives and long-term success.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Leadership Section */}

        <LeadershipSection />

        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden mt-16"
        >
          {/* Contact Banner Background */}
          <div
            className={`absolute inset-0 ${
              darkMode
                ? "bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900"
                : "bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600"
            }`}
          />

          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/20"></div>
          </div>

          <div className="relative z-10 p-8 lg:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Power Your Future?
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses and homeowners who have chosen
                Lumivolt for reliable, sustainable solar energy solutions. Let's
                discuss how we can transform your energy future together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  onClick={() => navigate("/contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us Today
                </motion.a>

                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </motion.a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="text-blue-100">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm">Support Available</div>
                </div>
                <div className="text-blue-100">
                  <div className="text-2xl font-bold text-white mb-1">
                    800 MW
                  </div>
                  <div className="text-sm">Manufacturing Capacity</div>
                </div>
                <div className="text-blue-100">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm">Renewable Energy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
