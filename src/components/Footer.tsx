import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold gradient-text">JV</div>
              <p className="text-gray-300 mt-2">Aspiring Data Scientist</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/jagannath-vungarala-437345250/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full glass neon-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/JAGANNATH2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full glass neon-glow"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Jagannath Vungarala. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Certifications
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Research
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;