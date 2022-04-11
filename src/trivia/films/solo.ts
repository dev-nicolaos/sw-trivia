import { Trivia } from "types";
import { generateFilmSource } from "../generate_source.ts";

const source = generateFilmSource("Solo");

const trivia: Trivia[] = [
  {
    question: "What gang were Han and Qi'ra part of on Corellia?",
    correctAnswer: "White Worms",
    wrongAnswers: ["Crimson Dawn", "Guavian Death Gang", "Shadow Collective"],
    source,
  },
  {
    question:
      "What vehicle did Han and Qi'ra use in their attempt to escape the White Worms?",
    correctAnswer: "M-68 landspeeder",
    wrongAnswers: [
      "A-A4B truckspeeder",
      "C-PH patrol speeder bikes",
      "BARC speeders",
    ],
    source,
  },
  {
    question:
      "What did Han use to bribe an Imperial officer while escaping from Corellia?",
    correctAnswer: "Coaxium",
    wrongAnswers: ["Corellian hyperfuel", "Imperial credits", "His ship"],
    source,
  },
  {
    question:
      "Where was the Imperial naval academy Han Solo was sent to after enlisting on Corellia?",
    correctAnswer: "Carida",
    wrongAnswers: ["Corulag", "Arkanis", "Montross"],
    source,
  },
  {
    question:
      "How long after enlisting in the Imperial military did Han meet Tobias Beckett and his crew?",
    correctAnswer: "3 years",
    wrongAnswers: ["6 months", "1 year", "2 years"],
    source,
  },
  {
    question: "Where did Han Solo and Chewbacca meet?",
    correctAnswer: "Mimban",
    wrongAnswers: ["Kashyyyk", "Corellia", "Tatooine"],
    source,
  },
  {
    question:
      "Which member of Beckett's crew was worried about Enfys Nest ruining the heist on Vandor?",
    correctAnswer: "Val",
    wrongAnswers: ["Rio Durant", "Tobias Beckett", "Han Solo"],
    source,
  },
  {
    question: "What instrument did Tobias Beckett want to learn to play?",
    correctAnswer: "Valachord",
    wrongAnswers: ["Seven-string hallikset", "Melodium", "Kloo horn"],
    source,
  },
  {
    question:
      "What kept Val from getting off the bridge on Vandor before blowing it up?",
    correctAnswer: "She was pinned down by Viper Droids",
    wrongAnswers: [
      "Her leg was injured",
      "Her speeder was disabled",
      "She was blinded",
    ],
    source,
  },
  {
    question:
      "How did Qi'ra say Han looked when they reunited on Dryden Voss's yacht?",
    correctAnswer: "A little rough around the edges, but good",
    wrongAnswers: ["Like a wet loth cat", "", ""],
    source,
  },
  {
    question:
      "Which criminal organization did Dryden Voss say controlled Kessel?",
    correctAnswer: "Pyke Syndicate",
    wrongAnswers: ["Black Sun", "Crimson Dawn", "Shadow Collective"],
    source,
  },
  {
    question:
      "What ship model did Han claim he owned during the sabacc game on Vandor?",
    correctAnswer: "VCX-100",
    wrongAnswers: ["YT-1300", "T-16", "GR-75"],
    source,
  },
  {
    question: "Who killed Aurra Sing?",
    correctAnswer: "Tobias Beckett",
    wrongAnswers: ["Boba Fett", "Lando Calrissian", "Darth Maul"],
    source,
  },
];

export default trivia;
