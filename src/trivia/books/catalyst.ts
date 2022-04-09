import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Catalyst");

const trivia: Trivia[] = [
  {
    question: "What planet was Jyn Erso born on?",
    correctAnswer: "Vallt",
    wrongAnswers: ["Coruscant", "Lokori", "Wobani"],
    source,
  },
  {
    question: "Where did Galen and Lyra Erso get married?",
    correctAnswer: "Coruscant",
    wrongAnswers: ["Tatooine", "Alderaan", "Vallt"],
    source,
  },
  {
    question:
      "What document were members of the Galactic Republic's Special Weapons Group required to sign?",
    correctAnswer: "Official Secrets Act",
    wrongAnswers: ["White Book", "Galactic Concordance", "Senatorial Oath"],
    source,
  },
  {
    question: "Who introduced Saw Gerrera to the Erso family?",
    correctAnswer: "Has Obitt",
    wrongAnswers: ["Orson Krennic", "Hera Syndulla", "Bail Organa"],
    source,
  },
];

export default trivia;
