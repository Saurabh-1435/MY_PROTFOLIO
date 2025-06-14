

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "HTML", icon: "🌐", color: "text-orange-500" },
        { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-400" },
        { name: "CSS", icon: "🎭", color: "text-blue-500" },
        { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
        { name: "Bootstrap", icon: "🅱️", color: "text-purple-500" }
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Java", icon: "☕", color: "text-red-500" },
        { name: "Spring Boot", icon: "🍃", color: "text-green-500" },
        { name: "Spring", icon: "🌱", color: "text-green-400" },
        { name: "Hibernate", icon: "🔄", color: "text-brown-500" },
        { name: "JDBC", icon: "🔗", color: "text-blue-600" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "Firebase", icon: "🔥", color: "text-orange-400" },
        { name: "MySQL", icon: "🐬", color: "text-blue-500" },
        { name: "MongoDB", icon: "🍃", color: "text-green-600" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "📝", color: "text-red-400" },
        { name: "GitHub", icon: "🐙", color: "text-gray-300" },
        { name: "VS Code", icon: "💻", color: "text-blue-400" },
        { name: "STS", icon: "🔧", color: "text-green-500" },
        { name: "Eclipse", icon: "🌙", color: "text-purple-400" },
        { name: "Postman", icon: "📮", color: "text-orange-500" },
        { name: "Figma", icon: "🎨", color: "text-pink-400" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧩", color: "text-blue-400" },
        { name: "Team Collaboration", icon: "🤝", color: "text-green-400" },
        { name: "Communication", icon: "💬", color: "text-purple-400" },
        { name: "Critical Thinking", icon: "🎯", color: "text-red-400" },
        { name: "Time Management", icon: "⏰", color: "text-yellow-400" },
        { name: "Adaptability", icon: "🔄", color: "text-cyan-400" },
        { name: "Leadership", icon: "👑", color: "text-orange-400" },
        { name: "Creativity", icon: "✨", color: "text-pink-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-dark-matter-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Technical <span className="text-red-500">Skills</span>
          </h2>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="glassmorphism p-8 rounded-lg hover-glow"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center border-b border-red-500/30 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-red-500/10 transition-all duration-300 cursor-default group hover:scale-105"
                  >
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className={`text-sm font-medium ${skill.color} group-hover:text-white transition-colors duration-300`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

