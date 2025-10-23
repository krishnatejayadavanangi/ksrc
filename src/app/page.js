import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Grow Your Business Online with Digi World
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Modern digital marketing, web, and app solutions for your brand.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">Our Services</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-primary">Digital Marketing</h3>
            <p className="text-gray-700">SEO, social media, paid ads, and growth strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-primary">Web Development</h3>
            <p className="text-gray-700">Professional websites optimized for speed, SEO, and UX.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-primary">App Development</h3>
            <p className="text-gray-700">High-performance Android & iOS apps with smooth UX.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
