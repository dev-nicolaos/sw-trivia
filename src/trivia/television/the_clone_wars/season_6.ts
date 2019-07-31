import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateCloneWarsSource as genSource } from '../../../helpers/mod.ts';

const trivia: TRIVIA[] = [
  {
    question: `What planet was the homeworld of the Pyke Syndicate?`,
    correctAnswer: `Oba Diah`,
    wrongAnswers: [`Mustafar`, `Felucia`, `Kessel`],
    source: genSource('The Lost One'),
  },
];

export default trivia;
