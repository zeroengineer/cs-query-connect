
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ThemeToggle from '@/components/ThemeToggle';
import { getSubjectsBySemester, subjects } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const QuestionPapers: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);
  
  // Get unique semesters from subjects
  const semesters = [...new Set(subjects.map(subject => subject.semester))].sort();

  const handleSemesterClick = (semester: number) => {
    setSelectedSemester(semester);
    setExpandedSemester(expandedSemester === semester ? null : semester);
  };

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/question-papers/${subjectId}`);
  };

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
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/question-papers" className="text-sm font-medium text-primary hover:text-primary/90 transition-colors">
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
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Previous Year Question Papers</h1>
          <p className="text-muted-foreground mb-8">
            Select your semester and subject to browse through our collection of previous year question papers.
          </p>
          
          <div className="glass-card rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold mb-4">Step 1: Select Semester</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {semesters.map((semester) => (
                <Button
                  key={semester}
                  variant={selectedSemester === semester ? "default" : "outline"}
                  onClick={() => handleSemesterClick(semester)}
                  className={cn(
                    "flex justify-between items-center transition-all",
                    selectedSemester === semester 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:border-primary/50"
                  )}
                >
                  <span>Semester {semester}</span>
                  {expandedSemester === semester ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </Button>
              ))}
            </div>
          </div>
          
          {expandedSemester && (
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Step 2: Select Subject</h2>
              <div className="grid gap-4">
                {getSubjectsBySemester(expandedSemester).map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => handleSubjectClick(subject.id)}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all"
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-cs-indigo-400" />
                      <div className="text-left">
                        <div className="font-medium">{subject.name}</div>
                        <div className="text-sm text-muted-foreground">{subject.code}</div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer can be a component or inline */}
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
