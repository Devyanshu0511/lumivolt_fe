import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-blue-600 mb-8"
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-700 mb-8">
          Balaji Compound, Meerut Road, Morta, Ghaziabad, Uttar Pradesh
          <br />
          Email:{" "}
          <a href="mailto:info@lumivolt.com" className="text-blue-600">
            info@lumivolt.com
          </a>
          <br />
          Phone: +91-XXXXXXXXXX
        </p>
        <a
          href="mailto:info@lumivolt.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
        >
          Send Message
        </a>
      </div>
    </section>
  );
}
