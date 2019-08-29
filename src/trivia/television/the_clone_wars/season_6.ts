import { TRIVIA } from 'interfaces';
import { generateTVSource } from 'helpers';

const genSource = (episode: string) =>
  generateTVSource('The Clone Wars', episode);

const trivia: TRIVIA[] = [
  {
    question: 'What planet was the homeworld of the Pyke Syndicate?',
    correctAnswer: 'Oba Diah',
    wrongAnswers: ['Mustafar', 'Felucia', 'Kessel'],
    source: genSource('The Lost One'),
  },
];

export default trivia;
