import { TRIVIA } from '../../interfaces/mod.ts';
import { generateComicSource } from '../../helpers/mod.ts';

const genSource = (issue: number) =>
  generateComicSource('Obi-Wan and Anakin', issue);

const trivia: TRIVIA[] = [
  {
    question:
      'Who put out the call for Jedi assistance on Carnelion IV that Anakin and Obi-Wan responded to?',
    correctAnswer: 'Sera',
    wrongAnswers: ['Grecker', 'Kolara', 'Mother Pran'],
    source: genSource(4),
  },
  {
    question: 'Where did Palpatine take Anakin when he was 12?',
    correctAnswer: 'Club Kasakar',
    wrongAnswers: ["79's", "Dex's Diner", 'Outlander Club'],
    source: genSource(2),
  },
  {
    question: 'What did Obi-Wan say to summon the Republic to Carnelion IV?',
    correctAnswer: 'The atmosphere had lots of Tibana gas',
    wrongAnswers: [
      'A civil war had broken out',
      'He had encountered a Sith',
      'The people were enslaved',
    ],
    source: genSource(5),
  },
];

export default trivia;
