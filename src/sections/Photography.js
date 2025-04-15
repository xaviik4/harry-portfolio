// harry-portfolio/src/sections/Photography.js
import React from 'react';

const photos = [
  '/photos/photo1.jpg',
  '/photos/photo2.jpg',
  '/photos/photo3.jpg',
];

const Photography = () => {
  return (
    <section id="photography">
      <h2>Photography</h2>
      <div className="photo-grid">
        {photos.map((src, idx) => (
          <img key={idx} src={src} alt={`Photo ${idx + 1}`} className="photo" />
        ))}
      </div>
    </section>
  );
};

export default Photography;