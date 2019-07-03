import { QUESTION } from '../../interfaces/question.interface.ts';

const trivia: QUESTION[] = [
  {
    question: `Prior to Disney's purchase of Lucasfilm, which Star Wars film was the only one not to show Tatooine?`,
    correctAnswer: `Episode V: Empire Strikes Back`,
    wrongAnswers: [
      `Episode III: Revenge of the Sith`, `Episode II: Attack of the Clones`, `Episode VI: Return of the Jedi`
    ],
    source: {
      name: `Episode V: Empire Strikes Back`,
      mediaType: `Film`
    }
  },
];

export default trivia;
