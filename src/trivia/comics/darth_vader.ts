import { TRIVIA } from 'interfaces';
import { generateComicSource } from 'helpers';

const genSource = (issue: number) => generateComicSource('Darth Vader', issue);

const trivia: TRIVIA[] = [
  {
    question: 'Which Jedi Master defeated Darth Vader on Al’doleem?',
    correctAnswer: 'Infil’a',
    wrongAnswers: ['Kenobi', 'Shaak Ti', 'Billaba'],
    source: genSource(3),
  },
];

export default trivia;
