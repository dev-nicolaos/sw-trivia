import { TRIVIA } from "types";

import darthVader from "./darth_vader.ts";
import obiwanAndAnakin from "./obiwan_and_anakin.ts";
import princessLeia from "./princess_leia.ts";

const trivia: TRIVIA[] = [
  ...darthVader,
  ...obiwanAndAnakin,
  ...princessLeia,
];

export default trivia;
