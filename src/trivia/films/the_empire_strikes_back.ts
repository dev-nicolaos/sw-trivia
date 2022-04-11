import { Trivia } from "types";
import { generateFilmSource } from "../generate_source.ts";

const source = generateFilmSource("The Empire Strikes Back");

const trivia: Trivia[] = [
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
    question: "Who led the ground assault on Echo Base?",
    correctAnswer: "General Veers",
    wrongAnswers: ["General Grievous", "General Krell", "General Hux"],
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
      "According to R2-D2, what are the odds of surviving a night on Hoth outside?",
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
    correctAnswer: "Admiral Ozzel",
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
      "How many TIE fighters pursued the Millennium Falcon into the astroid field?",
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
  {
    question:
      "Why did Han want C-3PO to talk to the Millennium Falcon in the asteroid field?",
    correctAnswer: "To find out what was wrong with the hyperdrive",
    wrongAnswers: [
      "To find out what was wrong with the navicomputer",
      "To chart a path through the asteroid field",
      "To send a distress signal",
    ],
    source,
  },
  {
    question:
      "What did R2-D2 try to take from Yoda after Luke landed on Dagobah for the first time?",
    correctAnswer: "Luke's lamp",
    wrongAnswers: ["Luke's food", "R2-D2's power supply", "Yoda's cane"],
    source,
  },
  {
    question: "Who interrupted Han and Leia's first kiss?",
    correctAnswer: "C-3PO",
    wrongAnswers: ["Chewbacca", "R2-D2", "A stormtrooper"],
    source,
  },
  {
    question:
      "Why did Vader order the Executor moved out of the asteroid field?",
    correctAnswer: "To be able to send a clear transmission to the Emperor",
    wrongAnswers: [
      "To prevent it from taking any more damage",
      "To dump the garbage on board",
      "To retrieve several TIE squadrons",
    ],
    source,
  },
  {
    question: "What reason did Luke give Yoda for wanting to become a Jedi?",
    correctAnswer: "Because of his father",
    wrongAnswers: [
      "To defeat evil",
      "To save his friends",
      "Because of Obi-Wan",
    ],
    source,
  },
  {
    question: "What species stuck to Millennium Falcon inside the space slug?",
    correctAnswer: "Mynocks",
    wrongAnswers: ["Purrgil", "Grallocs", "Neebray"],
    source,
  },
  {
    question:
      "What did Yoda advise Luke not to take into the dark side cave on Dagobah",
    correctAnswer: "His weapons",
    wrongAnswers: ["His jacket", "R2-D2", "Anger"],
    source,
  },
  {
    question:
      "Which bounty hunter was NOT recruited by the Empire to find the Millennium Falcon?",
    correctAnswer: "IG-11",
    wrongAnswers: ["Boba Fett", "Bossk", "Dengar"],
    source,
  },
  {
    question:
      "Which Star Destroyer chased the Millennium Falcon after it fled the space slug?",
    correctAnswer: "Avenger",
    wrongAnswers: ["Devastator", "Torment", "Overseer"],
    source,
  },
  {
    question: 'Finish the quote: "Judge me by my _____, do you?"',
    correctAnswer: "size",
    wrongAnswers: ["power", "age", "wealth"],
    source,
  },
  {
    question: "Where did Luke see Han and Leia in his vision on Dagobah?",
    correctAnswer: "A city in the clouds",
    wrongAnswers: ["An Imperial prison", "A barren desert", "A frozen tundra"],
    source,
  },
  {
    question: "What did Lando call Han when he landed on Cloud City?",
    correctAnswer: "A swindler",
    wrongAnswers: ["A thief", "Rebel scum", "Broke"],
    source,
  },
  {
    question: "Where did Chewbacca find C-3PO on Cloud City?",
    correctAnswer: "A junk pile",
    wrongAnswers: [
      "The Administrator's Palace",
      "Carbon Freezing Chamber",
      "Yarith Bespin",
    ],
    source,
  },
  {
    question:
      "How many shots did Han fire at Darth Vader when Lando betrayed the Rebels on Cloud City?",
    correctAnswer: "4",
    wrongAnswers: ["2", "3", "5"],
    source,
  },
  {
    question:
      "What did Vader question Han about while torturing him on Cloud City?",
    correctAnswer: "Nothing",
    wrongAnswers: ["The Rebel Alliance", "His debts", "Lando Calrissian"],
    source,
  },
  {
    question:
      "What did Darth Vader promise to do if Han Solo did not survive the carbon-freezing process?",
    correctAnswer: "Compensate Boba Fett",
    wrongAnswers: [
      "Kill Lando Calrissian",
      "Take Luke to the Emperor",
      "Demote Admiral Piett",
    ],
    source,
  },
  {
    question: "Who warned Luke he was walking into a trap on Cloud City?",
    correctAnswer: "Leia Organa",
    wrongAnswers: ["Lando Calrissian", "An Imperial defector", "R2-D2"],
    source,
  },
  {
    question:
      "Who did Lando instruct to hold captured stormtroopers in the security tower on Cloud City?",
    correctAnswer: "Lobot",
    wrongAnswers: ["Chewbacca", "Boba Fett", "Sana Starros"],
    source,
  },
  {
    question:
      "What did R2-D2 accidentally plug into while trying to override Cloud City's security systems?",
    correctAnswer: "A power socket",
    wrongAnswers: [
      "An elevator",
      "A lifeform scanner",
      "A communications satellite",
    ],
    source,
  },
  {
    question:
      "What body part(s) did Luke lose while dueling Darth Vader on Cloud City?",
    correctAnswer: "Right hand",
    wrongAnswers: ["Left hand", "Both Legs", "Left arm"],
    source,
  },
  {
    question:
      "Who helped Luke through the top hatch of the Millennium Falcon underneath Cloud City?",
    correctAnswer: "Lando Calrissian",
    wrongAnswers: ["Chewbacca", "Leia Organa", "Obi-Wan Kenobi"],
    source,
  },
  {
    question:
      "Why wasn't the Millennium Falcon able to jump to light speed when leaving Cloud City?",
    correctAnswer: "Imperials had disabled the hyperdrive",
    wrongAnswers: [
      "Lando entered incorrect jump coordinates",
      "The hyperdrive had been damaged by TIE fighters",
      "It was out of coaxium",
    ],
    source,
  },
];

export default trivia;
