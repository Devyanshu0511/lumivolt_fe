// src/components/Navigation.jsx (or Navbar.jsx)
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // ✅ Essential for multi-page
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import logo from "../assets/image.png";
import { useDarkMode } from "./Layout";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation(); // ✅ Close mobile menu on route change
  const { darkMode, setDarkMode } = useDarkMode();

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setProductsDropdownOpen(false);
      }
    };

    if (productsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [productsDropdownOpen]);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  // Full nav items (for routing)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technology", path: "/technology" },
    {
      name: "Products",
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Products", path: "/products" },
        { name: "Monofacial PERC", path: "/products/monofacial-perc" },
        { name: "Bifacial TOPCon", path: "/products/bifacial-topcon" },
        { name: "Ultra Series", path: "/products/ultra-series" },
      ]
    },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "bg-slate-950/90 backdrop-blur-xl shadow-lg"
            : "bg-white/90 backdrop-blur-xl shadow-md"
          : darkMode
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} className="cursor-pointer">
            <Link to="/" className="flex items-center space-x-2.5">
              <motion.div
                whileHover={{ rotate: 5 }}
                className="relative"
                aria-label="Lumivolt Home"
              >
                <motion.img
                  src={logo}
                  alt="Lumivolt Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div>
                <span
                  className={`text-xl sm:text-2xl font-bold ${
                    darkMode ? "text-yellow-400" : "text-blue-600"
                  }`}
                >
                  Lumivolt
                </span>
                <p
                  className={`text-xs -mt-0.5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Tech Solar
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="relative dropdown-container"
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`px-4 py-2.5 rounded-xl font-medium transition-colors relative group flex items-center gap-1 ${
                        darkMode
                          ? "text-gray-300 hover:text-yellow-400"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          productsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Animated underline */}
                      <motion.span
                        className="absolute bottom-0 left-4 right-4 h-0.5"
                        layoutId="nav-underline"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          originX: 0,
                          backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
                        }}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl border z-50 ${
                            darkMode
                              ? "bg-slate-900 border-slate-700"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          <div className="py-2">
                            {item.dropdownItems.map((dropdownItem, j) => (
                              <motion.div
                                key={dropdownItem.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.05 }}
                              >
                                <Link
                                  to={dropdownItem.path}
                                  onClick={() => setProductsDropdownOpen(false)}
                                  className={`block px-4 py-3 text-sm transition-colors ${
                                    darkMode
                                      ? "text-gray-300 hover:text-yellow-400 hover:bg-slate-800"
                                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                  }`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2.5 rounded-xl font-medium transition-colors relative group ${
                      darkMode
                        ? "text-gray-300 hover:text-yellow-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <motion.span
                      className="absolute bottom-0 left-4 right-4 h-0.5"
                      layoutId="nav-underline"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{
                        originX: 0,
                        backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
                      }}
                    />
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1, rotate: darkMode ? 0 : 180 }}
              whileTap={{ scale: 0.9 }}
              className={`ml-3 p-3 rounded-full shadow-md ${
                darkMode
                  ? "bg-yellow-400 text-slate-900 shadow-yellow-500/30"
                  : "bg-blue-600 text-white shadow-blue-500/30"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md ${
              darkMode
                ? "text-white hover:bg-slate-800"
                : "text-slate-900 hover:bg-gray-200"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu — with proper exit animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden backdrop-blur-xl border-t ${
              darkMode
                ? "bg-slate-900/95 border-slate-800"
                : "bg-white/95 border-gray-200"
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className={`block w-full text-left px-4 py-3.5 rounded-xl font-medium transition-colors ${
                        darkMode
                          ? "text-gray-300 hover:text-yellow-400 hover:bg-slate-800/50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem, j) => (
                        <motion.div
                          key={dropdownItem.path}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.2, delay: j * 0.05 }}
                        >
                          <Link
                            to={dropdownItem.path}
                            className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                              darkMode
                                ? "text-gray-400 hover:text-yellow-400 hover:bg-slate-800/50"
                                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Dark mode toggle inside mobile menu */}
              <div className="pt-2 border-t mt-2 border-gray-700/30">
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl ${
                    darkMode
                      ? "text-yellow-400 hover:bg-slate-800/50"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
