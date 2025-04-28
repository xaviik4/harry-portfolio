// harry-portfolio/src/sections/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
        I’m a junior at Oregon State University studying Electrical and Computer Engineering. 
        I specialize in electronics, embedded systems, and solving real-world technical problems. 
        I’m passionate about energy storage, sustainability, and automation.
        Always learning, always building.
        </p>

      <div className="skills">
        <h3>Core Skills</h3>

        <div className="skills-grid">
          <div className="skill-column">
            <h4>🧠 Core Technical</h4>
            <ul>
              <li>Python</li>
              <li>C/C++</li>
              <li>HTML & CSS</li>
              <li>Matlab</li>
              <li>SystemVerilog</li>
              <li>Circuit Design</li>
            </ul>
          </div>

          <div className="skill-column">
            <h4>🛠️ Tools & Platforms</h4>
            <ul>
              <li>ServiceNow</li>
              <li>Arduino</li>
              <li>LTSpice</li>
              <li>KiCad</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
        </div>

      </div>


    <div className="fun-facts">
      <h3>Outside the Lab...</h3>
      <p>
        I enjoy working out, hiking around Oregon, and playing and watching basketball. 
        I’m passionate about photography and building my own creative process through tech and art. 
        Music is a huge part of my life too, it's helped shape how I think creatively. 
        Being Puerto Rican, staying connected to my roots has always been important to me. 
        Outside of that, I’m big on self-improvement, whether it’s learning new tech skills, pushing myself physically, or chasing creative challenges.
      </p>
    </div>
        <div className="about-cta">
          <p>
            I’m passionate about energy systems, automation, and using technology to build creative solutions. 
            I’m always looking for new challenges and chances to grow, whether it’s building, learning, or collaborating. 
            Always excited to connect, create, and keep learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;