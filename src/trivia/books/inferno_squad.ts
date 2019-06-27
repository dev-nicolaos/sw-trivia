import { QUESTION } from '../../question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `What rank was Garrick Versio at the time of the Battle of Yavin?`,
    correctAnswer: `Inspector General`,
    wrongAnswers: [`Admiral`, `Inquisitor`, `ISB Agent`],
    source: {name:`Star Wars Battlefront II Inferno Squad`, mediaType:`Book`}
  },
  {
    question: `How many Rebel ships did Iden Versio destroy during the Battle of Yavin?`,
    correctAnswer: `5`,
    wrongAnswers: [`3`, `7`, `9`],
    source: {name:`Star Wars Battlefront II Inferno Squad`, mediaType:`Book`}
  },
  {
    question: `Which Partisan was known as \`The Mentor\`?`,
    correctAnswer: `Lux Bonteri`,
    wrongAnswers: [`Staven`, `Reece Tallent`, `Saw Gerrera`],
    source: {name:`Star Wars Battlefront II Inferno Squad`, mediaType:`Book`}
  },
  {
    question: `Which two members of Inferno squad infiltrated the Dreamers as siblings?`,
    correctAnswer: `Gideon and Del`,
    wrongAnswers: [`Iden and Gideon`, `Iden and Seyn`, `Gideon and Seyn`],
    source: {name:`Star Wars Battlefront II Inferno Squad`, mediaType:`Book`}
  },
];

export default trivia;
