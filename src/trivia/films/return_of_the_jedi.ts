import { SOURCE, TRIVIA } from "types";

const source: SOURCE = { name: "Return of the Jedi", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question:
      "How many TIE Fighters escorted Vader's shuttle to the second Death Star?",
    correctAnswer: "2",
    wrongAnswers: ["3", "4", "6"],
    source,
  },
  {
    question:
      "Which Imperial officer greeted Darth Vader aboard the second Death Star?",
    correctAnswer: "Moff Jerjerrod",
    wrongAnswers: ["Grand Moff Tarken", "Admiral Piett", "General Veers"],
    source,
  },
  {
    question:
      "How long did C-3PO wait for a response after knocking on the door to Jabba's Palace?",
    correctAnswer: "Less than 1 second",
    wrongAnswers: ["About 10 seconds", "About 1 minute", "More than an hour"],
    source,
  },
  {
    question: 'What "gift" did Luke offer Jabba as a token of goodwill?',
    correctAnswer: "R2-D2 and C-3PO",
    wrongAnswers: ["Illegal spice", "Imperial credits", "An antique podracer"],
    source,
  },
  {
    question:
      "How did Jabba the Hutt deal with the interpreter droid he had prior to C-3PO?",
    correctAnswer: "Had it disintegrated",
    wrongAnswers: [
      "Had it scrapped for parts",
      "Had it thrown into the sarlacc pit",
      "Shot it",
    ],
    source,
  },
  {
    question: "How many credits did Jabba the Hutt agree to pay for Chewbacca?",
    correctAnswer: "35,000",
    wrongAnswers: ["10,000", "25,000", "50,000"],
    source,
  },
  {
    question:
      "What was the first thing Han Solo said after being freed from the carbonite?",
    correctAnswer: "I can't see",
    wrongAnswers: ["Where am I?", "Who are you?", "Leia"],
    source,
  },
  {
    question: "Who was NOT in Jabba's palace during the rescue of Han Solo?",
    correctAnswer: "Nien Nunb",
    wrongAnswers: ["Boba Fett", "Salacious Crumb", "Princess Leia"],
    source,
  },
  {
    question:
      `Finish the quote: "A Jedi Knight? I'm out of it for a little while, _____`,
    correctAnswer: "everybody gets delusions of grandeur.",
    wrongAnswers: [
      "the entire galaxy gets turned upside down",
      "nothing makes sense anymore",
      "I don't what to believe",
    ],
    source,
  },
  {
    question: "What action promted Jabba to drop Luke into the rancor's den?",
    correctAnswer: "Luke stole a blaster from a guard",
    wrongAnswers: [
      "Luke insultedd Jabba",
      "Luke attempting to free Leia",
      "Jabba getting angry with C-3PO",
    ],
    source,
  },
  {
    question: "How did Luke kill the rancor in Jabba's palace?",
    correctAnswer: "By dropping a heavy door onto it",
    wrongAnswers: [
      "By slashing it with his lightsaber",
      "By force-pushing it into a wall",
      "By choking it with a chain",
    ],
    source,
  },
  {
    question:
      "What was R2-D2 doing on Jabba's sail barge prior to arriving at the Pit of Carkoon?",
    correctAnswer: "Serving drinks",
    wrongAnswers: ["Playing music", "Cleaning spills", "Flying the barge"],
    source,
  },
  {
    question: "Who killed Jabba the Hutt?",
    correctAnswer: "Leia Organa",
    wrongAnswers: ["Bobba Fett", "Luke Skywalker", "Han Solo"],
    source,
  },
  {
    question:
      "What weapon did Han Solo use to shoot the sarlacc's tentacle that was holding Lando Calrissian?",
    correctAnswer: "DL-18",
    wrongAnswers: ["EE-3", "DL-44", "EE-4"],
    source,
  },
  {
    question: "How did C-3PO get off Jabba the Hutt's sail barge?",
    correctAnswer: "R2-D2 pushed him off",
    wrongAnswers: [
      "He walked off",
      "He was smuggled off inside a crate",
      "He was picked up with a magnet",
    ],
    source,
  },
  {
    question: "Where did Luke travel after the rescue of Han Solo?",
    correctAnswer: "Dagobah",
    wrongAnswers: ["Endor", "Coruscant", "Pillio"],
    source,
  },
  {
    question:
      "How many Imperial Royal Guards exited the Emperor's shuttle before him onto the second Death Star",
    correctAnswer: "6",
    wrongAnswers: ["4", "8", "12"],
    source,
  },
  {
    question: "How many years old was Yoda when he died?",
    correctAnswer: "900",
    wrongAnswers: ["910", "890", "990"],
    source,
  },
  {
    question:
      "What did Obi-Wan tell Luke many of the truths we cling to depend on?",
    correctAnswer: "Our own point of view",
    wrongAnswers: ["Our family", "The force", "Our emotions"],
    source,
  },
  {
    question:
      "Which type of ship was NOT part of the Rebel fleet that attacked the second Death Star?",
    correctAnswer: "MC75 star cruiser",
    wrongAnswers: ["Nebulon-B frigate", "CR90 corvette", "GR-75 transport"],
    source,
  },
];

export default trivia;
