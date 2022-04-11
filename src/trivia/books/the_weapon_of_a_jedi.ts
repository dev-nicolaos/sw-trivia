import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("The Weapon of a Jedi");

const trivia: Trivia[] = [
  {
    question: "Who became Red Leader after the Battle of Yavin?",
    correctAnswer: "Commander Narra",
    wrongAnswers: ["Wedge Antilles", "Luke Skywalker", "Shara Bey"],
    source,
  },
  {
    question: "What ship did Luke have to have repaired on Devaron?",
    correctAnswer: "A Y-wing Fighter",
    wrongAnswers: [
      "An X-wing Fighter",
      "The Desert Jewel",
      "The Millennium Falcon",
    ],
    source,
  },
  {
    question: "How many remotes did Luke train against at the Eedit Temple?",
    correctAnswer: "3",
    wrongAnswers: ["0", "4", "6"],
    source,
  },
];

export default trivia;
