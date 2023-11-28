import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, onPurchase }) => {
  const handlePurchase = () => {
    // Perform purchase logic here
    onPurchase();
  };

  return (
    <div className="border p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <Link to={`/events/${event.id}`}>
        <img src={event.image} alt={event.title} className="mb-2 w-full h-40 object-cover" />
        <h2 className="text-lg font-bold">{event.title}</h2>
        <p className="text-gray-500">{event.date}</p>
      </Link>
      <button onClick={handlePurchase} className="bg-blue-500 text-white p-2 mt-2 inline-block">
        Buy Ticket
      </button>
    </div>
  );
};

export default EventCard;
