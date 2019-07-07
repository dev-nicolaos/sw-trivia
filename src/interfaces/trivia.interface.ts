import { SOURCE } from './source.interface.ts';

export interface TRIVIA {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  source: SOURCE;
}
