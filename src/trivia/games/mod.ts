import { TRIVIA } from 'interfaces';

import battlefront2 from './battlefront_2.ts';
import jediFallenOrder from './jedi_fallen_order.ts';

const trivia: TRIVIA[] = [...battlefront2, ...jediFallenOrder];

export default trivia;
