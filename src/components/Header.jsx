import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, BarChart, LogIn } from "react-feather";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="bg-gradient-to-l from-emerald-100 via-neutral-400 to-slate-100">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <Home className="mr-2" />
          Ticket App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>{" "}
            {/* Add dashboard link */}
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-white-300 bg-transparent focus:ring-white-500 focus:border-gray-500 dark:bg-transparent-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
