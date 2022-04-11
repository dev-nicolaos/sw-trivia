import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Resistance Reborn");

const trivia: Trivia[] = [
  {
    question: "Where did the Resistance seek refuge after the Battle of Crait?",
    correctAnswer: "Ryloth",
    wrongAnswers: ["Hoth", "Corellia", "D'Qar"],
    source,
  },
  {
    question: "Who did Wedge Antilles marry?",
    correctAnswer: "Norra Wexley",
    wrongAnswers: ["Hera Syndulla", "Mon Mothma", "Iden Versio"],
    source,
  },
  {
    question: 'Which group\'s slogan was "All Knowledge Must be Free"?',
    correctAnswer: "The Collective",
    wrongAnswers: ["The GenoHaradan", "The Order of Revan", "The Droid Gotra"],
    source,
  },
];

export default trivia;
