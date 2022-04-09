import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Thrawn: Alliances");

const trivia: Trivia[] = [
  {
    question: "Why did Palpatine send Thrawn and Vader to Batuu?",
    correctAnswer: "To investigate a disturbance in the force",
    wrongAnswers: [
      "To destroy a rebel base",
      "To negotiate a treaty",
      "To capture a spy",
    ],
    source,
  },
  {
    question: "Which handmadien did Padmé follow to Batuu?",
    correctAnswer: "Duja",
    wrongAnswers: ["Cordé", "Sabé", "Dormé"],
    source,
  },
  {
    question: "What material were the Separatists mining on Mokivj?",
    correctAnswer: "Cortosis",
    wrongAnswers: ["Doonium", "Quadranium", "Electrum"],
    source,
  },
  {
    question: "What was the Separatist factory on Mokivj producing?",
    correctAnswer: "Battle droids",
    wrongAnswers: ["Lightsabers", "Heavy blasers", "Hyena bombers"],
    source,
  },

  {
    question: "How did the Chiss navigate the Unknown Regions?",
    correctAnswer: "Force sensitive Chiss children",
    wrongAnswers: [
      "Navigation computers",
      "By taking many micro jumps",
      "Hyperwave beacons",
    ],
    source,
  },
];

export default trivia;
