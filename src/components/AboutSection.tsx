
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const handleResumeDownload = () => {
    // Create a temporary link to download resume
    // You can replace this with actual resume file URL
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume file path
    link.download = 'Saurabh_Prakash_Lakhan_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Contact <span className="text-red-500">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in building scalable web applications. 
                My journey in software development has been driven by curiosity and a constant desire to learn 
                and implement cutting-edge technologies.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                My Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code that not only solves problems but also 
                creates meaningful user experiences. Every project is an opportunity to push boundaries 
                and deliver exceptional results.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                What Drives Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The intersection of technology and creativity fascinates me. I'm constantly exploring 
                new frameworks, design patterns, and architectural approaches to stay at the forefront 
                of modern development practices.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                onClick={handleResumeDownload}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg hover-glow flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Professional Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Full Stack Development</h4>
                  <p className="text-gray-400 text-sm">
                    Specialized in building end-to-end web applications using React, Spring Boot, and modern databases.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Hackathon Participation</h4>
                  <p className="text-gray-400 text-sm">
                    Actively participated in coding competitions and hackathons, building innovative solutions under pressure.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Real-world Projects</h4>
                  <p className="text-gray-400 text-sm">
                    Built several production-ready applications with focus on scalability, performance, and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
