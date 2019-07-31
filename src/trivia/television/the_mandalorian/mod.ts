import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateTVSource } from '../../../helpers/mod.ts';

import theMandalorianSeason1 from './season_1.ts';

const trivia: TRIVIA[] = [...theMandalorianSeason1];

export default trivia;

export const generateMandalorianSource = (episode: string) =>
  generateTVSource('The Mandalorian', episode);
