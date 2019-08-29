import { TRIVIA, SOURCE } from 'interfaces';

const source: SOURCE = { name: 'A New Hope', mediaType: 'Film' };

const trivia: TRIVIA[] = [
  {
    question: 'Which ship was the first ever shown on screen in the franchise?',
    correctAnswer: 'Tantive IV',
    wrongAnswers: ['Star Destroyer Avenger', 'Millenium Falcon', 'X-Wing'],
    source,
  },
  {
    question:
      'What type of blaster did the rebel troops on the Tantive IV use when boarded above Tatooine?',
    correctAnswer: 'DH-17',
    wrongAnswers: ['DLT-19', 'A280C', 'E-11'],
    source,
  },
  {
    question:
      'Who did Princess Leia give the stolen Death Star plans to above Tatooine?',
    correctAnswer: 'R2-D2',
    wrongAnswers: ['C-3PO', 'Captain Antilles', 'Mon Mothma'],
    source,
  },
  {
    question:
      'Where did C-3PO fear he and R2 would be taken and "smashed into who knows what"?',
    correctAnswer: 'The Spice Mines of Kessel',
    wrongAnswers: [
      'The Imperial Palace on Coruscant',
      'The Shipyards above Kuat',
      'A junk dealer on Tatooine',
    ],
    source,
  },
  {
    question:
      'How many stormtroopers did Leia shoot before being stunned on the Tantive IV?',
    correctAnswer: '1',
    wrongAnswers: ['0', '2', '3'],
    source,
  },
  {
    question: `Finish the quote: "Don't you call me a mindless philosopher you _____"`,
    correctAnswer: 'overweight glob of grease!',
    wrongAnswers: [
      'stupid little astromech!',
      'pathetic excuse for a droid!',
      'piece of junk!',
    ],
    source,
  },
  {
    question: 'Where was R2-D2 when the Jawas captured him?',
    correctAnswer: 'A rocky canyon',
    wrongAnswers: ['A sand dune', 'A desert oasis', 'On a speeder'],
    source,
  },
  {
    question:
      'Beru wanted Luke to make sure Owen bought a translator droid that spoke which language?',
    correctAnswer: 'Bocce',
    wrongAnswers: ['Sy Bisti', 'Basic', 'Huttesse'],
    source,
  },
  {
    question: 'Finish the quote: "But I was going into Tosche Station to _____',
    correctAnswer: 'pick up some power converters.',
    wrongAnswers: [
      'have a drink with Biggs.',
      'fly the new XP-38.',
      'meet a pretty girl.',
    ],
    source,
  },
  {
    question:
      'Where was Luke supposed to take C-3PO and R2-D2 to wipe their memories?',
    correctAnswer: 'Anchorhead',
    wrongAnswers: ['Mos Eisley', 'Mos Espa', 'Freetown'],
    source,
  },
  {
    question: 'How many Tusken Raiders dragged Luke back to his landspeeder?',
    correctAnswer: '3',
    wrongAnswers: ['1', '2', '4'],
    source,
  },
  {
    question: 'What did Owen tell Luke his father had been?',
    correctAnswer: 'A navigator on a spice freighter',
    wrongAnswers: ['A Jedi Knight', 'A moisture farmer', 'A pod racer'],
    source,
  },
  {
    question:
      'Which of the following was NOT a characteristic of the Force Obi-Wan shared with Luke?',
    correctAnswer: 'It gives the Sith their power',
    wrongAnswers: [
      "It's an energy field",
      "It's created by all living things",
      'It binds the galaxy together',
    ],
    source,
  },
  {
    question:
      'Which Imperial aboard the Death Star announced that the Emperor had dissolved the Senate?',
    correctAnswer: 'Grand Moff Tarkin',
    wrongAnswers: ['Admiral Motti', 'Darth Vader', 'Colonel Yularen'],
    source,
  },
  {
    question:
      'What color was the pauldron of the stormtrooper that Obi-Wan tricked in Mos Eisley?',
    correctAnswer: 'Orange',
    wrongAnswers: ['Red', 'Black', 'White'],
    source,
  },
  {
    question: 'Which species was the band in the Mos Eisley Cantina?',
    correctAnswer: 'Bith',
    wrongAnswers: ['Rodian', 'Twilek', 'Ithorian'],
    source,
  },
  {
    question: `Finish the quote: "It's the ship that made the Kessel run in less than _____"`,
    correctAnswer: '12 parsecs.',
    wrongAnswers: ['14 parsecs.', '10 parsecs.', '8 parsecs.'],
    source,
  },
  {
    question:
      'Which bounty hunter cornered Han Solo in the Mos Eisley Cantina?',
    correctAnswer: 'Greedo',
    wrongAnswers: ['Boba Fett', 'Bossk', 'Dengar'],
    source,
  },
  {
    question: 'Where did Leia tell Tarkin the Rebel base was?',
    correctAnswer: 'Dantooine',
    wrongAnswers: ['Alderaan', 'Yavin 4', 'Atollon'],
    source,
  },
  {
    question: 'Finish the quote: "I suggest a new strategy R2: _____"',
    correctAnswer: 'let the wookie win.',
    wrongAnswers: [
      'play the long game.',
      'go for the kill.',
      'actually make an effort.',
    ],
    source,
  },
  {
    question:
      'What was the number of the stormtrooper on the Death Star whose armor Luke took?',
    correctAnswer: 'TK 421',
    wrongAnswers: ['TK 531', 'FN 2187', 'DB 94'],
    source,
  },
  {
    question: 'Which dentention block was Princess Leia held in?',
    correctAnswer: 'AA23',
    wrongAnswers: ['AA24', 'BB22', 'BB225'],
    source,
  },
  {
    question: 'How many eyes does a dianoga have?',
    correctAnswer: '1',
    wrongAnswers: ['0', '2', '4'],
    source,
  },
  {
    question: 'How did Luke and Leia get across the chasm in the Death Star?',
    correctAnswer: 'By swinging across',
    wrongAnswers: ['They extended the bridge', 'By jumping', 'By going around'],
    source,
  },
  {
    question:
      'Finish the quote: "When I left you I was but the learner, now _____"',
    correctAnswer: 'I am the master.',
    wrongAnswers: [
      'you will die.',
      'I am more powerful than any Jedi.',
      'the roles have reversed.',
    ],
    source,
  },
  {
    question: 'How many stormtroopers watched Darth Vader kill Obi-Wan?',
    correctAnswer: '5',
    wrongAnswers: ['3', '16', '8'],
    source,
  },
  {
    question:
      'Why did the Millenium Falcon encounter minimal pursuit after escaping the first Death Star?',
    correctAnswer: 'The Imperials intened to track them',
    wrongAnswers: [
      'The Imperials were caught off guard',
      'The Imperials did not realize that the Falcon had left',
      'The Falcon had a cloaking device',
    ],
    source,
  },
  {
    question:
      'What did Luke tell Wedge he used to "bullseye wamprats" with on Tatooine?',
    correctAnswer: 'His T-16',
    wrongAnswers: ['His XP-34', 'His 6-2Aug2 Rifle', 'His X-Wing'],
    source,
  },
  {
    question:
      'How close to firing range was the Death Star when rebel pilots took off from Yavin IV?',
    correctAnswer: '15 minutes',
    wrongAnswers: ['30 minutes', '20 minutes', '10 minutes'],
    source,
  },
  {
    question: "What was Wedge's call sign at the Battle of Yavin?",
    correctAnswer: 'Red 2',
    wrongAnswers: ['Red 5', 'Gold 3', 'Red 6'],
    source,
  },
  {
    question:
      'How many guns did Gold 5 guess were guarding the trench on the Death Star?',
    correctAnswer: 'About 20 guns',
    wrongAnswers: ['About 50 guns', 'About 10 guns', 'About 30 guns'],
    source,
  },
  {
    question: 'Finish the quote: "Evacuate? In our moment of triumph? _____"',
    correctAnswer: 'I think you overestimate their chances.',
    wrongAnswers: [
      'What are you, a fool?',
      'I will not fail.',
      'You will not stop me.',
    ],
    source,
  },
  {
    question:
      'What did C-3PO offer to donate to help fix R2 after the Battle of Yavin?',
    correctAnswer: 'His own circuits and gears',
    wrongAnswers: [
      'His own earnings',
      'His own expertise',
      'His own coverings',
    ],
    source,
  },
];

export default trivia;
