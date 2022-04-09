import { Trivia } from "types";
import { generateFilmSource } from "../generate_source.ts";

const source = generateFilmSource("The Phantom Menace");

const trivia: Trivia[] = [
  {
    question: "Who dispatched Qui-Gon and Obi-Wan to Naboo?",
    correctAnswer: "The Supreme Chancellor",
    wrongAnswers: ["The Jedi Council", "The Senate", "The Trade Federation"],
    source,
  },
  {
    question:
      "What kind of gas did the Trade Federation use to try and kill Qui-Gon and Obi-Wan?",
    correctAnswer: "Dioxis",
    wrongAnswers: ["Tibana", "Bacta", "Chloroform"],
    source,
  },
  {
    question: 'Finish the quote: "The ability to speak _____"',
    correctAnswer: "does not make you intelligent.",
    wrongAnswers: [
      "should be used sparingly.",
      "is a beautiful gift.",
      "is how liberty dies.",
    ],
    source,
  },
  {
    question:
      "Where was the droid captain ordered to take the royal party on Naboo?",
    correctAnswer: "Camp 4",
    wrongAnswers: ["Camp 6", "Camp 3", "Camp 11 "],
    source,
  },
  {
    question: "How did R2-D2 fix the shields on the Naboo Royal Starship?",
    correctAnswer: "Bypass the main power drive",
    wrongAnswers: [
      "Bypass the compressor",
      "Replace the negative power coupling",
      "Fire the emergency booster engines",
    ],
    source,
  },
  {
    question:
      "According to Qui-Gon, spaceports like Mos Espa are havens for who?",
    correctAnswer: "Those who don't wish to be found",
    wrongAnswers: [
      "Scum and villainy",
      "Pod racers",
      "Traders and star pilots",
    ],
    source,
  },
  {
    question:
      "Padmé called him perfect, but what did R2 call C-3PO when they first met?",
    correctAnswer: "Naked",
    wrongAnswers: ["Mindless philosopher", "Professor", "Golden rod"],
    source,
  },
  {
    question: "What color on Watto's chance cube represented Anakin?",
    correctAnswer: "Blue",
    wrongAnswers: ["Red", "Green", "Yellow"],
    source,
  },
  {
    question:
      "Whose pod was the first to be destroyed in the Boonta Eve Classic?",
    correctAnswer: "Mawhonic",
    wrongAnswers: ["Ben Quadrinaros", "Clegg Holdfast", "Dud Bolt"],
    source,
  },
  {
    question: "Who lifted Anakin out of the podracer?",
    correctAnswer: "Qui-Gon",
    wrongAnswers: ["Padmé", "Shmi", "Kitster"],
    source,
  },
  {
    question: "What did Anakin carve the necklace he gave Padmé from?",
    correctAnswer: "A Japor snippet",
    wrongAnswers: ["Wroshyr wood", "Oka-wood", "A Pizo stick"],
    source,
  },
  {
    question:
      "Who joined the Trade Federation in pushing for a commission to be sent to Naboo?",
    correctAnswer: "The Congress of Malastare",
    wrongAnswers: [
      "The Represtative from Ryloth",
      "The Senator from Alderaan",
      "The Jedi Council",
    ],
    source,
  },
  {
    question: "According to Yoda, what does anger lead to?",
    correctAnswer: "Hate",
    wrongAnswers: ["Fear", "Suffering", "Death"],
    source,
  },
  {
    question: "Which squadron flew at the Battle of Naboo?",
    correctAnswer: "Bravo",
    wrongAnswers: ["Rogue", "Shadow", "Corona"],
    source,
  },
  {
    question:
      "How many times did Darth Maul kick Qui-Gon and Obi-Wan during their duel on Naboo?",
    correctAnswer: "4",
    wrongAnswers: ["2", "3", "5"],
    source,
  },
];

export default trivia;
