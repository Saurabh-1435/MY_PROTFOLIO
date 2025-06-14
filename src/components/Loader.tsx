
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/lovable-uploads/eca949d3-0e41-42f7-a130-3686b5805e83.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-900/20 to-black/90 animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-96 h-96 border-2 border-red-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-8 left-8 w-80 h-80 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-16 left-16 w-64 h-64 border border-red-300/40 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Main title with enhanced styling */}
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-white leading-none">
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0s', textShadow: '0 0 30px rgba(255, 0, 0, 0.8)' }}>I</span>
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0.1s', textShadow: '0 0 30px rgba(255, 255, 255, 0.8)' }}>A</span>
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0.2s', textShadow: '0 0 30px rgba(255, 0, 0, 0.8)' }}>M</span>
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300 ml-4" style={{ animationDelay: '0.3s', textShadow: '0 0 30px rgba(255, 0, 0, 1)' }}>D</span>
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0.4s', textShadow: '0 0 30px rgba(255, 0, 0, 1)' }}>E</span>
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300" style={{ animationDelay: '0.5s', textShadow: '0 0 30px rgba(255, 0, 0, 1)' }}>V</span>
          </h1>
        </div>
        
        {/* Enhanced loading indicator */}
        <div className="flex justify-center items-center space-x-3 mb-8">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
        </div>
        
        {/* Loading text with typewriter effect */}
        <div className="relative">
          <p className="text-gray-300 text-lg tracking-[0.3em] uppercase font-orbitron animate-pulse">
            <span className="inline-block" style={{ animationDelay: '0s' }}>L</span>
            <span className="inline-block" style={{ animationDelay: '0.1s' }}>o</span>
            <span className="inline-block" style={{ animationDelay: '0.2s' }}>a</span>
            <span className="inline-block" style={{ animationDelay: '0.3s' }}>d</span>
            <span className="inline-block" style={{ animationDelay: '0.4s' }}>i</span>
            <span className="inline-block" style={{ animationDelay: '0.5s' }}>n</span>
            <span className="inline-block" style={{ animationDelay: '0.6s' }}>g</span>
            <span className="inline-block ml-2" style={{ animationDelay: '0.7s' }}>P</span>
            <span className="inline-block" style={{ animationDelay: '0.8s' }}>o</span>
            <span className="inline-block" style={{ animationDelay: '0.9s' }}>r</span>
            <span className="inline-block" style={{ animationDelay: '1.0s' }}>t</span>
            <span className="inline-block" style={{ animationDelay: '1.1s' }}>f</span>
            <span className="inline-block" style={{ animationDelay: '1.2s' }}>o</span>
            <span className="inline-block" style={{ animationDelay: '1.3s' }}>l</span>
            <span className="inline-block" style={{ animationDelay: '1.4s' }}>i</span>
            <span className="inline-block" style={{ animationDelay: '1.5s' }}>o</span>
            <span className="animate-ping ml-1">...</span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
