import { SOURCE, TRIVIA } from "types";

const source: SOURCE = {
  name: "From a Certain Point of View: The Empire Strikes Back",
  mediaType: "Book",
};

const trivia: TRIVIA[] = [
  {
    question:
      "Which planet's Viper probe droid footage did Maela delete from Project Swarm?",
    correctAnswer: "Dagobah",
    wrongAnswers: ["Hoth", "Vulpter", "Ajan Kloss"],
    source,
  },
  {
    question:
      "How many transports did the Rebel Alliance plan to evacuate from Hoth?",
    correctAnswer: "30",
    wrongAnswers: ["20", "40", "50"],
    source,
  },
];

export default trivia;
