import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Catalyst", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "What planet was Jyn Erso born on?",
    correctAnswer: "Vallt",
    wrongAnswers: ["Coruscant", "Lokori", "Wobani"],
    source,
  },
];

export default trivia;
