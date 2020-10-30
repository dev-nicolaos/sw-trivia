import { SOURCE, TRIVIA } from "types";

const source: SOURCE = {
  name: "Battlefront: Twighlight Company",
  mediaType: "Book",
};

const trivia: TRIVIA[] = [
  {
    question:
      "Which unit became the rear guard for the Rebel Alliance's Mid Rim Retreat?",
    correctAnswer: "Twighlight Company",
    wrongAnswers: ["212 Attack Battalion", "Torrent Company", "Havoc Squad"],
    source,
  },
  {
    question: "Which blaster was standard issue for Twilight Company?",
    correctAnswer: "DLT-20A",
    wrongAnswers: ["E-11", "A280", "DC-15A"],
    source,
  },
  {
    question: "Which ship served as the transport for Twilight Company?",
    correctAnswer: "Thunderstrike",
    wrongAnswers: ["Apailana's Promise", "Twilight", "Mellcrawler"],
    source,
  },
];

export default trivia;
