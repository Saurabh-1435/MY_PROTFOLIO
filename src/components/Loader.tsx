
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
    }, 60);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
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
        {/* Animated overlay with moving gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-red-900/30 to-black/95">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/90 animate-pulse"></div>
        </div>
      </div>

      {/* Matrix-style falling code effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono whitespace-nowrap"
            style={{
              left: `${(i * 7) % 100}%`,
              animation: `matrixFall ${4 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 20 }, () => 
              String.fromCharCode(33 + Math.floor(Math.random() * 94))
            ).join('')}
          </div>
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/30 transform rotate-45 animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-red-500/20 transform rotate-12 animate-pulse"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* IAMDEV title with morphing effect */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-orbitron font-black">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 animate-morph-text">I</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-white animate-morph-text" style={{ animationDelay: '0.2s' }}>A</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 animate-morph-text" style={{ animationDelay: '0.4s' }}>M</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-600 to-white animate-morph-text ml-4" style={{ animationDelay: '0.6s' }}>D</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-600 animate-morph-text" style={{ animationDelay: '0.8s' }}>E</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-white animate-morph-text" style={{ animationDelay: '1s' }}>V</span>
          </h1>
        </div>

        {/* Glitch effect text */}
        <div className="mb-12">
          <div className="relative">
            <p className="text-white text-xl md:text-2xl font-orbitron tracking-wider glitch" data-text="INITIALIZING SYSTEM">
              INITIALIZING SYSTEM
            </p>
          </div>
        </div>

        {/* Progress bar with neon effect */}
        <div className="mb-8">
          <div className="w-80 h-2 mx-auto bg-gray-800 rounded-full overflow-hidden border border-red-500/30">
            <div 
              className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ease-out shadow-lg shadow-red-500/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-red-400 text-sm mt-3 font-mono">{progress}% LOADED</p>
        </div>

        {/* Scanning lines effect */}
        <div className="relative">
          <div className="flex justify-center space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-red-500 animate-pulse"
                style={{
                  height: `${20 + Math.sin((Date.now() / 300) + i) * 15}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for additional effects */}
      <style>{`
        @keyframes matrixFall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .glitch {
          position: relative;
          animation: glitch 2s infinite;
        }
        
        .glitch:before,
        .glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch:before {
          animation: glitchTop 1s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          color: #ff0040;
        }
        
        .glitch:after {
          animation: glitchBttm 1.5s linear infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          color: #00ffff;
        }
        
        @keyframes glitch {
          2%, 64% { transform: translate(2px, 0) skew(0deg); }
          4%, 60% { transform: translate(-2px, 0) skew(0deg); }
          62% { transform: translate(0, 0) skew(5deg); }
        }
        
        @keyframes glitchTop {
          2%, 64% { transform: translate(2px, -2px); }
          4%, 60% { transform: translate(-2px, 2px); }
          62% { transform: translate(13px, -1px) skew(-13deg); }
        }
        
        @keyframes glitchBttm {
          2%, 64% { transform: translate(-2px, 0); }
          4%, 60% { transform: translate(-2px, 0); }
          62% { transform: translate(-22px, 5px) skew(21deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
