import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Master and Apprentice");

const trivia: Trivia[] = [
  {
    question: "Who was Dooku's apprentice before Qui-Gon Jinn?",
    correctAnswer: "Rael Aveross",
    wrongAnswers: ["Mace Windu", "Quinlan Vos", "Sifo-Dyas"],
    source,
  },
  {
    question:
      "How old was Obi-Wan Kenobi when he was first brought to the Jedi Temple?",
    correctAnswer: "3",
    wrongAnswers: ["2", "5", "9"],
    source,
  },
  {
    question: "Which company owned the ship Leverage?",
    correctAnswer: "Czerka Corporation",
    wrongAnswers: [
      "The Trade Federation",
      "The Techno Union",
      "Corellian Engineering Corporation",
    ],
    source,
  },
];

export default trivia;
