'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Distributed Event Beacon Network',
    description: 'Built a decentralized system in Rust on 42 Raspberry Pis, enabling smart contract validation without blockchain overhead.',
    achievements: ['Achieved 13.3 req/s throughput', '<20s latency across 125 test cases'],
    technologies: ['Rust', 'Distributed Systems', 'Network Security'],
    github: '#',
    demo: '#',
  },
  {
    title: 'SMOTE-based Student Grade Prediction',
    description: 'Used ML (Random Forest, KNN, J48) + SMOTE to achieve 99.5% accuracy in academic predictions.',
    achievements: ['Published in IEEE', 'Advanced feature engineering'],
    technologies: ['Python', 'Machine Learning', 'SMOTE', 'Scikit-learn'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Automated R Package Compliance Dashboard',
    description: 'Built Flask dashboard + PowerShell scripts for license validation and ITIL-based approval workflows.',
    achievements: ['Dockerized pipeline', 'CI/CD integration'],
    technologies: ['Python', 'Docker', 'Flask', 'PowerShell'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Cybersecurity Program for Ice Cream Shop',
    description: 'Academic simulation of IRP, DPS, SOPs for a mid-size business.',
    achievements: ['Risk assessment', 'Budget alignment with NIST, ISO 27001'],
    technologies: ['NIST Framework', 'Security Policies', 'Risk Assessment'],
    github: '#',
    demo: '#',
  },
  {
    title: 'BuddyRide (Campus Ride-Share)',
    description: 'MVP with sign-up, ride-match, push notifications for campus transportation.',
    achievements: ['Real-time ride matching', 'Push notifications', 'User authentication'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: 'https://buddyride-qs9w.onrender.com/',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h1>

          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <ul className="mb-4 space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 