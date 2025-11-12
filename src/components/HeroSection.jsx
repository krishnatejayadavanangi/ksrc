"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Optimized hero image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.webp"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-red-400 mb-6 drop-shadow-lg">
          Grow Your Business with Rama Kalpa Solutions
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Digital marketing, web, and app solutions designed to elevate your
          brand.
        </p>
      </motion.div>
    </section>
  );
}
