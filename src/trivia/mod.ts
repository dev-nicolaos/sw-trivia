import { TRIVIA } from "types";

import BOOKS from "./books/mod.ts";
import COMICS from "./comics/mod.ts";
import FILMS from "./films/mod.ts";
import GAMES from "./games/mod.ts";
import TELEVISION from "./television/mod.ts";

const ALL_TRIVIA: TRIVIA[] = [
  ...BOOKS,
  ...COMICS,
  ...FILMS,
  ...GAMES,
  ...TELEVISION,
];

export { ALL_TRIVIA, BOOKS, COMICS, FILMS, GAMES, TELEVISION };
