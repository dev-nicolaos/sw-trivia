import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Smuggler's Run");

const trivia: Trivia[] = [
  {
    question:
      "Where did Han Solo and Chewbacca travel to immediately following the Battle of Yavin?",
    correctAnswer: "Cyrkon",
    wrongAnswers: ["Taanab", "Hoth", "Tatooine"],
    source,
  },
  {
    question: "What was the yacht called Serendipity used as?",
    correctAnswer: "A cantina",
    wrongAnswers: ["A base", "A lab", "A market"],
    source,
  },
  {
    question: "In what way was ISB agent Alecia Beck a cyborg?",
    correctAnswer: "She had a cybernetic eye",
    wrongAnswers: [
      "She had a robotic hand",
      "She had a vocal emulator",
      "She had cybernetic legs",
    ],
    source,
  },
];

export default trivia;
