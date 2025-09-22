import React from 'react';

const SpinningButton = ({ 
  text = "LET'S START", 
  onClick,
  size = 120,
  className = ""
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer rotating text circle */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          <defs>
            <path
              id="textCircle"
              d={`M ${size/2} ${size/2} m -${size/2 - 20} 0 a ${size/2 - 20} ${size/2 - 20} 0 1 1 ${2 * (size/2 - 20)} 0 a ${size/2 - 20} ${size/2 - 20} 0 1 1 -${2 * (size/2 - 20)} 0`}
            />
          </defs>
          <text
            fontSize="11"
            fontWeight="400"
            letterSpacing="3"
            fill="rgba(255, 255, 255, 0.8)"
            fontFamily="Inter, sans-serif"
          >
            <textPath href="#textCircle">
              {text} • {text} • {text} • 
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner circle with border */}
      <button
        onClick={onClick}
        className="absolute inset-0 m-4 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:border-white/40 transition-all duration-300 group"
        style={{
          width: size - 32,
          height: size - 32,
        }}
      >
        {/* Decorative dots */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        </div>

        {/* Central arrow */}
        <div className="flex items-center justify-center h-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:transform group-hover:translate-y-1 transition-transform duration-300"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default SpinningButton;
