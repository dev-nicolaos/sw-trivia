import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Dark Disciple", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "Who did the Jedi Council task with assassinating Count Dooku?",
    correctAnswer: "Quinlan Vos",
    wrongAnswers: ["Anakin Skywalker", "Akar-Deshu", "Kit Fisto"],
    source,
  },
  {
    question: "Who proposed giving Asajj Ventress a pardon?",
    correctAnswer: "Yoda",
    wrongAnswers: ["Obi-Wan Kenobi", "Chancellor Palpatine", "Senator Amidala"],
    source,
  },
  {
    question: "What killed Asajj Ventress?",
    correctAnswer: "Force lightning",
    wrongAnswers: ["A ship crash", "A lightsaber strike", "An explosion"],
    source,
  },
];

export default trivia;
