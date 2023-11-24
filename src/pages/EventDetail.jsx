import React from 'react';

const EventDetail = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto">
      <div className="banner bg-gray-200 p-4">
        {/* Banner content */}
        {/* harusnya nanti di map kalau mau di pake */}
        <h1 className="text-2xl font-bold">Event Title</h1>
        <p className="text-gray-600">Event description goes here</p>
      </div>
      <button className="back-button absolute top-4 right-4" onClick={handleBack}>
        Back
      </button>
      <div className="event-description mt-4">
        {/* Event description content */}
        {/* ini di map juga nanti */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc vitae aliquet tincidunt, nisl nunc tincidunt urna, vel tincidunt nisl nisl eu nunc.</p>
      </div>
      <div className="ticket-types mt-4">
        <h3 className="text-lg font-bold">Ticket Types:</h3>
        {/* Render ticket types */}\
        {/* ticketnya sidah di tentukan kayaknya */}
        <ul>
          <li>General Admission</li>
          <li>VIP</li>
          <li>Student</li>
        </ul>
      </div>
      <div className="available-tickets mt-4">
        <h3 className="text-lg font-bold">Available Tickets:</h3>
        {/* Render available tickets */}
        {/* ini jumlah ticket yang tersedia */}
        <ul>
          <li>General Admission - 100 tickets</li>
          <li>VIP - 50 tickets</li>
          <li>Student - 75 tickets</li>
        </ul>
      </div>
    </div>
  );
};

export default EventDetail;
