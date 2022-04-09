import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("A Test of Courage");

const trivia: Trivia[] = [
  {
    question: "Which Jedi's lightsaber could transform into a lightwhip?",
    correctAnswer: "Vernestra Rwoh",
    wrongAnswers: ["Douglas Sunvale", "Barriss Offee", "Ki-Adi-Mundi"],
    source,
  },
  {
    question: "Which group destroyed the luxury star cruiser Steady Wing?",
    correctAnswer: "Nihil",
    wrongAnswers: ["Deathwatch", "Amaxine Warriors", "Ohnaka Gang"],
    source,
  },
  {
    question: "Which moon was known for its acidic rain storms?",
    correctAnswer: "Wevo",
    wrongAnswers: ["Endor", "Nar Shaddaa", "Galitan"],
    source,
  },
];

export default trivia;
