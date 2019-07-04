import { QUESTION } from '../../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `What planet was the homeworld of the Pyke Syndicate?`,
    correctAnswer: `Oba Diah`,
    wrongAnswers: [`Mustafar`, `Felucia`, `Kessel`],
    source: {
      name: `Star Wars The Clone Wars: The Lost One`,
      mediaType: `Television`,
    },
  },
];

export default trivia;
