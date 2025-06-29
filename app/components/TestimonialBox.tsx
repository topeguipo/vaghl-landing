// app/components/TestimonialBox.tsx

export default function TestimonialBox() {
  const testimonials = [
    {
      name: 'Anna L.',
      position: 'Fitness Coach',
      text: 'Tope set up our GHL funnels and automation in 3 days! Very reliable.',
    },
    {
      name: 'Jay R.',
      position: 'Clinic Owner',
      text: 'Tech-savvy and fast, helped us with POS and appointment flows.',
    },
  ]

  return (
    <div className="mt-10">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Testimonials</h3>
      <div className="space-y-4">
        {testimonials.map((t, i) => (
          <div key={i} className="border-l-4 border-[#fcd535] pl-4 italic">
            <p>“{t.text}”</p>
            <p className="text-sm font-semibold mt-1 text-gray-600">
              — {t.name}, {t.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
