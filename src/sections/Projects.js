// harry-portfolio/src/sections/Projects.js
import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Yahar\'gul Dual Axis Automaton',
    description:
      'A two-axis SCARA robotic arm that draws shapes from G-code commands. Built with an ESP32 microcontroller, Python GUI, Bluetooth communication, inverse kinematics, and custom PCB with high-torque servo motors.',
    tech: ['C++', 'Python', 'ESP32', 'PCB Design', 'Bluetooth'],
    link: 'https://projects.engineering.oregonstate.edu/projects/?id=yaJ5NIZFUFiaf3KM',
    linkType: 'showcase',
  },
  {
    title: 'Accelerometer-Based Monitoring Device',
    description:
      'A vibration monitoring system using an MPU-6050 accelerometer with a custom KiCad PCB. Implemented I²C communication, real-time data processing, and validation for accuracy and update rate requirements.',
    tech: ['KiCad', 'C/C++', 'I²C', 'Embedded Systems', 'PCB Design'],
  },
  {
    title: 'Portfolio Website',
    description:
      'This personal site, built to showcase engineering work, photography, and projects. Designed with React and deployed on GitHub Pages.',
    tech: ['React', 'JavaScript', 'CSS', 'GitHub Pages'],
    link: 'https://github.com/xaviik4/harry-portfolio',
    linkType: 'github',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title neon">Projects</h2>

      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              {proj.tech && (
                <div className="project-tech">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              )}
              {proj.link && proj.linkType === 'github' && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
              {proj.link && proj.linkType === 'showcase' && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> View Showcase
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;