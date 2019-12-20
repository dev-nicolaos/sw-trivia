import { TRIVIA, SOURCE } from "interfaces";

const source: SOURCE = { name: "Ahsoka", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question:
      "Just before Order 66, Ahsoka Tano had the opportunity to kill Darth Maul, but she instead chose to save who?",
    correctAnswer: "Captain Rex",
    wrongAnswers: ["Commander Cody", "Ezra Bridger", "Kaeden Larte"],
    source,
  },
];

export default trivia;
