import { TRIVIA } from "types";
import { generateGameSource } from "../generate_source.ts";

const source = generateGameSource("Battlefront II");

const trivia: TRIVIA[] = [
  {
    question:
      "What was the code Iden Versio used to activate the ID-10 on board the Invincible Faith?",
    correctAnswer: "VZ-626",
    wrongAnswers: ["VZ-747", "BX-454", "BX-989"],
    source,
  },
  {
    question: "How did Iden Versio escape the Invincible Faith?",
    correctAnswer: "Ejecting out an airlock",
    wrongAnswers: [
      "Stealing a shuttle",
      "Taking over the ship",
      "Pretending to join the rebelion",
    ],
    source,
  },
  {
    question:
      "Who did Iden Versio contact after watching the second Death Star explode?",
    correctAnswer: "Admiral Versio",
    wrongAnswers: ["Admiral Sloane", "Admiral Rax", "Gleb"],
    source,
  },
  {
    question: "What did Inferno Squad fly off of Endor?",
    correctAnswer: "TIE Fighters",
    wrongAnswers: ["The Corvus", "An Imperial Shuttle", "Stolen X-wings"],
    source,
  },
  {
    question:
      "Which star destroyer was Inferno Squad sent to protect after Endor?",
    correctAnswer: "The Dauntless",
    wrongAnswers: ["The Avenger", "The Eclipse", "The Eviscerator"],
    source,
  },
  {
    question: "Who commanded the Star Destroyer Dauntless?",
    correctAnswer: "Moff Raythe",
    wrongAnswers: ["Darth Vader", "Admiral Motti", "Grand Moff Tarkin"],
    source,
  },
  {
    question:
      "Which Inferno Squad member was rescued by Luke Skywalker on Pillio?",
    correctAnswer: "Del Meeko",
    wrongAnswers: ["Iden Versio", "Gideon Hask", "Seyn Marana"],
    source,
  },
  {
    question: "What did Luke take from the Emperor's observatory on Pillio?",
    correctAnswer: "A compass",
    wrongAnswers: ["A map", "A sith holocron", "A lightsaber"],
    source,
  },
  {
    question: "What Imperial stronghold was a target of Operation Cinder?",
    correctAnswer: "Vardos",
    wrongAnswers: ["Coruscant", "Kuat", "Akiva"],
    source,
  },
  {
    question:
      "Which two members of Inferno Squad evacuated civilians from Vardos?",
    correctAnswer: "Iden and Del",
    wrongAnswers: ["Iden and Gideon", "Gideon and Del", "Seyn and Iden"],
    source,
  },
  {
    question: "Which Rebel leader accepted the surrender of Inferno Squad?",
    correctAnswer: "Lando Calrissian",
    wrongAnswers: ["Leia Organa", "Shara Bey", "Gial Ackbar"],
    source,
  },
  {
    question:
      "What was Iden Versio's call sign while defending Naboo from Operation Cinder?",
    correctAnswer: "Danger 5",
    wrongAnswers: ["Danger Leader", "Blade Leader", "Blade 5"],
    source,
  },
  {
    question: "Who led the ground defense of Theed during Operation Cinder?",
    correctAnswer: "Leia Organa",
    wrongAnswers: ["Iden Versio", "Lando Calrissian", "Captain Rex"],
    source,
  },
  {
    question: "Which city had an ion pulse installed to repel invading armies?",
    correctAnswer: "Theed",
    wrongAnswers: ["Gungan City", "Aldera", "Cloud City"],
    source,
  },
  {
    question:
      "What planet did the Imperial defector Paldora give Han Solo intel about?",
    correctAnswer: "Kashyyyk",
    wrongAnswers: ["Fondor", "Ryloth", "Tatooine"],
    source,
  },
  {
    question: "What is Maz Kanata's number one rule?",
    correctAnswer: "No fighting",
    wrongAnswers: ["Pay for your drinks", "Don't stare", "Listen to Maz"],
    source,
  },
  {
    question: "Where did Inferno Squad expect to find Hask on Bespin?",
    correctAnswer: "Chinook Station",
    wrongAnswers: [
      "The Administrator's Palace",
      "The Carbon Freezing Chamber",
      "Ugnorgrad",
    ],
    source,
  },
  {
    question: "What creatures produced the Tibana gas mined on Bespin?",
    correctAnswer: "Beldons",
    wrongAnswers: ["Mynocks", "Puffer Pigs", "Purrgils"],
    source,
  },
  {
    question: "How many Star Destroyers did Iden and Del destroy on Bespin?",
    correctAnswer: "3",
    wrongAnswers: ["4", "2", "1"],
    source,
  },
  {
    question:
      "Who accomponied Lando on the mission to destroy a weapons cache on Sullust?",
    correctAnswer: "Shriv",
    wrongAnswers: ["Del", "Han", "Lobot"],
    source,
  },
  {
    question: "How did Lando shut down the weapons factory on Sullust?",
    correctAnswer: "Flooded it with lava",
    wrongAnswers: [
      "Bombarded it from a capitol ship",
      "Y-wing bombing runs",
      "Put detonators inside",
    ],
    source,
  },
  {
    question: "What type of ship did Iden Versio fly at the Battle of Jakku?",
    correctAnswer: "X-wing",
    wrongAnswers: ["A-wing", "TIE Fighter", "Tie Interceptor"],
    source,
  },
  {
    question:
      "Which StarHawk provided orbital strikes for Iden Versio during the Battle of Jakku?",
    correctAnswer: "Unity",
    wrongAnswers: ["Amity", "Concord", "Punishment"],
    source,
  },
  {
    question: 'Finish the quote: "You deserve to live in peace. _____"',
    correctAnswer: "Go. Survive. Live.",
    wrongAnswers: [
      "Go now while you still can.",
      "Go. Fight. Win.",
      "Go and bring it to the galaxy.",
    ],
    source,
  },
  {
    question: 'Who said "The droid tells me your alive"?',
    correctAnswer: "Shriv",
    wrongAnswers: ["Han", "Rey", "Obi-Wan"],
    source,
  },
  {
    question:
      "Which of the following planets did Kylo Ren NOT see in Del Mikko's mind?",
    correctAnswer: "Hoth",
    wrongAnswers: ["Pillio", "Vardos", "Scarif"],
    source,
  },
  {
    question: "Who killed Del Mikko?",
    correctAnswer: "Gideon Hask",
    wrongAnswers: ["Kylo Ren", "Garrick Versio", "Darth Vader"],
    source,
  },
];

export default trivia;
