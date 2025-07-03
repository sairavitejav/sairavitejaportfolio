
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Application',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Features include admin dashboard, order management, and responsive design.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      liveDemo: 'https://demo-ecommerce-app.com',
      github: 'https://github.com/username/ecommerce-app',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop'
    },
    {
      title: 'Task Manager',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking with intuitive dashboard.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      liveDemo: 'https://demo-task-manager.com',
      github: 'https://github.com/username/task-manager',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop'
    },
    {
      title: 'YouTube-like Streaming Application',
      description: 'A video streaming platform with user authentication, video upload, comments system, like/dislike functionality, and responsive video player with playlist management.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Cloudinary'],
      liveDemo: 'https://demo-streaming-app.com',
      github: 'https://github.com/username/streaming-app',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift glow-on-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
