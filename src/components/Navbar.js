import React, { useEffect, useState } from 'react';
import './Navbar.css';
import navLogo from '../assets/logonav.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = `#${section.id}`;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="nav-left">
          <img src={navLogo} alt="Nav Logo" className="nav-image" />
          <div className="logo">HGOMEZDO</div>
        </div>

        <ul>
          <li><a href="#home" className={active === '#home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={active === '#about' ? 'active' : ''}>About</a></li>
          <li><a href="#experience" className={active === '#experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#projects" className={active === '#projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#photography" className={active === '#photography' ? 'active' : ''}>Photography</a></li>
          <li><a href="#contact" className={active === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
