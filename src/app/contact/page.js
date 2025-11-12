"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+91",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("⚠️ Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          countryCode: "+91",
        });
      } else {
        toast.error("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Error sending message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-red-900 to-black text-white py-28 overflow-hidden text-center">
        <motion.div
          className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-5xl font-bold mb-4 text-red-500 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact ramakalpasolutions
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Fill out the form below — we’ll get back to you shortly.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black text-white relative z-10">
        <div className="max-w-3xl mx-auto px-6 bg-gradient-to-b from-zinc-900 to-black rounded-2xl shadow-2xl border border-zinc-800 p-8 md:p-12">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-zinc-700 rounded-lg px-4 py-3 text-white bg-zinc-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-zinc-700 rounded-lg px-4 py-3 text-white bg-zinc-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 placeholder-gray-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border border-zinc-700 rounded-lg px-4 py-3 bg-zinc-900 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500"
                >
                  <option value="+91">+91 India</option>
                  <option value="+1">+1 USA</option>
                  <option value="+44">+44 UK</option>
                  <option value="+61">+61 Australia</option>
                </select>
                <input
                  name="phone"
                  type="text"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-zinc-700 rounded-lg px-4 py-3 text-white bg-zinc-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-zinc-700 rounded-lg px-4 py-3 text-white bg-zinc-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 placeholder-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
}
