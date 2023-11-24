import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to us at
        <a href="mailto:info@tiketevent.com" className="text-blue-500">
          {" "}
          info@tiketevent.com
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
