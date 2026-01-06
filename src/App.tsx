import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';

// Lazy load components
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Projects = React.lazy(() => import('./components/Projects'));
const Research = React.lazy(() => import('./components/Research'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <SEO />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
            <About />
            <Skills />
            <Certifications />
            <Projects />
            <Research />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}

export default App