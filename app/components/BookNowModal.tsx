// app/components/BookNowModal.tsx

'use client'
import { useState } from 'react'

export default function BookNowModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 bg-[#fcd535] text-[#062a5c] font-bold py-3 px-8 rounded-xl text-lg shadow hover:opacity-90"
      >
        BOOK NOW
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            <h3 className="text-xl font-bold mb-4">Book a Call</h3>

       
            <iframe
              src="https://example.com" //Replace this! https://your-ghl-calendar-link.com
              className="w-full h-[500px] border-0 rounded"
              allow="fullscreen"
              title="GHL Booking"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}
