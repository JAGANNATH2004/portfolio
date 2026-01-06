import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          <span className={`transition-colors duration-300 gradient-text ${scrolled ? '' : 'text-white'}`}>JV</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['about', 'skills', 'certifications', 'projects', 'research', 'education', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                scrolled ? 'text-gray-300' : 'text-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass shadow-xl absolute top-full left-0 right-0 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {['about', 'skills', 'certifications', 'projects', 'research', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-300 hover:text-blue-400 text-left py-2 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;