import { TRIVIA } from "types";
import { generateTVSource } from "helpers";

const genSource = (episode: string) => generateTVSource("Resistance", episode);

const trivia: TRIVIA[] = [
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
    question:
      "The Colussus' enginneers were primarily made up of what species?",
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
      "What species terroized Kaz and Poe while responding to a distress signal in sector six?",
    correctAnswer: "Kowakian Monkey-Lizards",
    wrongAnswers: ["Grallocs", "Reeks", "Rathars"],
    source: genSource("Signal from Sector Six"),
  },
  /* {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Synara's Score"),
  },
  {
    question: "How many stages does the Platform Classic have?",
    correctAnswer: "4",
    wrongAnswers: ["3", "5", "6"],
    source: genSource("The Platform Classic"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Secrets and Holograms"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Stating Theta Black"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Bibo"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Dangerous Business"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("The Doza Dilemma"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("The First Order"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("The New Trooper"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("The Core Problem"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("The Disappeared"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("Descent"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("No Escape: Part 1"),
  },
  {
    question: "",
    correctAnswer: "",
    wrongAnswers: ["", "", ""],
    source: genSource("No Escape: Part 2"),
  }, */
];

export default trivia;
