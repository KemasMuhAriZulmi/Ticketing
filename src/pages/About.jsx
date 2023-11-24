import React from "react";
// import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      {/* <img src={aboutImage} alt="About Us" className="mb-4 rounded-md shadow-md" /> */}
      <p>
        Welcome to TiketEvent, your go-to platform for discovering and booking
        the best events in your city. We strive to provide a seamless and
        enjoyable experience for event-goers and organizers alike.
      </p>
    </div>
  );
};

export default About;
