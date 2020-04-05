import { TRIVIA, SOURCE } from "types";

const source: SOURCE = {
  name: "Leia, Princess of Alderaan",
  mediaType: "Book",
};

const trivia: TRIVIA[] = [
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
    wrongAnswers: ["Chandrilla", "Iloh", "Coruscant"],
    source,
  },
  {
    question: "What rank did Panaka hold when he died?",
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
