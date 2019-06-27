import { QUESTION } from '../../question.interface.ts';

import aNewHope from './a_new_hope.ts';
import attackOfTheClones from './attack_of_the_clones.ts';
import returnOfTheJedi from './return_of_the_jedi.ts';
import rogueOne from './rogue_one.ts';
import solo from './solo.ts';
import theEmpireStrikesBack from './the_empire_strikes_back.ts';
import theForceAwakens from './the_force_awakens.ts';
import theLastJedi from './the_last_jedi.ts';
import thePhantomMenace from './the_phantom_menace.ts';
import theRiseOfSkywalker from './the_rise_of_skywalker.ts';

const trivia: QUESTION[] = [
  ...aNewHope,
  ...attackOfTheClones,
  ...returnOfTheJedi,
  ...rogueOne,
  ...solo,
  ...theEmpireStrikesBack,
  ...theForceAwakens,
  ...theLastJedi,
  ...thePhantomMenace,
  ...theRiseOfSkywalker,
];

export default trivia;