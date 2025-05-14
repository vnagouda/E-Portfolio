// src/components/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Aquafish AI Monitor',
    description: 'AI-powered aquaculture tool with live detection, weight estimation, and cloud sync.',
    stack: ['Python', 'YOLOv8', 'Azure'],
  },
  {
    title: 'Cafe Cloud System',
    description: 'Cafe ordering system hosted on AWS with Cognito, EC2, RDS and load balancing.',
    stack: ['React', 'Tailwind', 'AWS'],
  },
  {
    title: 'Portfolio Website',
    description: 'Animated single-page developer portfolio with scroll snapping and particle background.',
    stack: ['React', 'Framer Motion', 'Vite'],
  },
  {
    title: 'GenAI Chatbot',
    description: 'Context-aware document-based GenAI assistant built with Gemini Pro APIs.',
    stack: ['GenAI', 'Gemini API', 'Node.js'],
  },
  {
    title: 'IoT Pond Monitor',
    description: 'RPi-based water monitoring system with AI edge inference and cloud sync.',
    stack: ['Raspberry Pi', 'Python', 'Azure'],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="cards-container-3d">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`project-card-3d ${hoveredIndex === i ? 'hovered' : hoveredIndex !== null ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ rotateX: -6, rotateY: 6, scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="project-glow-border"></div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
