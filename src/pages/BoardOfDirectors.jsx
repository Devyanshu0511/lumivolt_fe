import React from "react";
import { motion } from "framer-motion";
import { Users, Award, TrendingUp } from "lucide-react";
import { useDarkMode } from "../components/Layout";

const BoardOfDirectors = () => {
  const { darkMode } = useDarkMode();

  const directors = [
    {
      name: "Samarth Wadhwa",
      role: "Director",
      image:
        "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E",
      bio: "Strategic operations leader overseeing manufacturing excellence and scaling operations for sustainable growth.",
      expertise:
        "Renewable Energy Infrastructure, Strategic Scaling & Operational Excellence",
      experience: "15+ years in clean energy sector",
    },
    {
      name: "Pankaj Gupta",
      role: "Director",
      image:
        "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E",
      bio: "Technical innovator specializing in advanced photovoltaic technologies and product development.",
      expertise:
        "Industrial Lifecycle Management, Retail Operations & Photovoltaic R&D",
      experience:
        "30+ year experience in Industrial Operation, Retail and 5+ years experience in clean energy sector",
    },
    {
      name: "Mukesh Tyagi",
      role: "Director",
      image:
        "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E",
      bio: "Market strategist with deep insights into solar energy distribution and business development.",
      expertise:
        "Advanced Manufacturing, Retail Supply Chain & Clean-Tech Market Strategy",
      experience:
        "25+ years experience in Manufacturing and Retail, 5+ years experience in clean energy sector",
    },
    {
      name: "Rajkumar Chaudhary",
      role: "Director",
      image:
        "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E",
      bio: "Quality assurance expert ensuring world-class manufacturing standards and operational efficiency.",
      expertise:
        "Quality Assurance (QA), TQM, & Industrial Process Optimization",
      experience: "25+ years experience in Manufacturing quality",
    },
    {
      name: "Surekha",
      role: "Director",
      image:
        "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E",
      bio: "Strategic advisor providing expertise in stakeholder engagement and sustainable business practices.",
      expertise: "Corporate Governance, ESG Strategy & Stakeholder Relations",
      experience: "20+ years experience in corporate strategy",
    },
    {
      name: "Devyanshu Singhal",
      role: "Promoter",
      image:
        "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236b7280'/%3E%3C/svg%3E",
      bio: "Visionary leader driving Lumivolt's mission to revolutionize solar energy accessibility with innovative manufacturing solutions.",
      expertise:
        "Venture Growth, Multi-Sector Operations & Clean Energy Transformation",
      experience: "5+ years in Manufacturing, Retail and clean energy sector",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Years Combined Experience",
    },
    {
      icon: Award,
      value: "6",
      label: "Board Members",
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Committed to Growth",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-linear-to-b from-slate-950 via-blue-950 to-slate-950"
            : "bg-linear-to-b from-sky-50 via-blue-50 to-indigo-50"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            Board of Directors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our experienced leadership team brings together decades of expertise
            in renewable energy, manufacturing, and strategic business
            development to guide Lumivolt's mission.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900/70 backdrop-blur-sm border border-slate-700"
                    : "bg-white/80 backdrop-blur-sm border border-gray-200"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    darkMode
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div
                  className={`text-2xl sm:text-3xl font-bold mb-2 ${
                    darkMode ? "text-yellow-400" : "text-blue-600"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Directors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl ${
                darkMode
                  ? "bg-slate-900/70 backdrop-blur-sm border border-slate-700"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200"
              }`}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">
                    {director.name}
                  </h3>
                  <p className="text-yellow-400 font-medium mb-3">
                    {director.role}
                  </p>
                  <p className="text-gray-200 text-sm mb-3">{director.bio}</p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-300">
                      <span className="font-semibold text-yellow-400">
                        Expertise:
                      </span>{" "}
                      {director.expertise}
                    </div>
                    <div className="text-xs text-gray-300">
                      <span className="font-semibold text-yellow-400">
                        Experience:
                      </span>{" "}
                      {director.experience}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
