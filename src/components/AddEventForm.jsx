import React, { useState } from 'react';
import axios from '../axios';

const AddEventForm = ({ onEventAdded }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!eventName || !eventDate || !eventDescription) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      // Send a POST request to add a new event
      const response = await axios.post('/events', {
        name: eventName,
        date: eventDate,
        description: eventDescription,
      });

      // Notify the parent component that a new event has been added
      onEventAdded(response.data);

      // Clear the form and error
      setEventName('');
      setEventDate('');
      setEventDescription('');
      setError('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while adding the event.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="eventName" className="block text-gray-600">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventDate" className="block text-gray-600">Event Date</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventDescription" className="block text-gray-600">Event Description</label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="border p-2 w-full"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Event
      </button>
    </form>
  );
};

export default AddEventForm;