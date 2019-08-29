import { TRIVIA } from 'interfaces';

export function combineAnswers(trivia: TRIVIA): string[] {
  const { wrongAnswers, correctAnswer } = trivia;
  const combinedAnswers = [...wrongAnswers];
  const insertIndex = Math.floor(Math.random() * (combinedAnswers.length + 1));
  combinedAnswers.splice(insertIndex, 0, correctAnswer);
  return combinedAnswers;
}
