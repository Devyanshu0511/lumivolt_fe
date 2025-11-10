import React from "react";
import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Services from "../components/HomePage/Services";
import Vision from "../components/HomePage/Vision";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-blue from-white via-gray-50 to-slate-100 text-gray-900 h-screen w-full">
      <Hero />
      <About />
      <Services />
      <Vision />
      <Contact />
    </div>
  );
};

export default HomePage;
