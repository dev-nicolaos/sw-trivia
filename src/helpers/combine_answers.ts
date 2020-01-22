import { TRIVIA } from "interfaces";

export function combineAnswers({ wrongAnswers, correctAnswer }: TRIVIA): string[] {
  const combinedAnswers = [...wrongAnswers];
  const insertIndex = Math.floor(Math.random() * (combinedAnswers.length + 1));
  combinedAnswers.splice(insertIndex, 0, correctAnswer);
  return combinedAnswers;
}
