import { SOURCE } from './source.interface.ts';

export interface QUESTION {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  source: SOURCE;
}
