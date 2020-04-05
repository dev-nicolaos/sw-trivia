import { TRIVIA } from "types";

import rebels from "./rebels/mod.ts";
import resistance from "./resistance/mod.ts";
import theCloneWars from "./the_clone_wars/mod.ts";
import theMandalorian from "./the_mandalorian/mod.ts";

const trivia: TRIVIA[] = [
  ...rebels,
  ...resistance,
  ...theCloneWars,
  ...theMandalorian,
];

export default trivia;
