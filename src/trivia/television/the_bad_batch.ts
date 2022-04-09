import { Trivia } from "types";
import { generateTVSource } from "../generate_source.ts";

const genSource = (episode: string) =>
  generateTVSource("The Bad Batch", episode);

const trivia: Trivia[] = [
  {
    question:
      "Which Jedi was on the same planet as Clone Force 99 when Order 66 was given?",
    correctAnswer: "Caleb Dume",
    wrongAnswers: ["Obi-Wan Kenobi", "Plo Koon", "Cal Kestis"],
    source: genSource("Aftermath"),
  },
  {
    question:
      "What unit was sent to hunt down Saw Gerrera's Republic fighters shortly after Order 66?",
    correctAnswer: "Clone Force 99",
    wrongAnswers: ["Twilight Company", "Death Watch", "First Legion"],
    source: genSource("Aftermath"),
  },
  {
    question:
      "Other than Kamino, what was the first planet the clone Omega ever visited?",
    correctAnswer: "Saleucami",
    wrongAnswers: ["Bracca", "Geonosis", "Coruscant"],
    source: genSource("Cut and Run"),
  },
  {
    question:
      "What type of creature snatched a capacitor from the Marauder after the ship crash landed?",
    correctAnswer: "Ordo Moon Dragon",
    wrongAnswers: ["Rancor", "Brezak", "Mynock"],
    source: genSource("Replacements"),
  },
  {
    question: "Which bounty hunter tried to capture Omega on Pantora?",
    correctAnswer: "Fennec Shand",
    wrongAnswers: ["Boba Fett", "Cad Bane", "Dengar"],
    source: genSource("Cornered"),
  },
  {
    question: "Where was Cid's Parlor located?",
    correctAnswer: "Ord Mantell",
    wrongAnswers: ["Tatooine", "Nevarro", "Chandrila"],
    source: genSource("Rampage"),
  },
  {
    question:
      "Who did the Bad Batch encounter while trying to retrieve a tactical droid on Corellia?",
    correctAnswer: "Trace and Rafa Martez",
    wrongAnswers: ["Han and Qi'ra", "Cal Kestis", "Ferus Olin"],
    source: genSource("Decommissioned"),
  },
  {
    question: "Where did Rex remove the Bad Batch's inhibitor chips?",
    correctAnswer: "A wrecked Venator's medbay on Bracca",
    wrongAnswers: [
      "A medical lab on Kamino",
      "A prison on Wobani",
      "A shuttle leaving Ringo Vinda",
    ],
    source: genSource("Battle Scars"),
  },
  {
    question:
      "What was the source of the severe facial burns Crosshair suffered?",
    correctAnswer: "A Venator's ion engines",
    wrongAnswers: ["Lava", "Blaster bolts", "A thermal detonater explosion"],
    source: genSource("Reunion"),
  },
  {
    question:
      "Besides Boba, which clone shared Jango Fett's identical (unaltered) genes?",
    correctAnswer: "Omega",
    wrongAnswers: ["Hunter", "Cody", "Tup"],
    source: genSource("Bounty Lost"),
  },
  {
    question: "Who hired Fennec Shand to track down Omega?",
    correctAnswer: "Chief Medical Scientist Nala Se",
    wrongAnswers: [
      "Prime Minister Lama Su",
      "Emperor Palpatine",
      "Vice Admiral Rampart",
    ],
    source: genSource("Bounty Lost"),
  },
  {
    question:
      "What ground vehicle did the Imperials deploy to break up crowds during the occupation of Raxus?",
    correctAnswer: "AT-TE walkers",
    wrongAnswers: ["AT-ST walkers", "AT-AT walkers", "AT-M6 walkers"],
    source: genSource("Common Ground"),
  },
  {
    question:
      "What type of facility did the Empire build on Ryloth after the end of the Clone Wars?",
    correctAnswer: "A doonium refinery",
    wrongAnswers: [
      "A starfighter factory",
      "A spice mine",
      "A droid manufacturing plant",
    ],
    source: genSource("Devil's Deal"),
  },
  {
    question:
      'Finish the quote: "I have seen how you treat your allies admiral. _____"',
    correctAnswer: "I prefer to be your enemy.",
    wrongAnswers: [
      "A shrewd tactic to be sure.",
      "They slave away while you prosper.",
      "But you will need to do more to convince me.",
    ],
    source: genSource("Rescue on Ryloth"),
  },
  {
    question: "Who taught Hera Syndulla how to scramble a ship's signature?",
    correctAnswer: "Tech",
    wrongAnswers: ["Cham Syndulla", "Gobi Glie", "Ahsoka Tano"],
    source: genSource("Resue on Ryloth"),
  },
  {
    question:
      "Ord Mantell's Irling creature were particularly sensitive to what?",
    correctAnswer: "Light",
    wrongAnswers: ["Radiation", "Heat", "Air"],
    source: genSource("Infested"),
  },
  {
    question:
      "Which type of Clone trooper did the Empire assign to train the first Stormtroopers?",
    correctAnswer: "Clone Commandos",
    wrongAnswers: ["ARC Troopers", "Shock Troopers", "Clone medics"],
    source: genSource("War-Mantle"),
  },
  {
    question: "How was Kamino's capital (Tipoca City) destroyed?",
    correctAnswer: "Capital ship bombardment",
    wrongAnswers: [
      "A giant tsunami",
      "A meteor shower",
      "Death Star test fire",
    ],
    source: genSource("Return to Kamino"),
  },
  {
    question: "How did Tech describe Crosshair's nature?",
    correctAnswer: "Severe and unyielding",
    wrongAnswers: [
      "Tough and gritty",
      "Direct and precise",
      "Careful and measured",
    ],
    source: genSource("Kamino Lost"),
  },
];

export default trivia;
