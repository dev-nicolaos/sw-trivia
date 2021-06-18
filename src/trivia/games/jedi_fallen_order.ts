import { TRIVIA } from "types";
import { generateGameSource } from "../generate_source.ts";

const source = generateGameSource("Jedi: Fallen Order");

const trivia: TRIVIA[] = [
  {
    question: "Whose life did Cal Kestis save on Bracca?",
    correctAnswer: "Prauf",
    wrongAnswers: ["Jaro Tapal", "Eno Cordova", "Cere Junda"],
    source,
  },
  {
    question: "What ship was captained by Greez Dritus?",
    correctAnswer: "The Mantis",
    wrongAnswers: ["The Desert Jewel", "The Malevolence", "The Ebon Hawk"],
    source,
  },
  {
    question:
      "Which Imperial program involved collecting artifacts from Zeffo tombs?",
    correctAnswer: "Project Auger",
    wrongAnswers: [
      "Project Celestial Power",
      "Project Blackwing",
      "The Cylo Directive",
    ],
    source,
  },
  {
    question: "Which Inquisitor had been Cere Junda's padawan?",
    correctAnswer: "The Second Sister",
    wrongAnswers: [
      "The Ninth Sister",
      "The Seventh Sister",
      "The Fifth Brother",
    ],
    source,
  },
  {
    question: "Which relative did Greez Dritus frequently quote?",
    correctAnswer: "Great Grandmother",
    wrongAnswers: ["Grandfather", "Cousin", "Neice"],
    source,
  },
  {
    question: "Cal Kestis befriended which creature on Kashyyyk?",
    correctAnswer: "Shyyyo bird",
    wrongAnswers: ["Wyyyschokk", "Slyyyg", "Mykal"],
    source,
  },
  {
    question: "Who helped Cal Kestis defeat Taron Malicos?",
    correctAnswer: "Merrin",
    wrongAnswers: ["Cere Junda", "Jaro Tapal", "Saw Gerrera"],
    source,
  },
  {
    question: "Where was the Fortress Inquisitorius located?",
    correctAnswer: "Nur",
    wrongAnswers: ["Coruscant", "Malachor", "Korriban"],
    source,
  },
  {
    question: "Which criminal organization captured Cal Kestis?",
    correctAnswer: "Haxion Brood",
    wrongAnswers: ["Deathwatch", "Black Sun", "Crimson Dawn"],
    source,
  },
];

export default trivia;
