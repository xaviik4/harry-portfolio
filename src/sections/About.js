import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title neon">About Me</h2>

      <div className="about-content">
        <p className="about-intro">
          I'm a fourth-year Electrical and Computer Engineering student at Oregon State University interested in systems engineering, power systems, and embedded hardware. I've gained experience through protection and controls work at Avangrid, internal engineering tooling at Genentech, and systems engineering at Lockheed Martin.
          I like building technology that's reliable, practical, and grounded in real needs. I'm motivated by learning, improving my skills, and contributing to projects with real impact. I value clear communication, teamwork, and solving problems with intention, and I'm working toward a career where I can grow while contributing to meaningful engineering work.
        </p>

        <div className="skills">
          <h3 className="sub-title">Core Skills</h3>

          <div className="skills-grid">
            <div className="skill-column glass-card">
              <h4>🧠 Programming</h4>
              <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>MATLAB</li>
                <li>SystemVerilog</li>
                <li>R</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            <div className="skill-column glass-card">
              <h4>🛠️ Tools & Platforms</h4>
              <ul>
                <li>AutoCAD</li>
                <li>KiCad</li>
                <li>LTspice</li>
                <li>MathCAD</li>
                <li>SEL AcSELerator</li>
                <li>ServiceNow</li>
                <li>Git / GitHub</li>
                <li>Arduino</li>
                <li>React / GitHub Pages</li>
                <li>Adobe Lightroom</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>

            <div className="skill-column glass-card">
              <h4>⚡ Hardware & Systems</h4>
              <ul>
                <li>PCB Design & Debug</li>
                <li>Circuit Design</li>
                <li>Embedded Systems (ESP32)</li>
                <li>Soldering</li>
                <li>Oscilloscopes & Multimeters</li>
                <li>Sensor Integration</li>
                <li>Protective Relays (SEL-751)</li>
                <li>AC/DC & Power Systems</li>
                <li>GIS / SF₆ Equipment</li>
                <li>I²C / SPI / UART</li>
                <li>Bluetooth / Wireless</li>
                <li>Signal Processing</li>
              </ul>
            </div>

            <div className="skill-column glass-card">
              <h4>🤝 Professional</h4>
              <ul>
                <li>Teamwork & Collaboration</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Project Management</li>
                <li>Cross-Cultural Awareness</li>
                <li>Time Management</li>
                <li>Bilingual (English & Spanish)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fun-facts">
          <h3 className="sub-title">Beyond engineering...</h3>
          <p>
            I stay active through the gym and exploring Oregon's trails, and I enjoy photography as a way to slow down and capture moments that matter to me. Being Puerto Rican is a big part of who I am and keeps me connected to my culture and community. I care a lot about improving myself, whether it's learning new tech skills, getting stronger, or taking on creative challenges that push me forward.
          </p>
        </div>

        <div className="about-cta">
          <h3 className="sub-title">What I'm Working Toward</h3>
          <p>
            I'm passionate about energy systems, automation, and using technology to create practical, meaningful solutions. I'm always looking for challenges that help me grow, whether it's learning new tools, building something from scratch, or collaborating with others. Always learning, always improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;