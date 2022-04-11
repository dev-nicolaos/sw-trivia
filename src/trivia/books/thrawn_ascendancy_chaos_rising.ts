import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Thrawn Ascendancy: Chaos Rising");

const trivia: Trivia[] = [
  {
    question: "Which of the Nine Ruling Families of the Chiss adopted Thrawn?",
    correctAnswer: "Mitth",
    wrongAnswers: ["Irizi", "Ufsa", "Chaf"],
    source,
  },
  {
    question: "What was the symbol of the Mitth Family?",
    correctAnswer: "A sun",
    wrongAnswers: ["A ship", "A nebula", "A tree"],
    source,
  },
  {
    question: "Which planet was the capital of the Chiss Ascendancy?",
    correctAnswer: "Csilla",
    wrongAnswers: ["Rentor", "Primea", "Mokivj"],
    source,
  },
  {
    question:
      "Who was with Thrawn when he encountered Anakin Skywalker above Batuu?",
    correctAnswer: "Che'ri",
    wrongAnswers: ["Thalias", "Ar'alani", "Ba'kif"],
    source,
  },
  {
    question: "What was a defining feature of Nicardun capital ships?",
    correctAnswer: "Oversized bridge viewport",
    wrongAnswers: [
      "Asymmetrical design",
      "Massive cannons on the underside",
      "Storm clouds painted on the nose",
    ],
    source,
  },
];

export default trivia;
