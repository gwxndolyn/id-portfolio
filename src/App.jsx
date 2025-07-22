import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App; 