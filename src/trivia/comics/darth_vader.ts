import { Trivia } from "types";
import { generateComicSource } from "../generate_source.ts";

const genSource = (issue: number) => generateComicSource("Darth Vader", issue);

const trivia: Trivia[] = [
  {
    question: "Which Jedi Master defeated Darth Vader on Al’doleem?",
    correctAnswer: "Infil’a",
    wrongAnswers: ["Kenobi", "Shaak Ti", "Billaba"],
    source: genSource(3),
  },
];

export default trivia;
