export default function PortfolioPage() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">📘 VA Portfolio – GoHighLevel Specialist</h1>

      <p className="mb-6 text-lg text-gray-700">
        I am a virtual assistant focused on helping businesses set up and automate their sales and marketing processes using GoHighLevel.
        From custom fields to Facebook CAPI, I can configure and support your CRM operations end-to-end.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-800">🚀 Core Skills</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Workflow Automation & Triggers</li>
        <li>Custom Fields and Values Setup</li>
        <li>Form, Survey & Funnel Design</li>
        <li>Facebook CAPI & Pixel Integration</li>
        <li>Calendar Booking Pages</li>
        <li>Email & SMS Drip Campaigns</li>
        <li>Webhook Integrations (with Next.js or third-party tools)</li>
        <li>Reputation Management (Review requests)</li>
        <li>Lead Capture → Pipeline → Booking</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-800">🔧 Tools I Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
        <div>📍 GoHighLevel</div>
        <div>🛠 Zapier / Make</div>
        <div>📨 Mailgun / SMTP</div>
        <div>🎯 Facebook Events Manager</div>
        <div>🔗 Calendly / Google Calendar</div>
        <div>🖼 Canva, Notion, Trello</div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-800">📌 Sample Projects</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Fitness Gym: 7-day email + SMS automation w/ pipeline tracking</li>
        <li>Real Estate: Facebook Lead Ad → CRM auto tagging & appointment booking</li>
        <li>Spa: Google Review SMS automation using triggers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2 text-gray-800">📬 Contact Me</h2>
      <p className="text-gray-700 mb-4">
        Want to work with a VA who understands CRM automation deeply? Book a free consult:
      </p>

      <a
        href="https://calendly.com/yourlink"
        target="_blank"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        📅 Book a Free Consultation
      </a>

      <footer className="text-xs text-center py-8 text-gray-400 mt-16">
        Updated on {new Date().toLocaleDateString()} @ {new Date().toLocaleTimeString()}
      </footer>
    </div>
  );
}
