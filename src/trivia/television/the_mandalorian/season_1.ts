import { TRIVIA } from 'interfaces';
import { generateTVSource } from 'helpers';

const genSource = (episode: string) =>
  generateTVSource('The Mandalorian', episode);

const trivia: TRIVIA[] = [];

export default trivia;
