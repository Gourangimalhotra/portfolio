import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      title: "EXIN BCS Artificial Intelligence Essentials",
      date: "Dec 2023",
      type: "Professional Certification",
      description: "Comprehensive understanding of AI fundamentals and applications"
    },
    {
      title: "AI for Techies Bootcamp",
      date: "May 2025",
      type: "Intensive Training",
      description: "Advanced AI concepts and practical implementation techniques"
    },
    {
      title: "Data Science Fundamentals",
      date: "June 2025",
      type: "OnWingspan Certification",
      description: "Core data science principles and methodologies"
    },
    {
      title: "Ethical Hacking Workshop",
      date: "April 2025",
      type: "HACK-O-SHOP",
      description: "Cybersecurity fundamentals and ethical hacking techniques"
    },
    {
      title: "Hackathon Participation",
      date: "2023",
      type: "Competition",
      description: "Collaborative problem-solving and rapid prototyping"
    },
    {
      title: "Campus Ambassador Certificate",
      date: "Aug–Sep 2024",
      type: "RINEX",
      description: "Leadership and community engagement experience"
    },
    {
      title: "Geeks for Geeks x Google Cloud Hackathon",
      date: "2024",
      type: "Volunteer",
      description: "Technical event coordination and cloud computing exposure"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certifications & <span className="text-blue-400">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-blue-400" size={16} />
                      <span className="text-blue-400 font-medium">{cert.date}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-3">
                      {cert.type}
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-lg p-8 shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Continuous <span className="text-blue-400">Learning</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and expertise 
              in AI, data science, and emerging technologies.
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-blue-600 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{certifications.length}</div>
                <div className="text-blue-200 text-sm">Certifications</div>
              </div>
              <div className="bg-green-600 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-green-200 text-sm">Specializations</div>
              </div>
              <div className="bg-purple-600 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-purple-200 text-sm">Hackathons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;