import { TRIVIA } from "types";

import rebels from "./rebels.ts";
import resistance from "./resistance.ts";
import theCloneWars from "./the_clone_wars.ts";
import theMandalorian from "./the_mandalorian.ts";

const trivia: TRIVIA[] = [
  ...rebels,
  ...resistance,
  ...theCloneWars,
  ...theMandalorian,
];

export default trivia;
