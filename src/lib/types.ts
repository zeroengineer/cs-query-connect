
export interface Subject {
  id: string;
  name: string;
  semester: number;
  code: string;
}

export interface QuestionPaper {
  id: string;
  year: number;
  subjectId: string;
  title: string;
  fileUrl: string;
  hasAnswers: boolean;
}
