import { motion } from "framer-motion";
import logoFull from "../assets/logo.png";
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
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center md:justify-start w-full md:w-auto"
          >
            <div
              className={`rounded-xl inline-flex max-w-full ${
                darkMode ? "p-2 sm:p-3" : "bg-[#264488] p-2 sm:p-3 shadow-md"
              }`}
            >
              <motion.img
                src={logoFull}
                alt="Lumivolt — Harnessing the Sun"
                className="h-11 sm:h-14 md:h-16 w-auto max-w-[min(100%,20rem)] sm:max-w-[min(100%,22rem)] object-contain object-left"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
              />
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
