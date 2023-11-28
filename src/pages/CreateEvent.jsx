
import React from 'react';
import AddEventForm from '../components/AddEventForm';

const CreateEvent = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <AddEventForm />
    </div>
  );
};

export default CreateEvent;
