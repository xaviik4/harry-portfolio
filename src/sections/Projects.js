// harry-portfolio/src/sections/Projects.js
import React from 'react';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Designed and built this personal site to showcase my engineering work, creative projects, and professional experience using React and GitHub Pages.',
    link: 'https://github.com/xaviik4/harry-portfolio',
  },
  {
    title: 'Being built...',
    description:
      'More projects are in progress — focusing on embedded systems, automation, and energy tech.',
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
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> View on GitHub
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
