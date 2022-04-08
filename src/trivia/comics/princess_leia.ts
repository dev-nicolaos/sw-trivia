import { Trivia } from "types";
import { generateComicSource } from "../generate_source.ts";

const genSource = (issue: number) =>
  generateComicSource("Princess Leia", issue);

const trivia: Trivia[] = [
  {
    question: "What was the name of Nien Nunb's starship?",
    correctAnswer: "Mellcrawler",
    wrongAnswers: ["Outrider", "Ghost", "Gauntlet"],
    source: genSource(4),
  },
];

export default trivia;
