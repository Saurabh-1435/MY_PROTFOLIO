
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-white mb-8">
          <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>I</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>A</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>M</span>
          <span className="inline-block animate-bounce text-red-500" style={{ animationDelay: '0.3s' }}>D</span>
          <span className="inline-block animate-bounce text-red-500" style={{ animationDelay: '0.4s' }}>E</span>
          <span className="inline-block animate-bounce text-red-500" style={{ animationDelay: '0.5s' }}>V</span>
        </h1>
        
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
        
        <p className="text-gray-300 text-sm tracking-widest uppercase animate-fade-in">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default Loader;
