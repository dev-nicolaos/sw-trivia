import { TRIVIA } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Rebel Rising");

const trivia: TRIVIA[] = [
  {
    question: "Where did Jyn and Saw go after leaving Lah'mu?",
    correctAnswer: "Wrea",
    wrongAnswers: ["Wobani", "Ring of Kafrene", "Vallt"],
    source,
  },
  {
    question: "Where did Saw abandon Jyn?",
    correctAnswer: "Tamsye Prime",
    wrongAnswers: ["Inusagi", "Jelucan", "Onderon"],
    source,
  },
  {
    question:
      "How many credits did Jyn recieve for the Ponta Two on Five Points?",
    correctAnswer: "100",
    wrongAnswers: ["500", "1000", "2000"],
    source,
  },
  {
    question:
      "How many different cell mates did Jyn have while imprissoned on Wobani?",
    correctAnswer: "3",
    wrongAnswers: ["1", "2", "4"],
    source,
  },
  {
    question: "How long was Jyn imprissoned on Wobani?",
    correctAnswer: "6 months",
    wrongAnswers: ["3 months", "1 year", "2 years"],
    source,
  },
];

export default trivia;
