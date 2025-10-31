"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* 🧭 Header */}
      <header className="bg-gradient-to-r from-black via-zinc-900 to-black text-white sticky top-0 z-50 shadow-lg border-b border-zinc-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={handleNavClick}>
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent cursor-pointer tracking-wide">
              Digi World
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="relative group"
              >
                <span className="text-gray-300 hover:text-white transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-200 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 shadow-lg flex flex-col text-center space-y-4 py-5 font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="text-gray-300 hover:text-red-400 transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* 🌍 Page Content */}
      <main>{children}</main>

      {/* 🌑 Footer */}
      <footer className="bg-gradient-to-b from-black via-zinc-900 to-black text-gray-300 py-16 mt-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500">Digi World</h3>
            <p className="text-gray-400">123 Digital Street, City, State</p>
            <p className="text-gray-400">📞 +91 98765 43210</p>
            <p className="text-gray-400">✉️ info@digiworld.com</p>

            {/* Social Media */}
            <div className="flex space-x-6 mt-6">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/digiworld", icon: "mdi:linkedin" },
                { name: "Facebook", url: "https://www.facebook.com/digiworld", icon: "mdi:facebook" },
                { name: "Instagram", url: "https://www.instagram.com/digiworld", icon: "mdi:instagram" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition"
                  aria-label={social.name}
                >
                  <i className={`iconify text-2xl`} data-icon={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Digi World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019705007112!2d-122.41941568468152!3d37.77492927975862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c85c1e6b5%3A0x3c8b9d52d3627f26!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sin!4v1698100000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0 grayscale-[40%] hover:grayscale-0 transition-all duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-red-400 font-semibold">Digi World</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
}
