import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Leia, Princess of Alderaan");

const trivia: Trivia[] = [
  {
    question: "Which planet was Leia's first humanitarian mission to?",
    correctAnswer: "Wobani",
    wrongAnswers: ["Tatooine", "Lothal", "Sullust"],
    source,
  },
  {
    question: "On which birthday did Leia Organa have her Day of Demand?",
    correctAnswer: "16th",
    wrongAnswers: ["15th", "14th", "18th"],
    source,
  },
  {
    question: "What planet did Admiral Holdo grow up on?",
    correctAnswer: "Gatalenta",
    wrongAnswers: ["Chandrila", "Iloh", "Coruscant"],
    source,
  },
  {
    question: "What rank did Quarsh Panaka hold when he died?",
    correctAnswer: "Moff",
    wrongAnswers: ["Captain", "Colonel", "General"],
    source,
  },
  {
    question:
      "What famine stricken planet did R2-D2 take holos and scans of for Princess Leia?",
    correctAnswer: "Chasmeene",
    wrongAnswers: ["Rend 5", "Taris", "Toydaria"],
    source,
  },
  {
    question: "Who was Leia Organa's first kiss?",
    correctAnswer: "Kier Domadi",
    wrongAnswers: ["Luke Skywalker", "Han Solo", "Chassellon Stevis"],
    source,
  },
];

export default trivia;
