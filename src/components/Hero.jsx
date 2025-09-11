import React from 'react';
import Aurora from './Aurora.jsx';
import RoleTypewriter from './RoleTypewriter.jsx';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent text-white relative overflow-hidden pt-16 md:pt-0">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-10">
        <Aurora
          colorStops={["#3A29FF", "#959FAD", "#261C9A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Glass Font Name */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white/30 via-white/50 to-white/30 bg-clip-text text-transparent drop-shadow-2xl mb-4">
          Warren Yap
        </h1>
        
        {/* Role Typewriter */}
        <div className="text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-gray-300/50 via-gray-200/60 to-gray-300/50 bg-clip-text text-transparent mt-6 md:mt-10">
          <RoleTypewriter className="tracking-wide" />
        </div>

      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="relative group cursor-pointer focus:outline-none"
        >
          {/* Rotating Text */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 140 140" className="w-24 h-24 md:w-32 md:h-32">
              <defs>
                <path id="circle" d="M 70,70 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text fontSize="9" fill="white" fillOpacity="0.7" className="font-medium tracking-widest md:text-[11px]">
                <textPath href="#circle" startOffset="0%">
                  START HERE   • •
                </textPath>
              </text>
              <text fontSize="9" fill="white" fillOpacity="0.7" className="font-medium tracking-widest md:text-[11px]">
                <textPath href="#circle" startOffset="50%">
                  START HERE  • •
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Arrow */}
          <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-white/80 group-hover:text-white group-hover:translate-y-1 transform transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
