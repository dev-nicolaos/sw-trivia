import { TRIVIA } from 'interfaces';
import { generateComicSource } from 'helpers';

const genSource = (issue: number) =>
  generateComicSource('Shattered Empire', issue);

const trivia: TRIVIA[] = [];

export default trivia;
