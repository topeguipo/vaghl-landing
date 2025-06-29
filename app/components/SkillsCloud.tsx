// app/components/SkillsCloud.tsx

export default function SkillsCloud() {
  const skills = [
    'Funnels', 'Triggers', 'Calendars', 'Workflows',
    'Email', 'SMS', 'Reputation', 'CRM',
    'Forms', 'Pipelines', 'Webhooks', 'Landing Page',
  ]

  return (
    <div className="mt-10">
      <h3 className="text-xl md:text-2xl font-bold mb-4">GHL Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#062a5c] text-white text-sm font-semibold p-3 rounded shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
