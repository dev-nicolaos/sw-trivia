import { TRIVIA } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Victory's Price");

const trivia: TRIVIA[] = [
  {
    question:
      "Who witnessed Luke Skywalker standing next to Darth Vader's funeral pyre on Endor?",
    correctAnswer: "Wyl Lark",
    wrongAnswers: ["Jas Emari", "Hera Syndulla", "Gideon Hask"],
    source,
  },
  {
    question: "Which Shadow Wing engagement occured last?",
    correctAnswer: "The Battle at Chadawa",
    wrongAnswers: [
      "The Attack on Troithe",
      "The Attack on Pandem Nai",
      "The Destruction of Nacronis",
    ],
    source,
  },
  {
    question:
      "Which Star Destroyer was part of the blockade of Coruscant after the Battle of Endor?",
    correctAnswer: "The Panaka",
    wrongAnswers: ["The Avenger", "The Devastator", "The Chimaera"],
    source,
  },
];

export default trivia;
