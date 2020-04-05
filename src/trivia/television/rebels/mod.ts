import { TRIVIA } from "types";

import rebelsSeason1 from "./season_1.ts";
import rebelsSeason2 from "./season_2.ts";
import rebelsSeason3 from "./season_3.ts";
import rebelsSeason4 from "./season_4.ts";

const trivia: TRIVIA[] = [
  ...rebelsSeason1,
  ...rebelsSeason2,
  ...rebelsSeason3,
  ...rebelsSeason4,
];

export default trivia;
