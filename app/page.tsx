// app/page.tsx

'use client'
import AvailabilityCalendar from './components/AvailabilityCalendar'
import EventList from './components/EventList'
import ContactInfoBar from './components/ContactInfoBar'
import FooterNote from './components/FooterNote'
import ProfileCard from './components/ProfileCard'
import SkillsCloud from './components/SkillsCloud'
import TestimonialBox from './components/TestimonialBox'
import BookNowModal from './components/BookNowModal'

export default function Page() {
  return (
   <main className="min-h-screen flex flex-col md:flex-row bg-[#f7f7f7] font-sans">
      {/* LEFT PANEL */}
      <div className="w-full md:w-[330px] bg-[#062a5c] text-white flex flex-col items-center py-10 px-6">
        <ProfileCard />
        <ContactInfoBar />
        <BookNowModal />
      </div>

      {/* RIGHT PANEL */}

      <div className="flex-1 p-6 md:p-10 text-[#062a5c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Personal Profile</h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            A Virtual Assistant with advanced GoHighLevel skills, automation setup, CRM management,
            and a strong problem-solving mindset. Tech-savvy, reliable, and results-driven — I help
            businesses streamline their workflow, follow up faster, and convert better.
          </p>



          <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">Work Experience</h2>
          <ul data-aos="fade-up" className="list-disc pl-6 space-y-2">
            <li>✅ GHL Automation for Fitness Gym & Local Businesses</li>
            <li>✅ Trigger Links, Pipelines, Forms, and Email Sequences</li>
            <li>✅ Landing Page and PWA Setup using Next.js</li>
            <li>✅ Technical VA for POS, Attendance, and Inventory systems</li>
            <li>✅ File syncing, server automation, and batch scripting</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold mt-8 mb-2">Education</h3>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
            <li>🎓 Bachelor’s Degree in Computer Science</li>
            <li>🧑 Specialized in Systems Development and Data Analysis</li>
            <li>🧠 Self-taught in GoHighLevel, React, SQL, and Automation</li>
          </ul>

                 {/* 👇 Reusable Components */}
           <div data-aos="zoom-in" className="my-6">
            <SkillsCloud />
          </div>

          <div data-aos="fade-up" className="mt-10">
            <TestimonialBox />
          </div>

          <AvailabilityCalendar />
          <EventList />
          <FooterNote />
        </div>
        
      </div>
    </main>
  )
}
