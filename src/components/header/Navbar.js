import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
        <li className="nav-item"><NavLink to="/blogs" className="nav-link" activeClassName="active">Blogs</NavLink></li>
        <li className="nav-item"><NavLink to="/careers" className="nav-link" activeClassName="active">Careers</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
