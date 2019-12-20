import { TRIVIA } from "interfaces";
import { generateTVSource } from "helpers";

const genSource = (episode: string) =>
  generateTVSource("The Mandalorian", episode);

const trivia: TRIVIA[] = [
  /* {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Chapter 1"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Chapter 2: The Child"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Chapter 3: The Sin"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Chapter 4: Sanctuary"),
  } */
];

export default trivia;
