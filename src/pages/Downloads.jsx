import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, FolderOpen, Loader2, Search, X } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { API_BASE_URL } from "../config";

const Downloads = () => {
  const { darkMode } = useDarkMode();
  const [downloadsData, setDownloadsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/downloads`)
      .then((res) => {
        setDownloadsData(res.data);
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

  // Filter and group downloads
  const categories = useMemo(() => {
    const filtered = downloadsData.filter(file => 
      file.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      file.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const grouped = {};
    filtered.forEach((file) => {
      if (!grouped[file.category]) {
        grouped[file.category] = [];
      }
      grouped[file.category].push(file);
    });
    return grouped;
  }, [downloadsData, searchQuery]);

  return (
    <section className="py-24 relative overflow-hidden min-h-screen">
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          darkMode
            ? "bg-[#0a0f1c]"
            : "bg-gray-50"
        }`}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
          >
            <span className={`text-sm font-semibold tracking-wider ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              RESOURCES & DOCUMENTS
            </span>
          </motion.div>
          <h2
            className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Downloads</span>
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Access product brochures, technical specifications, and detailed catalogs to help you make informed decisions.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto relative group">
            <div className={`absolute inset-0 rounded-2xl blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'}`} />
            <div className={`relative flex items-center p-2 rounded-2xl backdrop-blur-xl border transition-all ${
              darkMode ? "bg-slate-900/50 border-slate-700 focus-within:border-blue-500" : "bg-white/70 border-gray-200 focus-within:border-blue-500 shadow-lg"
            }`}>
              <Search className={`w-6 h-6 ml-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
              <input 
                type="text"
                placeholder="Search documents by title or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 bg-transparent border-none outline-none text-lg ${
                  darkMode ? "text-white placeholder-gray-500" : "text-gray-900 placeholder-gray-400"
                }`}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className={`p-2 mr-1 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>Loading documents...</p>
          </div>
        ) : Object.keys(categories).length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className={`text-center py-32 rounded-3xl backdrop-blur-md border ${
              darkMode ? "bg-slate-900/40 border-slate-800 text-gray-400" : "bg-white/40 border-gray-200 text-gray-500"
            }`}
          >
            <FolderOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl">No documents found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
            >
              Clear search
            </button>
          </motion.div>
        ) : (
          <div className="space-y-20">
            {Object.keys(categories).map((categoryName, categoryIndex) => (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl shadow-inner ${darkMode ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 shadow-sm'}`}>
                    <FolderOpen className="w-6 h-6" />
                  </div>
                  <h3 className={`text-3xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {categoryName}
                  </h3>
                  <div className={`flex-1 h-px ml-4 ${darkMode ? 'bg-gradient-to-r from-slate-700 to-transparent' : 'bg-gradient-to-r from-gray-200 to-transparent'}`} />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categories[categoryName].map((file, fileIndex) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: fileIndex * 0.05 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative cursor-pointer h-full"
                      onClick={() => handleFileClick(file)}
                    >
                      {/* Glow effect on hover */}
                      <div className={`absolute -inset-0.5 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-500 ${darkMode ? 'bg-gradient-to-br from-blue-500/50 to-purple-600/50' : 'bg-gradient-to-br from-blue-400/30 to-indigo-500/30'}`} />
                      
                      <div
                        className={`relative p-5 rounded-2xl transition-all h-full flex flex-col overflow-hidden ${
                          darkMode
                            ? "bg-slate-900/90 backdrop-blur-xl border border-slate-700/50"
                            : "bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl shadow-gray-200/50"
                        }`}
                      >
                        {/* Decorative background element */}
                        <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-6 -mt-6 opacity-20 transition-transform group-hover:scale-110 ${darkMode ? 'bg-blue-500' : 'bg-blue-200'}`} />

                        <div className="flex items-start justify-between mb-4 relative z-10">
                          <div className={`p-3 rounded-xl shadow-inner transition-colors duration-300 ${
                            darkMode
                              ? "bg-slate-800 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300"
                              : "bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                          }`}>
                            <FileText className="w-6 h-6" />
                          </div>
                          
                          <a
                            href={file.fileUrl?.startsWith("/") ? API_BASE_URL + file.fileUrl : file.fileUrl}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                              darkMode
                                ? "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                : "bg-gray-50 text-gray-400 hover:text-white hover:bg-blue-600 hover:shadow-lg"
                            }`}
                            title="Download File"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>

                        <h4 className={`text-lg font-bold mb-2 relative z-10 transition-colors line-clamp-2 ${
                          darkMode ? "text-gray-100 group-hover:text-blue-400" : "text-gray-800 group-hover:text-blue-600"
                        }`}>
                          {file.title}
                        </h4>
                        
                        <div className="mt-auto pt-4 relative z-10">
                          <div className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                            darkMode ? "text-gray-400 group-hover:text-blue-300" : "text-gray-500 group-hover:text-blue-600"
                          }`}>
                            <span>View Document</span>
                            <motion.div
                              className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                            >
                              →
                            </motion.div>
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
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {selectedFile.title}
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
                  src={selectedFile.fileUrl?.startsWith('/') ? API_BASE_URL + selectedFile.fileUrl : selectedFile.fileUrl}
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
