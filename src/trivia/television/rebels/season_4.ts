import { TRIVIA } from 'interfaces';
import { generateTVSource } from 'helpers';

const genSource = (episode: string) => generateTVSource('Rebels', episode);

const trivia: TRIVIA[] = [
  {
    question:
      'Which clan assisted Clan Wren in to freeing Alrich Wren from Imperial captivity',
    correctAnswer: 'Clan Kryze',
    wrongAnswers: ['Clan Fett', 'Clan Vizsla', 'Clan Saxon'],
    source: genSource('Heroes of Mandalore: Part 1'),
  },
  {
    question:
      'What did Sabine Wren nickname the weapon she built for the Empire as a cadet?',
    correctAnswer: 'The Duchess',
    wrongAnswers: ['ARIES', 'Mass Shadow Generator', 'Malevolence'],
    source: genSource('Heroes of Mandalore: Part 2'),
  },
  {
    question:
      'Who commanded the Imperial Light Cruiser that engaged rebels at the Jalindi Outpost?',
    correctAnswer: 'Commander Brom Titus',
    wrongAnswers: ['Grand Admiral Thrawn', 'Admiral Durril', 'Captain Slavin'],
    source: genSource('In the Name of the Rebellion: Part 1'),
  },
  {
    question:
      'What secret cargo did Saw, Ezra, and Sabine find on Freighter 2716 after it left Faos Station?',
    correctAnswer: 'A large kyber crystal',
    wrongAnswers: [
      'Doonium and Dolovite',
      'Prototype blaster',
      'Force sensitive children',
    ],
    source: genSource('In the Name of the Rebellion: Part 2'),
  },
  {
    question: "Who took over Old Jho's Pit Stop after Old Jho was executed?",
    correctAnswer: 'Baron Valen Rudor',
    wrongAnswers: ['Ryder Azadi', 'Ephraim Bridger', 'Arihnda Pryce'],
    source: genSource('The Occupation'),
  },
  {
    question:
      'How many TIE Interceptors did Ezra bridger shoot down in the stolen TIE Defender?',
    correctAnswer: '3',
    wrongAnswers: ['2', '4', '6'],
    source: genSource('Flight of the Defender'),
  },
];

export default trivia;
