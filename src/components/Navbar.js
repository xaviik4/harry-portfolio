// harry-portfolio/src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Harry</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#photography">Photos</a>
      <a href="#content">Content</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;