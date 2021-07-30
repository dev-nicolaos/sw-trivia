import { TRIVIA } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Shadow Fall");

const trivia: TRIVIA[] = [
  {
    question: "Which planet orbited a black hole?",
    correctAnswer: "Troithe",
    wrongAnswers: ["Tython", "Kamino", "Pandem Nai"],
    source,
  },
  {
    question:
      "Which ship did the 204th Imperial Fighter Wing strip for parts to repair the Star Destroyer Edict",
    correctAnswer: "The Quasar Fire-class cruiser-carrier Allegiance",
    wrongAnswers: [
      "The Quasar Fire-class cruiser-carrier Aerie",
      "The Imperial Star Destroyer Pursuer",
      "The Acclamator-class assault ship Lodestar",
    ],
    source,
  },
];

export default trivia;
