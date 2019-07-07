import { TRIVIA } from '../../interfaces/mod.ts';

import rebels from './rebels/mod.ts';
import theCloneWars from './the_clone_wars/mod.ts';

const trivia: TRIVIA[] = [...rebels, ...theCloneWars];

export default trivia;
