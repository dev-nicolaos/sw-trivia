import { TRIVIA } from "types";

import resistanceSeason1 from "./season_1.ts";
import resistanceSeason2 from "./season_2.ts";

const trivia: TRIVIA[] = [...resistanceSeason1, ...resistanceSeason2];

export default trivia;
