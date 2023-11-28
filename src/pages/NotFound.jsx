// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for might be in another universe.</p>
      <Link to="/" className="bg-blue-500 text-white p-2 inline-block">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
