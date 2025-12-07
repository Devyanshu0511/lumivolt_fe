// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// ✅ Create Context *inside* Layout (or better: move to its own file)
const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(
      "useDarkMode must be used within DarkModeProvider (Layout)"
    );
  }
  return context;
};

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTimeBasedDarkMode = () => {
      const hour = new Date().getHours();
      return hour < 6 || hour >= 19;
    };

    const systemPrefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    // Prioritize localStorage if exists
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else {
      setDarkMode(systemPrefersDark || getTimeBasedDarkMode());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    // Optional: add `dark` class to html for Tailwind `dark:` support
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white"
            : "bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50 text-slate-900"
        } overflow-x-hidden`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
};

export default Layout;
