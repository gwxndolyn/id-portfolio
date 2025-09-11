import React from 'react';
import { motion } from 'framer-motion';

const Experiences = () => {
  const experiences = [
    {
      title: 'Singapore Management University',
      organization: 'Bachelor of Science, Information Systems',
      period: '2024 - 2028',
      type: 'education',
      description: '',
      highlights: []
    },
    {
      title: 'National Service',
      organization: '1st Commando Battalion',
      period: '2021 - 2023',
      type: 'work',
      description: 'Best Combat Unit in the Army Training Evaluation Centre.',
      highlights: []
    },
    {
      title: 'Anglo Chinese Junior College',
      organization: 'A-Levels',
      period: '2020 - 2021',
      type: 'education',
      description: 'Edusave Certificate of Academic Achievement',
      highlights: []
    },
    {
      title: 'Fairfield Methodist School (Secondary)',
      organization: 'O-Levels',
      period: '2016 - 2019',
      type: 'education',
      description: 'Edusave Award for Achievement,Good Leadership and Service (EAGLES)',
      highlights: []
    },
  ];


  // Separate and sort experiences
  const workExperiences = experiences
    .filter(exp => exp.type === 'work')
    .sort((a, b) => {
      const yearA = parseInt(a.period.split(' - ')[1] || a.period.split(' - ')[0]);
      const yearB = parseInt(b.period.split(' - ')[1] || b.period.split(' - ')[0]);
      return yearB - yearA;
    });

  const educationExperiences = experiences
    .filter(exp => exp.type === 'education')
    .sort((a, b) => {
      const yearA = parseInt(a.period.split(' - ')[1] || a.period.split(' - ')[0]);
      const yearB = parseInt(b.period.split(' - ')[1] || b.period.split(' - ')[0]);
      return yearB - yearA;
    });

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-6">
            My Experiences
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Work Experience</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-500/30"></div>
              
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                    <h4 className="text-base md:text-lg font-medium text-white leading-tight">
                      {experience.title}
                    </h4>
                    <span className="text-xs text-white/50 sm:ml-3 flex-shrink-0 mt-1 sm:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-2 font-medium">
                    {experience.organization}
                  </p>
                  
                  <p className="text-white/60 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V15h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Education</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/30"></div>
              
              {educationExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="relative pl-6 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                    <h4 className="text-base md:text-lg font-medium text-white leading-tight">
                      {experience.title}
                    </h4>
                    <span className="text-xs text-white/50 sm:ml-3 flex-shrink-0 mt-1 sm:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-blue-300 text-sm mb-2 font-medium">
                    {experience.organization}
                  </p>
                  
                  <p className="text-white/60 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiences; 