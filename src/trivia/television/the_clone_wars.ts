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
    question:
      "Which bomber squadron was tasked with destroying the Malevolence",
    correctAnswer: "Shadow",
    wrongAnswers: ["Gold", "Blade", ""],
    source: genSource("Shadow of Malevolence"),
  },
  {
    question:
      "What shortcut did Anakin and Shadow squadron take to cut off the Malevolence?",
    correctAnswer: "The Balmorra Run",
    wrongAnswers: [
      "The Kessel Run",
      "The Nexus Route",
      "The Perlemian Trade Route",
    ],
    source: genSource("Shadow of Malevolence"),
  },
  {
    question: "Whose ship was captured by the Malevolence?",
    correctAnswer: "Padmé Amidala",
    wrongAnswers: ["Luke Skywalker", "Ahsoka Tano", "Boba Fett"],
    source: genSource("Destroy Malevolence"),
  },
  {
    question:
      "What substance was used as fuel to heat the Republic outpost on Rishi's moon?",
    correctAnswer: "Liquid Tabana",
    wrongAnswers: ["Clouzon-36", "Isotope-5", "Stygium crystals"],
    source: genSource("Rookies"),
  },
  {
    question:
      "Which clone survived the droid infiltration of the Republic outpost outpost on Rishi's moon?",
    correctAnswer: "Echo",
    wrongAnswers: ["Hevy", "Droidbait", "Cutup"],
    source: genSource("Rookies"),
  },
  {
    question:
      "Which droid temporarily replaced R2-D2 when he was lost during the Battle of Bothawui",
    correctAnswer: "R3-S6",
    wrongAnswers: ["4-A7", "R3-A3", "C1-10P"],
    source: genSource("Downfall of a Droid"),
  },
  {
    question: "Who did Viceroy Gunray mistake for a Jedi on Rodia?",
    correctAnswer: "Jar Jar Binks",
    wrongAnswers: ["Senator Amidala", "C-3PO", "Onaconda Farr"],
    source: genSource("Bombad Jedi"),
  },
  {
    question: "Where was General Grevious' Lair?",
    correctAnswer: "The Vassek system",
    wrongAnswers: ["The Zeffo system", "The Bith system", "The Llanic system"],
    source: genSource("Lair of Grevious"),
  },
  {
    question: "Which species was only found on Vanqor?",
    correctAnswer: "Gundark",
    wrongAnswers: ["Loth Wolf", "Krayt Dragon", "Terentatek"],
    source: genSource("Dooku Captured"),
  },
  {
    question: "How far apart were Vanqor and Florrum?",
    correctAnswer: "6 parsecs",
    wrongAnswers: ["12 parsecs", "10 parsecs", "14 parsecs"],
    source: genSource("Dooku Captured"),
  },
  {
    question:
      'Finish the quote: "If one hostage is good, then two are better. And three, _____',
    correctAnswer: "well, that's just good business!",
    wrongAnswers: [
      "well, that's a retirement plan!",
      "well, that's just a gift from above!",
      "well, nobody ever gets three.",
    ],
    source: genSource("The Gungan General"),
  },
  {
    question: "What planet was the homeworld of the Pyke Syndicate?",
    correctAnswer: "Oba Diah",
    wrongAnswers: ["Mustafar", "Felucia", "Kessel"],
    source: genSource("The Lost One"),
  },
];

export default trivia;
