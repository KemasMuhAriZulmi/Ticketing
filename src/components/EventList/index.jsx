
// import React from "react";
// import { Link } from "react-router-dom";

// const EventList = () => {
//   // Assuming events is an array of event objects
//   const events = [
//     { id: 1, title: "Music Concert", date: "Nov 25, 2023" },
//     { id: 2, title: "Sports Championship", date: "Dec 10, 2023" },
//     // Add more events as needed
//   ];

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {events.map((event) => (
//           <Link
//             key={event.id}
//             to={`/events/${event.id}`}
//             className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
//           >
//             <h3 className="text-lg font-bold mb-2">{event.title}</h3>
//             <p className="text-gray-500">{event.date}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventList;


import React from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  const events = [
    { id: 1, title: "Music Concert", date: "Nov 25, 2023", imageUrl: "/music.jpg" },
    { id: 2, title: "Sports Championship", date: "Dec 10, 2023", imageUrl: "/sports.jpg" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
            <p className="text-gray-500">{event.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;
