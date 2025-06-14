
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
        return prev + 1.5;
      });
    }, 40);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'slide 20s linear infinite'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Circular spinner */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-purple-200/20 rounded-full"></div>
            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 border-r-purple-500 rounded-full animate-spin"></div>
            {/* Inner ring */}
            <div className="absolute inset-4 border-2 border-transparent border-b-blue-400 border-l-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">I</span>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-2 animate-pulse">
            IAMDEV
          </h1>
          <p className="text-gray-300 text-lg tracking-wider">
            Loading Experience
          </p>
        </div>

        {/* Progress section */}
        <div className="w-80 max-w-full mx-auto">
          {/* Progress bar */}
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-4 border border-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between text-sm text-gray-400 font-mono">
            <span>Initializing...</span>
            <span className="text-purple-400">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full animate-float"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        ></div>
      ))}

      <style>
        {`
          @keyframes slide {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50px, -50px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
