import { TRIVIA } from '../../interfaces/mod.ts';

const trivia: TRIVIA[] = [
  {
    question: `Who put out the call for Jedi assistance on Carnelion IV that Anakin and Obi-Wan responded to?`,
    correctAnswer: `Sera`,
    wrongAnswers: [`Grecker`, `Kolara`, `Mother Pran`],
    source: {
      name: `Star Wars Obi-Wan and Anakin, Part 4`,
      mediaType: `Comic`,
    },
  },
  {
    question: `Where did Palpatine take Anakin when he was 12?`,
    correctAnswer: `Club Kasakar`,
    wrongAnswers: [`79's`, `Dex's Diner`, `Outlander Club`],
    source: {
      name: `Star Wars Obi-Wan and Anakin, Part 2`,
      mediaType: `Comic`,
    },
  },
  {
    question: `What did Obi-Wan say to summon the Republic to Carnelion IV?`,
    correctAnswer: `The atmosphere had lots of Tibana gas`,
    wrongAnswers: [
      `A civil war had broken out`,
      `He had encountered a Sith`,
      `The people were enslaved`,
    ],
    source: {
      name: `Star Wars Obi-Wan and Anakin, Part 5`,
      mediaType: `Comic`,
    },
  },
];

export default trivia;
