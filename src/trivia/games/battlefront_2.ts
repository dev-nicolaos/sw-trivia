import { QUESTION } from '../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `What was the code Iden Versio used to activate the ID-10 on board the Invincible Faith?`,
    correctAnswer: `VZ-626`,
    wrongAnswers: [`VZ-747`, `BX-454`, `BX-989`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `How did Iden Versio escape the Invincible Faith?`,
    correctAnswer: `Ejecting out an airlock`,
    wrongAnswers: [
      `Stealing a shuttle`,
      `Taking over the ship`,
      `Pretending to join the rebelion`,
    ],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Who did Iden Versio contact after watching the second Death Star explode?`,
    correctAnswer: `Admiral Versio`,
    wrongAnswers: [`Admiral Sloane`, `Admiral Rax`, `Gleb`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What did Inferno Squad fly off of Endor?`,
    correctAnswer: `Tie Fighters`,
    wrongAnswers: [`The Corvus`, `An Imperial Shuttle`, `Stolen X-Wings`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which star destroyer was Inferno squad sent to protect after Endor?`,
    correctAnswer: `The Dauntless`,
    wrongAnswers: [`The Avenger`, `The Eclipse`, `The Eviscerator`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Who commanded The Star Destroyer Dauntless?`,
    correctAnswer: `Moff Raythe`,
    wrongAnswers: [`Darth Vader`, `Admiral Motti`, `Grand Moff Tarkin`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which Inferno squad member was rescued by Luke Skywalker on Pillio?`,
    correctAnswer: `Del Meeko`,
    wrongAnswers: [`Iden Versio`, `Gideon Hask`, `Seyn Marana`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What did Luke take from the Emperor's observatory on Pillio?`,
    correctAnswer: `A compass`,
    wrongAnswers: [`A map`, `A sith holocron`, `A lightsaber`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What Imperial stronghold was a target of Operation Cinder?`,
    correctAnswer: `Vardos`,
    wrongAnswers: [`Coruscant`, `Kuat`, `Akiva`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which two members of Inferno squad evacuated civilians from Vardos?`,
    correctAnswer: `Iden and Del`,
    wrongAnswers: [`Iden and Gideon`, `Gideon and Del`, `Seyn and Iden`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which Rebel leader accepted the surrender of Inferno Squad?`,
    correctAnswer: `Lando Calrissian`,
    wrongAnswers: [`Leia Organa`, `Shara Bey`, `Gial Ackbar`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What was Iden Versio's call sign while defending Naboo from Operation Cinder?`,
    correctAnswer: `Danger 5`,
    wrongAnswers: [`Danger Leader`, `Blade Leader`, `Blade 5`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Who led the ground defense of Theed during Operation Cinder?`,
    correctAnswer: `Leia Organa`,
    wrongAnswers: [`Iden Versio`, `Lando Calrissian`, `Captain Rex`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which city had an ion pulse installed to repel invading armies?`,
    correctAnswer: `Theed`,
    wrongAnswers: [`Gungan City`, `Aldera`, `Cloud City`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What planet did the Imperial defector Paldora give Han Solo intel on?`,
    correctAnswer: `Kashyyyk`,
    wrongAnswers: [`Fondor`, `Ryloth`, `Tatooine`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What is Maz Kanata's number one rule?`,
    correctAnswer: `No fighting`,
    wrongAnswers: [`Pay for your drinks`, `Don't stare`, `Listen to Maz`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Where did Inferno Squad expect to find Hask on Bespin?`,
    correctAnswer: `Chinook Station`,
    wrongAnswers: [
      `The Administrator's Palace`,
      `The Carbon Freezing Chamber`,
      `Ugnorgrad`,
    ],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What creatures produced the Tibana gas mined on Bespin?`,
    correctAnswer: `Beldons`,
    wrongAnswers: [`Mynocks`, `Puffer Pigs`, `Purrgils`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `How many Star Destroyers did Iden and Del destroy on Bespin?`,
    correctAnswer: `3`,
    wrongAnswers: [`4`, `2`, `1`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Who accomponied Lando on the mission to destroy a weapons cache on Sullust?`,
    correctAnswer: `Shriv`,
    wrongAnswers: [`Del`, `Han`, `Lobot`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `How did Lando shut down the weapons factory on Sullust?`,
    correctAnswer: `Flooded it with Lava`,
    wrongAnswers: [
      `Bombared it from a capitol ship`,
      `Y-Wing Bombing Runs`,
      `Put detonators inside`,
    ],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `What type of ship did Iden Versio fly at the Battle of Jakku?`,
    correctAnswer: `X-Wing`,
    wrongAnswers: [`A-Wing`, `Tie Fighter`, `Tie Interceptor`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which StarHawk provided orbital strikes for Iden Versio during the Battle of Jakku?`,
    correctAnswer: `Unity`,
    wrongAnswers: [`Amity`, `Concord`, `Punishment`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Finish the quote: "You deserve to live in peace. _____"`,
    correctAnswer: `Go. Survive. Live.`,
    wrongAnswers: [
      `Go now while you still can.`,
      `Go. Fight. Win.`,
      `Go and bring it to the galaxy.`,
    ],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Who said "The droid tells me your alive"?`,
    correctAnswer: `Shriv`,
    wrongAnswers: [`Han`, `Rey`, `Obi-Wan`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Which of the following planets did Kylo Ren NOT see in Del Mikko's mind?`,
    correctAnswer: `Hoth`,
    wrongAnswers: [`Pillio`, `Vardos`, `Scarif`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
  {
    question: `Who killed Del Mikko?`,
    correctAnswer: `Gideon Hask`,
    wrongAnswers: [`Kylo Ren`, `Garrick Versio`, `Darth Vader`],
    source: { name: `Star Wars Battlefront 2`, mediaType: `Game` },
  },
];

export default trivia;
