import { QUESTION } from '../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `What planet was Jyn Erso born on?`,
    correctAnswer: `Vallt`,
    wrongAnswers: [`Coruscant`, `Lokori`, `Wobani`],
    source: {
      name: `Star Wars Catalyst: A Rogue One Novel`,
      mediaType: `Book`,
    },
  },
];

export default trivia;
