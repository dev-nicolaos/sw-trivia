import { TRIVIA } from "types";
import { generateTVSource } from "helpers";

const genSource = (episode: string) =>
  generateTVSource("The Clone Wars", episode);

const trivia: TRIVIA[] = [
  {
    question: "Who commanded the Sepatist blockade of Christophsis?",
    correctAnswer: "Admiral Trench",
    wrongAnswers: ["General Grevious", "Asajj Ventress", "General Loathsom"],
    source: genSource("Cat and Mouse"),
  },
  {
    question:
      "Which clone trooper was feeding intelligence to the Separtists on Christophsis?",
    correctAnswer: "Slick",
    wrongAnswers: ["Chopper", "Rex", "Fives"],
    source: genSource("The Hidden Enemy"),
  },
  {
    question: "Who gave the clone trooper Heavy his nickname?",
    correctAnswer: "99",
    wrongAnswers: ["Shaak Ti", "Bric", "Fives"],
    source: genSource("Clone Cadets"),
  },
  {
    question:
      "How many clones fought with Yoda after being ambushed on Toydaria?",
    correctAnswer: "3",
    wrongAnswers: ["6", "50", "100"],
    source: genSource("Ambush"),
  },
  {
    question: "What type of ship did Ahsoka Tano travel to Christophsis in?",
    correctAnswer: "Republic Attack Shuttle",
    wrongAnswers: [
      "Republic Attack Cruiser",
      "Neimoidian Escort Shuttle",
      "Republic Cruiser",
    ],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Who kidnapped Jabba the Hutt's son Rotta?",
    correctAnswer: "Asajj Ventress",
    wrongAnswers: ["Aurra Sing", "Bossk", "General Grevious"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Where did Anakin and Ahsoka find the Twighlight?",
    correctAnswer: "Teth",
    wrongAnswers: ["Tatooine", "Mustafar", "Mandalore"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Which Hutt conspired to help the Separtists kidnap Jabba's son?",
    correctAnswer: "Ziro",
    wrongAnswers: ["Nashi", "Marlo", "Toborro"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "What was the Malevolence's secret weapon?",
    correctAnswer: "An ion Canon",
    wrongAnswers: [
      "An orbital autocannon",
      "An axial superlaser",
      "A gravity well projector",
    ],
    source: genSource("Rising Malevolence"),
  },
  {
    question:
      "Which bomber squadron was tasked with destroying the Malevolence",
    correctAnswer: "Shadow",
    wrongAnswers: ["Gold", "Blade", ""],
    source: genSource("Shadow of Malevolence"),
  },
  {
    question:
      "What shortcut did Anakin and Shadow squadron take to cut off the Malevolence?",
    correctAnswer: "The Balmorra Run",
    wrongAnswers: [
      "The Kessel Run",
      "The Nexus Route",
      "The Perlemian Trade Route",
    ],
    source: genSource("Shadow of Malevolence"),
  },
  {
    question: "Whose ship was captured by the Malevolence?",
    correctAnswer: "Padmé Amidala",
    wrongAnswers: ["Luke Skywalker", "Ahsoka Tano", "Boba Fett"],
    source: genSource("Destroy Malevolence"),
  },
  {
    question:
      "What substance was used as fuel to heat the Republic outpost on Rishi's moon?",
    correctAnswer: "Liquid Tabana",
    wrongAnswers: ["Clouzon-36", "Isotope-5", "Stygium crystals"],
    source: genSource("Rookies"),
  },
  {
    question:
      "Which clone survived the droid infiltration of the Republic outpost outpost on Rishi's moon?",
    correctAnswer: "Echo",
    wrongAnswers: ["Hevy", "Droidbait", "Cutup"],
    source: genSource("Rookies"),
  },
  {
    question:
      "Which droid temporarily replaced R2-D2 when he was lost during the Battle of Bothawui",
    correctAnswer: "R3-S6",
    wrongAnswers: ["4-A7", "R3-A3", "C1-10P"],
    source: genSource("Downfall of a Droid"),
  },
  {
    question: "Who did Viceroy Gunray mistake for a Jedi on Rodia?",
    correctAnswer: "Jar Jar Binks",
    wrongAnswers: ["Senator Amidala", "C-3PO", "Onaconda Farr"],
    source: genSource("Bombad Jedi"),
  },
  {
    question: "Where was General Grevious' Lair?",
    correctAnswer: "The Vassek system",
    wrongAnswers: ["The Zeffo system", "The Bith system", "The Llanic system"],
    source: genSource("Lair of Grevious"),
  },
  {
    question: "Which species was only found on Vanqor?",
    correctAnswer: "Gundark",
    wrongAnswers: ["Loth Wolf", "Krayt Dragon", "Terentatek"],
    source: genSource("Dooku Captured"),
  },
  {
    question: "How far apart were Vanqor and Florrum?",
    correctAnswer: "6 parsecs",
    wrongAnswers: ["12 parsecs", "10 parsecs", "14 parsecs"],
    source: genSource("Dooku Captured"),
  },
  {
    question:
      'Finish the quote: "If one hostage is good, then two are better. And three, _____',
    correctAnswer: "well, that's just good business!",
    wrongAnswers: [
      "well, that's a retirement plan!",
      "well, that's just a gift from above!",
      "well, nobody ever gets three.",
    ],
    source: genSource("The Gungan General"),
  },
  {
    question: "Where was the Separtist lab on Naboo located?",
    correctAnswer: "Eastern Swamps",
    wrongAnswers: ["Theed", "Lake Paonga", "Western Great Grass Plains"],
    source: genSource("Blue Shadow Virus"),
  },
  {
    question: "What disease did Dr. Nuvo Vindi want to release on the galaxy?",
    correctAnswer: "Blue Shadow virus",
    wrongAnswers: ["Rakghoul plague", "Sand fever", "Hypoxia"],
    source: genSource("Blue Shadow Virus"),
  },
  {
    question: 'hat planet was known as "the world of a thousand moons"?',
    correctAnswer: "Iego",
    wrongAnswers: ["Hoth", "Yavin", "Jakku"],
    source: genSource("Mystery of a Thousand Moons"),
  },
  {
    question: "What species inhabited Orto Plutonia?",
    correctAnswer: "Talz",
    wrongAnswers: ["Pantorans", "Veermoks", "Humans"],
    source: genSource("Trespass"),
  },
  {
    question: "What unit did Obi-Wan lead during the Battle of Ryloth?",
    correctAnswer: "Ghost Company",
    wrongAnswers: ["Twilight Company", "Tango Company", "Torrent Company"],
    source: genSource("Innocents of Ryloth"),
  },
  {
    question:
      "What creatures did the Separtists release against Ghost Company at Nabat?",
    correctAnswer: "Gutkurrs",
    wrongAnswers: ["Wampas", "Lyleks", "Acklays"],
    source: genSource("Innocents of Ryloth"),
  },
  {
    question: "Who convinced Cham Syndulla to help the Republic free Lessu?",
    correctAnswer: "Mace Windu",
    wrongAnswers: ["Anakin Skywalker", "Ahsoka Tano", "Isval"],
    source: genSource("Liberty on Ryloth"),
  },
  {
    question:
      "Who did Darth Sideous hire to steal a holocron from the Jedi Temple",
    correctAnswer: "Cad Bane",
    wrongAnswers: ["Boba Fett", "Zam Wessel", "Han Solo"],
    source: genSource("Holocron Heist"),
  },
  {
    question: "How did Cad Bane get Anakin to unlock a holocron?",
    correctAnswer: "Held Ahsoka hostage",
    wrongAnswers: ["Held Padmé hostage", "Impersonated a Jedi", "Drugged him"],
    source: genSource("Cargo of Doom"),
  },
  {
    question:
      "Where did Darth Sideous hold the kidnapped force sensitive children?",
    correctAnswer: "Mustafar",
    wrongAnswers: ["Rodia", "Coruscant", "Exegol"],
    source: genSource("Children of the Force"),
  },
  {
    question:
      "Which bounty hunter was NOT present to help the Jedi defend a Felucian village from pirates?",
    correctAnswer: "Jas Emari",
    wrongAnswers: ["Sugi", "Embo", "Seripas"],
    source: genSource("Bounty Hunters"),
  },
  {
    question: "Which planet was home to the Zillo Beast?",
    correctAnswer: "Malastare",
    wrongAnswers: ["Eriadu", "Geonosis", "Kamino"],
    source: genSource("The Zillo Beast"),
  },
  {
    question: "How was the Zillo Beast killed?",
    correctAnswer: "Toxic gas",
    wrongAnswers: ["Blaster fire", "Lightsaber strike", "Explosive bombs"],
    source: genSource("The Zillo Beast Strikes Back"),
  },
  {
    question: "Which senator represented Scipio during the Clone Wars?",
    correctAnswer: "Rush Clovis",
    wrongAnswers: ["Lott Dodd", "Mon Mothma", "Bail Organa"],
    source: genSource("Senate Spy"),
  },
  {
    question:
      "Who did Ahsoka work with to destroy the Separtist weapons factory on Geonosis?",
    correctAnswer: "Barriss Offee",
    wrongAnswers: ["Asajj Ventress", "Captain Rex", "Anakin Skywalker"],
    source: genSource("Weapons Factory"),
  },
  {
    question: "How did Ahsoka combat the Geonosian brain worms?",
    correctAnswer: "Extreme cold",
    wrongAnswers: ["Extreme heat", "Loud noise", "Lack of gravity"],
    source: genSource("Brain Invaders"),
  },
  {
    question: "Where did the deserter Cut Lawquane raise his family?",
    correctAnswer: "Saleucami",
    wrongAnswers: ["Tatooine", "Naboo", "Onderon"],
    source: genSource("The Deserter"),
  },
  {
    question: "How many systems were a part of The Council of Neutral Systems?",
    correctAnswer: "1500",
    wrongAnswers: ["500", "750", "1000"],
    source: genSource("The Mandalore Plot"),
  },
  {
    question:
      "Who was mentoring Boba Fett when he attempted to assasinate Mace Windu?",
    correctAnswer: "Aurra Sing",
    wrongAnswers: ["Count Dooku", "Jango Fett", "Cad Bane"],
    source: genSource("Death Trap"),
  },
  {
    question: "What planet was the homeworld of the Pyke Syndicate?",
    correctAnswer: "Oba Diah",
    wrongAnswers: ["Mustafar", "Felucia", "Kessel"],
    source: genSource("The Lost One"),
  },
];

export default trivia;
