import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "The Weapon of a Jedi", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "Who became Red Leader after the Battle of Yavin?",
    correctAnswer: "Commander Narra",
    wrongAnswers: ["Wedge Antilles", "Luke Skywalker", "Shara Bey"],
    source,
  },
  {
    question: "What ship did Luke have to have repaired on Devaron?",
    correctAnswer: "A Y-wing Fighter",
    wrongAnswers: [
      "An X-wing Fighter",
      "The Desert Jewel",
      "The Millenium Falcon",
    ],
    source,
  },
  {
    question: "How many remotes did Luke train against at the Eedit Temple?",
    correctAnswer: "3",
    wrongAnswers: ["0", "4", "6"],
    source,
  },
];

export default trivia;
