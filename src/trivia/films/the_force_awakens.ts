import { Trivia } from "types";
import { generateFilmSource } from "../generate_source.ts";

const source = generateFilmSource("The Force Awakens");

const trivia: Trivia[] = [
  {
    question: "Who did Leia send to Jakku to meet with Lor San Tekka?",
    correctAnswer: "Poe Dameron",
    wrongAnswers: ["Snap Wexley", "Rey", "Wedge Antilles"],
    source,
  },
  {
    question: 'Finish the quote: "Without the Jedi there can be no _____"',
    correctAnswer: "balance in the force.",
    wrongAnswers: [
      "peace in the galaxy.",
      "order in the Republic.",
      "hope for the Rebellion.",
    ],
    source,
  },
  {
    question:
      "What information did Poe hide with BB-8 on Jakku before being captured?",
    correctAnswer: "A piece of a map",
    wrongAnswers: [
      "Plans to a weapon",
      "A signed treaty",
      "An audio recording",
    ],
    source,
  },
  {
    question:
      "Which member of the First Order was not present at the raid of Lor San Tekka's village?",
    correctAnswer: "General Hux",
    wrongAnswers: ["Kylo Ren", "Captain Phasma", "FN 2187 (Finn)"],
    source,
  },
  {
    question: "How many thrusters did Rey's speeder on Jakku have?",
    correctAnswer: "2",
    wrongAnswers: ["1", "3", "4"],
    source,
  },
  {
    question: "What did Rey use as her home on Jakku?",
    correctAnswer: "An abandoned AT-AT",
    wrongAnswers: [
      "A crashed starship",
      "An old moisture farm",
      "A small tent in Niima Outpost",
    ],
    source,
  },
  {
    question:
      "How many portions did Unkar Plutt offer to Rey in exchange for BB-8?",
    correctAnswer: "60",
    wrongAnswers: ["20", "100", "500"],
    source,
  },
  {
    question:
      "Why did Finn originally say he was helping Poe escape the First Order?",
    correctAnswer: "Because it was the right thing to do",
    wrongAnswers: [
      "Because he needed a pilot",
      "Because he was angry",
      "Because he was ordered to",
    ],
    source,
  },
  {
    question:
      "What type of ship did Poe and Finn escape the First Order Star Destroyer in?",
    correctAnswer: "Special Forces TIE fighter",
    wrongAnswers: [
      "Upsilon-class Command Shuttle",
      "Atmospheric Assault Lander",
      "TIE Reaper",
    ],
    source,
  },
];

export default trivia;
