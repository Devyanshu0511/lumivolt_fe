// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import WhyChooseUsPreview from "../components/WhyChooseUsPreview"; // Simplified
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <HeroSection darkMode={darkMode} />
      <StatsSection darkMode={darkMode} />
      <WhyChooseUsPreview darkMode={darkMode} />
      {/* CTA Strip */}
      <section className="py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold mb-4"
        >
          Ready to Power Tomorrow?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a
            href="/products"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 25px -5px rgba(59,130,246,0.3)",
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium flex items-center gap-2"
          >
            View Products <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ y: -3 }}
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl font-medium"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Home;
