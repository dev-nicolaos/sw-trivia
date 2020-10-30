import { SOURCE, TRIVIA } from "types";

const source: SOURCE = {
  name: "From a Certain Point of View",
  mediaType: "Book",
};

const trivia: TRIVIA[] = [
  {
    question:
      "Which faulty component allowed the Devastator to track the Tantive IV through hyperspace?",
    correctAnswer: "Hyperdrive",
    wrongAnswers: ["Navicomputer", "Maneuvering thrusters", "Distress beacon"],
    source,
  },
  {
    question:
      "Why did the Devastator's gunnery captain order that C-3PO and R2-D2's escape pod not be fired upon?",
    correctAnswer:
      "Firing on an unoccupied escape pod would negatively impact his kill ratio",
    wrongAnswers: [
      "He was secretly a rebel agent",
      "He was controlled by an implanted device",
      "His superior officer told him not to",
    ],
    source,
  },
  {
    question:
      "Where were Bail and Breha Organa when the Death Star Destroyed Alderaan?",
    correctAnswer: "The balcony outside their room",
    wrongAnswers: [
      "Appenza Peak",
      "On a ship trying to escape",
      "University of Alderaan",
    ],
    source,
  },
  {
    question:
      "Who was on Dantooine when the Empire came to find the remnants of a Rebel base?",
    correctAnswer: "Dr. Aphra",
    wrongAnswers: ["Mon Mothma", "Boba Fett", "Ahsoka Tano"],
    source,
  },
];

export default trivia;
