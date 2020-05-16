import { TRIVIA } from "types";
import { generateTVSource } from "helpers";

const genSource = (episode: string) =>
  generateTVSource("The Clone Wars", episode);

const trivia: TRIVIA[] = [
  {
    question: "Who commanded the Sepatist blockade of Christophsis?",
    correctAnswer: "Admiral Trench",
    wrongAnswers: ["General Grevious", "Asajj Ventress", "General Loathsom"],
    source: genSource("Cat and Mouse"),
  },
  {
    question:
      "Which clone trooper was feeding intelligence to the Separtists on Christophsis?",
    correctAnswer: "Slick",
    wrongAnswers: ["Chopper", "Rex", "Fives"],
    source: genSource("The Hidden Enemy"),
  },
  {
    question: "Who gave the clone trooper Heavy his nickname?",
    correctAnswer: "99",
    wrongAnswers: ["Shaak Ti", "Bric", "Fives"],
    source: genSource("Clone Cadets"),
  },
  {
    question:
      "How many clones fought with Yoda after being ambushed on Toydaria?",
    correctAnswer: "3",
    wrongAnswers: ["6", "50", "100"],
    source: genSource("Ambush"),
  },
  {
    question: "What type of ship did Ahsoka Tano travel to Christophsis in?",
    correctAnswer: "Republic Attack Shuttle",
    wrongAnswers: [
      "Republic Attack Cruiser",
      "Neimoidian Escort Shuttle",
      "Republic Cruiser",
    ],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Who kidnapped Jabba the Hutt's son Rotta?",
    correctAnswer: "Asajj Ventress",
    wrongAnswers: ["Aurra Sing", "Bossk", "General Grevious"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Where did Anakin and Ahsoka find the Twighlight?",
    correctAnswer: "Teth",
    wrongAnswers: ["Tatooine", "Mustafar", "Mandalore"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Which Hutt conspired to help the Separtists kidnap Jabba's son?",
    correctAnswer: "Ziro",
    wrongAnswers: ["Nashi", "Marlo", "Toborro"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "What was the Malevolence's secret weapon?",
    correctAnswer: "An ion Canon",
    wrongAnswers: [
      "An orbital autocannon",
      "An axial superlaser",
      "A gravity well projector",
    ],
    source: genSource("Rising Malevolence"),
  },
  {
    question: "What planet was the homeworld of the Pyke Syndicate?",
    correctAnswer: "Oba Diah",
    wrongAnswers: ["Mustafar", "Felucia", "Kessel"],
    source: genSource("The Lost One"),
  },
];

export default trivia;
