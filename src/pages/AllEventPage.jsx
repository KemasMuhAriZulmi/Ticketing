// // src/pages/AllEventsPage.jsx
// import React, { useState, useEffect } from 'react';
// import axios from '../axios';
// import EventCard from '../components/EventCard';
// import Loader from '../components/Loader';
// import { Link } from 'react-router-dom';

// const AllEventsPage = () => {
//   const [allEvents, setAllEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 6;

//   useEffect(() => {
//     // Fetch all events from the backend
//     axios.get('/events/all')
//       .then(response => {
//         setAllEvents(response.data);
//       })
//       .catch(error => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   // Logic for pagination
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = allEvents
//     .filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .slice(indexOfFirstEvent, indexOfLastEvent);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">All Events</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by event name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {currentEvents.map(event => (
//           <EventCard key={event.id} event={event} className="EventCard" />
//         ))}
//       </div>
//       <div className="mt-4">
//         {Array.from({ length: Math.ceil(currentEvents.length / eventsPerPage) }, (_, index) => (
//           <button key={index + 1} onClick={() => paginate(index + 1)} className="pagination-button">
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <Link to="/" className="back-to-home-button mt-4">
//         Back to Home
//       </Link>
//     </div>
//   );
// };

// export default AllEventsPage;
