import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; 2023 TiketEvent. All rights reserved.
        </p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 hover:text-gray-300">
            Terms of Service
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="mx-2 hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
