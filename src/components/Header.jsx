import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, BarChart, LogIn } from 'react-feather';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <Home className="mr-2" />
          Ticket App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/"><Home /> Home</Link></li>
            <li><Link to="/about"><Info /> About</Link></li>
            <li><Link to="/dashboard"><BarChart /> Dashboard</Link></li> {/* Add dashboard link */}
            <li><Link to="/login"><LogIn /> Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
