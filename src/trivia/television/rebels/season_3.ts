import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateRebelsSource as genSource } from '../../../helpers/mod.ts';

const trivia: TRIVIA[] = [
  {
    question: `All Imperial Super Commandos come from what race of people?`,
    correctAnswer: `Mandalorians`,
    wrongAnswers: [`Echani`, `Corellians`, `Pamarthens`],
    source: genSource('Imperial Super Commandos'),
  },
];

export default trivia;
