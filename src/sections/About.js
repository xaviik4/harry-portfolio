import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title neon">About Me</h2>

      <div className="about-content">
        <p className="about-intro">
          I’m a fourth-year Electrical and Computer Engineering student at Oregon State University interested in systems engineering, power systems, and embedded hardware. I’ve gained experience through substation protection work at Avangrid, internal engineering tooling at Genentech, and hands-on hardware projects at OSU.
          I like building technology that’s reliable, practical, and grounded in real needs. I’m motivated by learning, improving my skills, and contributing to projects with real impact. I value clear communication, teamwork, and solving problems with intention, and I’m working toward a career where I can grow while contributing to meaningful engineering work.
        </p>

        <div className="skills">
          <h3 className="sub-title">Core Skills</h3>

          <div className="skills-grid">
            <div className="skill-column glass-card">
              <h4>🧠 Core Technical</h4>
              <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>MATLAB</li>
                <li>HTML & CSS</li>
                <li>SystemVerilog</li>
                <li>Circuit Design</li>
                <li>Embedded Systems</li>
                <li>Signal Processing Fundamentals</li>
              </ul>
            </div>

            <div className="skill-column glass-card">
              <h4>🛠️ Tools & Platforms</h4>
              <ul>
                <li>AutoCAD</li>
                <li>KiCad</li>
                <li>LTSpice</li>
                <li>MathCAD</li>
                <li>SEL AcSELerator</li>
                <li>ServiceNow</li>
                <li>GitHub Pages / React</li>
              </ul>
            </div>

            <div className="skill-column glass-card">
              <h4>⚡ Hardware & Power Systems</h4>
              <ul>
                <li>Oscilloscopes</li>
                <li>Multimeters</li>
                <li>PCB Design & Debug</li>
                <li>Protective Relays (SEL-751)</li>
                <li>Power & AC/DC System Fundamentals</li>
                <li>Sensor Integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fun-facts">
          <h3 className="sub-title">Beyond engineering...</h3>
          <p>
            I stay active through the gym and exploring Oregon’s trails, and I enjoy photography as a way to slow down and capture moments that matter to me. Being Puerto Rican is a big part of who I am and keeps me connected to my culture and community. I care a lot about improving myself, whether it’s learning new tech skills, getting stronger, or taking on creative challenges that push me forward.
          </p>
        </div>

        <div className="about-cta">
          <h3 className="sub-title">What I’m Working Toward</h3>
          <p>
            I’m passionate about energy systems, automation, and using technology to create practical, meaningful solutions. I’m always looking for challenges that help me grow, whether it’s learning new tools, building something from scratch, or collaborating with others. Always learning, always improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
