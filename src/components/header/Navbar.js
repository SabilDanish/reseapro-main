import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for navbar styles
import logoM from "../../utils/images/MainLogo.png";


const Navbar = () => {
  return (
    <nav className="Reseapro-Navbar">
      <div className="navbar-image"><img src={logoM} /></div>
      <ul className="nav-list">
        <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
        <li className="nav-item"><NavLink to="/blogs" className="nav-link" activeClassName="active">Blogs</NavLink></li>
        <li className="nav-item"><NavLink to="/careers" className="nav-link" activeClassName="active">Careers</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
      </ul>
      <div className="navbar-button">
      <button>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
