import { TRIVIA } from '../../interfaces/mod.ts';
import { generateComicSource } from '../../helpers/mod.ts';

const genSource = (issue: number) => generateComicSource('Darth Maul', issue);

const trivia: TRIVIA[] = [];

export default trivia;
