import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } gradient-text`}>
            About Me
          </h2>

          <div className={`space-y-6 transform transition-all duration-700 delay-300 glass rounded-xl p-8 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Master of Computer Applications in Gen AI student at SRM University, Chennai, with a strong passion for System Design and Artificial Intelligence. I enjoy working with Big Data and have foundational knowledge of AI concepts and AI agents with knowledge on the MCP protocol and Large Language Models (LLMs) and building systems with Retrieval-Augmented Generation (RAG). With a background in biology from PUC, I'm particularly interested in exploring how genetics and technology can come together to create new possibilities.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My interest in technology goes beyond theoretical knowledge. I actively engage in projects that apply cutting-edge
              technologies to real-world problems
              and hands-on projects, I aim to contribute to innovations that have positive societal implications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My dream is to see India lead the world by launching a
              groundbreaking tech product that no other country can match. I want
              to be part of a team that drives innovation and makes India selfreliant in technology. I'm inspired by the brilliant minds in our country
              and excited to contribute to its technological future.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
