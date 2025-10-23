"use client";
import Link from "next/link";
import CustomCursor from "./CustomCursor";

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary cursor-pointer">Digi World</h1>
          </Link>
          <nav className="space-x-6 font-medium">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <Link href="/about" className="hover:text-secondary">About</Link>
            <Link href="/services" className="hover:text-secondary">Services</Link>
            <Link href="/contact" className="hover:text-secondary">Contact</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Digi World</h3>
            <p>123 Digital Street</p>
            <p>City, State, Country</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@digiworld.com</p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/digiworld"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.026-3.065-1.867-3.065-1.868 0-2.155 1.46-2.155 2.971v5.698h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.555 2.839-1.555 3.036 0 3.6 2 3.6 4.59v5.598z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/digiworld"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Facebook
                </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.008 3.657 9.163 8.438 9.879v-6.99h-2.54v-2.889h2.54v-2.203c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.889h-2.33v6.99c4.781-.716 8.438-4.871 8.438-9.879z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digiworld"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.243 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.243 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.243-1.314-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.243-1.252 3.608-1.314 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.281.059-2.158.27-2.918.57a5.923 5.923 0 0 0-2.15 1.415A5.923 5.923 0 0 0 .572 5.697c-.3.76-.511 1.637-.57 2.918-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.281.27 2.158.57 2.918a5.923 5.923 0 0 0 1.415 2.15 5.923 5.923 0 0 0 2.15 1.415c.76.3 1.637.511 2.918.57 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.158-.27 2.918-.57a5.923 5.923 0 0 0 2.15-1.415 5.923 5.923 0 0 0 1.415-2.15c.3-.76.511-1.637.57-2.918.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.281-.27-2.158-.57-2.918a5.923 5.923 0 0 0-1.415-2.15 5.923 5.923 0 0 0-2.15-1.415c-.76-.3-1.637-.511-2.918-.57-1.28-.059-1.688-.072-4.947-.072z"/>
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-64 md:h-48 rounded-lg overflow-hidden shadow-lg relative group cursor-pointer">
            <a
              href="https://www.google.com/maps/place/123+Digital+Street,+City,+State,+Country"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
            ></a>
            <iframe
              title="Digi World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019705007112!2d-122.41941568468152!3d37.77492927975862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c85c1e6b5%3A0x3c8b9d52d3627f26!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sin!4v1698100000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0 transform transition-transform duration-300 group-hover:scale-105"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <p className="text-center mt-6 text-gray-400">&copy; {new Date().getFullYear()} Digi World. All rights reserved.</p>
      </footer>
    </>
  );
}
