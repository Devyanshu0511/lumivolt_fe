import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, Award, Zap, TrendingUp, ArrowLeft } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
export const ProductDetailContent = ({ productData, isPreview = false, darkMode = false }) => {
  if (!productData) return null;

  const product = {
    ...productData,
    color: darkMode ? productData.colorDark : productData.colorLight,
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-950" : "bg-gray-50"} ${isPreview ? "h-full overflow-y-auto" : ""}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-b from-blue-50 via-white to-blue-50"
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          {!isPreview && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                to="/products"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  darkMode
                    ? "text-gray-300 hover:text-white hover:bg-slate-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>
            </motion.div>
          )}

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4`}
              style={{
                backgroundColor: product.color + "20",
                color: product.color,
              }}
            >
              {product.badge}
            </span>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {product.name}
            </h1>
            <p
              className={`text-xl mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {product.tagline}
            </p>
            <Sun className="w-16 h-16 mx-auto mb-6" style={{ color: product.color }} />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.specs?.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl ${
                  darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`text-sm mb-2 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {spec.label}
                </div>
                <div
                  className="font-semibold text-lg"
                  style={{ color: product.color }}
                >
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Key Features
              </h3>
              <div className="space-y-4">
                {product.features?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Benefits
              </h3>
              <div className="space-y-4">
                {product.benefits?.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Certifications & Standards
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Compliant with international quality and safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.certifications?.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-4 rounded-xl text-center ${
                  darkMode
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-gray-200"
                }`}
              >
                <Award className="w-6 h-6 mx-auto mb-2" style={{ color: product.color }} />
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Power Your Project?
            </h3>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Contact our team to discuss your specific requirements and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: darkMode ? product.color : '#274488' }}
              >
                Get Quote
              </Link>
              <Link
                to="/products"
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105 ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                View All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ProductDetail = () => {
  const { darkMode } = useDarkMode();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products/${id}`)
      .then(res => {
        setProductData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-slate-950" : "bg-gray-50"}`}>
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!productData) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-900"}`}>
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products" className="text-blue-500 hover:underline">Return to Products</Link>
      </div>
    );
  }

  return <ProductDetailContent productData={productData} darkMode={darkMode} />;
};

export default ProductDetail;
