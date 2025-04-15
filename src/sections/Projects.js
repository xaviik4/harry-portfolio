// harry-portfolio/src/sections/Projects.js
import React from 'react';

const projects = [
  { title: 'Genentech Forms', description: 'Streamlined support forms using ServiceNow.' },
  { title: 'VR Therapy Research', description: 'Built proposal for using VR in social anxiety therapy.' },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;