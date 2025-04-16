import React from 'react';
import '../styles/Photography.css';

import OSUgame from '../assets/OSUgame.jpg';
import carshoot from '../assets/carshoot.jpg';
import bbqpic from '../assets/bbqpic.jpg';

const photos = [OSUgame, carshoot, bbqpic];



const Photography = () => { 
  return (
    <section id="photography">
      <h2>Through My Lens</h2>
      <p className="photo-intro">
        Photography helps me slow down and see things differently. Whether it’s capturing movement, mood, or a memory, I’m always chasing light, stories, and new perspectives.
      </p>
      <div className="photo-grid">
        {photos.map((src, idx) => (
          <div className="photo-container" key={idx}>
            <img src={src} alt={`Photo ${idx + 1}`} className="photo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photography;
