import { TRIVIA, SOURCE } from 'interfaces';

const source: SOURCE = { name: 'Before the Awakening', mediaType: 'Book' };

const trivia: TRIVIA[] = [
  {
    question: 'How did Rey learn to fly?',
    correctAnswer: 'By mastering a flight simulator she found while scavenging',
    wrongAnswers: [
      'Her parents taught her',
      'Test flying the Falcon for Unkar Plutt',
      "She stole another scavenger's ship",
    ],
    source,
  },
  {
    question:
      'Before joining the resistance, what New Republic Squadron did Poe command?',
    correctAnswer: 'Rapier Squadron',
    wrongAnswers: ['Corona Squadron', 'Phantom Squadron', 'Blade Squadron'],
    source,
  },
  {
    question:
      "Which of the following was NOT a part of Finn's First Order Squad?",
    correctAnswer: 'FN-9330',
    wrongAnswers: ['Nines', 'Zeroes', 'Slip'],
    source,
  },
];

export default trivia;
