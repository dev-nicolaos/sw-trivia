import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Rogue One", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question: "How many death troopers accompanied Krenic on Lah'mu",
    correctAnswer: "6",
    wrongAnswers: ["2", "4", "8"],
    source,
  },
  {
    question:
      "What doll did a death trooper find while searching the Erso home on Lah'mu?",
    correctAnswer: "A stormtrooper",
    wrongAnswers: ["A Jedi", "Princess Leia", "A farmer"],
    source,
  },
  {
    question: "What was the Ring of Kafrene?",
    correctAnswer: "A trading outpost",
    wrongAnswers: ["A cantina", "A piece of jewlery", "A group of smugglers"],
    source,
  },
  {
    question: "Who did Galen Erso convince to defect from the Empire?",
    correctAnswer: "Bodhi Rook",
    wrongAnswers: ["Iden Versio", "Ray Sloane", "Agent Kallus"],
    source,
  },
  {
    question:
      'Finish the quote: "Congratulations, you are being rescued. _____"',
    correctAnswer: "Please do not resist.",
    wrongAnswers: [
      "You can thank me later.",
      "We have a long ride ahead of us.",
      "Did I miss something?",
    ],
    source,
  },
  {
    question:
      "What did Mon Mothma want to do if the Rebelion located Galen Erso?",
    correctAnswer: "Return him to testify in the Senate",
    wrongAnswers: [
      "Kill him",
      "Turn him into a rebel agent",
      "Get him to disable the Death Star",
    ],
    source,
  },
  {
    question: "What starship did Captain Andor, Jyn, and K2SO take to Jedha?",
    correctAnswer: "U Wing Gunship",
    wrongAnswers: [
      "Imperial Cargo Transport",
      "Imperial Shuttle",
      "Alderaan Cruiser",
    ],
    source,
  },
  {
    question:
      "Who was NOT on Jedha just before the Death Star destroyed Jedha City?",
    correctAnswer: "Bail Organa",
    wrongAnswers: ["Ponda Baba", "Chirrut Îmwe", "Edrio Two Tubes"],
    source,
  },
  {
    question:
      "How much was the Imperial reward for information leading to the location of Bodhi Rook?",
    correctAnswer: "600 credits",
    wrongAnswers: ["200 credits", "1000 credits", "4000 credits"],
    source,
  },
  {
    question: 'Finish the quote: "I did the one thing nobody expected: _____"',
    correctAnswer: "I lied.",
    wrongAnswers: ["I fought.", "I ran.", "I listened."],
    source,
  },
  {
    question: "According to K2SO, what was the problem on the horizon?",
    correctAnswer: "There was no horizon",
    wrongAnswers: [
      "The Empire was approaching",
      "The Death Star had fired",
      "The Jedi were going to die",
    ],
    source,
  },
  {
    question: `Who said "Well done! You're a rebel now"?`,
    correctAnswer: "K2SO",
    wrongAnswers: ["Cassian Andor", "Han Solo", "Leia Organa"],
    source,
  },
  {
    question: "Where did Director Krennic go after leaving Eadu?",
    correctAnswer: "Mustafar",
    wrongAnswers: ["Scarif", "The Death Star", "Coruscant"],
    source,
  },
  {
    question: "What did Vader caution Krennic not to choke on?",
    correctAnswer: "His aspirations",
    wrongAnswers: ["His ambition", "His ignorance", "His lust for power"],
    source,
  },
  {
    question: "Who came up with the name Rogue One?",
    correctAnswer: "Bodhi Rook",
    wrongAnswers: ["Wedge Antilles", "Luke Skywalker", "Jyn Erso"],
    source,
  },
  {
    question:
      "Which landing pad on Scarif was cargo shuttle SW0608 cleared to land on?",
    correctAnswer: "9",
    wrongAnswers: ["12", "5", "4"],
    source,
  },
  {
    question: "Who was not part of the rebel strike team on Scarif?",
    correctAnswer: "Moroff",
    wrongAnswers: ["Jyn", "Pao", "Melshi"],
    source,
  },
  {
    question:
      "Which squadron was sent to provide in atmosphere support during the Battle of Scarif?",
    correctAnswer: "Blue Squadron",
    wrongAnswers: ["Green Squadron", "Red Squadron", "Gold Squadron"],
    source,
  },
  {
    question:
      "What was the codename of the Death Star plans in the archive on Scarif?",
    correctAnswer: "Stardust",
    wrongAnswers: ["Pax Aurora", "Black Saber", "Celestial Power"],
    source,
  },
  {
    question: "Which TIE variant destroyed Blue Leader (General Merrick)?",
    correctAnswer: "TIE Striker",
    wrongAnswers: ["TIE Fighter", "TIE Interceptor", "TIE Defender"],
    source,
  },
  {
    question: "How was the destruction of Jedha City explained to the Senate?",
    correctAnswer: "A mining accident",
    wrongAnswers: ["A natural disaster", "A weapons test", "An alien invasion"],
    source,
  },
];

export default trivia;
