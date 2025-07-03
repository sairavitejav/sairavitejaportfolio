
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <Card className="p-8 hover-lift glow-on-hover">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Hello! I'm Ravi Teja, a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and 
              recent B.Tech graduate with a strong foundation in modern web technologies. My journey in software development 
              began during my undergraduate studies, where I discovered my love for creating innovative digital solutions.
            </p>
            
            <p>
              I specialize in the <span className="text-accent font-semibold">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) 
              and have extensive experience with <span className="text-purple-400 font-semibold">Python</span> for backend development 
              and data analysis. I'm particularly interested in building scalable web applications that solve real-world problems.
            </p>
            
            <p>
              My technical interests extend beyond just coding - I'm passionate about learning new technologies, 
              contributing to open-source projects, and staying updated with the latest industry trends. 
              I believe in writing clean, maintainable code and following best practices in software development.
            </p>
            
            <p>
              <span className="text-primary font-semibold">Career Goal:</span> I'm seeking opportunities to work with innovative 
              companies where I can contribute to meaningful projects, collaborate with talented teams, and continue growing 
              as a developer while making a positive impact through technology.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
