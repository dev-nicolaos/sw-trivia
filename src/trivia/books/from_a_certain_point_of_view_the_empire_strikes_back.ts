import { Trivia } from "types";
import { generateBookSource } from "../generate_source.ts";

const source = generateBookSource(
  "From a Certain Point of View: The Empire Strikes Back",
);

const trivia: Trivia[] = [
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
  {
    question:
      "After forming Rogue Squadron, who did Luke Skywalker designate Rouge One?",
    correctAnswer: "No one, he retired the call sign",
    wrongAnswers: ["Zev Senesca", "Wedge Antilles", "Hobbie"],
    source,
  },
  {
    question:
      "What were Dak Ralter's parents doing when they were caught by the Empire?",
    correctAnswer: "Smuggling Jedi Knights to sanctuary",
    wrongAnswers: [
      "Smuggling spice for Jabba the Hutt",
      "Spying for the Rebel Alliance",
      "Selling Kyber crystals",
    ],
    source,
  },
  {
    question:
      "What was the name of the Imperial armored unit which attacked the rebels on Hoth?",
    correctAnswer: "Blizzard Force",
    wrongAnswers: ["Death Squadron", "Emperor's Sword", "First Legion"],
    source,
  },
];

export default trivia;
