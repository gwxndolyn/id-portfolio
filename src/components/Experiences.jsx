import React, { useState, useEffect } from 'react';

const Experiences = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Tech Company',
      period: '2024',
      description: 'Developed web applications using React and Node.js'
    },
    {
      title: 'Business Analyst Intern',
      company: 'Consulting Firm',
      period: '2023',
      description: 'Analyzed business processes and created strategic recommendations'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Startup',
      period: '2023',
      description: 'Built end-to-end solutions using modern web technologies'
    },
    {
      title: 'Student Projects',
      company: 'University',
      period: '2022-2024',
      description: 'Various academic and personal programming projects'
    }
  ];

  const [fallingExperiences, setFallingExperiences] = useState([]);

  useEffect(() => {
    const createFallingExperience = () => {
      const experience = experiences[Math.floor(Math.random() * experiences.length)];
      const id = Math.random();
      const delay = Math.random() * 2000;
      const duration = 3000 + Math.random() * 2000;
      const position = Math.random() * 90;

      setTimeout(() => {
        setFallingExperiences(prev => [...prev, {
          id,
          title: experience.title,
          position,
          duration
        }]);

        setTimeout(() => {
          setFallingExperiences(prev => prev.filter(s => s.id !== id));
        }, duration);
      }, delay);
    };

    for (let i = 0; i < 6; i++) {
      createFallingExperience();
    }

    const interval = setInterval(createFallingExperience, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 relative overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-8">Experiences</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          My journey through various roles and projects
        </p>
        
        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden animate-float"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              {/* Glowing background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[1px]">
                <div className="w-full h-full bg-gray-900/80 rounded-xl"></div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-100"></div>
              
              {/* Content */}
              <div className="relative z-10 text-left">
                <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 mb-1">
                  {experience.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 font-medium">{experience.company}</span>
                  <span className="text-gray-400 text-sm">{experience.period}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {experience.description}
                </p>
              </div>
              
              {/* Hover ripple effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Falling experiences animation */}
      <div className="absolute inset-0 pointer-events-none">
        {fallingExperiences.map(({ id, title, position, duration }) => (
          <div
            key={id}
            className="absolute text-white/20 font-semibold text-sm select-none"
            style={{
              left: `${position}%`,
              top: '-50px',
              animation: `fall ${duration}ms linear forwards`
            }}
          >
            {title}
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

export default Experiences;