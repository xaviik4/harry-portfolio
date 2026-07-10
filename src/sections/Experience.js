// harry-portfolio/src/sections/Experience.js
import '../styles/Experience.css';
import React, { useEffect, useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import lockheedLogo from '../assets/lockheed.svg';
import genentechLogo from '../assets/genentech.svg';
import avangridLogo from '../assets/avangrid.svg';
import osuLogo from '../assets/osu.svg';
import purdueLogo from '../assets/purdue.svg';

const experiences = [
  {
    title: 'Systems Engineer Intern',
    company: 'Lockheed Martin',
    date: 'Jun 2026 – Present',
    logo: lockheedLogo,
    description:
      'Working on systems engineering in a defense and aerospace environment.',
  },
  {
    title: 'Protection and Controls Engineering Intern',
    company: 'Avangrid',
    date: 'Jun 2025 – Aug 2025',
    logo: avangridLogo,
    description:
      'Consolidated substation regions from five to four to improve breaker-event traceability. Updated one-line, wiring, and elementary diagrams in AutoCAD across multiple substations. Integrated low-low SF₆ gas gauges into GIS protection logic and configured relay settings using MathCAD and SEL AcSELerator QuickSet.',
  },
  {
    title: 'Systems and Controls Support Intern',
    company: 'Genentech',
    date: 'May 2024 – Aug 2024',
    logo: genentechLogo,
    description:
      'Built 20+ ServiceNow-integrated forms that reduced request errors and improved communication for systems and control engineers. Developed front-end features that streamlined internal workflows across engineering, automation, and quality-assurance teams.',
  },
  {
    title: 'B.S. Electrical & Computer Engineering',
    company: 'Oregon State University',
    date: 'Sep 2024 – Jun 2027',
    logo: osuLogo,
    description:
      'Focused on hands-on engineering through labs in circuits, embedded systems, and power electronics. Completed junior design projects including an accelerometer-based monitoring device and a dual-axis SCARA robotic arm. Active member of the Society of Hispanic Professional Engineers (SHPE).',
  },
  {
    title: 'B.S. Computer Engineering (Transferred)',
    company: 'Purdue University',
    date: 'Jul 2022 – May 2024',
    logo: purdueLogo,
    description:
      'Conducted research on team learning behaviors and cultural intelligence in engineering education using R. Explored VR as a tool for supporting students with social anxiety and presented findings at Purdue\'s Spring Undergraduate Research Conference and I2D Expo. Built a responsive website for Purdue\'s CAM2 research lab.',
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