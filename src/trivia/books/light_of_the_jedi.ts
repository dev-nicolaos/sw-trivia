import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Light of the Jedi", mediaType: "Book" };

const trivia: TRIVIA[] = [
  {
    question: "What was the highest rank within the Nihil?",
    correctAnswer: "Tempest",
    wrongAnswers: ["Strike", "Cloud", "Storm"],
    source,
  },
  {
    question: "How was the freighter Legacy Run destroyed?",
    correctAnswer: "It was torn apart in hyperspace",
    wrongAnswers: [
      "It was shot down with turbolasers",
      "It was dismantled in a junkyard",
      "It smashed into an asteroid",
    ],
    source,
  },
  {
    question:
      "How were the weapon systems of a Jedi Vector starfighter unlocked?",
    correctAnswer: "Placing a lightsaber on an activation panel",
    wrongAnswers: [
      "Moving a gear with the Force",
      "The weapons were unlocked by default",
      "Holding down the triggers for 3 seconds",
    ],
    source,
  },
  {
    question: 'Which Chancellor coined the phrase "We are all the Republic"?',
    correctAnswer: "Lina Soh",
    wrongAnswers: ["Sheev Palpatine", "Mon Mothma", "Finis Valorum"],
    source,
  },
];

export default trivia;
