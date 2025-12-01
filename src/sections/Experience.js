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
      'Field-tested breaker operations, updated relay settings (SEL-751), and redlined schematics in AutoCAD for GIS substations.',
  },
  {
    title: 'Systems & Controls Engineering Intern',
    company: 'Genentech',
    date: 'May 2024 – Aug 2024',
    logo: genentechLogo,
    description:
      'Built internal tools on ServiceNow for automation and ticket routing. Designed forms and workflows used by engineering teams daily.',
  },
  {
    title: 'B.S. Electrical & Computer Engineering',
    company: 'Oregon State University',
    date: 'Sep 2024 – Jun 2027',
    logo: osuLogo,
    description:
      'Focus on power systems, automation, and embedded design. Projects include vibration monitors, PCB design, and AC-DC power converters.',
  },
  {
    title: 'Computer Engineering (GEARE Program)',
    company: 'Purdue University',
    date: 'Jul 2022 – May 2024',
    logo: purdueLogo,
    description:
      'Studied embedded systems, data structures, and algorithms. Participated in global engineering projects.',
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
