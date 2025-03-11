
import React from 'react';
import { BookOpen, MessageSquare } from 'lucide-react';
import NavButton from './NavButton';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePYQClick = () => {
    navigate('/question-papers');
  };

  const handleAIClick = () => {
    toast({
      title: "Feature Coming Soon",
      description: "AI Assistance will be available in the next update.",
      duration: 3000,
    });
  };

  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 py-16 overflow-hidden gradient-texture">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-cs-purple-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cs-blue-400/10 blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full text-center animate-fade-in">
        <div className="space-y-6 mb-16">
          <h4 className="text-sm font-medium uppercase tracking-widest text-cs-indigo-400 mb-2 animate-slide-up stagger-item">
            Learning Made Intelligent
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up stagger-item">
            <span className="text-gradient">CS QUERY CONNECT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl mx-auto animate-slide-up stagger-item">
            Learn, Ask, Grow
          </p>
        </div>
        
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <NavButton 
            icon={<BookOpen className="h-5 w-5" />} 
            label="Previous Year Questions" 
            onClick={handlePYQClick}
            variant="primary"
          />
          
          <NavButton 
            icon={<MessageSquare className="h-5 w-5" />} 
            label="AI Assistance" 
            onClick={handleAIClick}
            variant="secondary"
          />
        </div>
        
        <div className="glass-card mt-20 px-8 py-6 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground">
            Access comprehensive learning resources and intelligent assistance for your computer science journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
