
import React from 'react';
import { Card } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      name: 'Full Stack Web Development',
      platform: 'NxtWave',
      year: '2025',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751537692/Screenshot_2025-07-03_154352_wuro6p.png',
      link: 'https://certificates.ccbp.in/intensive/irc?id=KW1DX228FM'
    },
    {
      name: 'Front-End Development',
      platform: 'Smart Internz',
      year: '2023',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751539332/Screenshot_2025-07-03_161134_uospmf.png',
      link: 'https://drive.google.com/file/d/1mit6DJWEBY26uNeQxXphTKxfCjDrdaf7/view?usp=sharing'
    },
    {
      name: 'Python Programming',
      platform: 'NPTEL',
      year: '2022',
      image: 'https://res.cloudinary.com/dxi9xkgna/image/upload/v1751539284/Screenshot_2025-07-03_161106_hxdnlj.png',
      link: 'https://drive.google.com/file/d/189S9pMp6FCefb3zqXtfAa7Y8asxxgg8q/view?usp=sharing'
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
            <a href={cert.link} target="_blank">
            <Card key={index} className="p-6 hover-lift glow-on-hover text-center">
              <h2 className="text-lg font-semibold mb-2 text-foreground">{cert.name}</h2>
              <img src={cert.image} alt={cert.name} />
              <p className="text-primary font-medium mb-1">{cert.platform}</p>
              <p className="text-muted-foreground text-sm">{cert.year}</p>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
