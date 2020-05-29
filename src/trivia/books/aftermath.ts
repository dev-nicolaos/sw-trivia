import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Aftermath", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "What planet was Norra Wexley from?",
    correctAnswer: "Akiva",
    wrongAnswers: ["Florrum", "Bogano", "Jelucan"],
    source,
  },
  {
    question: "Who was the first Chancellor of the New Republic?",
    correctAnswer: "Mon Mothma",
    wrongAnswers: ["Leia Organa", "Finis Valorum", "Ransolm Casterfo"],
    source,
  },
  {
    question: "Who of the following was NOT at the Imperial summit on Akiva?",
    correctAnswer: "Grand Admiral Thrawn",
    wrongAnswers: [
      "Grand Moff Valco Pandeon",
      "Admiral Rae Sloane",
      "General Jylia Shale",
    ],
    source,
  },
  {
    question: "On what planet did the Anklebiter Brigade operate?",
    correctAnswer: "Coruscant",
    wrongAnswers: ["Lothal", "Chandrilla", "Naboo"],
    source,
  },
];

export default trivia;
