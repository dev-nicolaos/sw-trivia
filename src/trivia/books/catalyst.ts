import { TRIVIA } from '../../interfaces/mod.ts';

const trivia: TRIVIA[] = [
  {
    question: `What planet was Jyn Erso born on?`,
    correctAnswer: `Vallt`,
    wrongAnswers: [`Coruscant`, `Lokori`, `Wobani`],
    source: {
      name: `Catalyst: A Rogue One Novel`,
      mediaType: `Book`,
    },
  },
];

export default trivia;
