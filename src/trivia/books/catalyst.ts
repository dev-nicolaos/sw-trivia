import { TRIVIA, SOURCE } from '../../interfaces/mod.ts';

const source: SOURCE = { name: 'Catalyst', mediaType: 'Book' };

const trivia: TRIVIA[] = [
  {
    question: `What planet was Jyn Erso born on?`,
    correctAnswer: `Vallt`,
    wrongAnswers: [`Coruscant`, `Lokori`, `Wobani`],
    source,
  },
];

export default trivia;
