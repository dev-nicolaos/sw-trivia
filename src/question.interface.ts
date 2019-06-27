export interface QUESTION {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  source: {
    name: string;
    mediaType: string;
  };
};