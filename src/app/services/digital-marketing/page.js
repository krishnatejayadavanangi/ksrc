"use client";
import Layout from "../../../components/Layout";
import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Target } from "lucide-react";

export default function DigitalMarketing() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-black via-red-900 to-black text-white py-28 overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 opacity-40 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <motion.h1
            className="text-5xl font-bold mb-6 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Digital Marketing
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Drive measurable growth through SEO, social media, and paid ad
            campaigns designed for performance.
          </motion.p>
        </div>
      </section>

      {/* 3D Interactive Cards */}
      <section className="py-20 bg-black text-center text-white">
        <h2 className="text-3xl font-bold mb-12 text-red-500">
          Our Digital Strategies
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Megaphone className="w-12 h-12 text-red-500 mb-4" />,
              title: "Social Media Ads",
              text: "Boost your reach with Instagram, Facebook, and LinkedIn ads that convert followers into customers.",
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-red-500 mb-4" />,
              title: "SEO Optimization",
              text: "Rank higher on Google using our modern search optimization strategies and AI-based analytics.",
            },
            {
              icon: <Target className="w-12 h-12 text-red-500 mb-4" />,
              title: "Performance Tracking",
              text: "We track every click and impression, turning insights into actionable growth opportunities.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-2xl shadow-lg border border-zinc-800 cursor-pointer"
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {card.icon}
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-black text-center text-white">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Scale Your Brand?
        </motion.h3>
        <p className="text-gray-300 mb-8">
          Let’s build your next digital campaign — smarter, faster, and bolder.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </Layout>
  );
}
