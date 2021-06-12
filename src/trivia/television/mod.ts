import { TRIVIA } from "types";

import rebels from "./rebels.ts";
import resistance from "./resistance.ts";
import theBadBatch from './the_bad_batch.ts';
import theCloneWars from "./the_clone_wars.ts";

const trivia: TRIVIA[] = [
  ...rebels,
  ...resistance,
  ...theBadBatch,
  ...theCloneWars,
];

export default trivia;
