// harry-portfolio/src/sections/Home.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';
import logo from '../assets/pfp.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img src={logo} alt="Harry Logo" className="home-logo" />

      <h1 className="home-title">Hey, I’m Harry 👋</h1>

      <p className="home-subtitle">
        Electrical & Computer Engineering @ Oregon State University | HSF Scholar
      </p>
      <p className="home-description">
        Engineering student passionate about automation, energy systems, and building technology that makes an impact.
      </p>

      <div className="cta-buttons">
        {/* Updated Resume Link for all environments */}
        <a
          href={`${process.env.PUBLIC_URL}/assets/resume_web.pdf`}
          className="btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

        <a href="#projects" className="btn secondary">
          See Projects
        </a>
      </div>

      <div className="socials">
        <a href="https://github.com/xaviik4" target="_blank" rel="noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/hgomezdo/" target="_blank" rel="noreferrer">
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
};

export default Home;
