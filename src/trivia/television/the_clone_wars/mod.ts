import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateTVSource } from '../../../helpers/mod.ts';

import theCloneWarsSeason1 from './season_1.ts';
import theCloneWarsSeason2 from './season_2.ts';
import theCloneWarsSeason3 from './season_3.ts';
import theCloneWarsSeason4 from './season_4.ts';
import theCloneWarsSeason5 from './season_5.ts';
import theCloneWarsSeason6 from './season_6.ts';

const trivia: TRIVIA[] = [
  ...theCloneWarsSeason1,
  ...theCloneWarsSeason2,
  ...theCloneWarsSeason3,
  ...theCloneWarsSeason4,
  ...theCloneWarsSeason5,
  ...theCloneWarsSeason6,
];

export default trivia;

export const generateCloneWarsSource = (episode: string) =>
  generateTVSource('The Clone Wars', episode);
