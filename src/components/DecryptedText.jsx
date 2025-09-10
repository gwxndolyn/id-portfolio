import React, { useState, useEffect } from 'react';

const DecryptedText = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  glitchDuration = 1000,
  onComplete = () => {} 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [started, setStarted] = useState(false);

  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const generateGlitchText = (targetText, revealedLength) => {
    return targetText
      .split('')
      .map((char, index) => {
        if (index < revealedLength) {
          return char;
        } else if (char === ' ') {
          return ' ';
        } else {
          return getRandomChar();
        }
      })
      .join('');
  };

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setStarted(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    setIsDecrypting(true);
    
    // Initial glitch phase
    const glitchInterval = setInterval(() => {
      setDisplayedText(generateGlitchText(text, 0));
    }, 50);

    // Start revealing characters after glitch duration
    setTimeout(() => {
      clearInterval(glitchInterval);
      
      let revealedChars = 0;
      const revealInterval = setInterval(() => {
        if (revealedChars <= text.length) {
          setDisplayedText(generateGlitchText(text, revealedChars));
          revealedChars++;
        } else {
          clearInterval(revealInterval);
          setDisplayedText(text);
          setIsDecrypting(false);
          onComplete();
        }
      }, speed);

      return () => clearInterval(revealInterval);
    }, glitchDuration);

    return () => clearInterval(glitchInterval);
  }, [text, speed, glitchDuration, started, onComplete]);

  return (
    <span className={`${className} ${isDecrypting ? 'text-green-400' : ''} transition-colors duration-300`}>
      {displayedText}
    </span>
  );
};

export default DecryptedText;