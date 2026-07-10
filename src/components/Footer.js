import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href="https://github.com/xaviik4" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hgomezdo/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/shotbymeganuso" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@shotbymeganuso" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </div>
      <p className="footer-text">
        Harry Gomez-Donato &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;