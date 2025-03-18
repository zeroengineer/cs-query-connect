
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ThemeToggle from '@/components/ThemeToggle';
import { getSubjectsBySemester } from '@/lib/mockData';

const QuestionPapers: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSemesterClick = (semester: number) => {
    // For now, just store the selected semester in session storage
    sessionStorage.setItem('selectedSemester', semester.toString());
    navigate(`/semester/${semester}`);
  };

  // Array of all semesters 1-8
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col bg-background gradient-texture">
      {/* Header */}
      <header className="sticky top-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="font-bold text-xl">
              CS<span className="text-cs-blue-600">Query</span>Connect
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/question-papers" className="text-sm font-medium text-primary hover:text-primary/90 transition-colors">
              Question Papers
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a 
              href="/sign-in" 
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              Sign In
            </a>
            <ThemeToggle />
          </nav>
          
          {/* Mobile menu button */}
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
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Question Papers' }
          ]}
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cs-blue-400">
              Previous Question Papers
            </h1>
            <p className="text-xl text-muted-foreground">
              Access previous years' question papers to enhance your preparation
            </p>
          </div>
          
          {/* Semester Grid - Top Row (1-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {semesters.slice(0, 4).map(semester => {
              const subjectCount = getSubjectsBySemester(semester).length;
              return (
                <div 
                  key={semester}
                  onClick={() => handleSemesterClick(semester)}
                  className="bg-background/20 dark:bg-background/40 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col items-center cursor-pointer transition-all hover:bg-primary/5 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="bg-cs-blue-500/20 rounded-full p-5 mb-4">
                    <BookOpen className="h-8 w-8 text-cs-blue-400" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Semester {semester}</h2>
                  <p className="text-muted-foreground text-sm">{subjectCount} subjects</p>
                </div>
              );
            })}
          </div>
          
          {/* Semester Grid - Bottom Row (5-8) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {semesters.slice(4, 8).map(semester => {
              const subjectCount = getSubjectsBySemester(semester).length;
              return (
                <div 
                  key={semester}
                  onClick={() => handleSemesterClick(semester)}
                  className="bg-background/20 dark:bg-background/40 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col items-center cursor-pointer transition-all hover:bg-primary/5 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="bg-cs-blue-500/20 rounded-full p-5 mb-4">
                    <BookOpen className="h-8 w-8 text-cs-blue-400" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Semester {semester}</h2>
                  <p className="text-muted-foreground text-sm">{subjectCount} subjects</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl">
                CS<span className="text-cs-blue-600">Query</span>Connect
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                Learn, Ask, Grow
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center mt-8">
            © {new Date().getFullYear()} CSQueryConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuestionPapers;
