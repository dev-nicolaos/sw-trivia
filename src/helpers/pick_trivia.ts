import { TRIVIA } from "interfaces";
import { ALL_TRIVIA } from "../trivia/mod.ts";

export function pickRandomTrivia(providedTrivia: TRIVIA[] = ALL_TRIVIA): TRIVIA {
  const selectedIndex = Math.floor(Math.random() * providedTrivia.length);
  return providedTrivia[selectedIndex];
}

export function pickTrivia(
  numberOfTrivia: number,
  providedTrivia: TRIVIA[] = ALL_TRIVIA,
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
