import { Trivia } from "types";
import { generateGameSource } from "../generate_source.ts";

const source = generateGameSource("Squadrons");

const trivia: Trivia[] = [
  {
    question: "Which Imperial TIE pilot did NOT defect to the Rebel Alliance?",
    correctAnswer: "Terisa Kerrill",
    wrongAnswers: ["Lindon Javes", "Wedge Antilles", "Thane Kyrell"],
    source,
  },
  {
    question:
      "Who sent Commodore Sloane to wipe out Alderaanian refugees at Fostar Haven?",
    correctAnswer: "Darth Vader",
    wrongAnswers: [
      "Grand Admiral Thrawn",
      "Emperor Palpatine",
      "General Tagge",
    ],
    source,
  },
  {
    question:
      "What was Zerelda Sage's position aboard the New Republic ship Temperance?",
    correctAnswer: "Chief Mechanic",
    wrongAnswers: ["Weapons Officer", "Chief Hangar Master", "Navigator"],
    source,
  },
  {
    question:
      "Where was the pilot Kierah Koovah (commonly known as Gunny) from?",
    correctAnswer: "Mimban",
    wrongAnswers: ["Vandor", "Alderaan", "Tatooine"],
    source,
  },
  {
    question:
      "What was Keo Venzee's occupation prior to joining the fight against the Empire?",
    correctAnswer: "Semi-pro racer",
    wrongAnswers: ["Civilian transport pilot", "Smuggler", "Hyperspace scout"],
    source,
  },
  {
    question:
      "What type of ship did Talus group and Vanguard squadron seize above Yavin?",
    correctAnswer: "Star Destroyer",
    wrongAnswers: [
      "Gozanti-class Cruiser",
      "Raider II-class Corvette",
      "Dynamic-class Freighter",
    ],
    source,
  },
  {
    question:
      "Where was the New Republic's first Starhawk capital ship produced?",
    correctAnswer: "Nadiri Dockyards",
    wrongAnswers: [
      "Kuat Drive Yards",
      "Fondor Shipyards",
      "Mon Calamari Shipyards",
    ],
    source,
  },
  {
    question:
      "Which Imperial unit was tasked with hunting down and eliminating project Starhawk?",
    correctAnswer: "Titan Squadron",
    wrongAnswers: ["Shadow Wing", "Task Force 231", "Zeta Squadron"],
    source,
  },
];

export default trivia;
