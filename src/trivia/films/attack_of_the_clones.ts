import { TRIVIA, SOURCE } from "interfaces";

const source: SOURCE = { name: "Attack of the Clones", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question:
      "During Episode II: Attack of the Clones, who was the ruler of the Naboo?",
    correctAnswer: "Queen Jamillia",
    wrongAnswers: ["Queen Amidala", "Senator Amidala", "Boss Nass"],
    source,
  },
  {
    question: "What part of Naboo did Anakin and Padmé hideout in?",
    correctAnswer: "Lake Country",
    wrongAnswers: ["Hill Country", "Plateau Country", "Gungan City"],
    source,
  },
  {
    question:
      "Which of Senator Amidala's handmaidens served as a decoy for the trip to Coruscant?",
    correctAnswer: "Cordé",
    wrongAnswers: ["Dormé", "Yané", "Sabé"],
    source,
  },
  {
    question: 'Finish the quote: "He is a _____, not a murderer"',
    correctAnswer: "political idealist",
    wrongAnswers: ["failed Jedi", "separtist leader", "Sith Lord"],
    source,
  },
  {
    question:
      "Other than Amidala herself, who questioned Chancellor Paplatine's recommendation to assign Padmé Jedi protection?",
    correctAnswer: "Senator Organa",
    wrongAnswers: ["Senator Farr", "Master Windu", "Master Unduli"],
    source,
  },
  {
    question: `Finish the quote: "I don't need more security, I need _____"`,
    correctAnswer: "answers.",
    wrongAnswers: ["an investigation.", "real protection.", "Senate support."],
    source,
  },
  {
    question: "Who did Jango Fett hire to kill Senator Amidala?",
    correctAnswer: "Zam Wessel",
    wrongAnswers: ["Boba Fett", "Bossk", "Aurra Sing"],
    source,
  },
  {
    question: "How did Anakin describe being around Padmé?",
    correctAnswer: "Intoxicating",
    wrongAnswers: ["Exciting", "Nerve-wracking", "Distracting"],
    source,
  },
  {
    question:
      'Finish the quote: "Anakin, how many times have I told you to stay away from _____"',
    correctAnswer: "power couplings!",
    wrongAnswers: ["greedy Senators!", "younglings!", "Coruscant clubs!"],
    source,
  },
  {
    question: "How did Anakin get on Zam Wessel's ship?",
    correctAnswer: "Skydiving",
    wrongAnswers: ["Fought his way on board", "Tractor beam", "Snuck Aboard"],
    source,
  },
  {
    question: "Who decided to go home and rethink their life?",
    correctAnswer: "Elan Sleazebaggano",
    wrongAnswers: ["Anakin Skywalker", "Ahsoka Tano", "Lando Calrissian"],
    source,
  },
  {
    question:
      "How long had Padmé been working to defeat the military creation act when she had to flee Coruscant?",
    correctAnswer: "1 year",
    wrongAnswers: ["6 months", "2 years", "1 term"],
    source,
  },
  {
    question: "How did Anakin and Padmé travel to Naboo?",
    correctAnswer: "As refugees",
    wrongAnswers: ["As vacationers", "As diplomats", "As traders"],
    source,
  },
  {
    question: "Where did Dexter Jettster say Kamino was located?",
    correctAnswer: "About 12 parsecs outside the Rishi maze",
    wrongAnswers: [
      "About 12 parsecs inside Wild Space",
      "About 12 parsecs outside the Archeon Nebula",
      "About 12 parsecs outside the Kaliida Nebula",
    ],
    source,
  },
  {
    question:
      "What was Yoda doing when Kenobi went to ask him about Kamino not being in the Jedi archives?",
    correctAnswer: "Teaching younglings",
    wrongAnswers: [
      "Meditating",
      "Flying through hyperspace",
      "Talking to the Chancellor",
    ],
    source,
  },
  {
    question: "Who did Lama Su say placed the order for the clone army?",
    correctAnswer: "Master Sifo-Dyas",
    wrongAnswers: ["Count Dooku", "Jango Fett", "Senator Palpatine"],
    source,
  },
  {
    question: "Which of the following was NOT a way Anakin described sand?",
    correctAnswer: "Gritty",
    wrongAnswers: ["Coarse", "Rough", "Irritating"],
    source,
  },
  {
    question: "Where did Jango Fett say Tyranus recruited him?",
    correctAnswer: "One of the moons of Bogden",
    wrongAnswers: [
      "One of the moons of Mandalore",
      "One of the moons of Iego",
      "One of the moons of Bothawui",
    ],
    source,
  },
  {
    question:
      "How many times did Obi-Wan kick Jango Fett during their duel on Kamino?",
    correctAnswer: "3",
    wrongAnswers: ["1", "2", "5"],
    source,
  },
  {
    question:
      "Which of the following did Jango Fett not use against Obi-Wan above Geonosis?",
    correctAnswer: "Proton torpedos",
    wrongAnswers: ["Seismic charges", "Laser cannons", "Homing missile"],
    source,
  },
  {
    question:
      "How many went out after Shmi when she was taken by the sand people?",
    correctAnswer: "30",
    wrongAnswers: ["20", "40", "50"],
    source,
  },
  {
    question: "What were Shmi Skywalker's final words?",
    correctAnswer: "I love",
    wrongAnswers: [
      "I'm so proud of you",
      "Don't look back",
      "Now I am complete",
    ],
    source,
  },
  {
    question:
      "Who was the first to propose giving Chancellor Palpatine emergency powers?",
    correctAnswer: "Mas Amedda",
    wrongAnswers: ["Jar Jar Binks", "Sheev Palpatine", "Ask Aak"],
    source,
  },
  {
    question: "According to 3PO, R2 does a lot of what for a mechanic?",
    correctAnswer: "Thinking",
    wrongAnswers: ["Talking", "Nothing", "Flying"],
    source,
  },
  {
    question: "How many legs does an Acklay have?",
    correctAnswer: "6",
    wrongAnswers: ["4", "2", "8"],
    source,
  },
  {
    question: "How many shots did Jango Fett need to kill the Reek?",
    correctAnswer: "1",
    wrongAnswers: ["2", "3", "4"],
    source,
  },
  {
    question:
      "Who was the first one in the Geonosian Arena to notice the Republic Gunships?",
    correctAnswer: "Padmé Amidala",
    wrongAnswers: ["Anakin Skywalker", "Mace Windu", "Count Dooku"],
    source,
  },
  {
    question:
      "Which of the following were not deployed during The First Battle of Geonosis?",
    correctAnswer: "BX-Series Commando Droids",
    wrongAnswers: [
      "B2 Super Battle Droids",
      "OG-9 Homing Spider Droids",
      "IG-227 Hailfire-class Droid Tanks",
    ],
    source,
  },
  {
    question: "What did Yoda do when Dooku attacked him with force lightning?",
    correctAnswer: "Absorbed it",
    wrongAnswers: [
      "Used his lightsaber to deflect it",
      "Dodged it",
      "Was knocked back by it",
    ],
    source,
  },
];

export default trivia;
