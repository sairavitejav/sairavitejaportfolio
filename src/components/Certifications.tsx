
import React from 'react';
import { Card } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      name: 'React - The Complete Guide',
      platform: 'Udemy',
      year: '2023',
      icon: '⚛️'
    },
    {
      name: 'Node.js, Express & MongoDB Bootcamp',
      platform: 'Udemy',
      year: '2023',
      icon: '🟢'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      platform: 'freeCodeCamp',
      year: '2023',
      icon: '📊'
    },
    {
      name: 'Python for Data Science',
      platform: 'Coursera',
      year: '2022',
      icon: '🐍'
    },
    {
      name: 'Responsive Web Design',
      platform: 'freeCodeCamp',
      year: '2022',
      icon: '🎨'
    },
    {
      name: 'Git & GitHub Masterclass',
      platform: 'Udemy',
      year: '2022',
      icon: '📚'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover-lift glow-on-hover text-center">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.name}</h3>
              <p className="text-primary font-medium mb-1">{cert.platform}</p>
              <p className="text-muted-foreground text-sm">{cert.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
