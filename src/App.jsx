// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/AboutSection";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Career";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="technology" element={<Technology />} />
          <Route path="products" element={<Products />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Optional 404 */}
        <Route path="*" element={<div>404 — Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
