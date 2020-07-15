import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Bloodline", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "Which political party did Ransolm Casterfo belong to?",
    correctAnswer: "Centrists",
    wrongAnswers: ["Populists", "Loyalists", "Revanchists"],
    source,
  },
  {
    question: "Which ship belonged to Leia Organa?",
    correctAnswer: "Mirrorbright",
    wrongAnswers: ["Imperialis", "Fortitude", "Esseles"],
    source,
  },
  {
    question: "What body was the target of the Napkin Bombing?",
    correctAnswer: "The New Republic Senate",
    wrongAnswers: [
      "The Galatic Republic Senate",
      "The Imperial Senate",
      "The Dark Council",
    ],
    source,
  },
  {
    question: "Who discovered that Leia's birth father was Darth Vader?",
    correctAnswer: "Lady Carise Sindian",
    wrongAnswers: [
      "Senator Tai-Lin Garr",
      "Grand Moff Tarkin",
      "Admiral Ackbar",
    ],
    source,
  },
];

export default trivia;
