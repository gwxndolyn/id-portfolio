import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrambledText from './ScrambledText.jsx';
import TiltedCard from './TiltedCard';
import Folder from './Folder.jsx';

const About = () => {
  const [startDecryption, setStartDecryption] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !startDecryption) {
          setStartDecryption(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [startDecryption]);
  return (
    <section ref={sectionRef} className="min-h-screen bg-transparent text-white py-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto">
          {/* Image Column */}
          <motion.div 
            className="flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
          >
            <div className="relative">
              {/* Mobile Image */}
              <div className="block md:hidden">
                <TiltedCard
                  imageSrc="/assets/img.jpg"
                  altText="Warren Yap"
                  captionText=""
                  containerHeight="300px"
                  containerWidth="240px"
                  imageHeight="300px"
                  imageWidth="240px"
                  rotateAmplitude={28}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  style={{ borderRadius: '1rem' }}
                />
              </div>
              
              {/* Desktop Image */}
              <div className="hidden md:block">
                <TiltedCard
                  imageSrc="/assets/img.jpg"
                  altText="Warren Yap"
                  captionText=""
                  containerHeight="420px"
                  containerWidth="356px"
                  imageHeight="420px"
                  imageWidth="356px"
                  rotateAmplitude={28}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  style={{ borderRadius: '1rem' }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/30 rounded-full blur-sm"></div>
              
              {/* Resume Folder */}
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-x-1/3 md:translate-y-1/2 z-30">
                <div className="flex flex-col items-center">
                  <Folder
                    size={0.6}
                    color="#3FA1DE"
                    className="custom-folder"
                    items={[
                      // Resume Image
                      <div
                        key="resume"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('/assets/resume.pdf', '_blank');
                        }}
                        className="w-full h-full cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
                      >
                        <img
                          src="/assets/resume.png"
                          alt="Resume Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ]}
                  />
                  <p className="text-xs text-white/50 mt-2 tracking-wide">View Resume</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="w-full order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
          >
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-10 text-center md:text-left">About Me</h2>
            <ScrambledText
              className="text-base md:text-lg text-gray-300 leading-relaxed !m-0 mb-6"
              radius={90}
              duration={1}
              speed={0.8}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
            >
              Hi, I’m Warren Yap, an Information Systems student at Singapore Management University. I’m passionate about technology and enjoy building web apps that bring ideas to life. I’ve been working with tools like JavaScript, React, and Python, and I love experimenting with new frameworks to sharpen my skills.
              
            </ScrambledText>
            <br />
            <ScrambledText
              className="text-base md:text-lg text-gray-300 leading-relaxed !m-0 mb-6"
              radius={90}
              duration={1}
              speed={0.8}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
            >
              When I'm not coding, you'll probably find me playing squash or climbing!
            </ScrambledText>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;