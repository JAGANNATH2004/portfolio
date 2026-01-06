import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Brain, Database, Code, Terminal, Network } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      name: "Machine Learning",
      level: 30,
      color: "from-purple-500 to-pink-500"
    },
     {
      icon: <Brain className="w-8 h-8" />,
      name: "Artificial Intelligence with AI Agents",
      level: 40,
      color: "from-blue-500 to-orange-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Data Science",
      level: 40,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "Programming",
      level: 50,
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      name: "Python",
      level: 50,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      name: "SQL",
      level: 40,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Power BI",
      level: 30,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } gradient-text`}>
            Skills
          </h2>
          
          <p className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Expertise across various domains of technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass rounded-xl p-6 transform transition-all duration-700 hover:scale-105 neon-glow ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-white">{skill.name}</h3>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-sm text-gray-400">Proficiency</div>
                    <div className="text-sm text-gray-400">{skill.level}%</div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <div
                      style={{
                        width: isInView ? `${skill.level}%` : '0%',
                        transition: 'width 1s ease-out'
                      }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color}`}
                    ></div>
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

export default Skills;