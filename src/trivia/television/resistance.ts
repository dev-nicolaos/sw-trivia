import { Trivia } from "types";
import { generateTVSource } from "../generate_source.ts";

const genSource = (episode: string) => generateTVSource("Resistance", episode);

const trivia: Trivia[] = [
  {
    question: "Where did Poe leave Kazuda Xiono on his first assignment?",
    correctAnswer: "The Colossus",
    wrongAnswers: [
      "The Mako-Ta Space Docks",
      "The Emperor's Fortress",
      "The Raddus",
    ],
    source: genSource("The Recruit: Part 1"),
  },
  {
    question:
      "Who does Kaz choose to race against in his first race aboard the Colossus?",
    correctAnswer: "Torra Doza",
    wrongAnswers: ["Hype Fazon", "Griff Halloran", "Freya Fenris"],
    source: genSource("The Recruit: Part 2"),
  },
  {
    question: "Who led the pirate attacks on the Colossus?",
    correctAnswer: "Kragan Gorr",
    wrongAnswers: ["Hondo Anaka", "Enfys Nest", "Ruugar"],
    source: genSource("The Triple Dark"),
  },
  {
    question: "What did Jace Rucklin steal from Jarek Yeager?",
    correctAnswer: "Corellian hyperfuel",
    wrongAnswers: ["A ship", "Credits", "Spice"],
    source: genSource("Fuel for the Fire"),
  },
  {
    question: "Who did the First Order send to negotiate with Captain Doza?",
    correctAnswer: "Elrik Vonreg",
    wrongAnswers: ["Archex", "Phasma", "Brendol Hux"],
    source: genSource("The High Tower"),
  },
  {
    question: "The Colussus' engineers were primarily made up of what species?",
    correctAnswer: "Chelidae",
    wrongAnswers: ["Ugnaughts", "Rodians", "Niktos"],
    source: genSource("The Children from Tehar"),
  },
  {
    question: "Kaz helped orphans from which planet escape the First Order?",
    correctAnswer: "Tehar",
    wrongAnswers: ["Jakku", "Parnassos", "Bogden"],
    source: genSource("The Children from Tehar"),
  },
  {
    question:
      "What species terrorized Kaz and Poe while responding to a distress signal in sector six?",
    correctAnswer: "Kowakian Monkey-Lizards",
    wrongAnswers: ["Grallocs", "Reeks", "Rathars"],
    source: genSource("Signal from Sector Six"),
  },
];

export default trivia;
