import { TRIVIA } from "types";

import rebels from "./rebels.ts";
import resistance from "./resistance.ts";
import theCloneWars from "./the_clone_wars.ts";

const trivia: TRIVIA[] = [
  ...rebels,
  ...resistance,
  ...theCloneWars,
];

export default trivia;
