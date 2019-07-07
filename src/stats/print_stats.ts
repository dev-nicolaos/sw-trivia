import {
  ALLTRIVIA,
  BOOKS,
  COMICS,
  FILMS,
  GAMES,
  TELEVISION,
} from '../trivia/mod.ts';
import {
  countUniqueSources,
  findMostCommonSources,
  formatMostCommonSources,
} from './mod.ts';

export function printStats() {
  console.log('Number of Trivia Questions:', ALLTRIVIA.length);
  console.log('From books:', BOOKS.length);
  console.log('From comics:', COMICS.length);
  console.log('From films:', FILMS.length);
  console.log('From games:', GAMES.length);
  console.log('From television:', TELEVISION.length);
  console.log('Number of Unique Sources:', countUniqueSources(ALLTRIVIA));
  console.log(formatMostCommonSources(findMostCommonSources(ALLTRIVIA)));
}
