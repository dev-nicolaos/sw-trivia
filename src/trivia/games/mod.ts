import { QUESTION } from '../../interfaces/question.interface.ts';

import battlefront2 from './battlefront_2.ts';
import jediFallenOrder from './jedi_fallen_order.ts';

const trivia: QUESTION[] = [...battlefront2, ...jediFallenOrder];

export default trivia;
