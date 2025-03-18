
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl">
              CS<span className="text-cs-blue-600">Query</span>Connect
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
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
      
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <HeroSection />
        
        {/* Features section */}
        <section className="py-20 px-6 gradient-texture">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Enhanced Learning Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform combines traditional learning resources with cutting-edge AI technology
                to provide a comprehensive educational experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Previous Year Questions",
                  description: "Access a comprehensive collection of past exam papers to enhance your preparation.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cs-blue-500">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  )
                },
                {
                  title: "AI-Powered Assistance",
                  description: "Get instant answers to your questions with our advanced AI technology.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cs-purple-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  )
                },
                {
                  title: "Personalized Learning",
                  description: "Receive tailored content and recommendations based on your learning progress.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cs-indigo-500">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  )
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
        
        {/* CTA section */}
        <section className="py-20 px-6 relative overflow-hidden gradient-texture">
          <div className="absolute inset-0 bg-gradient-to-br from-cs-blue-900/20 to-cs-purple-900/20 opacity-70"></div>
          <div className="container relative z-10 mx-auto max-w-4xl text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Learning?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our platform today and experience the future of computer science education.
            </p>
            <button className="hero-button bg-gradient-to-r from-cs-blue-600 to-cs-purple-600 hover:from-cs-blue-700 hover:to-cs-purple-700">
              Get Started
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
