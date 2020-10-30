import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Aftermath: Life Debt", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "Who gave Temmin Wexley the nickname Snap?",
    correctAnswer: "Wedge Antilles",
    wrongAnswers: ["Norra Wexley", "Luke Skywalker", "Leia Organa"],
    source,
  },
  {
    question:
      "How many Super Star Destroyers were in service at the time of the Battle of Endor?",
    correctAnswer: "13",
    wrongAnswers: ["9", "4", "17"],
    source,
  },
  {
    question: "Where did Han Solo and Leia Organa get married?",
    correctAnswer: "Endor",
    wrongAnswers: ["Corellia", "The space where Alderaan used to be", "Naboo"],
    source,
  },
  {
    question: "Which prison was located on Kashyyyk?",
    correctAnswer: "Ashmead's Lock",
    wrongAnswers: ["Camp Four", "Maelstrom Prison", "Megalox"],
    source,
  },
  {
    question:
      "What holiday celebrated the release of prisoners from Ashmead's Lock?",
    correctAnswer: "Liberation Day",
    wrongAnswers: ["Life Day", "Boonta Eve", "Founder's Day"],
    source,
  },
];

export default trivia;
