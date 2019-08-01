import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateTVSource } from '../../../helpers/mod.ts';

const genSource = (episode: string) => generateTVSource('Rebels', episode);

const trivia: TRIVIA[] = [
  {
    question: 'All Imperial Super Commandos come from what race of people?',
    correctAnswer: 'Mandalorians',
    wrongAnswers: ['Echani', 'Corellians', 'Pamarthens'],
    source: genSource('Imperial Super Commandos'),
  },
];

export default trivia;
