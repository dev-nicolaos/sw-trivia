import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Queen's Peril", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question:
      "Whose idea was it to put blasters in the queen's throne on Naboo?",
    correctAnswer: "Quarsh Panaka",
    wrongAnswers: ["Padmé Amidala", "Sabé", "Sheev Palpatine"],
    source,
  },
  {
    question: "Which of Padmé's handmadiens was recruited first?",
    correctAnswer: "Sabé",
    wrongAnswers: ["Cordé", "Rabé", "Dormé"],
    source,
  },
  {
    question:
      "Which camp was Gregar Typho held in during the Invasion of Naboo?",
    correctAnswer: "Camp 3",
    wrongAnswers: ["Camp 1", "Camp 2", "Camp 4"],
    source,
  },
];

export default trivia;
