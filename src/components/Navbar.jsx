import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/image.png";

const Navigation = ({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  navItems,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "bg-slate-950/80 backdrop-blur-xl shadow-xl"
            : "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.img
                src={logo}
                alt="Lumivolt Logo"
                className="w-12 h-12 object-contain rounded-full shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>

            <div>
              <span
                className={`text-2xl font-bold ${
                  darkMode ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                Lumivolt
              </span>
              <p
                className={`text-xs -mt-1 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Tech Solar
              </p>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl transition-all relative group ${
                  darkMode
                    ? "text-gray-300 hover:text-yellow-400 hover:bg-blue-900/30"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
                  }}
                />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, rotate: darkMode ? 0 : 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-4 p-3 rounded-full shadow-lg ${
                darkMode
                  ? "bg-yellow-400 text-slate-950 shadow-yellow-400/50"
                  : "bg-blue-500 text-white shadow-blue-500/50"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          <button
            className={`md:hidden ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden backdrop-blur-xl border-t ${
            darkMode
              ? "bg-slate-950/95 border-yellow-400/20"
              : "bg-white/95 border-blue-500/20"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  darkMode
                    ? "text-gray-300 hover:text-yellow-400 hover:bg-blue-900/30"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
