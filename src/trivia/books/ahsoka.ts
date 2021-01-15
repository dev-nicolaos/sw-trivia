import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Ahsoka", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question:
      "What assumed name did Ahsoka Tano use while on Thabeska and Raada?",
    correctAnswer: "Ashla",
    wrongAnswers: ["Acina", "Aphra", "Ashana"],
    source,
  },
  {
    question:
      "What organization put a bounty on Ahsoka Tano during her time as a pilot for the Fardi Clan?",
    correctAnswer: "Black Sun",
    wrongAnswers: ["COMPNOR", "Crimson Dawn", "The Inquisitors"],
    source,
  },
  {
    question: "How did Ahsoka get the crystals for her white lightsabers?",
    correctAnswer: "By defeating an Inquisitor",
    wrongAnswers: [
      "During the Gathering on Ilum",
      "While scouting on Christophsis",
      "By sneaking into the Jedi Temple",
    ],
    source,
  },
];

export default trivia;
