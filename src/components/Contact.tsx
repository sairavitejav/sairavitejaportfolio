
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '7a1a8e42-f1cb-4277-845e-ef338e47fab9',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000); // clear status message after 5 seconds
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sairavitejav',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sairaviteja-vudathala/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sairaviteja1920@gmail.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 hover-lift disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center text-sm font-medium animate-fade-in-up">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-destructive text-center text-sm font-medium animate-fade-in-up">
                  Failed to send message. Please try again or contact me directly.
                </p>
              )}
            </form>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently looking for new opportunities in full-stack development. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <a href="https://drive.google.com/file/d/1fwAUdTL7mhxoNwPdxXKQZy96X4WUlVkQ/view?usp=sharing" target='_blank' download="VudathalaSaiRaviTeja_Resume.pdf">
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 hover-lift"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
