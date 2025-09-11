import React from 'react';
import FloatingNavbar from './components/FloatingNavbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experiences from './components/Experiences.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Fixed Blue Gradient Background at Top */}
      <div className="fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none z-0"></div>
      
      <FloatingNavbar />
      <section id="home" className="relative z-10">
        <Hero />
      </section>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <section id="skills" className="relative z-10">
        <Skills />
      </section>
      <section id="experiences" className="relative z-10">
        <Experiences />
      </section>
      <section id="contact" className="relative z-10">
        <Contact />
      </section>
    </div>
  );
}

export default App; 