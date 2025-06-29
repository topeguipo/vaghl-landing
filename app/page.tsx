export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Virtual Assistant for GHL + Automation + Tech Stack
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          I help businesses automate workflows, manage campaigns, and build high-converting systems — all using GoHighLevel and modern tools.
        </p>
        <a
          href="#book"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
        >
          Book a Free Discovery Call
        </a>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600">
          I’m a tech-savvy Virtual Assistant with advanced experience in GoHighLevel, CRM automation, marketing workflows, landing page management, and client support. I help solopreneurs and agencies scale efficiently.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What I Can Do for You</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">GHL Setup & Automation</h3>
            <p>Workflows, triggers, pipeline automation, form & calendar setup.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Funnels & Landing Pages</h3>
            <p>Build and manage sales funnels, opt-ins, and booking pages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">CRM & Campaigns</h3>
            <p>Email & SMS marketing, contact management, lead segmentation.</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tools I Work With</h2>
        <p className="text-gray-700 text-lg mb-4">GoHighLevel, Calendly, Zapier, Google Workspace, Notion, Canva, Vercel, Tailwind CSS, React/Next.js, and more.</p>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Book a free call so we can discuss your business goals and how I can support your growth.
        </p>
        <a
          href="https://your-ghl-booking-link" // Replace this
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Schedule a Discovery Call
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} iCEG Systems Inc. All rights reserved.
        <div className="text-xs text-gray-400 mt-1">
          Updated on {new Date().toLocaleDateString()} @ {new Date().toLocaleTimeString()}
        </div>
      </footer>
    </div>
  );
}
