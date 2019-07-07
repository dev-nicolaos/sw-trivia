import { TRIVIA } from '../interfaces/mod.ts';
import {
  acceptAnswer,
  combineAnswers,
  getUserInput,
  pickRandomTrivia,
  printOptions,
  rejectAnswer,
} from './mod.ts';

export async function askTriviaQuestion(
  selectedTrivia: TRIVIA,
): Promise<boolean> {
  const possibleAnswers = combineAnswers(selectedTrivia);
  printOptions(selectedTrivia.question, ...possibleAnswers);

  const response = await getUserInput();

  const correct =
    possibleAnswers[+response - 1] === selectedTrivia.correctAnswer;

  if (correct) {
    acceptAnswer();
  } else {
    rejectAnswer();
    console.log('The correct answer is:', selectedTrivia.correctAnswer);
  }
  console.log('Source:', selectedTrivia.source.name);

  return correct;
}

export async function askRandomTriviaQuestion(): Promise<void> {
  await askTriviaQuestion(pickRandomTrivia());

  const another = (await getUserInput('Another? (y/n)')).trim().toLowerCase();
  if (another === 'y' || another === 'yes') {
    askRandomTriviaQuestion();
  }
}

export async function getQuizLength(maxLength: number): Promise<number> {
  const quizLength = Math.round(
    +(await getUserInput(
      `How many questions would you like? (max: ${maxLength})`,
    )),
  );

  if (quizLength <= maxLength && quizLength > 0) {
    return quizLength;
  } else {
    console.log(
      'Please enter a positive number less than or equal to',
      maxLength,
    );
    return await getQuizLength(maxLength);
  }
}
