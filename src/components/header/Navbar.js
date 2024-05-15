import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for navbar styles
import logoM from "../../utils/images/MainLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="Reseapro-Navbar">
      <div className="navbar-image"><img src={logoM} alt="Logo" /></div>
      <ul className="nav-list">
        <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
        <li className="nav-item">
        <span className="nav-link" onClick={toggleDropdown}>
            Services <FontAwesomeIcon icon={faAngleDown} />
          </span>
          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="dropdown-content">
              <NavLink to="/service1" className="dropdown-link" activeClassName="active">Service 1</NavLink>
              <NavLink to="/service2" className="dropdown-link" activeClassName="active">Service 2</NavLink>
              {/* Add more services as needed */}
            </div>
          )}
        </li>
        <li className="nav-item"><NavLink to="/blogs" className="nav-link" activeClassName="active">Blogs</NavLink></li>
        <li className="nav-item"><NavLink to="/careers" className="nav-link" activeClassName="active">Careers</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink></li>
      </ul>
      <div className="navbar-button">
        <button>Contact Us</button>
      </div>
      <div className="navbar-Ham" id='mobHam' onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{fontSize:"25px"}} />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-list">
          <li><NavLink exact to="/" onClick={toggleSidebar}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleSidebar}>About</NavLink></li>
          <li className="nav-item nav-item1">
        <span className="nav-link1" onClick={toggleDropdown}>
            Services <FontAwesomeIcon icon={faAngleDown} />
          </span>
          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="dropdown-content1">
              <NavLink to="/service1" className="dropdown-link" activeClassName="active">Service 1</NavLink>
              <NavLink to="/service2" className="dropdown-link" activeClassName="active">Service 2</NavLink>
              {/* Add more services as needed */}
            </div>
          )}
        </li>
          <li><NavLink to="/blogs" onClick={toggleSidebar}>Blogs</NavLink></li>
          <li><NavLink to="/careers" onClick={toggleSidebar}>Careers</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
