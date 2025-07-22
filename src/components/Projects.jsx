import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      category: 'Web App'
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning algorithms. Provides customer support and automated responses with natural language processing.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      category: 'AI/ML'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with interactive animations and minimalist design. Built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A real-time weather application with interactive maps, detailed forecasts, and location-based services. Integrates with multiple weather APIs.',
      technologies: ['React', 'Mapbox', 'OpenWeather API', 'TypeScript'],
      category: 'Web App'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features for motivation.',
      technologies: ['React Native', 'Firebase', 'GraphQL', 'AWS'],
      category: 'Mobile'
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white/60 text-sm">→</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded text-white/50 text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button className="text-white/60 hover:text-white text-sm transition-colors">
                    View Project →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-white/60 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <button className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
              Let's Talk
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 