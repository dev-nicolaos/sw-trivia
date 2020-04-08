import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Jedi: Fallen Order", mediaType: "Game" };

const trivia: TRIVIA[] = [
  {
    question: "Whose life did Cal Kestis save on Bracca?",
    correctAnswer: "Prauf",
    wrongAnswers: ["Jaro Tapal", "Eno Cordova", "Cere Junda"],
    source,
  },
  {
    question: "What ship was captained by Greez Dritus?",
    correctAnswer: "The Mantis",
    wrongAnswers: ["The Desert Jewel", "The Malevolence", "The Ebon Hawk"],
    source,
  },
  {
    question:
      "Which Imperial program involved collecting artifacts from Zeffo tombs?",
    correctAnswer: "Project Auger",
    wrongAnswers: [
      "Project Celestial Power",
      "Project Blackwing",
      "The Cylo Directive",
    ],
    source,
  },
  {
    question: "Which Inquisitor had been Cere Junda's padawan?",
    correctAnswer: "The Second Sister",
    wrongAnswers: [
      "The Ninth Sister",
      "The Seventh Sister",
      "The Fifth Brother",
    ],
    source,
  },
];

export default trivia;
