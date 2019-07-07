import { parse } from './deps.ts';
import { printStats } from './stats/mod.ts';
import {
  askRandomTriviaQuestion,
  getUserInput,
  printOptions,
  startQuiz,
} from './helpers/mod.ts';

const { args } = Deno;

const statsFlag = parse(args).stats;

if (statsFlag) {
  printStats();
} else {
  main();
}

async function main() {
  printOptions(
    'How would you like to play?',
    'Answer a random trivia question',
    'Multi-question quiz',
  );

  const action = await getUserInput();

  switch (+action) {
    case 1:
      askRandomTriviaQuestion();
      break;
    case 2:
      startQuiz();
      break;
    default:
      console.log('Please select a valid option');
      main();
      break;
  }
}
