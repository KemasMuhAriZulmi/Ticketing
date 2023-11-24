// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TiketEvent
        </Link>
        <div className="flex space-x-4">
          <NavLink to="/" label="Home" currentPath={location.pathname} />
          <NavLink to="/about" label="About" currentPath={location.pathname} />
          <NavLink to="/contact" label="Contact" currentPath={location.pathname} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link to={to} className={`hover:text-gray-300 ${isActive ? "text-gray-300" : ""}`}>
      {label}
    </Link>
  );
};

export default Navbar;