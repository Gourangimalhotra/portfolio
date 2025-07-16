import React from 'react';
import { User, GraduationCap, Code, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm Gourangi Malhotra, a 3rd-year B.Tech student at Vivekananda Global University, 
                    specializing in Artificial Intelligence and Data Science. I'm passionate about using 
                    data and intelligent algorithms to build impactful, real-world solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Currently pursuing B.Tech in AI & Data Science (2023–2027) with a growing 
                    passion for AI, ML, and data analytics. I've worked on projects that bridge 
                    technical development with user-friendly design.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Career Goals</h3>
                  <p className="text-gray-300 leading-relaxed">
                    With hands-on experience in ML model building and backend integration, 
                    I aim to pursue a career as a data scientist or AI/ML engineer, creating 
                    intelligent solutions for real-world impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Technical Expertise</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Programming & Tools</h4>
                  <p className="text-gray-300 text-sm">
                    Python, Docker, Jenkins, Linux, HTML, CSS, JavaScript, OOPs, MySQL, Streamlit
                  </p>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Libraries & Frameworks</h4>
                  <p className="text-gray-300 text-sm">
                    PyTorch, Pandas, NumPy, Matplotlib
                  </p>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Emerging Technologies</h4>
                  <p className="text-gray-300 text-sm">
                    Agentic AI, Prompt Engineering, Machine Learning, Deep Learning, NLP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;