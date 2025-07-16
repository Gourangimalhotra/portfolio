import React from 'react';
import { Code, Database, Globe, Cpu, Terminal, Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["Python", "JavaScript", "HTML5", "CSS3", "MySQL"],
      color: "bg-blue-600"
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="text-green-400" size={24} />,
      skills: ["PyTorch", "Pandas", "NumPy", "Matplotlib", "Deep Learning"],
      color: "bg-green-600"
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-purple-400" size={24} />,
      skills: ["Docker", "Jenkins", "Linux", "Shell", "Git"],
      color: "bg-purple-600"
    },
    {
      title: "Web Development",
      icon: <Globe className="text-orange-400" size={24} />,
      skills: ["Streamlit", "HTML5", "CSS3", "JavaScript", "WebRTC"],
      color: "bg-orange-600"
    },
    {
      title: "Data Science",
      icon: <Database className="text-cyan-400" size={24} />,
      skills: ["Data Analysis", "Machine Learning", "Data Visualization", "Statistics"],
      color: "bg-cyan-600"
    },
    {
      title: "Emerging Tech",
      icon: <Layers className="text-pink-400" size={24} />,
      skills: ["Prompt Engineering", "Agentic AI", "NLP", "Computer Vision"],
      color: "bg-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${category.color} rounded-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${category.color} rounded-full`}></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-800 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Core <span className="text-blue-400">Competencies</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">AI & Machine Learning</h4>
                <p className="text-gray-300 text-sm">
                  Building intelligent systems with PyTorch, implementing ML algorithms, and creating data-driven solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">Data Science</h4>
                <p className="text-gray-300 text-sm">
                  Analyzing complex datasets, creating visualizations, and extracting actionable insights from data
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Terminal className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">DevOps & Automation</h4>
                <p className="text-gray-300 text-sm">
                  Containerization with Docker, CI/CD pipelines, and automating deployment processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;