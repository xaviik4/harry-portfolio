import React, { useEffect, useRef } from 'react';
import '../styles/Photography.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

import OSUgame from '../assets/OSUgame.jpg';
import carshoot from '../assets/carshoot.jpg';
import bbqpic from '../assets/bbqpic.jpg';
import culebra from '../assets/culebra.jpg';
import festival from '../assets/festival.jpg';

const photos = [OSUgame, carshoot, bbqpic, culebra, festival];

const gear = [
  {
    name: 'Canon R6 MK2',
    link: 'https://www.usa.canon.com/shop/p/eos-r6-mark-ii',
    desc: 'My main camera for both photo and video work.',
  },
  {
    name: 'Canon RF24-70mm F2.8 L is USM Lens',
    link: 'https://www.usa.canon.com/shop/p/rf24-70mm-f2-8l-is-usm',
    desc: 'Versatile lens that delivers sharp results.',
  },
  {
    name: 'K&F Concept 2 in 1 Sling Bag',
    link: 'https://www.kentfaith.com/reviews_17203?page=8&srsltid=AfmBOorijz8ROUPXKgGL97KAQLFMUZZyxQIRffD-0Hp6baKjTH9gBAJV',
    desc: 'Clean and functional bag that fits my daily gear.',
  },
];

const Photography = () => {
  const photoRefs = useRef([]);
  const wavyRef = useRef(null);

  // fade-in/zoom for photos
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const img = entry.target;
          if (entry.isIntersecting) img.classList.add('active');
          else img.classList.remove('active');
        });
      },
      { threshold: 0.3 }
    );

    photoRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  // snake-like scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const line = wavyRef.current;
      if (line) {
        const offset = Math.sin(scrollY * 0.005) * 20;
        line.style.transform = `translateX(calc(-50% + ${offset}px))`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="photography" className="photography-dynamic">
      {/* HEADER */}
      <div className="photo-header">
        <h2 className="section-title neon">Through My Lens</h2>
        <p className="photo-intro">
          Photography helps me slow down and see things differently.
          Each image captures a story — moments of movement, light, and reflection.
        </p>

        {/* SOCIALS */}
        <div className="photo-socials">
          <a
            href="https://www.instagram.com/shotbymeganuso"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.youtube.com/@shotbymeganuso"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaYoutube /> YouTube
          </a>
        </div>
      </div>

      {/* GEAR SECTION */}
      <div className="gear-section">
        <h3 className="gear-title">📸 My Gear</h3>
        <ul className="gear-list">
          {gear.map((item, idx) => (
            <li key={idx} className="gear-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* WAVY BACKGROUND LINE + GALLERY */}
      <div className="photo-line-background">
        <svg
          className="wavy-line"
          ref={wavyRef}
          viewBox="0 0 400 2000"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M200 0 Q180 100 200 200 T200 400 T200 600 T200 800 T200 1000 T200 1200 T200 1400 T200 1600 T200 1800"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00e0ff" />
              <stop offset="100%" stopColor="#8bbdd9" />
            </linearGradient>
          </defs>
        </svg>

        <div className="photo-focus-gallery">
          {photos.map((src, i) => (
            <div className="photo-wrapper" key={i}>
              <img
                ref={el => (photoRefs.current[i] = el)}
                src={src}
                alt={`photo-${i}`}
                className="photo-dynamic"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
