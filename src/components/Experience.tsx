import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Mentor',
      duration: 'July 2025 - Present',
      description: [
        'Mentored 50+ students in Full Stack Development with a strong focus on hands-on coding and real-world problem solving.',
        'Guided learners through projects, debugging, and coding assessments to strengthen technical foundations.',
        'Delivered clear explanations of complex concepts, improving student understanding and performance.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            My professional journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover-lift glow-on-hover relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                    {exp.role}
                  </h3>
                </div>
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                    {exp.duration}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-primary font-bold mt-1 text-lg leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
