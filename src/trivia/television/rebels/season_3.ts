import { TRIVIA } from "types";
import { generateTVSource } from "helpers";

const genSource = (episode: string) => generateTVSource("Rebels", episode);

const trivia: TRIVIA[] = [
  {
    question: "All Imperial Super Commandos come from what race of people?",
    correctAnswer: "Mandalorians",
    wrongAnswers: ["Echani", "Corellians", "Pamarthens"],
    source: genSource("Imperial Super Commandos"),
  },
  {
    question: 'Finish the quote: "Everything I did was for family, for _____"',
    correctAnswer: "Mandalore!",
    wrongAnswers: ["honor!", "the Rebellion!", "glory!"],
    source: genSource("Trials of the Darksaber"),
  },
  {
    question: "Who killed Gar Saxon?",
    correctAnswer: "Ursa Wren",
    wrongAnswers: ["Sabine Wren", "Fenn Rau", "Captain Rex"],
    source: genSource("Legacy of Mandalore"),
  },
  {
    question:
      "Whose code cylinder did Kallus use to free Ezra from the Chimaera's detention block?",
    correctAnswer: "Lieutenant Lyste",
    wrongAnswers: [
      "Colonel Yularen",
      "Commander Skerris",
      "Commander Hammerly",
    ],
    source: genSource("Through Imperial Eyes"),
  },
];

export default trivia;
