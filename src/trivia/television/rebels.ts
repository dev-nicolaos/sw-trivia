import { TRIVIA } from "types";
import { generateTVSource } from "../generate_source.ts";

const genSource = (episode: string) => generateTVSource("Rebels", episode);

const trivia: TRIVIA[] = [
  {
    question: "Which member of the Ghost crew had the codename Spectre 1?",
    correctAnswer: "Kanan Jarus",
    wrongAnswers: ["Sabine Wren", "Hera Syndulla", "Garazeb Orrelios"],
    source: genSource("Spark of Rebellion: Part 1"),
  },
  {
    question: "Where did the Spectres rescue a group of wookies from?",
    correctAnswer: "Kessel",
    wrongAnswers: ["Kadavo", "Trandosha", "Lothal"],
    source: genSource("Spark of Rebellion: Part 2"),
  },
  {
    question: "Which group was known for wielding bo-rifles?",
    correctAnswer: "Lasan Honor Guard",
    wrongAnswers: [
      "Wookie Chieftans",
      "Imperial Death Troopers",
      "MagnaGuards",
    ],
    source: genSource("Droids in Distress"),
  },
  {
    question:
      "How many Inquisitors did Kanan, Ahsoka, Ezra, and Maul battle on Malachor?",
    correctAnswer: "3",
    wrongAnswers: ["2", "5", "8"],
    source: genSource("Twilight of the Apprentice: Part 1"),
  },
  {
    question: "Who retrieved a Sith holocron from the temple on Malachor?",
    correctAnswer: "Ezra Bridger",
    wrongAnswers: ["Yoda", "Luke Skywalker", "Ahsoka Tano"],
    source: genSource("Twilight of the Apprentice: Part 1"),
  },
  {
    question: "How was Kanan Jarrus blinded?",
    correctAnswer: "Lightsaber strike",
    wrongAnswers: ["Chemical spill", "Explosion", "Old age"],
    source: genSource("Twilight of the Apprentice: Part 2"),
  },
  {
    question: "How did Maul escape the planet Malachor?",
    correctAnswer: "He stole an Inquisitor's TIE Fighter",
    wrongAnswers: [
      "He was pulled through the World Between Worlds",
      "He stowed away aboard a ship",
      "He was picked up by his brother",
    ],
    source: genSource("Twilight of the Apprentice: Part 2"),
  },
  {
    question: "Who did the crew of the Ghost break out of prison on Naraka?",
    correctAnswer: "Hondo Ohnaka",
    wrongAnswers: ["Aayla Secura", "Wilhuff Tarkin", "A family of Wookies"],
    source: genSource("Steps into Shadow: Part 1"),
  },
  {
    question: "What color were the Mining Guild TIE fighters?",
    correctAnswer: "Gold",
    wrongAnswers: ["Red", "Green", "White"],
    source: genSource("Steps into Shadow: Part 1"),
  },
  {
    question: "Where was the Phantom (the Ghost's shuttle) destroyed?",
    correctAnswer: "Reklam Station",
    wrongAnswers: ["Atollon", "Scarif", "Orbital Foundry 7"],
    source: genSource("Steps into Shadow: Part 1"),
  },
  {
    question: "How did Maul find Obi-Wan on Tatooine?",
    correctAnswer: "By having Jedi and Sith holocrons opened together",
    wrongAnswers: [
      "One of Jabba's informants told him",
      "He sensed him through the Force",
      "He intercepted a message Obi-Wan sent",
    ],
    source: genSource("The Holocrons of Fate"),
  },
  {
    question: "All Imperial Super Commandos came from what race of people?",
    correctAnswer: "Mandalorians",
    wrongAnswers: ["Echani", "Corellians", "Pamarthens"],
    source: genSource("Imperial Super Commandos"),
  },
  {
    question: 'Finish the quote: "Everything I did was for family, for _____"',
    correctAnswer: "Mandalore!",
    wrongAnswers: ["honor!", "the Rebellion!", "glory!"],
    source: genSource("Trials of the Darksaber"),
  },
  {
    question: "Who killed Gar Saxon?",
    correctAnswer: "Ursa Wren",
    wrongAnswers: ["Sabine Wren", "Fenn Rau", "Captain Rex"],
    source: genSource("Legacy of Mandalore"),
  },
  {
    question:
      "Whose code cylinder did Kallus use to free Ezra from the Chimaera's detention block?",
    correctAnswer: "Lieutenant Lyste",
    wrongAnswers: [
      "Colonel Yularen",
      "Commander Skerris",
      "Commander Hammerly",
    ],
    source: genSource("Through Imperial Eyes"),
  },
  {
    question:
      "Which clan assisted Clan Wren in freeing Alrich Wren from Imperial captivity",
    correctAnswer: "Clan Kryze",
    wrongAnswers: ["Clan Fett", "Clan Vizsla", "Clan Saxon"],
    source: genSource("Heroes of Mandalore: Part 1"),
  },
  {
    question:
      "What did Sabine Wren nickname the weapon she built for the Empire as a cadet?",
    correctAnswer: "The Duchess",
    wrongAnswers: ["ARIES", "Mass Shadow Generator", "Malevolence"],
    source: genSource("Heroes of Mandalore: Part 2"),
  },
  {
    question:
      "Who commanded the Imperial Light Cruiser that engaged rebels at the Jalindi Outpost?",
    correctAnswer: "Commander Brom Titus",
    wrongAnswers: ["Grand Admiral Thrawn", "Admiral Durril", "Captain Slavin"],
    source: genSource("In the Name of the Rebellion: Part 1"),
  },
  {
    question:
      "What secret cargo did Saw, Ezra, and Sabine find on Freighter 2716 after it left Faos Station?",
    correctAnswer: "A large kyber crystal",
    wrongAnswers: [
      "Doonium and Dolovite",
      "Prototype blaster",
      "Force sensitive children",
    ],
    source: genSource("In the Name of the Rebellion: Part 2"),
  },
  {
    question: "Who took over Old Jho's Pit Stop after Old Jho was executed?",
    correctAnswer: "Baron Valen Rudor",
    wrongAnswers: ["Ryder Azadi", "Ephraim Bridger", "Arihnda Pryce"],
    source: genSource("The Occupation"),
  },
  {
    question:
      "How many TIE Interceptors did Ezra bridger shoot down in the stolen TIE Defender?",
    correctAnswer: "3",
    wrongAnswers: ["2", "4", "6"],
    source: genSource("Flight of the Defender"),
  },
];

export default trivia;
