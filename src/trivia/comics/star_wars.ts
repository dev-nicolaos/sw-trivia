import { TRIVIA } from '../../interfaces/mod.ts';
import { generateComicSource } from '../../helpers/mod.ts';

const genSource = (issue: number) => generateComicSource('Star Wars', issue);

const trivia: TRIVIA[] = [];

export default trivia;
