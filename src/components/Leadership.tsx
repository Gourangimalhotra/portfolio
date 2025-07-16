import React from 'react';
import { Users, Megaphone, Dumbbell, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Leadership = () => {
  const { ref, isVisible } = useScrollAnimation();

  const positions = [
    {
      title: "Management Head",
      organization: "Yoga & Fitness Club | VGU",
      period: "2025–Present",
      description: "Leading fitness initiatives and managing club operations to promote wellness among students",
      icon: <Dumbbell className="text-green-400" size={24} />,
      color: "bg-green-600"
    },
    {
      title: "Student Coordinator",
      organization: "Panache | VGU",
      period: "2024",
      description: "Coordinated student activities and events, fostering collaboration and community engagement",
      icon: <Users className="text-blue-400" size={24} />,
      color: "bg-blue-600"
    },
    {
      title: "PR Head",
      organization: "Decoller Club | VGU",
      period: "Jan–May 2024",
      description: "Managed public relations and marketing strategies to enhance club visibility and engagement",
      icon: <Megaphone className="text-purple-400" size={24} />,
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leadership & <span className="text-blue-400">Extracurricular</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 ${position.color} rounded-lg shrink-0`}>
                    {position.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {position.title}
                        </h3>
                        <p className="text-blue-400 font-medium text-lg">
                          {position.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <Calendar className="text-gray-400" size={16} />
                        <span className="text-gray-400 font-medium">{position.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-800 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Leadership <span className="text-blue-400">Impact</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">Team Management</h4>
                <p className="text-gray-300 text-sm">
                  Leading diverse teams and coordinating activities across multiple student organizations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">Communication</h4>
                <p className="text-gray-300 text-sm">
                  Developing strong communication skills through PR activities and public speaking
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">Wellness Advocacy</h4>
                <p className="text-gray-300 text-sm">
                  Promoting health and wellness initiatives to improve student life and well-being
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;