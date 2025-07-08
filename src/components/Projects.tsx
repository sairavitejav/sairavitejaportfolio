
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    
    {
      title: 'Task Manager',
      description: 'A real-time task management app that lets users add, edit, and delete tasks instantly. Tasks are displayed in a clean, card-based layout with a responsive and intuitive interface, ensuring seamless task tracking across all devices.',
      technologies: ['React.js', 'Node.js', 'SQL', 'Express.js'],
      liveDemo: 'https://tasksappsrt.vercel.app/',
      github: 'https://github.com/sairavitejav/taskmanager-assignment-sairaviteja',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751535133/Screenshot_2025-07-03_150159_awpzp8.png'
    },
    {
      title: 'E-Commerce Application',
      description: 'A frontend e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Features include Sorting, Filtering, Searching Products.',
      technologies: ['React.js', 'Node.js', 'SQL', 'Express.js', 'Mock API'],
      liveDemo: 'https://ecommercesrt.vercel.app/login',
      github: 'https://github.com/sairavitejav/srtnxttrends',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751534640/Screenshot_2025-07-03_145202_i7uyyp.png'
    },
    {
      title: 'YouTube-like Streaming Application',
      description: 'A video streaming platform with user authentication, different categories, save video temporarily, like/dislike functionality, and responsive video player with playlist management.',
      technologies: ['React.js', 'Node.js', 'SQL', 'Express.js', 'Mock API'],
      liveDemo: 'https://cloneyoutubesrt.vercel.app',
      github: 'https://github.com/sairavitejav/cloneottappsrt',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751530779/Screenshot_2025-07-03_134838_mfyiup.png',
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
                {project.title !== 'Task Manager' && (<>
                  <h1 className="text-xl">User Credentials</h1>
                <p className="text-muted-foreground mb-1 text-sm leading-relaxed">Username: rahul</p>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Password: rahul@2021</p>
                </>
              )}
                
                
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
