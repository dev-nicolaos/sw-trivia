import { TRIVIA } from "types";

import battlefront2 from "./battlefront_2.ts";
import jediFallenOrder from "./jedi_fallen_order.ts";
import squadrons from "./squadrons.ts";
import vaderImmortal from "./vader_immortal.ts";

const trivia: TRIVIA[] = [
  ...battlefront2,
  ...jediFallenOrder,
  ...squadrons,
  ...vaderImmortal,
];

export default trivia;
