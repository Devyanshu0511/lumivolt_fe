import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import logo from "../assets/image.png";
import { useDarkMode } from "./Layout";

const Footer = () => {
  const { darkMode } = useDarkMode();
  return (
    <footer className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-t from-slate-950 to-slate-900"
            : "bg-gradient-to-t from-sky-50 to-white"
        }`}
      />
      <div
        className={`absolute inset-0 border-t ${
          darkMode ? "border-slate-800" : "border-gray-200"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Logo + Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 sm:space-x-4"
          >
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.img
                src={logo}
                alt="Lumivolt Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {/* Optional Glow Animation */}
              <motion.div
                className="absolute inset-0 blur-xl opacity-40"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  backgroundColor: darkMode ? "#fbbf24" : "#3b82f6",
                  borderRadius: "9999px",
                }}
              />
            </motion.div>

            <div>
              <span
                className={`text-xl sm:text-2xl font-bold block ${
                  darkMode ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                Lumivolt Tech Solar
              </span>
              <span
                className={`text-xs sm:text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Harnessing the Sun to Power Progress
              </span>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-3 sm:gap-4">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/lumivolt-solar/",
                },
                {
                  name: "WhatsApp",
                  url: "https://wa.me/918745987184?text=I%20want%20more%20information",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} profile`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    darkMode
                      ? "bg-yellow-400/10 border border-slate-700 hover:border-yellow-400 hover:bg-yellow-400/20"
                      : "bg-blue-500/10 border border-gray-200 hover:border-blue-500 hover:bg-blue-500/20"
                  }`}
                >
                  <span
                    className={`text-xs sm:text-sm font-bold ${
                      darkMode ? "text-yellow-400" : "text-blue-500"
                    }`}
                  >
                    {social.name[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            className={`text-center md:text-right text-xs sm:text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <p className="font-medium">© 2025 Lumivolt Tech Solar Pvt. Ltd.</p>
            <p>Engineering a sustainable future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
