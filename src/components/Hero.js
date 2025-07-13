import React from 'react';
import Aurora from './Aurora';
import Lanyard from '../blocks/Components/Lanyard/Lanyard';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#3A29FF", "#FFFFFF", "#3A29FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Glass Font Name */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white/30 via-white/50 to-white/30 bg-clip-text text-transparent drop-shadow-2xl">
          Warren Yap
        </h1>
      </div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </section>
  );
};

export default Hero;
