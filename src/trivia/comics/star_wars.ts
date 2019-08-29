import { TRIVIA } from 'interfaces';
import { generateComicSource } from 'helpers';

const genSource = (issue: number) => generateComicSource('Star Wars', issue);

const trivia: TRIVIA[] = [];

export default trivia;
