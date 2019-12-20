import { TRIVIA, SOURCE } from "interfaces";

const source: SOURCE = { name: "The Empire Strikes Back", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question: "What creatures did the rebels ride on Hoth?",
    correctAnswer: "Tauntauns",
    wrongAnswers: ["Wampas", "Dewbacks", "Rontos"],
    source,
  },
  {
    question:
      "What did Luke originally think the probe droid that crashed onto Hoth was?",
    correctAnswer: "A meteorite",
    wrongAnswers: ["A ship", "An orbital strike", "An avalanche"],
    source,
  },
  {
    question: "Who was in command of Echo Base?",
    correctAnswer: "General Rieekan",
    wrongAnswers: ["General Madine", "General Veers", "General Kenobi"],
    source,
  },
  {
    question: "Who led the ground assult on Echo Base?",
    correctAnswer: "General Veers",
    wrongAnswers: ["General Grievious", "General Krell", "General Hux"],
    source,
  },
  {
    question: `Finish the quote: "I'd just as soon kiss a _____"`,
    correctAnswer: "wookie!",
    wrongAnswers: ["rodian!", "dianoga!", "wampa!"],
    source,
  },
  {
    question: "What rank did Luke Skywalker hold at the Battle of Hoth?",
    correctAnswer: "Commander",
    wrongAnswers: ["Deck Officer", "Captain", "General"],
    source,
  },
  {
    question: "Which planet did Obi-Wan tell Luke to find Yoda on?",
    correctAnswer: "Dagobah",
    wrongAnswers: ["Kashyyyk", "Coruscant", "Endor"],
    source,
  },
  {
    question:
      "According to R2D2, what are the odds of surviving a night on Hoth outside?",
    correctAnswer: "725 to 1",
    wrongAnswers: ["3,750 to 1", "250 to 1", "10,000 to 1"],
    source,
  },
  {
    question: "How did Han keep Luke warm while he setup the shelter on Hoth?",
    correctAnswer: "Stuffed him inside a dead Tauntaun",
    wrongAnswers: [
      "Started a fire",
      "Activated a portable heater",
      "Wrapped him in a thermal blanket",
    ],
    source,
  },
  {
    question:
      "How many AT-ATs did Rogue squadron take down with harpoons and tow cables?",
    correctAnswer: "1",
    wrongAnswers: ["3", "2", "4"],
    source,
  },
  {
    question:
      "What sector did the rebels detect a fleet of Star Destroyers emerging from above Hoth?",
    correctAnswer: "Sector 4",
    wrongAnswers: ["Sector 9", "Sector 7", "Sector 2"],
    source,
  },
  {
    question:
      "Which Imperial did Darth Vader choke just before the Battle of Hoth?",
    correctAnswer: "Admiral Ozzle",
    wrongAnswers: ["Captain Piett", "Captain Needa", "Moff Jerjerrod"],
    source,
  },
  {
    question: "How many rebel fighters escorted each transport off Hoth?",
    correctAnswer: "2",
    wrongAnswers: ["4", "1", "3"],
    source,
  },
  {
    question: `Finish the quote "Hurry up golden rod! You're gonna be _____"`,
    correctAnswer: "a permanent resident!",
    wrongAnswers: [
      "a pile of scrap!",
      "left behind!",
      "imperial target practice!",
    ],
    source,
  },
  {
    question:
      "How many TIE fighters pursued the Millenium Falcon into the astroid field?",
    correctAnswer: "4",
    wrongAnswers: ["6", "2", "3"],
    source,
  },
  {
    question: "How did Luke initially describe Dagobah?",
    correctAnswer: "Like something out of a dream",
    wrongAnswers: [
      "Strong with the force",
      "One big swamp",
      "A forgotten planet",
    ],
    source,
  },
];

export default trivia;
