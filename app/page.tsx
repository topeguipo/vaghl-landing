export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Grow Your Business with GoHighLevel</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          All-in-one CRM & Marketing Automation for Agencies, Freelancers, and SMEs.
        </p>
        <a
          href="#get-started"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
        >
          Get Started Now
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="font-semibold text-xl mb-2">Funnels & Websites</h3>
            <p>Create high-converting landing pages, sales funnels, and websites with ease.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="font-semibold text-xl mb-2">Email & SMS Marketing</h3>
            <p>Automated drip campaigns, triggers, and follow-ups that convert.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md">
            <h3 className="font-semibold text-xl mb-2">CRM & Pipelines</h3>
            <p>Track leads, manage clients, and close deals with your own sales pipeline.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Let us help you launch your GoHighLevel system — set up automations, pipelines, and more!
        </p>
        <a
          href="https://calendly.com/yourlink" // replace with your actual link
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Book a Free Demo
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Business Name. All rights reserved.
      </footer>
    </div>
  );
}
