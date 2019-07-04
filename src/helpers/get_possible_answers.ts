import { QUESTION } from '../interfaces/mod.ts';

export function getPossibleAnswers(question: QUESTION): string[] {
  const { wrongAnswers, correctAnswer } = question;
  const possibleAnswers = [...wrongAnswers];
  const insertIndex = Math.floor(Math.random() * possibleAnswers.length);
  possibleAnswers.splice(insertIndex, 0, correctAnswer);
  return possibleAnswers;
}
