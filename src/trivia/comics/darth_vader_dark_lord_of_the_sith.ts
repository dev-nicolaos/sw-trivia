import { TRIVIA } from '../../interfaces/mod.ts';
import { generateComicSource } from '../../helpers/mod.ts';

const genSource = (issue: number) =>
  generateComicSource('Darth Vader - Dark Lord of the Sith', issue);

const trivia: TRIVIA[] = [];

export default trivia;
