import React, { useState, useEffect } from 'react';

const RoleTypewriter = ({ className = "" }) => {
  const roles = ['Student', 'Software Engineer', 'Business Analyst'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds when complete
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Backspace
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        // Type forward
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        
        if (currentText === currentRole) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 50 : 100); // Faster when deleting

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentRoleIndex, roles]);

  return (
    <span className={className}>
      <span className="font-light">I am a </span>{currentText}
      <span className="animate-pulse font-bold text-gray-400">|</span>
    </span>
  );
};

export default RoleTypewriter;