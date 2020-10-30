import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Aftermath: Empire's End", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "What was Chewbacca's son's name?",
    correctAnswer: "Lumpawaroo",
    wrongAnswers: ["Greybok", "Tarfful", "Gungi"],
    source,
  },
  {
    question:
      "What was Jar Jar Bink's occupation during the Galatic Civil War? ",
    correctAnswer: "Clown",
    wrongAnswers: ["Senator", "Fisherman", "Warrior"],
    source,
  },
  {
    question: "How did the New Republic destroy the Ravager?",
    correctAnswer: "Used a tractor beam to pull it into Jakku's atmosphere",
    wrongAnswers: [
      "Destroyed it with turbo laser fire",
      "Crashed another capital ship into it",
      "Set charges in its hyperdrive chamber",
    ],
    source,
  },
  {
    question: "Who did Emperor Palpatine place in charge of The Contingency?",
    correctAnswer: "Gallius Rax",
    wrongAnswers: ["Rae Sloane", "Darth Vader", "Mas Amedda"],
    source,
  },
];

export default trivia;
