import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, FolderOpen, Loader2 } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { API_BASE_URL } from "../config";

const Downloads = () => {
  const { darkMode } = useDarkMode();
  const [downloadsData, setDownloadsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/downloads`)
      .then((res) => res.json())
      .then((data) => {
        setDownloadsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch downloads:", err);
        setLoading(false);
      });
  }, []);

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  // Group downloads by category
  const categories = {};
  downloadsData.forEach((file) => {
    if (!categories[file.category]) {
      categories[file.category] = [];
    }
    categories[file.category].push(file);
  });

  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
            : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-yellow-400" : "text-[#274488]"
            }`}
          >
            Downloads
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Access our brochures, catalogs, and technical documents.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
          </div>
        ) : Object.keys(categories).length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No downloads available at the moment.
          </div>
        ) : (
          <div className="space-y-16">
            {Object.keys(categories).map((categoryName, categoryIndex) => (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                  <FolderOpen
                    className={`w-6 h-6 ${
                      darkMode ? "text-yellow-400" : "text-[#274488]"
                    }`}
                  />
                  <h3
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {categoryName}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories[categoryName].map((file, fileIndex) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: fileIndex * 0.05 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative cursor-pointer h-full"
                      onClick={() => handleFileClick(file)}
                    >
                      <div
                        className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                          darkMode ? "bg-yellow-400/10" : "bg-blue-500/10"
                        }`}
                      />
                      <div
                        className={`relative p-6 rounded-2xl transition-all h-full flex flex-col ${
                          darkMode
                            ? "bg-slate-900/80 backdrop-blur-sm border border-slate-700 group-hover:border-yellow-400/50"
                            : "bg-white/90 backdrop-blur-sm border border-gray-200 group-hover:border-blue-500/50 shadow-sm"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`p-3 rounded-xl ${
                              darkMode
                                ? "bg-yellow-400/10 text-yellow-400"
                                : "bg-blue-50 text-[#274488]"
                            }`}
                          >
                            <FileText className="w-6 h-6" />
                          </div>
                          <a
                            href={
                              file.fileUrl?.startsWith("/")
                                ? API_BASE_URL + file.fileUrl
                                : file.fileUrl
                            }
                            download
                            onClick={(e) => e.stopPropagation()}
                            className={`p-2 rounded-full transition-colors ${
                              darkMode
                                ? "text-gray-400 hover:text-white hover:bg-slate-800"
                                : "text-gray-500 hover:text-[#274488] hover:bg-blue-50"
                            }`}
                            title="Download Directly"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        </div>
                        <h4
                          className={`text-lg font-bold mb-2 group-hover:text-opacity-100 transition-colors line-clamp-2 ${
                            darkMode
                              ? "text-white group-hover:text-yellow-400"
                              : "text-slate-900 group-hover:text-[#274488]"
                          }`}
                        >
                          {file.title}
                        </h4>
                        <div className="mt-auto pt-4">
                          <div
                            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                              darkMode
                                ? "text-yellow-400 group-hover:text-yellow-300"
                                : "text-[#274488] group-hover:text-blue-700"
                            }`}
                          >
                            View Document
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
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showModal && selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-5xl h-[90vh] p-4 sm:p-6 rounded-2xl flex flex-col shadow-2xl ${
                darkMode
                  ? "bg-slate-900 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 shrink-0 border-b border-gray-200 dark:border-slate-700 pb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                      darkMode
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "bg-blue-50 text-[#274488]"
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-bold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {selectedFile.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <a
                    href={
                      selectedFile.fileUrl?.startsWith("/")
                        ? API_BASE_URL + selectedFile.fileUrl
                        : selectedFile.fileUrl
                    }
                    download
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      darkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-[#274488] hover:bg-blue-900 text-white"
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={closeModal}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-white hover:bg-slate-800"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src={
                    selectedFile.fileUrl?.startsWith("/")
                      ? API_BASE_URL + selectedFile.fileUrl
                      : selectedFile.fileUrl
                  }
                  title={selectedFile.title}
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

export default Downloads;
