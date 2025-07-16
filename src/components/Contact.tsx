import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: "Email",
      value: "malhotragourang@gmail.com",
      href: "mailto:malhotragourang@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: "Phone",
      value: "+91 7877967775",
      href: "tel:+917877967775"
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: "LinkedIn",
      value: "gourangi-malhotra",
      href: "https://linkedin.com/in/gourangi-malhotra-69716434b"
    },
    {
      icon: <Github className="text-gray-400" size={24} />,
      label: "GitHub",
      value: "github.com",
      href: "https://github.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Ready to collaborate on innovative AI and data science projects? 
              Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-900 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-blue-400" size={24} />
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                </div>
                <p className="text-gray-300">
                  Vivekananda Global University<br />
                  Jaipur, Rajasthan, India
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;