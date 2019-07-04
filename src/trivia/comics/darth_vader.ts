import { QUESTION } from '../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `Which Jedi Master defeated Darth Vader on Al’doleem?`,
    correctAnswer: `Infil’a`,
    wrongAnswers: [`Kenobi`, `Shaak Ti`, `Billaba`],
    source: { name: `Star Wars Darth Vader, Part III`, mediaType: `Comic` },
  },
];

export default trivia;
