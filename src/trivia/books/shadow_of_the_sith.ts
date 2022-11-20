import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Shadow of the Sith");

const trivia: Trivia[] = [
  {
    question: "What were Rey's parent's names?",
    correctAnswer: "Dathan and Miramir",
    wrongAnswers: ["Dathan and Komat", "Unkar and Miramir", "Unkar and Komat"],
    source,
  },
  {
    question: "Who resuced Luke Skywalker from the wraiths on Exegol?",
    correctAnswer: "The force ghost of Anakin Skywalker",
    wrongAnswers: [
      "The forcce ghost of Obi-Wan Kenobi",
      "The force ghost of Yoda",
      "Ahsoka Tano",
    ],
    source,
  },
  {
    question:
      "Radiation from a crashed ship caused all sensor readings to be scrambled on which planet?",
    correctAnswer: "Polaar",
    wrongAnswers: ["Therezar", "Pasaana", "Zeffo"],
    source,
  },
];

export default trivia;
