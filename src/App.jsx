import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Frontend Components
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/AboutSection";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Sustainability from "./pages/Sustainability";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Career";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import ComingSoon from "./pages/ComingSoon";

// Admin Components
import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import AdminPolicies from "./pages/AdminPolicies";
import AdminProducts from "./pages/AdminProducts";
import AdminSettings from "./pages/AdminSettings";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  // Set this to true to enable Coming Soon page, false to show the full website
  const isComingSoon = false;

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes - without frontend Layout */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="policies" element={<AdminPolicies />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Public Frontend Routes - wrapped in frontend Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="board-of-directors" element={<BoardOfDirectors />} />
                <Route path="technology" element={<Technology />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="sustainability" element={<Sustainability />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="careers" element={<Careers />} />
                <Route path="policies" element={<Policies />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<div>404 — Page Not Found</div>} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
