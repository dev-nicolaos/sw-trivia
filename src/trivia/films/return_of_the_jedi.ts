import { Trivia } from "types";
import { generateFilmSource } from "../generate_source.ts";

const source = generateFilmSource("Return of the Jedi");

const trivia: Trivia[] = [
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
    question: "What promted Jabba to drop Luke into the rancor's den?",
    correctAnswer: "Luke stealing a blaster from a guard",
    wrongAnswers: [
      "Luke insulting Jabba",
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
    wrongAnswers: ["Our family", "The Force", "Our emotions"],
    source,
  },
  {
    question:
      "Which type of ship was NOT part of the Rebel fleet that attacked the second Death Star?",
    correctAnswer: "MC75 star cruiser",
    wrongAnswers: ["Nebulon-B frigate", "CR90 corvette", "GR-75 transport"],
    source,
  },
  {
    question:
      "What reason did Lando Calrissian give to explain his rank of General in the Rebel Alliance?",
    correctAnswer: "His role at the Battle of Taanab",
    wrongAnswers: [
      "His role in freeing Han from Jabba",
      "He had stolen one of the Emperor's ships",
      "He had high level connections in the Rebellion",
    ],
    source,
  },
  {
    question:
      "What species were the spies who provided the Rebel Alliance information regarding the second Death Star?",
    correctAnswer: "Bothan",
    wrongAnswers: ["Rodian", "Grysk", "Weequay"],
    source,
  },
  {
    question:
      "What advice did Han offer Chewbaca while piloting the stolen Imperial shuttle on approach to Endor?",
    correctAnswer: "Fly casual",
    wrongAnswers: ["Fly fast", "Be ready to jump", "Have a drink"],
    source,
  },
  {
    question: 'Who said they thought "it would be pretty" on Endor?',
    correctAnswer: "R2-D2",
    wrongAnswers: ["Princess Leia", "Luke Skywalker", "Chewbacca"],
    source,
  },
  {
    question: "Which Ewok found Leia in the forest?",
    correctAnswer: "Wicket",
    wrongAnswers: ["Chirpa", "Logray", "Paploo"],
    source,
  },
  {
    question: "What did Emperor Palpatine tell Vader would be Luke's undoing?",
    correctAnswer: "His compassion for Vader",
    wrongAnswers: [
      "His faith in his friends",
      "His feeble grasp of the Force",
      "His lack of discipline",
    ],
    source,
  },
  {
    question:
      "How did Han, Luke, Chewbacca, and the droids escape the Ewok net?",
    correctAnswer: "R2-D2 cut the net",
    wrongAnswers: [
      "Han cut the net with Luke's lightsaber",
      "The Ewok's let them down",
      "Luke used the Force",
    ],
    source,
  },
  {
    question:
      "Who were the Ewok's planning to cook as the main course for their banquet to honor C-3PO?",
    correctAnswer: "Han Solo",
    wrongAnswers: [
      "Leia Organa",
      "Several scout troopers",
      "Sinjir Rath Velus",
    ],
    source,
  },
  {
    question:
      'Finish the quote: "The force is strong in my family. My father has it, I have it, _____"',
    correctAnswer: "and my sister has it.",
    wrongAnswers: [
      "and my mother has it.",
      "and my son has it.",
      "and my brother has it.",
    ],
    source,
  },
  {
    question:
      "How was Luke transported to Darth Vader after turning himself in on Endor?",
    correctAnswer: "Via AT-AT",
    wrongAnswers: [
      "Via speeder bike",
      "Via shuttle",
      "Stormtroopers marched him to the Imperial base",
    ],
    source,
  },
  {
    question:
      "What did Luke urge Vader to let go of before sending him to the Emperor?",
    correctAnswer: "His hate",
    wrongAnswers: [
      "His loyalty to his master",
      "His lust for power",
      "His pride",
    ],
    source,
  },
  {
    question: "Who flew the Millenium Falcon at the Battle of Ender?",
    correctAnswer: "Lando Calrissian and Nien Nunb",
    wrongAnswers: [
      "Han Solo and Chewbacca",
      "Rey and Chewbacca",
      "Lando Calrissian and L3-37",
    ],
    source,
  },
  {
    question:
      "How many Imperial troops were waiting to ambush the Rebels at the shield generator on Endor?",
    correctAnswer: "An entire legion",
    wrongAnswers: [
      "An entire battalion",
      "An entire regiment",
      "An entire squad",
    ],
    source,
  },
  {
    question: 'Whose call sign was "Red Leader" at the Battle of Endor?',
    correctAnswer: "Wedge Antilles",
    wrongAnswers: ["Luke Skywalker", "Hera Syndula", "Garven Dreis"],
    source,
  },
  {
    question: "Which Ewok tactic succeeded; in destroying an AT-ST?",
    correctAnswer: "Swinging logs into each side of the cockpit",
    wrongAnswers: [
      "Dropping rocks from gliders",
      "Using a rope as a trip wire",
      "Battering it with rocks shot from catapults",
    ],
    source,
  },
  {
    question: "What Imperial vehicle did Chewbacca help capture on Endor?",
    correctAnswer: "AT-ST",
    wrongAnswers: ["AT-AT", "Speeder bike", "Lambda-class shuttle"],
    source,
  },
  {
    question:
      'Finish the quote: "You failed your highness. I am a Jedi, _____"',
    correctAnswer: "like my father before me.",
    wrongAnswers: [
      "I will never give in to hate.",
      "you have lost.",
      "the dark side is no match.",
    ],
    source,
  },
  {
    question:
      "What type of ship crashed through the bridge of the Super Star Destroyer Executor and caused it to crash?",
    correctAnswer: "A-wing",
    wrongAnswers: ["Y-wing", "X-wing", "Star Destroyer"],
    source,
  },
  {
    question:
      "Which Force ghost was NOT seen by Luke at the celebration on Endor?",
    correctAnswer: "Qui-Gon Jinn",
    wrongAnswers: ["Obi-Wan Kenobi", "Anakin Skywalker", "Yoda"],
    source,
  },
];

export default trivia;
