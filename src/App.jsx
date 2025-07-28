import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt, FaPhone, FaGlobe } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-500">Rakesh Vasa</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-300 hover:text-blue-500 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      title: 'ACSUS Lab Researcher',
      company: 'Rowan University',
      location: 'New Jersey',
      period: 'Jan 2025 – May 2025',
      points: [
        'Designed a Rust Distributed Event Beacon Network (32 async nodes on Debian 12).',
        'Benchmarked 125 tests on 42 Raspberry Pi 4 boards → peak 13.3 req/s, <20s median latency.',
        'Authored poster (Rowan Grad Research Day) & paper (USENIX NSDI submission).'
      ]
    },
    {
      title: 'DevSecOps Engineer (Volunteer)',
      company: 'Saayam For All',
      location: 'Remote',
      period: 'July 2025 – Present',
      points: [
        'Build & troubleshoot GitHub Actions / GitLab CI pipelines for Node + Python services.',
        'Develop IaC scripts in Pulumi to provision AWS resources (VPC, ECS, RDS).',
        'Integrate SAST, DAST, IAST scanners; produce remediation reports.',
        'Implement Prometheus + Grafana for uptime & performance dashboards.',
        'Coach team on DevSecOps best practices in daily stand-ups.'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Vikas Bandhu',
      location: '',
      period: 'Jun 2022 – Feb 2023',
      points: [
        'Built AWS Cognito authentication for 10,000+ users; enforced RBAC & IAM least-privilege.',
        'Mentored 4 junior devs on secure coding & S3 encryption.'
      ]
    },
    {
      title: 'AWS Cloud Virtual Intern',
      company: 'AWS Academy',
      location: '',
      period: 'Oct 2021 – Dec 2021',
      points: [
        'Deployed EC2, S3, Lambda labs; hardened security groups & cost-optimized architectures.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Distributed Event Beacon Network',
      description: 'Decentralized smart-contract validator.',
      technologies: ['Rust', 'Cryptography', 'Raspberry Pi'],
      category: 'Security',
      github: '#',
      demo: '#'
    },
    {
      title: 'SMOTE ML Grade Predictor (IEEE)',
      description: 'Academic-performance model (99.5% accuracy).',
      technologies: ['Python', 'scikit-learn', 'SMOTE'],
      category: 'ML',
      github: '#',
      demo: '#'
    },
    {
      title: 'Automated R Compliance Dashboard',
      description: 'ITIL-gated license validation pipeline.',
      technologies: ['Flask', 'Docker', 'PowerShell'],
      category: 'Full-Stack',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Job Tracker',
      description: 'Auto-extracts job-emails & logs to Excel; WhatsApp alerts.',
      technologies: ['Python', 'Gmail API', 'GPT-4o', 'Excel'],
      category: 'ML',
      github: '#',
      demo: '#'
    },
    {
      title: 'BuddyRide (Campus Ride-Share)',
      description: 'MVP with sign-up, ride-match, push notifications.',
      technologies: ['React', 'Node', 'Express', 'MongoDB'],
      category: 'Full-Stack',
      github: '#',
      demo: '#'
    }
  ];

  const technicalSkills = [
    'AWS', 'Python', 'Rust', 'Docker', 'Linux', 'Git', 'PowerShell', 
    'Cognito/IAM', 'Nessus', 'Splunk', 'Wireshark', 'Metasploit', 
    'Flask', 'FastAPI', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 
    'MySQL', 'MongoDB', 'Pulumi', 'GitHub Actions'
  ];

  const professionalSkills = [
    {
      title: 'Critical Thinking',
      description: 'Analyze complex problems and develop innovative solutions.'
    },
    {
      title: 'Problem Solving',
      description: 'Systematic approach to troubleshooting and debugging.'
    },
    {
      title: 'Collaboration',
      description: 'Work effectively in cross-functional teams and mentor others.'
    },
    {
      title: 'Adaptability',
      description: 'Quickly learn new technologies and adapt to changing requirements.'
    },
    {
      title: 'Communication',
      description: 'Clear technical documentation and stakeholder presentations.'
    },
    {
      title: 'Time Management',
      description: 'Prioritize tasks and deliver projects on schedule.'
    }
  ];

  const education = [
    {
      degree: 'M.S. Cybersecurity',
      school: 'Rowan University',
      years: '2023-2025',
      gpa: '3.2'
    },
    {
      degree: 'B.Tech Computer Science (Cybersecurity)',
      school: 'KL University',
      years: '2019-2023',
      gpa: '8.39/10'
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Virtual Internship',
      issuer: 'AWS',
      year: '2021',
      logo: '☁️'
    },
    {
      name: 'CCNA Routing & Switching',
      issuer: 'Cisco',
      year: '2020',
      logo: '🌐'
    },
    {
      name: 'Salesforce Certified Administrator (Internship)',
      issuer: 'Salesforce',
      year: '2023',
      logo: '⚡'
    },
    {
      name: 'IEEE Author — SMOTE Student Grade Prediction',
      issuer: 'IEEE',
      year: '2023',
      logo: '📊'
    }
  ];

  const achievements = [
    {
      title: 'Research Ambassador Award',
      issuer: 'Rowan University',
      year: '2025',
      description: 'Recognized for outstanding research contributions and academic excellence.'
    },
    {
      title: 'Roll of Honour',
      issuer: 'Diploma in Computer Engineering',
      year: '2017-2020',
      description: 'Achieved top academic performance and leadership in computer engineering studies.'
    },
    {
      title: 'HackTheBox Achievements',
      issuer: 'HackTheBox Platform',
      year: '2024',
      description: 'Completed various cybersecurity challenges and penetration testing scenarios.'
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-300">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-8">
              <img
                src="/img/rakesh_avatar.jpg"
                alt="Rakesh Vasa"
                className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-lg"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-blue-500">Rakesh Vasa</span>
            </h1>
            <p className="text-xl text-slate-400 mb-6">
              Cybersecurity Researcher | Cloud Security | Rust + Python Developer
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              I build secure, scalable systems and research distributed security architectures. 
              Passionate about cloud security, AI automation, and threat detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#about" className="btn-primary">
                About Me
              </a>
              <a 
                href="/pdf/RakeshVasa_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaDownload className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/rakeshvasa/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/vasarakesh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="mailto:vasarakesh1290@gmail.com" className="text-slate-400 hover:text-blue-500 transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a Cybersecurity Master's graduate from Rowan University with a passion for building secure, 
                scalable systems. My expertise spans cloud security, distributed systems, and machine learning applications.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I specialize in AWS cloud architecture, Rust development, and Python-based machine learning solutions. 
                My research focuses on decentralized security systems and threat detection using advanced analytics.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm an AI enthusiast who loves experimenting with AI agents and automation tools. I use platforms like 
                Zapier and n8n to create intelligent workflows, and I'm always exploring new tools and technologies 
                to enhance productivity and security.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding or researching, you can find me exploring new technologies, contributing to open-source 
                projects, or mentoring junior developers in cybersecurity best practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="project-card">
                <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
                <p className="text-slate-400">Secure AWS infrastructure with IAM, Cognito, and compliance frameworks.</p>
              </div>
              <div className="project-card">
                <h3 className="text-xl font-semibold mb-3">Cybersecurity Research</h3>
                <p className="text-slate-400">Distributed systems, threat detection, and vulnerability analysis.</p>
              </div>
              <div className="project-card">
                <h3 className="text-xl font-semibold mb-3">Data Analysis & ML</h3>
                <p className="text-slate-400">Python-based analytics, scikit-learn, and predictive modeling.</p>
              </div>
              <div className="project-card">
                <h3 className="text-xl font-semibold mb-3">DevOps & Automation</h3>
                <p className="text-slate-400">CI/CD pipelines, IaC with Pulumi, and monitoring solutions.</p>
              </div>
              <div className="project-card">
                <h3 className="text-xl font-semibold mb-3">Threat Detection & IR</h3>
                <p className="text-slate-400">SIEM tools, log analysis, and incident response procedures.</p>
              </div>
              <div className="project-card">
                <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                <p className="text-slate-400">Rust microservices, Python APIs, and database optimization.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                    
                    <div className="ml-16">
                      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-blue-500">{exp.title}</h3>
                            <p className="text-lg text-slate-300">{exp.company}</p>
                            {exp.location && (
                              <p className="text-slate-400">📍 {exp.location}</p>
                            )}
                          </div>
                          <p className="text-slate-500 text-sm font-medium">
                            {exp.period}
                          </p>
                        </div>
                        
                        <ul className="mt-4 space-y-2">
                          {exp.points.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-slate-400">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="skill-badge text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors"
                      >
                        <FaGithub className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
            
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="skill-badge text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8">Professional Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="project-card"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-500">{skill.title}</h3>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-500">{edu.degree}</h3>
                      <p className="text-lg text-slate-300">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400">{edu.years}</p>
                      <p className="text-slate-500 text-sm">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{cert.logo}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                      <p className="text-slate-400 mb-1">{cert.issuer}</p>
                      <p className="text-slate-500 text-sm mb-3">{cert.year}</p>
                      <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                        Verify (placeholder)
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🏆</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-slate-400 mb-1">{achievement.issuer}</p>
                      <p className="text-slate-500 text-sm mb-3">{achievement.year}</p>
                      <p className="text-slate-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
            
            <div className="text-center mb-12">
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                I'm always open to new projects or full-time security roles. Let's chat!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-500 w-5 h-5" />
                    <a 
                      href="mailto:vasarakesh1290@gmail.com"
                      className="text-slate-300 hover:text-blue-500 transition-colors"
                    >
                      vasarakesh1290@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-blue-500 w-5 h-5" />
                    <span className="text-slate-300">+1 (856) 595-5178</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaGlobe className="text-blue-500 w-5 h-5" />
                    <span className="text-slate-300">Glassboro, NJ</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/rakeshvasa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/vasarakesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="#"
                    className="flex items-center space-x-3 text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    <FaGlobe className="w-5 h-5" />
                    <span>Dev.to (placeholder)</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
