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
        I enjoy working out, hiking around Oregon, playing and watching basketball.
        I’m also deep into photography and building my own creative process through tech and art.
      </p>
    </div>
        <div className="about-cta">
          <p>
            I’m currently looking for internships in energy systems and automation.
            I'm always looking for new challenges and chances to grow, whether it's building, learning, or collaborating. 
            Let's make something great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;