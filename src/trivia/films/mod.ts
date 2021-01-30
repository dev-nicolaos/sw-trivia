import { TRIVIA } from "types";

import aNewHope from "./a_new_hope.ts";
import attackOfTheClones from "./attack_of_the_clones.ts";
import returnOfTheJedi from "./return_of_the_jedi.ts";
import revengeOfTheSith from "./revenge_of_the_sith.ts";
import rogueOne from "./rogue_one.ts";
import solo from "./solo.ts";
import theEmpireStrikesBack from "./the_empire_strikes_back.ts";
import thePhantomMenace from "./the_phantom_menace.ts";

const trivia: TRIVIA[] = [
  ...aNewHope,
  ...attackOfTheClones,
  ...returnOfTheJedi,
  ...revengeOfTheSith,
  ...rogueOne,
  ...solo,
  ...theEmpireStrikesBack,
  ...thePhantomMenace,
];

export default trivia;
