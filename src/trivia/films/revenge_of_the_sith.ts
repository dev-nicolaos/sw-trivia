import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "Revenge of the Sith", mediaType: "Film" };

const trivia: TRIVIA[] = [
  {
    question:
      "How did Anakin describe General Grievous's ship at the Battle of Coruscant?",
    correctAnswer: "Crawling with vulture droids",
    wrongAnswers: [
      "Covered with vulture droids",
      "Crawling with buzz droids",
      "Covered with buzz droids",
    ],
    source,
  },
  {
    question:
      "What type of starfighters did Oddball and his clone squadron fly at the Battle of Coruscant?",
    correctAnswer: "ARC-170s",
    wrongAnswers: ["Z-95 Headhunters", "V-wings", "V-19 Torrents"],
    source,
  },
  {
    question:
      "How did Anakin originally try to remove the buzz droids from Obi-Wan's fighter?",
    correctAnswer: "Blasting them off",
    wrongAnswers: [
      "Scraping them off",
      "Letting R2 shock them",
      "Pushing them off with the force",
    ],
    source,
  },
  {
    question:
      "How many battle droids were in elevator 31174 with Anakin and Obi-Wan?",
    correctAnswer: "8",
    wrongAnswers: ["4", "6", "10"],
    source,
  },
  {
    question: 'Who said "Twice the pride, double the fall"?',
    correctAnswer: "Count Dooku",
    wrongAnswers: ["Yoda", "Darth Sideous", "Obi-Wan Kenobi"],
    source,
  },
  {
    question: "Why did Palpatine tell Anakin it was right to kill Count Dooku?",
    correctAnswer: "Dooku was to dangerous to be kept alive",
    wrongAnswers: [
      "Doing so would make Anakin stronger",
      "Dooku might escape capture",
      "Palpatine needed a new apprentice",
    ],
    source,
  },
  {
    question:
      "What allowed the Separtist Dreadnought to level out after being damaged in the Battle of Coruscant?",
    correctAnswer: "Firing the emergency booster engines",
    wrongAnswers: [
      "Reversing stabilizers",
      "Magnetizing",
      "Extending flaps and drag fins",
    ],
    source,
  },
  {
    question:
      "Grievous thought Anakin would be older, but what Anakin did Anakin say about Grievous?",
    correctAnswer: "You're shorter than I expected",
    wrongAnswers: [
      "You're taller than I expected",
      "You're dumber than I expected",
      "You smell more than I expected",
    ],
    source,
  },
  {
    question:
      "Why did Anakin say he'd missed the report on the Outer Rim Sieges?",
    correctAnswer: "He gave no excuse",
    wrongAnswers: [
      "He had been with Padmé",
      "He had been training",
      "He was stuck in traffic",
    ],
    source,
  },
  {
    question:
      "What planet did Grievous retreat to after the Battle of Coruscant?",
    correctAnswer: "Utapau",
    wrongAnswers: ["Geonosis", "Mustafar", "Scipio"],
    source,
  },
  {
    question: `Who said "It's very dangerous putting them together. I don't think the boy can handle it."?`,
    correctAnswer: "Mace Windu",
    wrongAnswers: ["Quinlan Vos", "Obi-Wan Kenobi", "Ki-Adi-Mundi"],
    source,
  },
  {
    question:
      'Finish the quote: "The dark side of the Force is a pathway to _____"',
    correctAnswer: "many abilities some consider to be unnatural.",
    wrongAnswers: [
      "unlimited power.",
      "ruling the galaxy.",
      "being able to save others from death.",
    ],
    source,
  },
  {
    question:
      "How many of Grievous' hands did Obi-Wan cut off BEFORE the clones engaged on Utapau?",
    correctAnswer: "2",
    wrongAnswers: ["0", "1", "3"],
    source,
  },
  {
    question: "What creature did Obi-Wan ride on Utapau?",
    correctAnswer: "A Varactyl",
    wrongAnswers: ["An Anooba", "A Shaak", "A Dewback"],
    source,
  },
  {
    question:
      "How many blaster shots did Obi-Wan fire to kill General Grievous?",
    correctAnswer: "5",
    wrongAnswers: ["2", "3", "4"],
    source,
  },
  {
    question:
      "Where in the Jedi Temple did Anakin tell Mace Windu of Palpatine's true identity?",
    correctAnswer: "A Hangar",
    wrongAnswers: [
      "The Jedi Archives",
      "The Room of a Thousand Fountains",
      "Windu's Quarters",
    ],
    source,
  },
  {
    question: `Finish the quote: "He has control of the Senate and the Courts, he's _____"`,
    correctAnswer: "to dangerous to be left alive.",
    wrongAnswers: [
      "a Sith Lord!",
      "responsible for the war.",
      "totally corrupted the Republic.",
    ],
    source,
  },
  {
    question: 'Finish the quote: "If they are not all destroyed, _____"',
    correctAnswer: "it will be civil war without end.",
    wrongAnswers: [
      "they will hunt us down.",
      "the Senate will side with them.",
      "the Separtist Army will be defeated.",
    ],
    source,
  },
  {
    question: "Which Jedi Master was killed on Mygeeto?",
    correctAnswer: "Ki-Adi-Mundi",
    wrongAnswers: ["Plo Koon", "Aayla Secura", "Depa Billaba"],
    source,
  },
  {
    question: 'Finish the quote: "So this is how liberty dies, _____"',
    correctAnswer: "With thunderous applause.",
    wrongAnswers: [
      "in the hands of the corrupt.",
      "in darkness of night.",
      "when we stop believing democracy can work.",
    ],
    source,
  },
  {
    question: "Who destroyed the Separtist leaders to end the Clone Wars?",
    correctAnswer: "Darth Vader",
    wrongAnswers: ["Darth Sideous", "The Clone Army", "Mace Windu"],
    source,
  },
  {
    question: "How did Obi-Wan track Darth Vader to Mustafar?",
    correctAnswer: "He snuck aboard Padmé's ship",
    wrongAnswers: [
      "He intercepted a communication",
      "He followed Padmé's ship",
      "He sensed Vader there",
    ],
    source,
  },
  {
    question: "Where did Yoda duel Darth Sideous?",
    correctAnswer: "The Senate Chambers",
    wrongAnswers: ["The Chancellor's Office", "The Jedi Temple", "Mustafar"],
    source,
  },
  {
    question:
      "Who disabled the protective shielding at the Mustafar mining facility?",
    correctAnswer: "Darth Vader",
    wrongAnswers: ["Obi-Wan Kenobi", "Padmé Amidala", "R2-D2"],
    source,
  },
  {
    question: "Where were Luke and Leia born?",
    correctAnswer: "Polis Massa",
    wrongAnswers: ["Coruscant", "Tatooine", "Alderaan"],
    source,
  },
  {
    question: "Where was Yoda when Order 66 went out?",
    correctAnswer: "Kashyyyk",
    wrongAnswers: ["Coruscant", "Dagobah", "Tatooine"],
    source,
  },
];

export default trivia;
