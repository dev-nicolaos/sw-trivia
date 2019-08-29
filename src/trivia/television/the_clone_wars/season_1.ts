import { TRIVIA } from 'interfaces';
import { generateTVSource } from 'helpers';

const genSource = (episode: string) =>
  generateTVSource('The Clone Wars', episode);

const trivia: TRIVIA[] = [];

export default trivia;
