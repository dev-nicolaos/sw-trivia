import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Dooku: Jedi Lost");

const trivia: Trivia[] = [
  {
    question: "Where did Dooku find Asajj Ventress?",
    correctAnswer: "Rattatak",
    wrongAnswers: ["Dathomir", "Sullust", "Ossus"],
    source,
  },
  {
    question: "How many siblings did Count Dooku have?",
    correctAnswer: "2",
    wrongAnswers: ["0", "1", "4"],
    source,
  },
  {
    question:
      "The Great Tree in the Jedi Temple originally came from a temple on which planet?",
    correctAnswer: "Ossus",
    wrongAnswers: ["Ilum", "Lothal", "Ahch-To"],
    source,
  },
];

export default trivia;
