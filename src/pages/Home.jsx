// Import statements...
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import EventCard from '../Components/EventCard';
import ToastNotification from '../components/ToastNotification';

const Home = ({ title }) => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4500/events')
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

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

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
          <div className="slideshow-container relative overflow-hidden mb-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="mySlides">
                <img src={event.image} alt={event.title} className="w-full" />
                <div className="text text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
                  <p className="text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-4">{title}</h1>

          {showToast && <ToastNotification message={toastMessage} onClose={() => setShowToast(false)} />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentEvents.map(({ id, title, date, location, image }) => (
              <div key={id} className="event-card bg-white p-4 rounded-lg shadow-md">
                <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{date} - {location}</p>
                <button
                  className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={() => showToastNotification(`You purchased a ticket for ${title}`)}
                >
                  Purchase Tickets
                </button>
              </div>
            ))}
          </div>

          <div className="category-menu mt-8">
            <h2 className="text-xl font-bold mb-2">Discover Events by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CategoryCard title="Music" link="/category/music" />
              <CategoryCard title="Sports" link="/category/sports" />
              <CategoryCard title="Arts" link="/category/arts" />
            </div>
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
            {[...Array(Math.ceil(events.length / eventsPerPage)).keys()].map(number => (
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

const CategoryCard = ({ title, link }) => (
  <div className="category-card bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <a href={link} className="text-blue-500">Explore Events</a>
  </div>
);

export default Home;