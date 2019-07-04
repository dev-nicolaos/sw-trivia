import { QUESTION } from '../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `What was the name of Nien Nunb's starship?`,
    correctAnswer: `Mellcrawler`,
    wrongAnswers: [`Outrider`, `Ghost`, `Gauntlet`],
    source: { name: `Star Wars Princess Leia, Part IV`, mediaType: `Comic` },
  },
];

export default trivia;
