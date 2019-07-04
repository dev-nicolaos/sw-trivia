import { QUESTION } from '../../interfaces/question.interface.ts';

import rebels from './rebels/mod.ts';
import theCloneWars from './the_clone_wars/mod.ts';

const trivia: QUESTION[] = [...rebels, ...theCloneWars];

export default trivia;
