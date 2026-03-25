
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Logistics & Fleet Management',
      description: 'Built a full-stack Logistics & Fleet Management System with real-time delivery tracking, role- based dashboards, Razorpay, and automated driver-customer communication. Implemented a Node.js/Express+MongoDB backend with Socket.IO and JWT auth, and a React/Vite frontend featuring live maps, analytics, and optimized state management.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO'],
      liveDemo: 'https://logistics-and-fleet-management.vercel.app/',
      github: 'https://github.com/sairavitejav/logistics_and_fleet_management',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1765548301/Screenshot_2025-12-12_192530_bh3nyh.png',
    },
    {
      title: 'Finance Tracker',
      description: 'Developed a full-stack Personal Finance Tracker using MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT-based authentication. Implemented features like transaction management, category-based tracking, monthly budget calculation, and real-time data visualization using Recharts. Designed responsive UI with protected routes, optimized state management, and improved user experience with loaders and dynamic dashboards.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      liveDemo: 'https://finance-tracker-black-iota.vercel.app/',
      github: 'https://github.com/sairavitejav/Finance_Tracker.git',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1774425905/Screenshot_2026-03-25_133427_wls8ee.png'
    },    
    {
      title: 'Task Manager',
      description: 'A real-time task management app that lets users add, edit, and delete tasks instantly. Tasks are displayed in a clean, card-based layout with a responsive and intuitive interface, ensuring seamless task tracking across all devices.',
      technologies: ['React.js', 'Node.js', 'SQL', 'Express.js'],
      liveDemo: 'https://tasksappsrt.vercel.app/',
      github: 'https://github.com/sairavitejav/taskmanager-assignment-sairaviteja',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751535133/Screenshot_2025-07-03_150159_awpzp8.png'
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
                {project.title === 'E-Commerce Application' && (<>
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
