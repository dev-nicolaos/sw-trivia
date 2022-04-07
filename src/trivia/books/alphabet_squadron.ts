import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Alphabet Squadron");

const trivia: Trivia[] = [
  {
    question: "Who convinced Yrica Quell to defect from the Empire?",
    correctAnswer: "Soran Keize",
    wrongAnswers: ["Caern Adan", "Jyn Erso", "Iden Versio"],
    source,
  },
  {
    question: "Where did the Hellion's Dare attempt to escape Shadow Wing?",
    correctAnswer: "The Oridol Cluster",
    wrongAnswers: [
      "The Minos Cluster",
      "The Kaliida Nebula",
      "The Vulpinus Nebula",
    ],
    source,
  },
  {
    question: "Which starfighter was NOT a part of Alphabet Squadron?",
    correctAnswer: "V-wing",
    wrongAnswers: ["A-wing", "U-wing", "X-wing"],
    source,
  },
];

export default trivia;
