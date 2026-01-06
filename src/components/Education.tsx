import React, { useRef } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const educationItems = [
    {
      id: 1,
      title: "Master's in Computer Applications with Gen AI (MCA[Gen AI])",
      institution: "S.R.M University, Chennai",
      duration: "2025 - 2027",
      icon: <GraduationCap className="w-6 h-6" />,
      details: "Specializing in Computer Science with Generative AI. CGPA : 9.17"
    },
    {
      id: 2,
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Presidency University, Bengaluru",
      duration: "2022 - 2025",
      icon: <GraduationCap className="w-6 h-6" />,
      details: "Specializing in Computer Science.     CGPA : 7.63"
    },
    {
      id: 3,
      title: "Pre-University Course (PUC)",
      institution: "Accord School",
      duration: "2020 - 2022",
      icon: <School className="w-6 h-6" />,
      details: "Science stream(PCB). Percentage :     71.33%"
    },
    {
      id: 4,
      title: "High School",
      institution: "Accord School",
      duration: "2016 - 2020",
      icon: <BookOpen className="w-6 h-6" />,
      details: "Grades 7th to 10th. Percentage : 65%"
    },
    {
      id: 5,
      title: "School",
      institution: "Sri Gouri Sankar Vidhyalayam",
      duration: "2010 - 2016",
      icon: <BookOpen className="w-6 h-6" />,
      details: "Grades 1st to 6th"
    }
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } gradient-text`}>
            Education
          </h2>
          
          <p className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Academic journey laying the foundation for technological pursuits.
          </p>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row transform transition-all duration-700 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
                >
                  <div className={`flex-1 md:${index % 2 === 0 ? 'text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <div className="glass p-6 rounded-lg neon-glow">
                      <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                      <div className="text-gray-300 mb-3">{item.institution}</div>
                      <div className="text-gray-400 mb-4">{item.duration}</div>
                      <p className="text-gray-300">{item.details}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-9 md:top-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white z-10 neon-glow">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education