import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Thrawn Ascendancy: Lesser Evil");

const trivia: Trivia[] = [
  {
    question: "What Chiss family was Supreme General Ba'kif originally from?",
    correctAnswer: "Stybla",
    wrongAnswers: ["Clarr", "Mitth", "Irizi"],
    source,
  },
  {
    question:
      "Which was NOT one of the Grysk client species Jixtus sent against the Chiss?",
    correctAnswer: "Darshi",
    wrongAnswers: ["Nikardun", "Agbui", "Kilji"],
    source,
  },
  {
    question: `What did the "odo" suffix in Mitth'raw'nuruodo's name mean?`,
    correctAnswer: "Guardian",
    wrongAnswers: ["Wise one", "Leader", "Conquerer"],
    source,
  },
];

export default trivia;
