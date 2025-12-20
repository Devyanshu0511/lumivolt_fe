import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Shield, Lock, Cookie, RefreshCw, AlertTriangle } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const Policies = () => {
  const { darkMode } = useDarkMode();
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const policies = [
    {
      id: "privacy",
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      icon: Shield,
      details: "Learn about our commitment to data protection and privacy rights."
    },
    {
      id: "terms",
      title: "Terms of Service",
      description: "Rules and guidelines for using our solar products and services",
      icon: FileText,
      details: "Understand the terms that govern our relationship with customers."
    },
    {
      id: "warranty",
      title: "Warranty Policy",
      description: "Coverage and terms for our solar panel warranties",
      icon: RefreshCw,
      details: "Detailed warranty information for all our solar products."
    },
    {
      id: "refund",
      title: "Refund Policy",
      description: "Our policy on returns, exchanges, and refunds",
      icon: AlertTriangle,
      details: "Clear guidelines on our refund and return processes."
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      description: "Information about how we use cookies on our website",
      icon: Cookie,
      details: "Learn about our cookie usage and your privacy choices."
    },
    {
      id: "data",
      title: "Data Protection",
      description: "Our approach to data security and compliance",
      icon: Lock,
      details: "How we ensure your data is protected and secure."
    }
  ];

  const handlePolicyClick = (policy) => {
    setSelectedPolicy(policy);
    setShowComingSoon(true);
  };

  const closeModal = () => {
    setShowComingSoon(false);
    setSelectedPolicy(null);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-linear-to-b from-slate-950 via-blue-950 to-slate-950"
            : "bg-linear-to-b from-sky-50 via-blue-50 to-indigo-50"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 ${
            darkMode ? "text-yellow-400" : "text-blue-600"
          }`}
        >
          Policies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center text-base sm:text-lg md:text-xl mb-12 sm:mb-20 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Important policies and guidelines for our solar products and services
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative cursor-pointer h-full"
                onClick={() => handlePolicyClick(policy)}
              >
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                    darkMode
                      ? "bg-yellow-400/5"
                      : "bg-blue-500/5"
                  }`}
                />
                <div
                  className={`relative p-6 sm:p-8 rounded-2xl transition-all h-full flex flex-col ${
                    darkMode
                      ? "bg-slate-900/70 backdrop-blur-sm border border-slate-700 group-hover:border-yellow-400/50"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200 group-hover:border-blue-500/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${
                        darkMode
                          ? "bg-yellow-400/10 text-yellow-400"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-3 group-hover:text-opacity-100 transition-colors ${
                      darkMode
                        ? "text-white group-hover:text-yellow-400"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                  >
                    {policy.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 flex-1 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {policy.description}
                  </p>
                  <div className="mt-auto">
                    <div
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                        darkMode
                          ? "text-yellow-400 group-hover:text-yellow-300"
                          : "text-blue-600 group-hover:text-blue-700"
                      }`}
                    >
                      Read More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && selectedPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-md w-full p-8 rounded-2xl ${
                darkMode
                  ? "bg-slate-900 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    darkMode
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <selectedPolicy.icon className="w-8 h-8" />
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {selectedPolicy.title}
                </h3>
                <p
                  className={`text-lg mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedPolicy.details}
                </p>
                <div
                  className={`inline-block px-6 py-3 rounded-full text-lg font-semibold ${
                    darkMode
                      ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                      : "bg-blue-50 text-blue-600 border border-blue-200"
                  }`}
                >
                  Coming Soon
                </div>
              </div>
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-slate-800"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Policies;
