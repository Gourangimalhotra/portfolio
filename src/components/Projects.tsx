import React from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone, Mail, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Authentix – Social Media Account Authenticity Classifier",
      description: "A machine learning model to distinguish between fake and real social media accounts using advanced classification techniques.",
      tech: ["PyTorch", "Streamlit", "Pandas", "NumPy", "Matplotlib"],
      features: ["Interactive Streamlit UI", "Real-time classification", "Visual data analytics"],
      icon: <Database className="text-blue-400" size={24} />
    },
    {
      title: "Run Docker Inside Docker (DIND)",
      description: "Tested containerized Docker setups within Docker containers for DevOps automation and testing environments.",
      tech: ["Docker", "Shell", "DevOps"],
      features: ["Container orchestration", "Automated testing", "DevOps integration"],
      icon: <Code className="text-blue-400" size={24} />
    },
    {
      title: "Apache Server in Docker",
      description: "Installed and configured Apache HTTP server inside Docker containers for scalable web hosting solutions.",
      tech: ["Docker", "Apache", "Linux"],
      features: ["Containerized web server", "Scalable deployment", "Configuration management"],
      icon: <Globe className="text-blue-400" size={24} />
    },
    {
      title: "Webcam Photo Capture",
      description: "JavaScript-based application to access device webcam and capture high-quality images with real-time preview.",
      tech: ["JavaScript", "HTML5", "CSS3", "WebRTC"],
      features: ["Real-time webcam access", "Image capture", "Cross-browser compatibility"],
      icon: <Smartphone className="text-blue-400" size={24} />
    },
    {
      title: "Email Automation System",
      description: "Comprehensive email sending solution using EmailJS and backend APIs with attachment support.",
      tech: ["JavaScript", "EmailJS", "API", "Backend"],
      features: ["Email automation", "Attachment support", "Multiple providers"],
      icon: <Mail className="text-blue-400" size={24} />
    },
    {
      title: "Multi-Platform Automation Suite",
      description: "Python automation scripts for WhatsApp, SMS, LinkedIn, email, and social media posting across platforms.",
      tech: ["Python", "API Integration", "Automation"],
      features: ["Multi-platform support", "Message automation", "Social media integration"],
      icon: <MessageSquare className="text-blue-400" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-blue-500"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon}
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      <Github size={16} />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;