import { TRIVIA } from "types";
import { generateTVSource } from "../generate_source.ts";

const genSource = (episode: string) =>
  generateTVSource("The Bad Batch", episode);

const trivia: TRIVIA[] = [
  {
    question:
      "Which Jedi was on the same planet as Clone Force 99 when Order 66 was given?",
    correctAnswer: "Caleb Dume",
    wrongAnswers: ["Obi-Wan Kenobi", "Plo Koon", "Cal Kestis"],
    source: genSource("Aftermath"),
  },
  {
    question:
      "What unit was sent to hunt down Saw Gerrera's Republic fighters shortly after Order 66?",
    correctAnswer: "Clone Force 99",
    wrongAnswers: ["Twighlight Company", "Death Watch", "First Legion"],
    source: genSource("Aftermath"),
  },
  {
    question:
      "Other than Kamino, what was the first planet the clone Omega ever visited?",
    correctAnswer: "Saleucami",
    wrongAnswers: ["Bracca", "Geonosis", "Coruscant"],
    source: genSource("Cut and Run"),
  },
  {
    question:
      "What type of creature snatched a capacitor from the Marauder after the ship crash landed?",
    correctAnswer: "Ordo Moon Dragon",
    wrongAnswers: ["Rancor", "Brezak", "Mynock"],
    source: genSource("Replacements"),
  },
  {
    question: "Which bounty hunter tried to capture Omega on Pantora?",
    correctAnswer: "Fennec Shand",
    wrongAnswers: ["Boba Fett", "Cad Bane", "Dengar"],
    source: genSource("Cornered"),
  },
];

export default trivia;
