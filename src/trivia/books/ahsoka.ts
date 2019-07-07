import { TRIVIA } from '../../interfaces/mod.ts';

const trivia: TRIVIA[] = [
  {
    question: `Just before Order 66, Ahsoka Tano had the opportunity to kill Darth Maul, but she instead chose to save who?`,
    correctAnswer: `Captain Rex`,
    wrongAnswers: [`Commander Cody`, `Ezra Bridger`, `Kaeden Larte`],
    source: {
      name: `Star Wars Ahsoka`,
      mediaType: `Book`,
    },
  },
];

export default trivia;
