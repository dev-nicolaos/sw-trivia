import { QUESTION } from '../interfaces/mod.ts';
import { getPossibleAnswers } from './get_possible_answers.ts';
import { getInput } from './get_input.ts';

export async function askRandomQuestion(trivia: QUESTION[]) {
  const selectedIndex = Math.floor(Math.random() * trivia.length);
  const selectedTrivia = trivia[selectedIndex];
  const possibleAnswers = getPossibleAnswers(selectedTrivia);

  console.log(selectedTrivia.question);
  possibleAnswers.forEach((answer, i) => {
    console.log(i + 1 + ')', answer);
  });

  const response = await getInput();

  if (possibleAnswers[+response - 1] === selectedTrivia.correctAnswer) {
    console.log('Correct ✔');
  } else {
    console.log('Incorrect 😢');
    console.log('The correct answer is:', selectedTrivia.correctAnswer);
  }
  console.log('Source:', selectedTrivia.source.name);

  const another = (await getInput('Another? (y/n)')).toLowerCase();
  if (another === 'y' || another === 'yes') {
    askRandomQuestion(trivia);
  }
}
