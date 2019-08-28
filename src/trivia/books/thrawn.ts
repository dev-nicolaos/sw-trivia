import { TRIVIA, SOURCE } from '../../interfaces/mod.ts';

const source: SOURCE = { name: 'Thrawn', mediaType: 'Book' };

const trivia: TRIVIA[] = [
  {
    question:
      'Which language did Thrawn communicate with Eli Vanto in when they first met?',
    correctAnswer: 'Sy Bisti',
    wrongAnswers: ['Basic', 'Huttesse', 'Shyriiwook'],
    source,
  },
  {
    question: 'Why did Thrawn ask Palpatine to assign Eli Vanto to him?',
    correctAnswer: 'To learn what Vanto knew of the Chiss',
    wrongAnswers: [
      'To translate for him',
      "Because of Vanto's tactical skills",
      'To teach him the politcal hierachy of the Empire',
    ],
    source,
  },
  {
    question: 'Which district of Coruscant was The Pinnacle located in?',
    correctAnswer: 'The Federal District',
    wrongAnswers: ['The Uscru District', 'The Works', 'CoCo Town'],
    source,
  },
  {
    question: 'From which rank was Eli Vanto promoted to Lieutenant Commander?',
    correctAnswer: 'Ensign',
    wrongAnswers: ['Lieutenant', 'Captain', 'Corporal'],
    source,
  },
  {
    question:
      'Who was the first person Thrawn tried to recruit into Chiss service while he was in the Imperial Navy?',
    correctAnswer: 'Nevil Cygni',
    wrongAnswers: ['Eli Vanto', 'Brierly Ronan', 'Wullf Yularen'],
    source,
  },
];

export default trivia;
