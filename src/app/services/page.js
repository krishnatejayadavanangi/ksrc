"use client";

import Layout from "../../components/Layout";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-red-900 to-black text-white py-28 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/services-bg.webp')] bg-cover bg-center opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-5xl font-bold mb-4 text-red-500 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            ⚙️ Our Services
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We provide complete digital solutions to elevate your brand and grow your business online.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black text-white px-6 md:px-12 space-y-32">
        {/* Digital Marketing */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-red-500">🚀 Digital Marketing</h3>
            <p className="text-gray-300 leading-relaxed">
              We help your business grow faster with powerful digital strategies.
              Our experts plan and execute campaigns that reach the right audience, boost engagement, and drive conversions.
            </p>

            <div className="bg-zinc-900/60 backdrop-blur-md border-l-4 border-red-500 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-red-400 mb-2">Our Marketing Services include:</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Social Media Management (Instagram, Facebook, LinkedIn, etc.)</li>
                <li>Performance Marketing (Google & Meta Ads)</li>
                <li>SEO & Website Optimization</li>
                <li>Branding & Content Strategy</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="/images/digital-marketing.webp"
              alt="Digital Marketing"
              className="rounded-xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-12"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-red-500">💻 Web Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Your website is your digital identity — we make sure it looks great, loads fast, and converts visitors into customers.
              Our web development team specializes in creating modern, mobile-friendly, and SEO-optimized websites that perform beautifully.
            </p>

            <div className="bg-zinc-900/60 backdrop-blur-md border-l-4 border-red-500 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-red-400 mb-2">What We Offer:</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Custom Website Design (Corporate, E-commerce, Portfolio, Landing Pages)</li>
                <li>WordPress / React / Next.js Development</li>
                <li>Website Maintenance & Hosting Support</li>
                <li>UI/UX Optimization & Speed Enhancement</li>
              </ul>
            </div>

            <p className="text-gray-400 italic mt-4">
              🌐 Clean code. Smooth experience. Powerful performance.
            </p>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="/images/web-development.webp"
              alt="Web Development"
              className="rounded-xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

        {/* App Development */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-red-500">📱 App Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Transform your idea into a powerful, user-friendly mobile application.
              We design and build Android and iOS apps that deliver great experiences and real results.
            </p>

            <div className="bg-zinc-900/60 backdrop-blur-md border-l-4 border-red-500 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-red-400 mb-2">App Development Services:</h4>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Native & Cross-Platform App Development</li>
                <li>UI/UX Design & Prototyping</li>
                <li>API Integration & Cloud Connectivity</li>
                <li>Maintenance, Updates & Bug Fixing</li>
              </ul>
            </div>

            <p className="text-gray-400 italic mt-4">
              📲 From concept to launch — we handle it all.
            </p>
          </div>
          <div className="md:w-1/2">
            <motion.img
              src="/images/app-development.webp"
              alt="App Development"
              className="rounded-xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-800 to-black py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Ready to Elevate Your Digital Presence?
          </motion.h3>
          <motion.p
            className="mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Let’s discuss your project and turn your vision into reality.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </Layout>
  );
}
