// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>
        Welcome to Ticketing System! We are your go-to platform for discovering and purchasing tickets
        for a wide variety of events. Whether you're into concerts, sports, or cultural experiences,
        we've got you covered.
      </p>
      <p>
        Our mission is to connect people with the events they love and provide a seamless ticketing experience.
        Feel free to explore our website, find exciting events, and secure your tickets hassle-free.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">Our Team</h2>
      <ul>
        <li>Kemas Muh Ari ZUlmy</li>
        <li>Gibran Raka Buming Raka</li>
        {/* Add more team members as needed */}
      </ul>
    </div>
  );
};

export default About;
