"use client";
import { motion } from "framer-motion";

export default function ClientsSection() {
  const clients = [
    { name: "Kalakruthi", logo: "/images/clients/KalakruthiLogo.jpg" },
    { name: "UrbanEdge", logo: "/images/clients/urbanedge.png" },
    { name: "SkyLink", logo: "/images/clients/skylink.png" },
    
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-red-500 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Valued Clients
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We’ve collaborated with innovative brands and forward-thinking companies to build
          impactful digital experiences.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 w-40 h-40 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain w-full h-full opacity-80 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
