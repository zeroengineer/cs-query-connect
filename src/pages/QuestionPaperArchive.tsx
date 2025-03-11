
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, FileText, Download, Calendar, Check, X } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { 
  getSubjectById, 
  getYearsForSubject, 
  getQuestionPapersByYear 
} from '@/lib/mockData';
import { QuestionPaper } from '@/lib/types';
import { toast } from '@/components/ui/use-toast';

const QuestionPaperArchive: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [papers, setPapers] = useState<QuestionPaper[]>([]);
  
  const subject = subjectId ? getSubjectById(subjectId) : undefined;
  const years = subjectId ? getYearsForSubject(subjectId) : [];
  
  useEffect(() => {
    if (subjectId && selectedYear) {
      const filteredPapers = getQuestionPapersByYear(subjectId, selectedYear);
      setPapers(filteredPapers);
    } else if (subjectId && years.length > 0) {
      // Default to most recent year
      setSelectedYear(years[0]);
      const filteredPapers = getQuestionPapersByYear(subjectId, years[0]);
      setPapers(filteredPapers);
    }
  }, [subjectId, selectedYear, years]);

  const handleDownload = (paperId: string) => {
    toast({
      title: "Download Started",
      description: "Your question paper is being downloaded.",
      duration: 3000,
    });
  };
  
  if (!subject) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
          <Button onClick={() => navigate('/question-papers')}>
            Back to Question Papers
          </Button>
        </div>
      </div>
    );
  }

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
            { label: 'Question Papers', href: '/question-papers' },
            { label: `${subject.name} (${subject.code})` }
          ]}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gradient">
                {subject.name}
              </h1>
              <div className="flex items-center mt-2">
                <span className="bg-muted/50 text-muted-foreground text-sm px-2.5 py-0.5 rounded-full">
                  {subject.code}
                </span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="bg-cs-indigo-500/10 text-cs-indigo-400 text-sm px-2.5 py-0.5 rounded-full">
                  Semester {subject.semester}
                </span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/question-papers')}
              className="flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Subjects
            </Button>
          </div>
          
          <div className="glass-card rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Step 3: Select Year</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  onClick={() => setSelectedYear(year)}
                  className={selectedYear === year ? "bg-primary text-primary-foreground" : ""}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  {year}
                </Button>
              ))}
            </div>
          </div>
          
          {selectedYear && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Question Papers from {selectedYear}</h2>
              
              {papers.length > 0 ? (
                <div className="space-y-4">
                  {papers.map((paper) => (
                    <div 
                      key={paper.id}
                      className="glass-card rounded-xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-start space-x-3">
                          <FileText className="h-6 w-6 text-cs-indigo-400 mt-1" />
                          <div>
                            <h3 className="font-medium">{paper.title}</h3>
                            <div className="flex items-center mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                {paper.hasAnswers ? (
                                  <>
                                    <Check className="h-3.5 w-3.5 text-green-500 mr-1" />
                                    <span className="text-green-500">With Answers</span>
                                  </>
                                ) : (
                                  <>
                                    <X className="h-3.5 w-3.5 text-amber-500 mr-1" />
                                    <span className="text-amber-500">No Answers</span>
                                  </>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          variant="secondary"
                          className="flex items-center"
                          onClick={() => handleDownload(paper.id)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card rounded-xl p-8 text-center">
                  <p className="text-muted-foreground">
                    No question papers found for {subject.name} in {selectedYear}.
                  </p>
                </div>
              )}
            </div>
          )}
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

export default QuestionPaperArchive;
