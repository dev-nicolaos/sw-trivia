import { TRIVIA } from "interfaces";

import BOOKS from "./books/mod.ts";
import COMICS from "./comics/mod.ts";
import FILMS from "./films/mod.ts";
import GAMES from "./games/mod.ts";
import TELEVISION from "./television/mod.ts";

const ALLTRIVIA: TRIVIA[] = [
  ...BOOKS,
  ...COMICS,
  ...FILMS,
  ...GAMES,
  ...TELEVISION,
];

export { ALLTRIVIA, BOOKS, COMICS, FILMS, GAMES, TELEVISION };
