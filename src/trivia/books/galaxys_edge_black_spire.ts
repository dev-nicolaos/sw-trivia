import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Galaxy's Edge: Black Spire");

const trivia: Trivia[] = [
  {
    question:
      "Who was the first inhabitant of Batuu to join Vi Moradi's Resistance fighters?",
    correctAnswer: "Kriki",
    wrongAnswers: ["Zade Kalliday", "Dolin", "Dok-Ondar"],
    source,
  },
  {
    question: "Which of the following was NOT a common expression on Batuu?",
    correctAnswer: "Karabast",
    wrongAnswers: ["Bright suns", "Rising moons", "May the spires keep you"],
    source,
  },
  {
    question: "How many troopers did Lieutenant Wulfgar Kath take to Batuu?",
    correctAnswer: "20",
    wrongAnswers: ["10", "50", "100"],
    source,
  },
];

export default trivia;
