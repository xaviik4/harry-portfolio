// harry-portfolio/src/sections/Experience.js
import '../styles/Experience.css';
import React, { useEffect, useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import genentechLogo from '../assets/genentech.svg';
import avangridLogo from '../assets/avangrid.svg';
import osuLogo from '../assets/osu.svg';
import purdueLogo from '../assets/purdue.svg';

const experiences = [
  {
    title: 'Substation Operations Intern',
    company: 'Avangrid',
    date: 'Jun 2025 – Aug 2025',
    logo: avangridLogo,
    description:
      'Worked on substation protection systems involving breaker-event analysis, relay settings, AutoCAD markups, and GIS/SF₆ equipment. Gained experience applying systems thinking and understanding how grid equipment behaves in real operating conditions.',
  },
  {
    title: 'Systems & Controls Engineering Intern',
    company: 'Genentech',
    date: 'May 2024 – Aug 2024',
    logo: genentechLogo,
    description:
      'Built internal tools in ServiceNow and front-end features that improved communication and reduced errors for engineering teams. Learned how technical workflows operate inside a large biotech environment and how different groups coordinate changes.',
  },
  {
    title: 'B.S. Electrical & Computer Engineering',
    company: 'Oregon State University',
    date: 'Sep 2024 – Jun 2027',
    logo: osuLogo,
    description:
      'At OSU, I’ve focused on hands-on engineering through labs in circuits, embedded systems, and power electronics. My main project is a vibration monitoring device built with a custom KiCad PCB and an MPU-6050 accelerometer. These courses and projects have helped me understand how hardware and software come together in real applications.',
  },
  {
    title: 'B.S. Computer Engineering (Transferred)',
    company: 'Purdue University',
    date: 'Jul 2022 – May 2024',
    logo: purdueLogo,
    description:
      'At Purdue, I worked on research exploring how engineering students learn and collaborate in different cultural settings. I analyzed TLBB and CQS datasets, built data visualizations in R, and helped study team behaviors across global environments. I also contributed to a project exploring VR as a tool for supporting students with social anxiety, and presented both sets of work at Purdue’s research showcases.',
  },
];

const Experience = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        }),
      { threshold: 0.4 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title neon">Experience</h2>

      <VerticalTimeline animate={true}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: 'transparent', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.25)' }}
            date={<div className="timeline-date">{exp.date}</div>}
            icon={
              <div className="logo-container">
                <img src={exp.logo} alt={exp.company} className="timeline-logo" />
              </div>
            }
            iconStyle={{
              background: 'transparent',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              ref={(el) => (refs.current[index] = el)}
              className="timeline-card"
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
