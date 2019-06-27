import { QUESTION } from '../../question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: "After the Battle of Yavin, where did Luke travel in an attempt to setup a secret supply line for the Alliance?",
    correctAnswer: "Rodia",
    wrongAnswers: ["Orto Plutonia", "Sullust", "Pamarth"],
    source: {name:"Star Wars Heir to the Jedi", mediaType:"Book"}
  },
  {
    question: "Who loaned Luke the Desert Jewel?",
    correctAnswer: "Nakari Kelen",
    wrongAnswers: ["Sana Starros", "Hera Syndulla", "Dr. Aphra"],
    source: {name:"Star Wars Heir to the Jedi", mediaType:"Book"}
  },
  {
    question: "Who was Drusil Bephorin?",
    correctAnswer: "A Givin Cryptologist",
    wrongAnswers: ["An Imperial Officer", "A Bothan Spy", "A Duros Mechanic"],
    source: {name:"Star Wars Heir to the Jedi", mediaType:"Book"}
  },
];

export default trivia;
