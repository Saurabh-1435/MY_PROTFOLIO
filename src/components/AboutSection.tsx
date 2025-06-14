
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Who Am <span className="text-red-500">I?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Location
              </h3>
              <p className="text-gray-300">Based in Pune, Maharashtra</p>
            </div>

            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Education
              </h3>
              <p className="text-gray-300">BE in Computer Engineering (2024)</p>
              <p className="text-gray-400 text-sm">North Maharashtra University</p>
            </div>

            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Passion
              </h3>
              <p className="text-gray-300">
                UI/UX Design, Backend Architecture, and Automation
              </p>
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
