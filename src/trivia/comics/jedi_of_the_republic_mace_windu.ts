import { TRIVIA } from '../../interfaces/mod.ts';
import { generateComicSource } from '../../helpers/mod.ts';

const genSource = (issue: number) =>
  generateComicSource('Jedi of the Republic—Mace Windu', issue);

const trivia: TRIVIA[] = [];

export default trivia;
