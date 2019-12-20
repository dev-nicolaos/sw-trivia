import { TRIVIA } from "interfaces";

import captainPhasma from "./captain_phasma.ts";
import chewbacca from "./chewbacca.ts";
import darthMaul from "./darth_maul.ts";
import darthMaulSonOfDathomir from "./darth_maul_son_of_dathomir.ts";
import darthVader from "./darth_vader.ts";
import darthVaderDarkLordOfTheSith from "./darth_vader_dark_lord_of_the_sith.ts";
import drAphra from "./dr_aphra.ts";
import hanSolo from "./han_solo.ts";
import jediOfTheRepublicMaceWindu from "./captain_phasma.ts";
import kanan from "./kanan.ts";
import lando from "./lando.ts";
import obiwanAndAnakin from "./obiwan_and_anakin.ts";
import poeDameron from "./poe_dameron.ts";
import princessLeia from "./princess_leia.ts";
import shatteredEmpire from "./shattered_empire.ts";
import starWars from "./star_wars.ts";

const trivia: TRIVIA[] = [
  ...captainPhasma,
  ...chewbacca,
  ...darthMaul,
  ...darthMaulSonOfDathomir,
  ...darthVader,
  ...darthVaderDarkLordOfTheSith,
  ...drAphra,
  ...hanSolo,
  ...jediOfTheRepublicMaceWindu,
  ...kanan,
  ...lando,
  ...obiwanAndAnakin,
  ...poeDameron,
  ...princessLeia,
  ...shatteredEmpire,
  ...starWars,
];

export default trivia;
