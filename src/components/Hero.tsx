
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-2">
              <p className="text-primary font-mono text-lg">Hi, my name is</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Sai Ravi Teja V
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground">
                Full-Stack Developer
              </h2>
            </div>
            
            <p className="text-xl gradient-text font-semibold animate-text-reveal">
              MERN | Python Programmer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I'm a passionate B.Tech graduate specializing in building exceptional digital experiences. 
              Currently focused on creating innovative web applications using modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-lift"
              >
                Get In Touch
              </Button>
              <a href="https://drive.google.com/file/d/1ngKQC9PpDXBeXT2ue7Cw7XFtw3yGLsGp/view?usp=drive_link" target="_blank">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg hover-lift"
              >
                View Resume
              </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-bounce-slow">
                <div className="w-72 h-72 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dxi9xkgna/image/upload/v1751527431/IMG_20211030_183000_752_nvmofu.jpg"
                    alt="V Sai Ravi Teja"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
