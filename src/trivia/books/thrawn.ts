import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource("Thrawn");

const trivia: Trivia[] = [
  {
    question:
      "Which language did Thrawn use to communicate with Eli Vanto when they first met?",
    correctAnswer: "Sy Bisti",
    wrongAnswers: ["Basic", "Huttesse", "Shyriiwook"],
    source,
  },
  {
    question: "Why did Thrawn ask Palpatine to assign Eli Vanto to him?",
    correctAnswer: "To learn what Vanto knew of the Chiss",
    wrongAnswers: [
      "To translate for him",
      "Because of Vanto's tactical skills",
      "To teach him the political hierarchy of the Empire",
    ],
    source,
  },
  {
    question: "Which district of Coruscant was The Pinnacle located in?",
    correctAnswer: "The Federal District",
    wrongAnswers: ["The Uscru District", "The Works", "CoCo Town"],
    source,
  },
  {
    question: "From which rank was Eli Vanto promoted to Lieutenant Commander?",
    correctAnswer: "Ensign",
    wrongAnswers: ["Lieutenant", "Captain", "Corporal"],
    source,
  },
  {
    question:
      "Who was the first person Thrawn tried to recruit into Chiss service while he was in the Imperial Navy?",
    correctAnswer: "Nevil Cygni",
    wrongAnswers: ["Eli Vanto", "Brierly Ronan", "Wullf Yularen"],
    source,
  },
];

export default trivia;
