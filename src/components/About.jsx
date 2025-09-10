import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-transparent text-white py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="space-y-8 text-center">
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating digital experiences 
            that make a real impact. With expertise in modern web technologies and a keen eye 
            for design, I bridge the gap between functionality and aesthetics.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or sharing my knowledge with the developer community. 
            I believe in continuous learning and pushing the boundaries of what's possible.
          </p>
          
          <div className="pt-8">
            <h3 className="text-2xl font-semibold mb-8">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-lg">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300">Full-Stack Web Development</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-lg">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">UI/UX Design & Prototyping</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-lg">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Mobile App Development</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-lg">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-300">API Development & Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;