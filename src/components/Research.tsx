import React, { useRef } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Research: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } gradient-text`}>
            Research
          </h2>
          
          <p className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Contributing to impactful research in healthcare through technology.
          </p>
          
          <div className={`glass rounded-xl p-8 transform transition-all duration-700 delay-400 neon-glow ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-white">Thero: Personal Mental Health Chat Bot</h3>
                <p className="text-gray-400 mb-4">
                  International Journal of Research Publication and Reviews
                </p>
                <p className="text-gray-300 mb-6">
                  As part of final year project at Presidency University, Bengaluru, we developed Thero, an AI-driven chatbot designed to provide emotional support, mental wellness tips, and personalized music recommendations. The chatbot leverages the Gemini API to deliver empathetic and responsive interactions, aiming to assist users during challenging times.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="w-full md:w-1/3">
                    <div className="text-sm text-gray-400 mb-1">Research Impact</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isInView ? '75%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3">
                    <div className="text-sm text-gray-400 mb-1">Methodology</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isInView ? '85%' : '0%', transitionDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3">
                    <div className="text-sm text-gray-400 mb-1">Innovation</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isInView ? '80%' : '0%', transitionDelay: '0.4s' }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ijrpr.com/uploads/V6ISSUE5/IJRPR45987.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-2">View Research Paper</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;