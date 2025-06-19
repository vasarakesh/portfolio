import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import ProfessionalSkills from './components/ProfessionalSkills'
import Contact from './components/Contact'
import './App.css'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Education', href: '/education' },
  { name: 'Contact', href: '#contact' },
];

const experience = [
  {
    title: 'ACSUS lab researcher',
    company: 'Rowan University',
    location: 'New Jersey',
    period: 'Jan 2025 – May 2025',
    points: [
      'Led research on Distributed Event Beacon Network in Rust (rustc 1.84.0) for cryptographic provenance signing of smart contract state transitions by eliminating blockchain storage overhead via localized event validation.',
      'Designed a decentralized system where up to 32 asynchronous Beacon nodes (on Debian 12) independently verified client-submitted transaction hashes, generating immutable Beacon Stamps.',
      'Validated system performance across 125 experimental conditions on 42 Raspberry Pi 4 Model B devices, achieving sub-20s median latencies (99% <36s), a peak throughput of 13.3 req/s with batch sizes up to 1024, and demonstrating logarithmic communication overhead scaling.',
    ],
  },
  {
    title: 'AWS Cloud Virtual Internship',
    company: 'AWS Academy',
    period: 'Oct 2021 – Dec 2021',
    points: [
      'Gained proficiency in more than 3 core AWS services (EC2, S3, Lambda), focusing on security configurations through 2+ hands-on virtual projects.',
      'Built system components on the AWS platform, integrating security group rules and network access controls for multiple 2 project scenarios.',
      'Analyzed cloud solutions for efficient resource utilization, adhering to security (e.g., least privilege) and cost-optimization guidelines under mentor supervision.',
    ],
  },
  {
    title: 'Industrial Training',
    company: 'GLS Systems',
    location: 'Tirupati, India',
    period: 'Nov 2019 – Apr 2020',
    points: [
      'Received practical exposure to software design, PHP (CakePHP, Zend), and .NET-based application development.',
      'Assisted in developing database-driven web applications and learned core principles of CMS and portal integration.',
      'Gained experience with client-server architecture, web services, and basic networking concepts in an ISO 9001:2000 and IMS 27001:2000 certified environment.',
    ],
  },
];

const projects = [
  {
    title: 'Performance and Scalability Analysis of Web Frameworks',
    period: 'Sep 2024 – Dec 2024',
    githubLink: 'https://github.com/yourusername/web-frameworks-analysis',
    demoLink: 'https://your-demo-link.com',
    technologies: ['Python', 'Rust', 'Node.js', 'Docker', 'Prometheus'],
    points: [
      'Conducted an in-depth performance benchmarking study comparing Flask (Python), Express.js (Node.js), and Actix Web (Rust) frameworks under high-concurrency workloads simulating up to 5,000 requests.',
      'Demonstrated Actix Web\'s superior performance, achieving a max throughput of 71.8086 requests/sec, significantly outperforming Express.js (43.2093 requests/sec) and Flask (7.06.15 requests/sec) under maximum load.',
      'Showcased Actix Web\'s significantly lower average latency (13.926 ms at 5000 requests) compared to Express.js (23.143 ms) and Flask (141.613 ms), highlighting its efficiency.',
    ],
  },
  {
    title: 'Overall Cybersecurity Program Analyst (Academic Project)',
    period: 'Sep 2024 – Dec 2024',
    githubLink: 'https://github.com/yourusername/cybersecurity-program',
    technologies: ['NIST Framework', 'ISO 27001', 'Risk Assessment', 'Policy Development'],
    points: [
      'Structured a comprehensive cybersecurity program for a mid-sized business (Scoops Ice Cream Shop), integrating physical and digital security safeguards, including an analysis of potential cybercrime threats.',
      'Authored key security policies: Incident Response Plan (IRP) for effective cyber-attack mitigation, Data Protection Standards (DPS), and SOPs for secure employee lifecycle management.',
      'Conducted a cybersecurity risk assessment and allocated security budgets, aligning recommendations with industry best practices (NIST, ISO 27001) to minimize identified risks.',
    ],
  },
  {
    title: 'Employing the SMOTE Technique, a ML Model for Predicting Student Grades (IEEE 2023)',
    period: 'Dec 2022 – Jun 2023',
    githubLink: 'https://github.com/yourusername/student-grade-prediction',
    technologies: ['Python', 'Machine Learning', 'SMOTE', 'Random Forest', 'KNN'],
    points: [
      'Developed and enhanced a predictive model using Python and machine learning (Random Forest, KNN, J48) to forecast student academic performance, demonstrating capabilities applicable to detecting anomalous patterns and behaviors in large datasets.',
      'Applied Synthetic Minority Over-Sampling Technique (SMOTE) to address class imbalance, significantly improving model accuracy (up to 0.995 with Random Forest), showcasing expertise in data preprocessing for effective analysis.',
      'Utilized 3 feature selection methods (Correlation Coefficient, Chi-Square, RFE) to optimize model inputs, highlighting skills in data dimensionality reduction and feature engineering relevant for threat detection models.',
    ],
  },
];

const education = [
  {
    degree: 'Masters in Cybersecurity',
    school: 'Rowan University',
    location: 'New Jersey',
    period: 'Aug 2023 – May 2025',
    coursework: [
      'Advance Cybersecurity Applications and Principles',
      'Information Security',
      'Cybersecurity Management',
      'Policy & Risk',
      'Cyber systems',
      'Cyber Defense of Operating Systems and Networks',
    ],
  },
  {
    degree: 'Bachelor of Technology in Information Technology',
    school: 'Mohan Babu University',
    location: 'India',
    period: 'Nov 2020 – May 2023',
    coursework: [
      'Cybersecurity',
      'Cloud Security',
      'Cloud Computing',
      'Data Mining',
    ],
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Mohan Babu University',
    location: 'India',
    period: 'Aug 2017 – May 2020',
    coursework: [
      'System Administration',
      '.Net Programming',
      'Mobile application development',
    ],
  },
];

const certifications = [
  'CCNA R&S: Routing and Switching Essentials (Jan 2020)',
  'CCNA R&S: Scaling Networks (Feb 2020)',
  'CCNA R&S: Connecting Networks (Apr 2020)',
];

const leadership = [
  {
    title: 'Computer Science Research Ambassador',
    organization: 'Rowan university',
    period: 'Jan 2025 – May 2025',
    points: [
      'Recognized for research contributions; actively engaged with the academic community by attending 8+ research presentations and delivering a presentation on SMOTE.',
    ],
  },
  {
    title: 'NSS Volunteer',
    organization: 'National Service Scheme (NSS)',
    period: 'Dec 2020 – Dec 2022',
    points: [
      'Completed 120+ hours of social service activities, including teaching digital literacy skills to underprivileged rural students and organizing cybersecurity awareness camps for 300+ villagers.',
    ],
  },
  {
    title: 'Panel Lead',
    organization: 'IDASCN International Conference',
    period: 'Oct 2022 – Oct 2022',
    points: [
      'Led the "Smart Computing" panel by scheduling author presentations, coordinating with session chairs, and ensuring smooth session management and timely execution during the conference.',
    ],
  },
  {
    title: 'Student Coordinator',
    organization: 'IPR-Expo 2022 | Sree Vidyanikethan Engineering College',
    period: 'Apr 2022 – Apr 2022',
    points: [
      'Managed logistics for 500+ attendees and coordinated 20+ guest speakers at the Intellectual Property Rights (IPR) Expo.',
    ],
  },
  {
    title: 'Roll of Honour',
    organization: 'Sree Vidyanikethan Engineering College',
    period: 'Jun 2019 – Jun 2020',
    points: [
      'Recognized on the prestigious Roll of Honour for outstanding academic excellence and exceptional contributions to student leadership activities.',
    ],
  },
];

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  // Smooth scroll for Contact
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full bg-background-light dark:bg-background-dark z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 text-xl font-bold text-primary-light dark:text-primary-dark">
            Rakesh Vasa
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={item.href.startsWith('#') ? (e) => handleNavClick(e, item.href) : undefined}
              className={`text-sm font-semibold leading-6 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors
                ${location.pathname === item.href
                  ? 'text-primary-light dark:text-primary-dark'
                  : ''
                }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-sm font-semibold leading-6 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            {isDarkMode ? <FaSun className="w-5 h-5 mr-2" /> : <FaMoon className="w-5 h-5 mr-2" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Construction Banner */}
      <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black py-2 px-4 text-center z-50">
        <p className="text-sm font-semibold animate-pulse">
          🚧 Portfolio Website Under Construction 🚧
        </p>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-blue-600">Rakesh Vasa</span>
              </h1>
              <h2 className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-300">
                Cybersecurity Researcher | Cloud Security | Rust + Python Developer
              </h2>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                I specialize in building secure and scalable systems using AWS, Rust, and Python. My expertise includes decentralized architectures, IAM systems, and vulnerability analysis aligned with industry standards like NIST and ISO 27001.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden shadow-lg border-4 border-blue-600">
                <img
                  src="/Rakesh.jpg"
                  alt="Rakesh Vasa profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Security',
                description: 'Expertise in AWS IAM, Cognito, EC2, S3, Lambda with secure policies and roles.',
                icon: '☁️'
              },
              {
                title: 'Cybersecurity Research',
                description: 'Published research on smart contract decentralization using Rust-based event beacon systems.',
                icon: '🔬'
              },
              {
                title: 'Data Analysis & Machine Learning',
                description: 'IEEE-published ML work with Random Forest + SMOTE to forecast academic performance.',
                icon: '📊'
              },
              {
                title: 'DevOps & Automation',
                description: 'Docker, PowerShell scripting, CI/CD pipelines, secure workflows for compliance pipelines.',
                icon: '⚙️'
              },
              {
                title: 'Threat Detection & Incident Response',
                description: 'Hands-on with SIEM tools, Splunk, Nessus, and vulnerability management using CVSS.',
                icon: '🛡️'
              },
              {
                title: 'Backend Development',
                description: 'Python, Rust, and shell scripting to build secure and scalable backend systems.',
                icon: '💻'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                } hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="experience">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Experience</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8`}
          >
            {/* Logos/Icons */}
            <div className="flex flex-row md:flex-col items-center gap-4 md:gap-6 md:mr-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Rowan_University_seal.png" alt="Rowan University" className="w-12 h-12 rounded-full bg-white border shadow" title="Rowan University" />
              <img src="https://www.rust-lang.org/logos/rust-logo-512x512.png" alt="Rust" className="w-10 h-10 rounded-full bg-white border shadow" title="Rust" />
              <img src="https://upload.wikimedia.org/wikipedia/en/3/3f/Raspberry_Pi_Logo.svg" alt="Raspberry Pi" className="w-10 h-10 rounded-full bg-white border shadow" title="Raspberry Pi" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" alt="Linux" className="w-10 h-10 rounded-full bg-white border shadow" title="Linux" />
            </div>
            {/* Experience Card Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                ACSUS Lab Researcher <span className="text-base font-normal text-gray-500 dark:text-gray-400">– Rowan University</span>
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-2 text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><span role="img" aria-label="Location">📍</span> New Jersey</span>
                <span className="flex items-center gap-1"><span role="img" aria-label="Calendar">🗓</span> Jan 2025 – May 2025</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">Rust</span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">Raspberry Pi</span>
                <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-xs font-semibold">Linux</span>
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">Cryptographic Validation</span>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li>• Led research on a Distributed Event Beacon Network using Rust</li>
                <li>• Built and tested a 42-node Raspberry Pi cluster for decentralized smart contract validation</li>
                <li>• Achieved 13.3 req/s throughput and &lt;20s median latency</li>
                <li>• Research presented as a poster; full paper submitted to USENIX NSDI</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Distributed Event Beacon Network',
                description: 'Built a Rust-based decentralized smart contract validator using 42 Raspberry Pi nodes.',
                technologies: ['Rust', 'Cryptography', 'Raspberry Pi', 'Linux'],
                link: '#'
              },
              {
                title: 'SMOTE-based ML Grade Predictor (IEEE)',
                description: 'Improved model accuracy to 99.5% using SMOTE, Random Forest, and KNN.',
                technologies: ['Python', 'scikit-learn', 'SMOTE', 'Feature Selection'],
                link: '#'
              },
              {
                title: 'Automated R Compliance Dashboard',
                description: 'Flask + PowerShell + Docker system to validate package licenses & automate ITIL approvals.',
                technologies: ['Flask', 'Docker', 'PowerShell', 'CI/CD'],
                link: '#'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                } hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-blue-900/50 text-blue-200' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Experience() {
  const { isDarkMode } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Professional Experience</h1>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-600">{exp.title}</h2>
                  <h3 className="text-xl font-medium mt-1">{exp.company}</h3>
                  {exp.location && (
                    <p className="text-gray-500 mt-1">{exp.location}</p>
                  )}
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const { isDarkMode } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h2>
                  <p className={`text-sm font-medium mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.period}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode 
                            ? 'bg-blue-900 text-blue-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {project.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    } transition-colors duration-200`}
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        isDarkMode 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      } text-white transition-colors duration-200`}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Education() {
  const { isDarkMode } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-600">{edu.degree}</h2>
                  <h3 className="text-xl font-medium mt-1">{edu.school}</h3>
                  <p className="text-gray-500 mt-1">{edu.location}</p>
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.period}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0E1A25] flex flex-col">
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<ProfessionalSkills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* Only show Contact component on non-contact pages */}
        {window.location.pathname !== '/contact' && <Contact />}
      </div>
    </ThemeProvider>
  );
}

export default App
