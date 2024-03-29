import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Phasma");

const trivia: Trivia[] = [
  {
    question: "Who captured and tortured Vi Moradi?",
    correctAnswer: "Captain Cardinal",
    wrongAnswers: ["Captain Phasma", "Brendol Hux", "Sinjir Rath Velus"],
    source,
  },
  {
    question: "What planet did Phasma grow up on?",
    correctAnswer: "Parnassos",
    wrongAnswers: ["Arkanis", "Jakku", "Eriadu"],
    source,
  },
  {
    question: "What was Phasma's brother's name?",
    correctAnswer: "Keldo",
    wrongAnswers: ["Cardinal", "Armitage", "Wilhuff"],
    source,
  },
  {
    question: "What caused Brendol Hux's ship to crash on Parnassos?",
    correctAnswer: "Hit by an automated defense system",
    wrongAnswers: [
      "Engine failure",
      "Torn apart by buzz droids",
      "Shot down in a dogfight",
    ],
    source,
  },
  {
    question: "Who killed Brendol Hux?",
    correctAnswer: "Captain Phasma",
    wrongAnswers: ["Captain Cardinal", "Kylo Ren", "Iden Versio"],
    source,
  },
  {
    question: "What was Captain Cardinal's original name?",
    correctAnswer: "Archex",
    wrongAnswers: ["Wullf", "Churkk", "Rae"],
    source,
  },
  {
    question:
      "Who originally owned the ship Phasma smelted her chrome armor from?",
    correctAnswer: "Emperor Palpatine",
    wrongAnswers: ["Brendol Hux", "Padmé Amidala", "General Grievous"],
    source,
  },
  {
    question:
      "How soon after joining the First Order did Phasma earn her Captain's cloak?",
    correctAnswer: "Within 1 year",
    wrongAnswers: ["Within 2 years", "Within 5 years", "Within 3 years"],
    source,
  },
];

export default trivia;
