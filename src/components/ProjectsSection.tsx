
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "React E-commerce Store",
      description: "Full-featured e-commerce platform with cart, payment integration, and admin dashboard.",
      tech: ["React", "Firebase", "Tailwind CSS", "Context API"],
      category: "React",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Firebase Chat App",
      description: "Real-time chat application with user authentication and message encryption.",
      tech: ["React", "Firebase", "Material-UI"],
      category: "Firebase",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop"
    },
    {
      title: "Java Billing System",
      description: "Desktop billing application for small businesses with inventory management.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      category: "Java",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Spring Boot Admin Dashboard",
      description: "RESTful admin panel with CRUD operations and user role management.",
      tech: ["Spring Boot", "React", "MySQL", "JWT"],
      category: "Spring Boot",
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }
  ];

  const filters = ['All', 'React', 'Java', 'Firebase', 'Spring Boot'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterName) => (
            <Button
              key={filterName}
              variant={filter === filterName ? "default" : "outline"}
              onClick={() => setFilter(filterName)}
              className={filter === filterName 
                ? "bg-red-500 hover:bg-red-600 text-white" 
                : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }
            >
              {filterName}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="glassmorphism rounded-lg overflow-hidden hover-glow group transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
