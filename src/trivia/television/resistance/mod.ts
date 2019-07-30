import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateTVSource } from '../../../helpers/mod';

import resistanceSeason1 from './season_1.ts';

const trivia: TRIVIA[] = [...resistanceSeason1];

export default trivia;

export const generateResistanceSource = (episode: string) => generateTVSource('Resistance', episode);
