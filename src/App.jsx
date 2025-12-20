// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/AboutSection";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import MonofacialPERC from "./pages/MonofacialPERC";
import BifacialTOPCon from "./pages/BifacialTOPCon";
import UltraSeries from "./pages/UltraSeries";
import Sustainability from "./pages/Sustainability";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Career";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technology" element={<Technology />} />
          <Route path="products" element={<Products />} />
          <Route path="products/monofacial-perc" element={<MonofacialPERC />} />
          <Route path="products/bifacial-topcon" element={<BifacialTOPCon />} />
          <Route path="products/ultra-series" element={<UltraSeries />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>404 — Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
