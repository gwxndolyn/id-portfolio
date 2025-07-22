import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Passionate developer focused on creating clean, efficient, and user-centered digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Background
              </h3>
              <p className="text-white/70 leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building 
                scalable web applications. I specialize in modern JavaScript frameworks, 
                cloud architecture, and creating intuitive user interfaces that prioritize 
                both functionality and aesthetics.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Philosophy
              </h3>
              <p className="text-white/70 leading-relaxed">
                I believe in writing code that's not just functional, but elegant and 
                maintainable. Every project is an opportunity to learn, innovate, and 
                push the boundaries of what's possible in web development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Approach
              </h3>
              <p className="text-white/70 leading-relaxed">
                I focus on clean architecture, performance optimization, and user experience. 
                My development process emphasizes testing, documentation, and continuous 
                improvement to deliver robust solutions.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/40 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <motion.div
                      className="bg-white h-1 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-6">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
                  'AWS', 'Docker', 'Git', 'TypeScript', 'Tailwind CSS', 'Next.js'
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white/5 rounded-full text-white/60 text-sm border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 