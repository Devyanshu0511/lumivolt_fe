import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Shield, Lock, Cookie, RefreshCw, AlertTriangle, Download } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { API_BASE_URL } from "../config";
import { Loader2 } from "lucide-react";
const iconMap = {
  Shield,
  FileText,
  RefreshCw,
  AlertTriangle,
  Cookie,
  Lock
};

const Policies = () => {
  const { darkMode } = useDarkMode();
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [policiesData, setPoliciesData] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/policies`)
      .then(res => res.json())
      .then(data => {
        setPoliciesData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch policies:", err);
        setLoading(false);
      });
  }, []);

  const policies = policiesData.map(policy => ({
    ...policy,
    icon: iconMap[policy.icon]
  }));

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
        className={`absolute inset-0 ${darkMode
            ? "bg-linear-to-b from-slate-950 via-blue-950 to-slate-950"
            : "bg-linear-to-b from-sky-50 via-blue-50 to-indigo-50"
          }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 ${darkMode ? "text-yellow-400" : "text-[#274488]"
            }`}
        >
          Policies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center text-base sm:text-lg md:text-xl mb-12 sm:mb-20 ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          Important policies and guidelines for our solar products and services
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
            </div>
          ) : policies.map((policy, index) => {
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
                  className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${darkMode
                      ? "bg-yellow-400/5"
                      : "bg-blue-500/5"
                    }`}
                />
                <div
                  className={`relative p-6 sm:p-8 rounded-2xl transition-all h-full flex flex-col ${darkMode
                      ? "bg-slate-900/70 backdrop-blur-sm border border-slate-700 group-hover:border-yellow-400/50"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200 group-hover:border-blue-500/50"
                    }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${darkMode
                          ? "bg-yellow-400/10 text-yellow-400"
                          : "bg-blue-50 text-[#274488]"
                        }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-3 group-hover:text-opacity-100 transition-colors ${darkMode
                        ? "text-white group-hover:text-yellow-400"
                        : "text-slate-900 group-hover:text-[#274488]"
                      }`}
                  >
                    {policy.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 flex-1 ${darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {policy.description}
                  </p>
                  <div className="mt-auto">
                    <div
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${darkMode
                          ? "text-yellow-400 group-hover:text-yellow-300"
                          : "text-[#274488] group-hover:text-[#274488]"
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

      {/* PDF Modal */}
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
              className={`relative w-full max-w-4xl h-[85vh] p-6 sm:p-8 rounded-2xl flex flex-col ${darkMode
                  ? "bg-slate-900 border border-slate-700"
                  : "bg-white border border-gray-200"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6 shrink-0">
                <div className="flex items-center gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${darkMode
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "bg-blue-50 text-[#274488]"
                      }`}
                  >
                    <selectedPolicy.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {selectedPolicy.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">

                  <button
                    onClick={closeModal}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode
                        ? "text-gray-400 hover:text-white hover:bg-slate-800"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden">
                <iframe
                  src={selectedPolicy.pdfUrl?.startsWith('/') ? API_BASE_URL + selectedPolicy.pdfUrl : selectedPolicy.pdfUrl}
                  title={selectedPolicy.title}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Policies;
