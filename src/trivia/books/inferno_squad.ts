import { TRIVIA } from '../../interfaces/mod.ts';

const trivia: TRIVIA[] = [
  {
    question: `What rank was Garrick Versio at the time of the Battle of Yavin?`,
    correctAnswer: `Inspector General`,
    wrongAnswers: [`Admiral`, `Inquisitor`, `ISB Agent`],
    source: {
      name: `Battlefront II: Inferno Squad`,
      mediaType: `Book`,
    },
  },
  {
    question: `How many Rebel ships did Iden Versio destroy during the Battle of Yavin?`,
    correctAnswer: `5`,
    wrongAnswers: [`3`, `7`, `9`],
    source: {
      name: `Battlefront II: Inferno Squad`,
      mediaType: `Book`,
    },
  },
  {
    question: `Which Partisan was known as "The Mentor"?`,
    correctAnswer: `Lux Bonteri`,
    wrongAnswers: [`Staven`, `Reece Tallent`, `Saw Gerrera`],
    source: {
      name: `Battlefront II: Inferno Squad`,
      mediaType: `Book`,
    },
  },
  {
    question: `Which two members of Inferno squad infiltrated the Dreamers as siblings?`,
    correctAnswer: `Gideon and Del`,
    wrongAnswers: [`Iden and Gideon`, `Iden and Seyn`, `Gideon and Seyn`],
    source: {
      name: `Battlefront II: Inferno Squad`,
      mediaType: `Book`,
    },
  },
];

export default trivia;
