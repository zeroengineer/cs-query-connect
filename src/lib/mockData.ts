
import { Subject, QuestionPaper } from './types';

export const subjects: Subject[] = [
  // Semester 1
  { id: 's1-math', name: 'Engineering Mathematics I', semester: 1, code: 'MA101' },
  { id: 's1-physics', name: 'Engineering Physics', semester: 1, code: 'PH101' },
  { id: 's1-programming', name: 'Computer Programming', semester: 1, code: 'CS101' },
  
  // Semester 2
  { id: 's2-math', name: 'Engineering Mathematics II', semester: 2, code: 'MA102' },
  { id: 's2-dsa', name: 'Data Structures and Algorithms', semester: 2, code: 'CS201' },
  { id: 's2-electrical', name: 'Basic Electrical Engineering', semester: 2, code: 'EE101' },
  
  // Semester 3
  { id: 's3-oop', name: 'Object Oriented Programming', semester: 3, code: 'CS301' },
  { id: 's3-dbms', name: 'Database Management Systems', semester: 3, code: 'CS302' },
  { id: 's3-discrete', name: 'Discrete Mathematics', semester: 3, code: 'MA201' },
  
  // Semester 4
  { id: 's4-os', name: 'Operating Systems', semester: 4, code: 'CS401' },
  { id: 's4-networks', name: 'Computer Networks', semester: 4, code: 'CS402' },
  { id: 's4-automata', name: 'Theory of Computation', semester: 4, code: 'CS403' },
  
  // Semester 5
  { id: 's5-ai', name: 'Artificial Intelligence', semester: 5, code: 'CS501' },
  { id: 's5-graphics', name: 'Computer Graphics', semester: 5, code: 'CS502' },
  { id: 's5-softeng', name: 'Software Engineering', semester: 5, code: 'CS503' },
  
  // Semester 6
  { id: 's6-ml', name: 'Machine Learning', semester: 6, code: 'CS601' },
  { id: 's6-cloud', name: 'Cloud Computing', semester: 6, code: 'CS602' },
  { id: 's6-crypto', name: 'Cryptography and Network Security', semester: 6, code: 'CS603' },
  
  // Semester 7
  { id: 's7-bigdata', name: 'Big Data Analytics', semester: 7, code: 'CS701' },
  { id: 's7-iot', name: 'Internet of Things', semester: 7, code: 'CS702' },
  { id: 's7-nlp', name: 'Natural Language Processing', semester: 7, code: 'CS703' },
  
  // Semester 8
  { id: 's8-blockchain', name: 'Blockchain Technology', semester: 8, code: 'CS801' },
  { id: 's8-cyber', name: 'Cyber Security', semester: 8, code: 'CS802' },
  { id: 's8-quantum', name: 'Quantum Computing', semester: 8, code: 'CS803' },
];

export const questionPapers: QuestionPaper[] = [
  // Data Structures papers
  { id: 'dsa-2023', year: 2023, subjectId: 's2-dsa', title: 'Data Structures End Semester Examination 2023', fileUrl: '#', hasAnswers: true },
  { id: 'dsa-2022', year: 2022, subjectId: 's2-dsa', title: 'Data Structures End Semester Examination 2022', fileUrl: '#', hasAnswers: true },
  { id: 'dsa-2021', year: 2021, subjectId: 's2-dsa', title: 'Data Structures End Semester Examination 2021', fileUrl: '#', hasAnswers: true },
  { id: 'dsa-2020', year: 2020, subjectId: 's2-dsa', title: 'Data Structures End Semester Examination 2020', fileUrl: '#', hasAnswers: false },
  { id: 'dsa-2019', year: 2019, subjectId: 's2-dsa', title: 'Data Structures End Semester Examination 2019', fileUrl: '#', hasAnswers: false },

  // OOP papers
  { id: 'oop-2023', year: 2023, subjectId: 's3-oop', title: 'Object Oriented Programming End Semester Examination 2023', fileUrl: '#', hasAnswers: true },
  { id: 'oop-2022', year: 2022, subjectId: 's3-oop', title: 'Object Oriented Programming End Semester Examination 2022', fileUrl: '#', hasAnswers: true },
  { id: 'oop-2021', year: 2021, subjectId: 's3-oop', title: 'Object Oriented Programming End Semester Examination 2021', fileUrl: '#', hasAnswers: false },
  { id: 'oop-2020', year: 2020, subjectId: 's3-oop', title: 'Object Oriented Programming End Semester Examination 2020', fileUrl: '#', hasAnswers: false },

  // DBMS papers
  { id: 'dbms-2023', year: 2023, subjectId: 's3-dbms', title: 'Database Management Systems End Semester Examination 2023', fileUrl: '#', hasAnswers: true },
  { id: 'dbms-2022', year: 2022, subjectId: 's3-dbms', title: 'Database Management Systems End Semester Examination 2022', fileUrl: '#', hasAnswers: true },
  { id: 'dbms-2021', year: 2021, subjectId: 's3-dbms', title: 'Database Management Systems End Semester Examination 2021', fileUrl: '#', hasAnswers: false },
  { id: 'dbms-2020', year: 2020, subjectId: 's3-dbms', title: 'Database Management Systems End Semester Examination 2020', fileUrl: '#', hasAnswers: false },

  // OS papers
  { id: 'os-2023', year: 2023, subjectId: 's4-os', title: 'Operating Systems End Semester Examination 2023', fileUrl: '#', hasAnswers: true },
  { id: 'os-2022', year: 2022, subjectId: 's4-os', title: 'Operating Systems End Semester Examination 2022', fileUrl: '#', hasAnswers: true },
  { id: 'os-2021', year: 2021, subjectId: 's4-os', title: 'Operating Systems End Semester Examination 2021', fileUrl: '#', hasAnswers: false },
  { id: 'os-2020', year: 2020, subjectId: 's4-os', title: 'Operating Systems End Semester Examination 2020', fileUrl: '#', hasAnswers: false },

  // Add more question papers as needed for other subjects
];

// Helper functions to work with the mock data
export const getSubjectsBySemester = (semester: number): Subject[] => {
  return subjects.filter(subject => subject.semester === semester);
};

export const getQuestionPapersBySubject = (subjectId: string): QuestionPaper[] => {
  return questionPapers.filter(paper => paper.subjectId === subjectId);
};

export const getSubjectById = (subjectId: string): Subject | undefined => {
  return subjects.find(subject => subject.id === subjectId);
};

export const getYearsForSubject = (subjectId: string): number[] => {
  const papers = getQuestionPapersBySubject(subjectId);
  const years = papers.map(paper => paper.year);
  return [...new Set(years)].sort((a, b) => b - a); // Sort in descending order (most recent first)
};

export const getQuestionPapersByYear = (subjectId: string, year: number): QuestionPaper[] => {
  return questionPapers.filter(paper => paper.subjectId === subjectId && paper.year === year);
};
