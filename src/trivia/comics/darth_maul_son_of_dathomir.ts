import { TRIVIA } from 'interfaces';
import { generateComicSource } from 'helpers';

const genSource = (issue: number) =>
  generateComicSource('Darth Maul—Son of Dathomir', issue);

const trivia: TRIVIA[] = [];

export default trivia;
