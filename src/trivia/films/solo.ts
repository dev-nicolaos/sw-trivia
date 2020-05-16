import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Solo", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question: "Who killed Aurra Sing?",
    correctAnswer: "Tobias Beckett",
    wrongAnswers: ["Boba Fett", "Lando Calrissian", "Darth Maul"],
    source,
  },
];

export default trivia;
