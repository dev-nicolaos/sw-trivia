import { TRIVIA } from '../interfaces/mod.ts';

export const countUniqueSources = (providedTrivia: TRIVIA[]): number =>
  providedTrivia
    .map(trivia => trivia.source.name)
    .filter((source, i, arr) => arr.indexOf(source) === i).length;
