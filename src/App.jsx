import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import FluidGlass from './blocks/Components/FluidGlass/FluidGlass.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* FluidGlass Navbar Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="pointer-events-auto">
          <FluidGlass 
            mode="bar"
            barProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 5,
              chromaticAberration: 0.1,
              anisotropy: 0.01,
              navItems: [
                { label: 'Home', link: '#hero' },
                { label: 'About', link: '#about' },
                { label: 'Projects', link: '#projects' },
                { label: 'Contact', link: '#contact' }
              ]
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App; 