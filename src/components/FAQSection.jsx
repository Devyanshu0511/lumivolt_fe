import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FAQSection = ({ darkMode }) => {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What makes Lumivolt solar panels different?",
      answer:
        "Lumivolt panels feature cutting-edge technology with over 22% efficiency, advanced cell architecture, and a focus on sustainability. Our fully automated 800 MW production line ensures unparalleled quality and consistency.",
    },
    {
      question: "Are Lumivolt panels weather-resistant?",
      answer:
        "Yes! Our panels are designed to withstand extreme weather conditions including hail, heavy snow loads, and high winds. They come with comprehensive warranties and are tested to international standards.",
    },
    {
      question: "What's the warranty on Lumivolt products?",
      answer:
        "We offer a comprehensive 25-year product warranty and 30-year performance warranty. Our panels are backed by rigorous testing and quality assurance to ensure long-term reliability and performance.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "While we specialize in manufacturing high-quality solar panels, we partner with certified installation professionals worldwide. We can connect you with trusted installers in your area for complete solar solutions.",
    },
    {
      question: "Are Lumivolt panels environmentally friendly?",
      answer:
        "Absolutely. Our manufacturing process is water-positive, uses recycled materials, and minimizes carbon emissions. We're committed to sustainable production that supports a cleaner energy future.",
    },
    {
      question: "What sizes and types of panels do you offer?",
      answer:
        "We offer a comprehensive range including residential, commercial, and utility-scale panels. From 400W to 600W+ modules, we have solutions for every application and roof configuration.",
    },
  ];

  return (
    <section id="faq" className={`py-28 lg:py-32 relative overflow-hidden `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Everything you need to know about Lumivolt solar solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-64 cursor-pointer perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-center items-center text-center ${
                    darkMode
                      ? "bg-slate-900 border border-slate-800"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div
                    className={`mb-4 p-3 rounded-full ${
                      darkMode ? "bg-slate-800" : "bg-gray-100"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`font-bold text-lg leading-tight ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Back of card */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 ${
                    darkMode
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
                      : "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200"
                  }`}
                >
                  <div
                    className={`mb-4 p-3 rounded-full ${
                      darkMode ? "bg-slate-700" : "bg-blue-100"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3
            className={`text-xl sm:text-2xl font-bold mb-4 ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Still have questions?
          </h3>
          <p
            className={`mb-6 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our expert team is here to help you find the perfect solar solution
            for your needs.
          </p>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            className={`px-8 py-3 rounded-full font-bold ${
              darkMode
                ? "bg-yellow-400 text-slate-950 shadow-lg"
                : "bg-blue-600 text-white shadow-md"
            }`}
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
