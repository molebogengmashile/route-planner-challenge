import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

// Navbar component for navigation
const Navbar = () => {
    //basic navigation
  return (
    <nav>
      <ul>
    
        <li>
          <Link to="/">Available Routes </Link>
        </li>

           <li>
          <Link to="/purchase">Ticket Purchase</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;