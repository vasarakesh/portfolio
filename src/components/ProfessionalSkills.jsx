import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material-UI', 'Bootstrap'],
    icon: '🎨',
    delay: '100'
  },
  {
    name: 'Backend Development',
    skills: ['Python', 'Rust', 'Java', 'Node.js', 'Express.js', 'Flask', 'Django', 'RESTful APIs', 'GraphQL'],
    icon: '⚙️',
    delay: '200'
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Ansible'],
    icon: '☁️',
    delay: '300'
  },
  {
    name: 'Security Tools',
    skills: ['Nessus', 'Splunk', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Nmap', 'Snort', 'Kali Linux'],
    icon: '🔒',
    delay: '400'
  },
  {
    name: 'Data & Analytics',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    icon: '📊',
    delay: '500'
  },
  {
    name: 'Security Domains',
    skills: [
      'Network Security',
      'Application Security',
      'Cloud Security',
      'Identity & Access Management',
      'Threat Modeling',
      'Incident Response',
      'Vulnerability Assessment',
      'Security Architecture',
      'Risk Management',
      'User Behavioral Analytics (UBA)',
      'Threat Indicators',
      'Pattern Detection',
      'Risk Evaluation',
      'Log Analysis',
      'Testing Cycles'
    ],
    icon: '🛡️',
    delay: '600'
  }
];

const certifications = [
  {
    name: 'CCNA R&S: Routing and Switching Essentials',
    issuer: 'Cisco',
    date: 'Jan 2020',
    badge: '🏆',
    delay: '100'
  },
  {
    name: 'CCNA R&S: Scaling Networks',
    issuer: 'Cisco',
    date: 'Feb 2020',
    badge: '🔐',
    delay: '200'
  },
  {
    name: 'CCNA R&S: Connecting Networks',
    issuer: 'Cisco',
    date: 'Apr 2020',
    badge: '🛡️',
    delay: '300'
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Dec 2021',
    badge: '☁️',
    delay: '400'
  }
];

const ProfessionalSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#0E1A25] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-rose-400 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Specialized in cybersecurity, cloud architecture, and secure software development with a focus on implementing robust security solutions across modern technology stacks.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              data-aos="fade-up"
              data-aos-delay={category.delay}
              className="bg-[#1C2838] rounded-2xl p-6 shadow-[rgba(0,0,0,0.35)_0_6px_12px] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-[#2C3E50] text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold">Professional Certifications</h2>
          <div className="w-12 h-1 bg-rose-400 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              data-aos="fade-up"
              data-aos-delay={cert.delay}
              className="bg-[#1C2838] rounded-2xl p-6 shadow-[rgba(0,0,0,0.35)_0_6px_12px] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl">{cert.badge}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">Issued: {cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills; 