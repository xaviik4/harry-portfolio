// src/sections/Photography.js
import React from 'react';
import '../styles/Photography.css';

import OSUgame from '../assets/OSUgame.jpg';
import carshoot from '../assets/carshoot.jpg';
import bbqpic from '../assets/bbqpic.jpg';
import culebra from '../assets/culebra.jpg';
import festival from '../assets/festival.jpg';

const photos = [OSUgame, carshoot, bbqpic, culebra, festival];

const Photography = () => {
  return (
    <section id="photography" className="photography-section">
      <h2 className="section-title neon">Through My Lens</h2>
      <p className="photo-intro">
        Photography helps me slow down and see things differently. Whether it’s capturing movement, mood, or a memory,
        I’m always chasing light, stories, and new perspectives.
      </p>

      <div className="infinite-scroll-container">
        <div className="photo-track">
          {[...photos, ...photos, ...photos].map((src, idx) => (
            <div className="photo-card" key={idx}>
              <img src={src} alt={`Photo ${idx + 1}`} className="photo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
