import { TRIVIA } from '../../../interfaces/mod.ts';
import { generateTVSource } from '../../../helpers/mod.ts';

const genSource = (episode: string) =>
  generateTVSource('The Mandalorian', episode);

const trivia: TRIVIA[] = [];

export default trivia;
