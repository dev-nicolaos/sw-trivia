import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Tarkin", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "What was the name of Wilhuff Tarkin's personal starship?",
    correctAnswer: "Carrion Spike",
    wrongAnswers: ["Imperialis", "Broken Horn", "Ebon Hawk"],
    source,
  },
  {
    question: "How many Moffs did the Emperor initially apoint?",
    correctAnswer: "20",
    wrongAnswers: ["10", "50", "100"],
    source,
  },
  {
    question: "Where was Eriadu located?",
    correctAnswer: "Along the Rimma Trade Route",
    wrongAnswers: [
      "In the Deep Core",
      "In Hutt Space",
      "12 parsecs outside the Rishi Maze",
    ],
    source,
  },
  {
    question: "Who masterminded the theft of the Carrion Spike?",
    correctAnswer: "Berch Teller",
    wrongAnswers: ["Hera Syndulla", "Saw Gerrera", "Leia Organa"],
    source,
  },
  {
    question: "Whose was the first Grand Moff of the Galactic Empire?",
    correctAnswer: "Wilhuff Tarkin",
    wrongAnswers: ["Valco Pandion", "Rycus Kilran", "Gideon Hask"],
    source,
  },
];

export default trivia;
