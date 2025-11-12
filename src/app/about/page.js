"use client";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-red-900 to-black text-white py-28 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40 bg-[url('/images/about-bg.jpg')] bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <motion.h1
            className="text-5xl font-bold mb-6 text-red-500 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About ramakalpasolutions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover who we are, what we stand for, and how we help businesses grow digitally.
          </motion.p>
        </div>
      </section>

      {/* 3D Info Cards */}
      <section className="py-20 bg-black text-center text-white">
        <h2 className="text-3xl font-bold mb-12 text-red-500">Who We Are</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Users className="w-12 h-12 text-red-500 mb-4" />,
              title: "Creative Team",
              text: "A passionate group of designers, developers, and marketers bringing your vision to life with innovation and precision.",
            },
            {
              icon: <Target className="w-12 h-12 text-red-500 mb-4" />,
              title: "Our Mission",
              text: "To empower businesses with powerful digital solutions that drive visibility, engagement, and growth.",
            },
            {
              icon: <Lightbulb className="w-12 h-12 text-red-500 mb-4" />,
              title: "Our Vision",
              text: "Building a world where every brand—big or small—shines through strong digital presence and smart strategies.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-2xl shadow-lg border border-zinc-800 cursor-pointer"
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              {card.icon}
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-zinc-950 text-center">
        <motion.img
          src="/images/about-us.jpg"
          alt="About Rama Kalpa Solutions"
          className="rounded-2xl shadow-2xl mx-auto w-full md:w-3/4 lg:w-1/2 object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 150 }}
        />
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black via-red-700 to-black text-center text-white">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Grow with ramakalpasolutions?
        </motion.h3>
        <p className="text-gray-300 mb-8">
          Let’s turn your ideas into impactful digital experiences.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </Layout>
  );
}
