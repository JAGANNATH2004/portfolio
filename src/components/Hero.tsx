import React, { useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  useEffect(() => {
    document.title = 'Jagannath Vungarala | Data Science';
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jagannath.pdf';
    link.download = 'Jagannath_Vungarala_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        </div>
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-8 mb-6"
          >
            <div className="relative group">
              <img 
                src="/18647.webp" 
                alt="Jagannath Vungarala" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 neon-glow transition-all duration-300 group-hover:scale-105"
                style={{ objectPosition: '50% 30%' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text text-center">
              Jagannath Vungarala
            </h1>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium mb-6 text-gray-300"
          >
            Aspiring Data Scientist | AI Enthusiast
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8"
          >
            Exploring the realms of Data Science to drive innovation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a 
              href="https://github.com/JAGANNATH2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 neon-glow p-3 rounded-full glass"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jagannath-vungarala-437345250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 neon-glow p-3 rounded-full glass"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:vungaralajagannath04@example.com"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 neon-glow p-3 rounded-full glass"
            >
              <Mail className="w-8 h-8" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={handleDownloadResume}
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group mb-8"
              aria-label="Download Resume"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg opacity-100 group-hover:opacity-110 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 animate-pulse"></div>
              <div className="relative flex items-center justify-center gap-3 z-10">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-2 glass rounded-xl p-6"
          >
            <div className="text-center">
              <div className="text-sm text-gray-500">Location</div>
              <div className="text-gray-300">Chennai, INDIA</div>
            </div>
            <div className="hidden md:block h-10 w-px bg-gray-600"></div>

          </motion.div>
        </div>
      </div>
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 animate-bounce hover:text-blue-400 transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default Hero;