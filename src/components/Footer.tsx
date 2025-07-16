import React from 'react';
import { Heart, Code, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:malhotragourang@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/gourangi-malhotra-69716434b",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Gourangi <span className="text-blue-400">Malhotra</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Aspiring Data Scientist passionate about building intelligent solutions 
              for real-world impact through AI and machine learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 malhotragourang@gmail.com</p>
              <p>📱 +91 7877967775</p>
              <p>📍 Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and</span>
            <Code className="text-blue-400" size={16} />
            <span>by Gourangi Malhotra</span>
          </div>
          <p className="text-gray-500 mt-2">
            © 2025 Gourangi Malhotra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;