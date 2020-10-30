import { SOURCE, TRIVIA } from "types";

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
  {
    question: 'What ability did the Chiss refer to as "Second Sight"?',
    correctAnswer: "Telepathy",
    wrongAnswers: ["Precognition", "Telekinesis", "Battle meditation"],
    source,
  },
  {
    question:
      "What type of fighters did Thrawn loan Admiral Ar'alani to fight the Grysks?",
    correctAnswer: "TIE Defenders",
    wrongAnswers: ["TIE Fighters", "TIE Interceptors", "TIE Bombers"],
    source,
  },
  {
    question:
      "Who was behind the operation stealing turbolaser parts from Project Stardust?",
    correctAnswer: "Grand Admiral Savit",
    wrongAnswers: ["Grand Moff Tarkin", "Govenor Haveland", " Colonel Yularen"],
    source,
  },
];

export default trivia;
