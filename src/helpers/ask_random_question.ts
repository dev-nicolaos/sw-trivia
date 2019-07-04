import { QUESTION } from '../interfaces/mod.ts';
import { getPossibleAnswers } from './get_possible_answers.ts';

export function askRandomQuestion(trivia: QUESTION[]) {
  const selectedIndex = Math.floor(Math.random() * trivia.length);
  const selectedTrivia = trivia[selectedIndex];
  const possibleAnswers = getPossibleAnswers(selectedTrivia);

  console.log(selectedTrivia.question);
  possibleAnswers.forEach((answer, i) => {
    console.log(i + 1 + ')', answer);
  });

  // Listen for response

  /* if (possibleAnswers[(+response) - 1] === selectedTrivia.correctAnswer) {
    console.log('Correct ✔');
  } else {
    console.log('Incorrect 😢');
    console.log('The correct answer is', selectedTrivia.correctAnswer);
  }
  console.log('Source:', selectedTrivia.source.name); */
}
