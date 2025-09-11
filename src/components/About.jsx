import React, { useState, useEffect, useRef } from 'react';
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
    <section ref={sectionRef} className="min-h-screen bg-transparent text-white py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        
        <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative">
              <TiltedCard
                imageSrc="/assets/img.jpg"
                altText="Warren Yap"
                captionText=""
                containerHeight="480px"
                containerWidth="384px"
                imageHeight="480px"
                imageWidth="384px"
                rotateAmplitude={28}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                style={{ borderRadius: '1rem' }}
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/30 rounded-full blur-sm"></div>
              
              {/* Resume Folder */}
              <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 z-30">
                <div className="flex flex-col items-center">
                  <Folder
                    size={0.8}
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
          </div>
          
          {/* Text Column */}
          <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">About Me</h2>
            <ScrambledText
              className="text-lg text-gray-300 leading-relaxed !m-0 mb-6"
              radius={90}
              duration={1}
              speed={0.8}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
            >
              I'm a passionate full-stack developer with a love for creating digital experiences that make a real impact. With expertise in modern web technologies and a keen eye for design, I bridge the gap between functionality and aesthetics.
            </ScrambledText>
            
            <ScrambledText
              className="text-lg text-gray-300 leading-relaxed !m-0 mb-6"
              radius={90}
              duration={1}
              speed={0.8}
              scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what's possible.
            </ScrambledText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;