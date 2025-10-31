"use client";

import Layout from "../components/Layout";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  // Service data
  const services = [
    {
      title: "🚀 Digital Marketing",
      desc: "SEO, social media, paid ads, and growth strategies.",
      link: "/services/digital-marketing",
    },
    {
      title: "💻 Web Development",
      desc: "Professional websites optimized for speed, SEO, and UX.",
      link: "/services/web-development",
    },
    {
      title: "📱 App Development",
      desc: "High-performance Android & iOS apps with smooth UX.",
      link: "/services/app-development",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* 🌆 Hero Section */}
      <section className="relative text-center bg-gradient-to-br from-black via-red-900 to-black text-white py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-red-500 drop-shadow-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Grow Your Business Online with{" "}
            <span className="text-white">Digi World</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Modern digital marketing, web, and app solutions for your brand.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-red-700 font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
              Get Started 🚀
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 💼 Services Section */}
      <section
        id="services"
        className="py-24 bg-black text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-16 text-red-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>

          {/* Auto-Sliding Carousel */}
          <div className="relative h-64 md:h-72 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.7 }}
                className="absolute w-full"
              >
                <div className="mx-auto max-w-lg bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 shadow-xl">
                  <Link href={services[index].link}>
                    <h3 className="text-3xl font-semibold mb-4 text-red-400">
                      {services[index].title}
                    </h3>
                    <p className="text-gray-300">{services[index].desc}</p>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-red-500" : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 CTA Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-800 to-black text-white py-20 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Take Your Brand to the Next Level?
          </motion.h3>
          <motion.p
            className="text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let’s build something amazing together — from websites to apps and
            marketing.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </Layout>
  );
}
