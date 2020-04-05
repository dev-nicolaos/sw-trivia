import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Thrawn: Treason", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "Which Imperial Star Destroyer was NOT part of the Third Fleet?",
    correctAnswer: "Avenger",
    wrongAnswers: ["Firedrake", "Misthunter", "Stormbird"],
    source,
  },
  {
    question:
      "What creatures caused problems for project Stardust at the Kurost Transfer Point?",
    correctAnswer: "Grallocs",
    wrongAnswers: ["Mynocks", "Purrgils", "Neebrays"],
    source,
  },
];

export default trivia;
