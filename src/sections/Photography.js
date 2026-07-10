import React, { useEffect, useRef } from 'react';
import '../styles/Photography.css';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

import photo_silhouette from '../assets/photo_silhouette.jpg';
import photo_cathedral from '../assets/photo_cathedral.jpg';
import photo_bball1 from '../assets/photo_bball1.jpg';
import photo_bball2 from '../assets/photo_bball2.jpg';
import photo_dunk from '../assets/photo_dunk.jpg';
import photo_merc from '../assets/photo_merc.jpg';
import photo_plaza from '../assets/photo_plaza.jpg';
import photo_shooter from '../assets/photo_shooter.jpg';
import photo_sign from '../assets/photo_sign.jpg';
import photo_bmw from '../assets/photo_bmw.jpg';
import photo_cliff from '../assets/photo_cliff.jpg';
import photo_coast1 from '../assets/photo_coast1.jpg';
import photo_lighthouse from '../assets/photo_lighthouse.jpg';
import photo_coast2 from '../assets/photo_coast2.jpg';
import photo_sunburst from '../assets/photo_sunburst.jpg';

const photos = [
  photo_silhouette,
  photo_cathedral,
  photo_dunk,
  photo_coast1,
  photo_merc,
  photo_bball2,
  photo_cliff,
  photo_lighthouse,
  photo_shooter,
  photo_plaza,
  photo_coast2,
  photo_bball1,
  photo_sign,
  photo_bmw,
  photo_sunburst,
];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('active');
          else entry.target.classList.remove('active');
        });
      },
      { threshold: 0.15 }
    );

    photoRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

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
        <h2 className="section-title neon red">Through My Lens</h2>
        <p className="photo-intro-spanish">
          La vida es un regalo, disfrútala sin miedo.
        </p>

        {/* SOCIALS */}
        <div className="photo-socials">
          <a
            href="https://www.instagram.com/shotbymeganuso"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn red"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.youtube.com/@shotbymeganuso"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn red"
          >
            <FaYoutube /> YouTube
          </a>
          <a
            href="https://www.tiktok.com/@shotbymeganuso"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn red"
          >
            <FaTiktok /> TikTok
          </a>
        </div>
      </div>

      {/* GEAR SECTION */}
      <div className="gear-section red-accent">
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

      {/* WAVY LINE + MASONRY GALLERY */}
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
            stroke="url(#redGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff3333" />
              <stop offset="100%" stopColor="#cc1100" />
            </linearGradient>
          </defs>
        </svg>

        <div className="masonry-gallery">
          {photos.map((src, i) => (
            <div className="masonry-item" key={i}>
              <img
                ref={el => (photoRefs.current[i] = el)}
                src={src}
                alt={`photo-${i}`}
                className="masonry-photo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;