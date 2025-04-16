import React from 'react';
import './Navbar.css';
import navLogo from '../assets/logonav.jpg'; // replace with your actual image file name

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <img src={navLogo} alt="Nav Logo" className="nav-image" />
          <div className="logo">HGOMEZDO</div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#photography">Photography</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
