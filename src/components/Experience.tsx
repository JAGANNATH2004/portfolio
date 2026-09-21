import React, { useRef } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const experiences = [
    {
      title: "AI based Application Developer",
      company: "Infosys Springboard",
      duration: "July 2026 – September 2026",
      description:
        "Developed AI-powered applications leveraging large language models, retrieval-augmented generation, and intelligent agents. Built end-to-end features spanning backend services, API integration, and user-facing interfaces, with a focus on practical, production-ready AI solutions.",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-teal-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } gradient-text`}
          >
            Experience
          </h2>

          <p
            className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Professional roles and internships building real-world AI applications.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-start mb-8 transform transition-all duration-700 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 ring-4 ring-gray-900 md:-translate-x-1/2 mt-6 z-10" />

                {/* Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:mx-auto md:pl-12">
                  <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 neon-glow">
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.gradient} text-white flex-shrink-0`}>
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-2">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
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

export default Experience;
