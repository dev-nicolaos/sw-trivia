import { TRIVIA } from '../interfaces/mod.ts';
import { ALLTRIVIA } from '../trivia/mod.ts';
import {
  acceptAnswer,
  combineAnswers,
  getUserInput,
  printOptions,
  rejectAnswer,
} from './mod.ts';

export function pickRandomTrivia(providedTrivia: TRIVIA[] = ALLTRIVIA): TRIVIA {
  const selectedIndex = Math.floor(Math.random() * providedTrivia.length);
  return providedTrivia[selectedIndex];
}

export function pickTrivia(
  numberOfTrivia: number,
  providedTrivia: TRIVIA[] = ALLTRIVIA,
): TRIVIA[] {
  const triviaList = [];

  const unusedTrivia = [...providedTrivia];

  for (let i = 0; i < numberOfTrivia; i++) {
    const selectedTrivia = pickRandomTrivia(unusedTrivia);
    triviaList.push(selectedTrivia);
    unusedTrivia.splice(unusedTrivia.indexOf(selectedTrivia), 1);
  }

  return triviaList;
}
