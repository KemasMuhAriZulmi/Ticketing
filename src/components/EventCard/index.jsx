// src/components/EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ id, title, date, imageUrl }) => {
  return (
    <Link
      to={`/events/${id}`}
      className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{date}</p>
    </Link>
  );
};

export default EventCard;
