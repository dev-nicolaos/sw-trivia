import { TRIVIA, SOURCE } from 'interfaces';

const source: SOURCE = { name: 'Heir to the Jedi', mediaType: 'Book' };

const trivia: TRIVIA[] = [
  {
    question:
      'After the Battle of Yavin, where did Luke travel in an attempt to setup a secret supply line for the Alliance?',
    correctAnswer: 'Rodia',
    wrongAnswers: ['Orto Plutonia', 'Sullust', 'Pamarth'],
    source,
  },
  {
    question: 'Who loaned Luke the Desert Jewel?',
    correctAnswer: 'Nakari Kelen',
    wrongAnswers: ['Sana Starros', 'Hera Syndulla', 'Dr. Aphra'],
    source,
  },
  {
    question: 'Who was Drusil Bephorin?',
    correctAnswer: 'A Givin Cryptologist',
    wrongAnswers: ['An Imperial Officer', 'A Bothan Spy', 'A Duros Mechanic'],
    source,
  },
];

export default trivia;
