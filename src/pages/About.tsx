
import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { BookOpen, Bot, Laptop, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import FloatingChatButton from '@/components/FloatingChatButton';

const About: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background gradient-texture">
      {/* Header - matching the homepage header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="font-bold text-xl">
              CS<span className="text-cs-blue-600">Query</span>Connect
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-primary hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a 
              href="#" 
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              Sign In
            </a>
            <ThemeToggle />
          </nav>
          
          {/* Mobile menu button - would be connected to a mobile menu in a full implementation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <section className="relative py-20 px-6 gradient-texture">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-cs-purple-400/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cs-blue-400/10 blur-3xl" />
          
          <div className="container mx-auto max-w-6xl text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">CSQueryConnect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're dedicated to simplifying the learning journey for computer science students through 
              technology and knowledge accessibility.
            </p>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-20 px-6 gradient-texture">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-card p-8 rounded-2xl animate-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-2xl font-bold mb-4">
                    Our <span className="text-cs-blue-500">Mission</span>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    CSQueryConnect was created with a singular vision: to make computer science education
                    more accessible, intuitive, and effective through the power of AI and organized knowledge.
                  </p>
                  <p className="text-muted-foreground">
                    We understand the challenges students face when preparing for exams or trying to grasp
                    complex CS concepts. Our platform bridges this gap by providing access to previous question
                    papers and intelligent AI assistance that can answer queries, explain concepts, and guide
                    learning paths.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="w-64 h-64 relative animate-float">
                    <div className="absolute inset-0 bg-gradient-to-r from-cs-blue-500/30 to-cs-purple-500/30 rounded-full blur-2xl"></div>
                    <div className="relative h-full w-full bg-muted rounded-2xl glass-card overflow-hidden">
                      {/* If you have an image, replace the bg-muted with bg-cover and add the image path */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cs-blue-900/20 to-cs-purple-900/20 opacity-70"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section - styled like the homepage features */}
        <section className="py-20 px-6 gradient-texture">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources designed to enhance your computer science education.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BookOpen className="text-cs-blue-500" />,
                  title: "Question Paper Archive",
                  description: "Access to previous semester question papers, organized by year and subject."
                },
                {
                  icon: <Bot className="text-cs-purple-500" />,
                  title: "AI Assistance",
                  description: "Intelligent answers to your computer science questions powered by Google Gemini."
                },
                {
                  icon: <Laptop className="text-cs-indigo-500" />,
                  title: "Interactive Learning",
                  description: "Engage with content in a way that enhances understanding and retention."
                },
                {
                  icon: <Users className="text-cs-blue-500" />,
                  title: "Community Support",
                  description: "Join a community of CS students and educators to enhance your learning journey."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-2xl animate-on-scroll"
                  style={{ 
                    transitionDelay: `${index * 0.2}s`,
                    transform: 'translateY(20px)' 
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-muted">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section - styled like the homepage CTA */}
        <section className="py-20 px-6 relative overflow-hidden gradient-texture">
          <div className="absolute inset-0 bg-gradient-to-br from-cs-blue-900/20 to-cs-purple-900/20 opacity-70"></div>
          <div className="container relative z-10 mx-auto max-w-4xl text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              CSQueryConnect is constantly evolving to better serve the needs of computer science students.
              We welcome your feedback, suggestions, and contributions to make this platform even more valuable.
            </p>
            <button className="hero-button bg-gradient-to-r from-cs-blue-600 to-cs-purple-600 hover:from-cs-blue-700 hover:to-cs-purple-700">
              Get Started
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
      {/* The FloatingChatButton already includes the chatbot functionality */}
    </div>
  );
};

export default About;
