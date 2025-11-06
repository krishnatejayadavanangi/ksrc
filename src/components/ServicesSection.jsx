"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    title: "🚀 Digital Marketing",
    desc: "Boost your online presence with SEO, Ads & Social Media.",
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

export default function ServicesSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % services.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-red-400">
          Our Services
        </h2>

        {/* Morph effect cards */}
        <div className="relative h-[240px] md:h-[260px] overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: i === current ? 1 : 0,
                scale: i === current ? 1 : 0.95,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute inset-0 flex items-center justify-center ${
                i === current ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <Link href={service.link}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 shadow-2xl w-full max-w-md cursor-pointer"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-red-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.desc}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {services.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? "bg-red-500" : "bg-gray-700"
              }`}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
