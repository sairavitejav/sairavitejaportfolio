
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      color: 'from-blue-500 to-blue-600',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Back-End',
      color: 'from-green-500 to-green-600',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Middleware']
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-purple-600',
      skills: ['MongoDB', 'SQL', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Other Tools',
      color: 'from-cyan-500 to-cyan-600',
      skills: ['Python', 'Git', 'GitHub', 'VS Code', 'Postman', 'npm/yarn']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Technologies I've been working with recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-lift glow-on-hover">
              <div className="text-center mb-4">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary/50 rounded-md text-sm text-center hover:bg-secondary transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
