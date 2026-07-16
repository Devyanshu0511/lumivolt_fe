import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logoFull from "../assets/logo.png";
import { useDarkMode } from "../context/DarkModeContext";

const WhatsAppIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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

          {/* Middle Section: Policies & Social */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Policy Links */}
            <div
              className={`flex flex-wrap justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {[
                "Terms of Use",
                "Cookie Policy",
                "Quality Policy",
                "EHS Policy",
              ].map((policyName) => (
                <Link
                  key={policyName}
                  to="/policies"
                  className={`hover:transition-colors ${
                    darkMode ? "hover:text-yellow-400" : "hover:text-blue-600"
                  }`}
                >
                  {policyName}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/lumivolt-solar/",
                  icon: <Linkedin className="w-5 h-5" />,
                },
                {
                  name: "WhatsApp",
                  url: "https://wa.me/918745987184?text=I%20want%20more%20information",
                  icon: <WhatsAppIcon className="w-5 h-5" />,
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
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    darkMode
                      ? "bg-yellow-400/10 border border-slate-700 hover:border-yellow-400 hover:bg-yellow-400/20 text-yellow-400"
                      : "bg-blue-500/10 border border-gray-200 hover:border-blue-500 hover:bg-blue-500/20 text-[#274488]"
                  }`}
                >
                  {social.icon}
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
