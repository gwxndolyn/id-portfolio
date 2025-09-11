import React, { useState, useEffect } from 'react';

const Skills = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'SQL', 'MongoDB', 'AWS',
    'Git', 'CSS', 'Tailwind', 'HTML',
    'Firebase', 'Vercel', 'Linux', 'Figma'
  ];

  const [fallingSkills, setFallingSkills] = useState([]);

  useEffect(() => {
    const createFallingSkill = () => {
      const skill = skills[Math.floor(Math.random() * skills.length)];
      const id = Math.random();
      const delay = Math.random() * 2000; // Random delay up to 2 seconds
      const duration = 3000 + Math.random() * 2000; // Duration between 3-5 seconds
      const position = Math.random() * 90; // Random horizontal position (0-90%)

      setTimeout(() => {
        setFallingSkills(prev => [...prev, {
          id,
          skill,
          position,
          duration
        }]);

        // Remove the skill after animation completes
        setTimeout(() => {
          setFallingSkills(prev => prev.filter(s => s.id !== id));
        }, duration);
      }, delay);
    };

    // Create initial skills
    for (let i = 0; i < 8; i++) {
      createFallingSkill();
    }

    // Continue creating skills every 800ms
    const interval = setInterval(createFallingSkill, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-transparent text-white py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold  mb-20">Skills & Technologies</h2>
        
        {/* Natural alternating skills layout */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            // Create natural spacing variations
            const marginTop = [0, 8, 16, 24, 12, 4][index % 6]; // Varying top margins for natural flow
            
            return (
              <div
                key={skill}
                className="group relative px-4 py-3 h-12 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl hover:border-white/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden animate-float"
                style={{ 
                  marginTop: `${marginTop}px`,
                  animationDelay: `${index * 150}ms`,
                  animationDuration: `${3 + (index % 4)}s`
                }}
              >
                {/* Glowing background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[1px]">
                  <div className="w-full h-full bg-gray-900/80 rounded-xl"></div>
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-100"></div>
                
                {/* Content */}
                <span className="relative z-10 text-sm font-medium text-white/80 group-hover:text-white group-hover:font-semibold transition-all duration-300 group-hover:drop-shadow-lg whitespace-nowrap">
                  {skill}
                </span>
                
                {/* Hover ripple effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Falling skills animation */}
      <div className="absolute inset-0 pointer-events-none">
        {fallingSkills.map(({ id, skill, position, duration }) => (
          <div
            key={id}
            className="absolute text-white/20 font-semibold text-lg select-none"
            style={{
              left: `${position}%`,
              top: '-50px',
              animation: `fall ${duration}ms linear forwards`
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;