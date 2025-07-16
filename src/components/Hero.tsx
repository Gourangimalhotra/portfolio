import React from 'react';
import { Download, Mail, Github, ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Gourangi <span className="text-blue-400">Malhotra</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Aspiring Data Scientist | AI-ML Enthusiast | Building Intelligent, Data-Driven Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              <Download size={20} />
              Resume Download
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </button>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
        <div className="animate-bounce">
          <ArrowDown 
            size={32} 
            className="text-blue-400 mx-auto cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;