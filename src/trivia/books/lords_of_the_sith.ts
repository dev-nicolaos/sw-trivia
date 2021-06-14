import { TRIVIA } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Lords of the Sith");

const trivia: TRIVIA[] = [
  {
    question: "Which species was the apex predator on Ryloth?",
    correctAnswer: "Lylek",
    wrongAnswers: ["Wampa", "Nexu", "Gutkurr"],
    source,
  },
  {
    question:
      "Which ship was the first Imperial Star Destroyer to be destroyed?",
    correctAnswer: "Perilous",
    wrongAnswers: ["Electrum", "Intimidator", "Persecutor"],
    source,
  },
  {
    question: "Which Imperial fed information to the Free Ryloth movement?",
    correctAnswer: "Belkor Dray",
    wrongAnswers: ["Delian Mors", "Emperor Palpatine", "Mas Amedda"],
    source,
  },
];

export default trivia;
