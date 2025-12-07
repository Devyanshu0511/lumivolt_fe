import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Send,
  ExternalLink,
  Sun,
} from "lucide-react";
import { useDarkMode } from "../components/Layout";
import { Form, Input, Button, notification } from "antd";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { darkMode } = useDarkMode();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();
  const mapRef = useRef(null);

  const openNotification = (type, message) => {
    notification[type]({
      message,
      placement: "topRight",
      duration: 3,
    });
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const payload = {
        name: values.name,
        email: import.meta.env.VITE_EMAILJS_EMAILTO,
        message: values.message,
        title: values.email,
      };

      // EmailJS send call
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      form.resetFields();
      openNotification(
        "success",
        "Thank you! We’ll contact you within 24 hours."
      );
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      openNotification("error", "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <section
      id="contact"
      className={`py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden ${
        darkMode ? "bg-slate-950" : "bg-gradient-to-b from-gray-50 to-gray-100"
      }`}
    >
      {/* Subtle animated background pattern */}
      <div
        className={`absolute inset-0 -z-10 opacity-10 pointer-events-none ${
          darkMode ? "text-yellow-400/20" : "text-blue-400/20"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              darkMode
                ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                : "bg-blue-100 text-blue-700 border border-blue-200"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Let's build a solar-powered future
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Powering a Brighter Future —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`max-w-3xl mx-auto mt-6 text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a solar project in mind? Want to explore clean energy for your
            home or business? Reach out — we’re here to help you harness the
            sun, sustainably and intelligently.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`p-7 rounded-2xl backdrop-blur-sm border ${
              darkMode
                ? "bg-slate-900/60 border-slate-800 shadow-xl"
                : "bg-white/70 border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              <MapPin className="w-6 h-6 text-blue-500" />
              Get In Touch
            </h3>

            <p
              className={`mb-8 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Lumivolt Tech Solar Pvt. Ltd. is committed to accelerating India’s
              renewable energy transition. Let’s design a solar solution that
              powers your growth — sustainably, efficiently, and beautifully.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  icon: MapPin,
                  title: "Head Office & Manufacturing",
                  content: (
                    <>
                      Balaji Compound, Meerut Road,
                      <br />
                      Morta, Ghaziabad – 201003, UP
                    </>
                  ),
                },
                {
                  icon: Phone,
                  title: "Sales & Support",
                  content: (
                    <a
                      href="tel:+918745987184"
                      className={`inline-flex items-center gap-1 font-medium hover:underline ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      +91 87459 87184
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  title: "General Inquiries",
                  content: (
                    <a
                      href="mailto:contact@lumivolt.in"
                      className={`inline-flex items-center gap-1 font-medium hover:underline ${
                        darkMode ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      contact@lumivolt.in
                    </a>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 ${
                      darkMode
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Send a Message Form (AntD) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`p-7 rounded-2xl backdrop-blur-sm border ${
              darkMode
                ? "bg-slate-900/60 border-slate-800 shadow-xl"
                : "bg-white/70 border-gray-200 shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              <Send className="w-6 h-6 text-blue-500" />
              Send Us a Message
            </h3>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              validateMessages={validateMessages}
              autoComplete="off"
            >
              <Form.Item
                name="name"
                label={
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Name
                  </span>
                }
                rules={[{ required: true }]}
              >
                <Input
                  size="large"
                  placeholder="Your Full Name"
                  className={`rounded-xl ${
                    darkMode
                      ? "bg-slate-800/60 text-white border-slate-700"
                      : "bg-white/80 text-slate-900 border-gray-300"
                  }`}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Email
                  </span>
                }
                rules={[
                  { required: true },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  size="large"
                  type="email"
                  placeholder="Email Address"
                  className={`rounded-xl ${
                    darkMode
                      ? "bg-slate-800/60 text-white border-slate-700"
                      : "bg-white/80 text-slate-900 border-gray-300"
                  }`}
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Message
                  </span>
                }
                rules={[
                  { required: true },
                  {
                    min: 10,
                    message: "Message must be at least 10 characters.",
                  },
                ]}
              >
                <Input.TextArea
                  rows={5}
                  placeholder="Tell us about your solar needs — rooftop, ground-mount, commercial, or industrial?"
                  className={`rounded-xl resize-none ${
                    darkMode
                      ? "bg-slate-800/60 text-white border-slate-700"
                      : "bg-white/80 text-slate-900 border-gray-300"
                  }`}
                />
              </Form.Item>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2 ${
                      darkMode
                        ? "bg-green-900/30 text-green-400 border border-green-700/30"
                        : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                  >
                    <Sparkles className="w-5 h-5" />
                    Thank you! We’ll contact you within 24 hours.
                  </motion.div>
                ) : (
                  <motion.div
                    key="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isSubmitting}
                      size="large"
                      className={`w-full font-semibold flex items-center justify-center gap-2 rounded-xl transition-all duration-300 ${
                        darkMode
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 shadow-lg hover:shadow-yellow-500/20"
                          : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Form>
          </motion.div>
        </div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          ref={mapRef}
          className="mt-16"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200/30">
            <div
              className={`p-4 flex items-center justify-between ${
                darkMode ? "bg-slate-900/50" : "bg-white/80"
              }`}
            >
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Lumivolt Solar Facility — Ghaziabad, UP
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/9WfzJQmYQjvXcVZz7"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg ${
                  darkMode
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                Open in Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="aspect-video w-full bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5235354179235!2d77.4522131!3d28.733781999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1001f8b77af%3A0x4020c0e5c14b6925!2sLumivolt%20Tech%20Solar%20Private%20Limited!5e0!3m2!1sen!2sin!4v1765120011015!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lumivolt Solar Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
