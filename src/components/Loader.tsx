
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
    <div className="fixed inset-0 z-50 flex items-center justify-center loader-bg">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-orbitron font-black text-white animate-morph-text text-glow">
          I_AM_DEV
        </h1>
        <div className="mt-8 w-24 h-1 bg-red-500 mx-auto animate-pulse"></div>
        <p className="mt-4 text-gray-400 text-sm tracking-widest">LOADING PORTFOLIO...</p>
      </div>
    </div>
  );
};

export default Loader;
