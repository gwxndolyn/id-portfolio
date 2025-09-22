import React, { useState, useEffect } from 'react';

const TypingText = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  showCursor = true,
  onComplete = () => {} 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

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
    if (!started || currentIndex >= text.length) {
      if (currentIndex >= text.length) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, started, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="animate-pulse text-blue-400">|</span>
      )}
    </span>
  );
};

export default TypingText;