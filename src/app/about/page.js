import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Discover who we are, what we stand for, and how we help businesses grow digitally.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-gray-800">
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            🏢 About Digi World
          </h3>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At <span className="font-semibold text-secondary">Digi World</span>, we blend creativity, technology, and strategy to help brands grow in the digital world.
            We’re a passionate team of designers, developers, and marketing professionals who believe that every business — no matter how small — deserves a strong and smart digital presence.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            From crafting stunning websites to building high-performance apps and running data-driven marketing campaigns,
            we deliver solutions that create measurable results.
            Our focus is simple — make your brand <span className="font-semibold text-secondary">visible</span>,
            <span className="font-semibold text-primary"> valuable</span>, and
            <span className="font-semibold text-secondary"> unforgettable</span>.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium italic">
            💡 We don’t just build projects; we build long-term partnerships.
          </p>
        </div>

        {/* Optional Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="/images/about-us.jpg"
            alt="About Digi World"
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 h-auto object-cover"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16 text-center px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Grow with Digi World?
        </h3>
        <p className="mb-6 text-base sm:text-lg">
          Let’s turn your ideas into impactful digital experiences.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </Layout>
  );
}
