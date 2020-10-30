import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Solo", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question: "What gang were Han and Qi'ra part of on Corellia?",
    correctAnswer: "White Worms",
    wrongAnswers: ["Crimson Dawn", "Guavian Death Gang", "Shadow Collective"],
    source,
  },
  {
    question:
      "What did Han use to bribe an Imperial officer while escaping from Corellia?",
    correctAnswer: "Coaxium",
    wrongAnswers: ["Corellian hyperfuel", "Imperial credits", "His ship"],
    source,
  },
  {
    question: "Who killed Aurra Sing?",
    correctAnswer: "Tobias Beckett",
    wrongAnswers: ["Boba Fett", "Lando Calrissian", "Darth Maul"],
    source,
  },
];

export default trivia;
