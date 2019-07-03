import { QUESTION } from '../interfaces/question.interface.ts';

import books from './books/mod.ts';
import comics from './comics/mod.ts';
import films from './films/mod.ts';
import games from './games/mod.ts';
import television from './television/mod.ts';

export {
  books,
  comics,
  films,
  games,
  television,
};

const trivia: QUESTION[] = [
  ...books,
  ...comics,
  ...films,
  ...games,
  ...television,
];

export default trivia;
