
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background particles effect matching your theme */}
      <div className="absolute inset-0 particles-bg"></div>
      
      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Simple spinner matching your theme */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-red-500 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Your name/brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-2">
            Saurabh Prakash <span className="text-red-500">Lakhan</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Loading...
          </p>
        </div>

        {/* Progress bar matching your theme */}
        <div className="w-64 max-w-full mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Initializing</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Floating elements matching your existing design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-red-500/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  );
};

export default Loader;
