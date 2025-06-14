
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative particles-bg">
      <div className="text-center z-10 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 animate-slide-in-up">
            Saurabh Prakash <span className="text-red-500">Lakhan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-6 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            A passionate developer who loves building dynamic, scalable, and responsive web and mobile applications. 
            Specialized in full-stack solutions using modern technologies.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg hover-glow"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-red-500/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400 w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
