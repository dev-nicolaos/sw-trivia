import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Aftermath");

const trivia: Trivia[] = [
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
      "Grand Moff Valco Pandion",
      "Admiral Rae Sloane",
      "General Jylia Shale",
    ],
    source,
  },
  {
    question: "On what planet did the Anklebiter Brigade operate?",
    correctAnswer: "Coruscant",
    wrongAnswers: ["Lothal", "Chandrila", "Naboo"],
    source,
  },
];

export default trivia;
