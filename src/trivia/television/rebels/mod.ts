import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateTVSource } from '../../../helpers/mod.ts';

import rebelsSeason1 from './season_1.ts';
import rebelsSeason2 from './season_2.ts';
import rebelsSeason3 from './season_3.ts';
import rebelsSeason4 from './season_4.ts';

const trivia: TRIVIA[] = [
  ...rebelsSeason1,
  ...rebelsSeason2,
  ...rebelsSeason3,
  ...rebelsSeason4,
];

export default trivia;

export const generateRebelsSource = (episode: string) => generateTVSource('Rebels', episode);
