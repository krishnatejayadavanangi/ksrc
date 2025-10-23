import Layout from "../../components/Layout";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">⚙️ Our Services</h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          We provide complete digital solutions to elevate your brand and grow your business online.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-20">
        {/* Digital Marketing */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">🚀 Digital Marketing</h3>
            <p className="text-gray-700 leading-relaxed">
              We help your business grow faster with powerful digital strategies.
              Our experts plan and execute campaigns that reach the right audience, boost engagement, and drive conversions.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary mb-2">Our Marketing Services include:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Social Media Management (Instagram, Facebook, LinkedIn, etc.)</li>
                <li>Performance Marketing (Google & Meta Ads)</li>
                <li>SEO & Website Optimization</li>
                <li>Branding & Content Strategy</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/digital-marketing.jpg"
              alt="Digital Marketing"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Web Development */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">💻 Web Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Your website is your digital identity — we make sure it looks great, loads fast, and converts visitors into customers.
              Our web development team specializes in creating modern, mobile-friendly, and SEO-optimized websites that perform beautifully.
            </p>

            <div className="bg-gray-50 border-l-4 border-secondary p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary mb-2">What We Offer:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Custom Website Design (Corporate, E-commerce, Portfolio, Landing Pages)</li>
                <li>WordPress / React / Next.js Development</li>
                <li>Website Maintenance & Hosting Support</li>
                <li>UI/UX Optimization & Speed Enhancement</li>
              </ul>
            </div>

            <p className="text-gray-600 italic mt-4">
              🌐 Clean code. Smooth experience. Powerful performance.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/web-development.jpg"
              alt="Web Development"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* App Development */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">📱 App Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Transform your idea into a powerful, user-friendly mobile application.
              We design and build Android and iOS apps that deliver great experiences and real results.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary mb-2">App Development Services:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Native & Cross-Platform App Development</li>
                <li>UI/UX Design & Prototyping</li>
                <li>API Integration & Cloud Connectivity</li>
                <li>Maintenance, Updates & Bug Fixing</li>
              </ul>
            </div>

            <p className="text-gray-600 italic mt-4">
              📲 From concept to launch — we handle it all.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/app-development.jpg"
              alt="App Development"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16 text-center px-4 sm:px-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Elevate Your Digital Presence?
        </h3>
        <p className="mb-6 text-base sm:text-lg">
          Let’s discuss your project and turn your vision into reality.
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
