import { TRIVIA } from "types";

import theCloneWarsSeason1 from "./season_1.ts";
import theCloneWarsSeason2 from "./season_2.ts";
import theCloneWarsSeason3 from "./season_3.ts";
import theCloneWarsSeason4 from "./season_4.ts";
import theCloneWarsSeason5 from "./season_5.ts";
import theCloneWarsSeason6 from "./season_6.ts";
import theCloneWarsSeason7 from "./season_7.ts";

const trivia: TRIVIA[] = [
  ...theCloneWarsSeason1,
  ...theCloneWarsSeason2,
  ...theCloneWarsSeason3,
  ...theCloneWarsSeason4,
  ...theCloneWarsSeason5,
  ...theCloneWarsSeason6,
  ...theCloneWarsSeason7,
];

export default trivia;
