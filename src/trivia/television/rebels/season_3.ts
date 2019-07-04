import { QUESTION } from '../../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `All Imperial Super Commandos come from what race of people?`,
    correctAnswer: `Mandalorians`,
    wrongAnswers: [`Echani`, `Corellians`, `Pamarthens`],
    source: {
      name: `Star Wars Rebels: Imperial Super Commandos`,
      mediaType: `Television`,
    },
  },
];

export default trivia;
