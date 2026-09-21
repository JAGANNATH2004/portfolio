import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const projects = [
    {
      title: "AI Based Skin Intelligence & Personalized Skincare",
      description: "Built an AI-powered skincare intelligence platform that analyzes users' skin profiles, lifestyle habits, sleep patterns, environmental exposure, and skin concerns to generate personalized skincare routines. The platform provides AI-driven skin assessments, ingredient and product analysis, routine planning, personalized recommendations, and skin progress tracking, supporting skincare consumers, dermatology clinics, wellness platforms, beauty brands, and skincare consultants.",
      tags: ["Machine Learning", "Web Development", "API Management", "Supabase"],
      link: "https://github.com/JAGANNATH2004/Skin",
      gradient: "from-emerald-500 to-cyan-600",
      shortTitle: "SkinCare AI"
    },
    {
      title: "AI based Job Scraper",
      description: "Developed an AI-powered job aggregation system that automatically collects and filters fresher-level opportunities in Data Science, Machine Learning, and AI from platforms like LinkedIn and Naukri. Integrated LLM-based filtering to identify relevant roles posted within the last 24 hours based on skills and experience criteria. Built a robust pipeline using web scraping, SQLite database storage, and deduplication to ensure accurate and up-to-date listings. Implemented a Telegram bot that delivers curated top job recommendations daily, improving accessibility and saving manual search time.",
      tags: ["Ollama", "Jobs", "Agent"],
      link: "https://github.com/JAGANNATH2004/AI-JobScout",
      gradient: "from-red-500 to-orange-600",
      shortTitle: "AI-JobScout"
    },
    {
      title: "Thero: Personal Mental Health Chat Bot",
      description: "Developed a chatbot providing emotional support, wellness tips, and personalized music recommendations using the Gemini API. Thero serves as a companion for users seeking mental health support and guidance in their daily lives.",
      tags: ["Gemini API", "Mental Health", "Chatbot"],
      link: "https://github.com/JAGANNATH2004/Mental-health-chatbot-Thero-.git",
      gradient: "from-blue-500 to-purple-600",
      shortTitle: "Thero"
    },
    {
      title: "Audio to Text Converter",
      description: "Created a real-time audio conversion system that transforms spoken words into text instantly. This tool enhances accessibility and productivity by providing accurate speech-to-text conversion with minimal latency.",
      tags: ["Speech Recognition", "Real-time Processing", "Python"],
      link: "https://www.linkedin.com/in/jagannath-vungarala-437345250/",
      gradient: "from-green-500 to-teal-600",
      shortTitle: "Voice2Text"
    },
    {
      title: "YouTube Video Downloader",
      description: "Developed a Python-based application enabling users to download YouTube videos directly to their devices. Utilized the Pytube library for video retrieval and Tkinter for a user-friendly GUI. The tool supports downloading in various resolutions and formats, enhancing offline accessibility. This project demonstrates proficiency in Python scripting and GUI development.",
      tags: ["YouTube", "Python"],
      link: "https://www.linkedin.com/in/jagannath-vungarala-437345250/",
      gradient: "from-yellow-500 to-pink-600",
      shortTitle: "Downloader"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } gradient-text`}>
            Projects
          </h2>
          
          <p className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Innovative solutions bridging technology and well-being.
          </p>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`transform transition-all duration-700 delay-${index * 200 + 400} ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 neon-glow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <div className={`h-64 md:h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                        <div className="text-white text-center">
                          <div className="text-3xl font-bold mb-2">{project.shortTitle}</div>
                          <div className="text-lg opacity-90">{project.title}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                      
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <ul className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <li key={tag} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href={project.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span className="mr-2">{project.link.includes("github.com") ? "View on GitHub" : "View on LinkedIn"}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
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

export default Projects;