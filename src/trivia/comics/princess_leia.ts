import { TRIVIA } from "types";
import { generateComicSource } from "helpers";

const genSource = (issue: number) =>
  generateComicSource("Princess Leia", issue);

const trivia: TRIVIA[] = [
  {
    question: "What was the name of Nien Nunb's starship?",
    correctAnswer: "Mellcrawler",
    wrongAnswers: ["Outrider", "Ghost", "Gauntlet"],
    source: genSource(4),
  },
];

export default trivia;
