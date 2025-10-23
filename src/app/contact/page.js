"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+91"
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
        setFormData({ name: "", email: "", phone: "", message: "", countryCode: "+91" });
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

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Digi World</h2>
        <p className="text-lg md:text-xl">
          Fill out the form below and we’ll get back to you shortly.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white max-w-3xl mx-auto px-6 rounded-xl shadow-xl mt-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name <span className="text-red-500">*</span></label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 !text-black bg-white focus:bg-cyan-50 focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 !text-black bg-white focus:bg-cyan-50 focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone <span className="text-red-500">*</span></label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 bg-white !text-black focus:border-primary focus:ring-2 focus:ring-primary"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 !text-black bg-white focus:bg-cyan-50 focus:border-primary focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 !text-black bg-white focus:bg-cyan-50 focus:border-primary focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 hover:scale-[1.02] transition-all duration-300 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </section>
    </Layout>
  );
}
