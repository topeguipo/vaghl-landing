 

import React from 'react';

const EventList = () => {
  return (
    <section className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-2">🎯 Upcoming Events</h2>
      <ul className="list-disc ml-6 text-gray-700 text-base">
        <li>✔ Client call – July 1, 10:00 AM</li>
        <li>✔ Email campaign launch – July 2</li>
        <li>✔ Portfolio review – July 3</li>
      </ul>
    </section>
  );
};

export default EventList;
