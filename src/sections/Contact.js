// harry-portfolio/src/sections/Contact.js
import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title neon">Get in Touch</h2>
      <p className="contact-intro">
        Whether it's about engineering, photography, or just want to connect — I'd love to hear from you.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>Professional</h3>
          <p>For work opportunities, engineering inquiries, or networking.</p>
          <a
            href="https://www.linkedin.com/in/hgomezdo/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Photography</h3>
          <p>For photo/video work, creative projects, or collaborations.</p>
          <a
            href="mailto:shotbymeganuso@gmail.com"
            className="contact-btn"
          >
            shotbymeganuso@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;