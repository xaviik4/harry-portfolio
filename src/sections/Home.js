// harry-portfolio/src/sections/Home.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';
import logo from '../assets/pfp.jpg'; // or headshot

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img src={logo} alt="Harry Logo" className="home-logo" />

      <h1>Hey, I'm Harry</h1>

      <p>Electrical and Computer Engineering @ Oregon State University | HSF Scholar</p>
      <p>Engineering student passionate about automation, energy, and impactful systems.</p>

      <div className="cta-buttons">
        <a href="/resume.pdf" className="btn">View Resume</a>
        <a href="#projects" className="btn secondary">See Projects</a>
      </div>

      <div className="socials">
        <a href="https://github.com/xaviik4" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/hgomezdo/" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
      </div>
    </section>
  );
};

export default Home;
