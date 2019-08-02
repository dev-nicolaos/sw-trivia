import { TRIVIA } from '../../interfaces/mod.ts';
import { generateComicSource } from '../../helpers/mod.ts';

const genSource = (issue: number) => generateComicSource('Princess Leia', issue);

const trivia: TRIVIA[] = [
  {
    question: `What was the name of Nien Nunb's starship?`,
    correctAnswer: `Mellcrawler`,
    wrongAnswers: [`Outrider`, `Ghost`, `Gauntlet`],
    source: { name: `Star Wars Princess Leia, Part IV`, mediaType: `Comic` },
  },
];

export default trivia;
