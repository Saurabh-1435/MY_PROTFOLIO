
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-white animate-pulse">
            IAMDEV
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <p className="text-white/80 text-lg font-orbitron tracking-widest animate-pulse">
            LOADING...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400 font-mono">
            <span>0%</span>
            <span className="text-red-400">{progress}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Spinning loader */}
        <div className="mt-8 flex justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-red-500 rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500/50"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500/50"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-500/50"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500/50"></div>
    </div>
  );
};

export default Loader;
