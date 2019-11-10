import { TRIVIA } from "interfaces";
import { generateComicSource } from "helpers";

const genSource = (issue: number) =>
  generateComicSource("Captain Phasma", issue);

const trivia: TRIVIA[] = [];

export default trivia;
