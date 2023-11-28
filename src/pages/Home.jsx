// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import EventCard from '../Components/EventCard';
import ToastNotification from '../components/ToastNotification';
// import '../styles.css';

const Home = ({ title }) => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/events')
      .then(response => {
        setEvents(response.data);
        const today = new Date();
        const upcoming = response.data.filter(event => new Date(event.date) > today);
        setUpcomingEvents(upcoming);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          <div className="slideshow-container relative overflow-hidden">
            {upcomingEvents.map(event => (
              <div key={event.id} className="mySlides">
                <img src={event.image} alt={event.title} className="w-full" />
                <div className="text">{event.title}</div>
                <p className="text-sm">{event.description}</p>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-4">{title}</h1>

          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 mb-4 w-full md:w-1/2 lg:w-1/3" 
          />

          {showToast && <ToastNotification message={toastMessage} onClose={() => setShowToast(false)} />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentEvents.map(({ id, title, date, location, image }) => (
              <EventCard
                key={id}
                event={{ id, title, date, location, image }}
                onPurchase={() => showToastNotification(`You purchased a ticket for ${title}`)}
              />
            ))}
          </div>

          <div className="category-menu mt-8">
            <h2 className="text-xl font-bold mb-2">Discover Events by Category</h2>
            <ul className="list-none p-0 m-0 flex space-x-4">
              <li><a href="/category/music" className="text-blue-500">Music</a></li>
              <li><a href="/category/sports" className="text-blue-500">Sports</a></li>
              <li><a href="/category/arts" className="text-blue-500">Arts</a></li>
            </ul>
          </div>

          <div className="purchase-guide mt-8">
            <h2 className="text-xl font-bold mb-2">How to Purchase Tickets</h2>
            <ul className="list-disc pl-4">
              <li>Explore events and find the one you want to attend.</li>
              <li>Click on the event to view details.</li>
              <li>Click the "Purchase Tickets" button.</li>
              <li>Follow the steps to complete your purchase.</li>
            </ul>
          </div>

          <div className="slogan-banner mt-8 bg-gray-100 p-4 text-center">
            <h2 className="text-2xl font-bold">Experience the Best Events with Us!</h2>
            <p className="text-gray-600">Join us to discover and attend amazing events in your area.</p>
          </div>

          <div className="flex justify-center mt-4">
            {[...Array(Math.ceil(filteredEvents.length / eventsPerPage)).keys()].map(number => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`mx-1 bg-blue-500 text-white p-2 ${currentPage === number + 1 ? 'font-bold' : ''}`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
