import { TRIVIA, SOURCE } from '../../interfaces/mod.ts';

const source: SOURCE = { name: 'Thrawn', mediaType: 'Book' };

const trivia: TRIVIA[] = [
  {
    question:
      'Which language did Thrawn communicate with Eli Vanto in when they first met?',
    correctAnswer: 'Sy Bisti',
    wrongAnswers: ['Basic', 'Huttesse', 'Shyriiwook'],
    source,
  },
];

export default trivia;
