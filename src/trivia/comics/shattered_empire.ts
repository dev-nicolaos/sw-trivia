import { TRIVIA } from "types";
import { generateComicSource } from "helpers";

const genSource = (issue: number) =>
  generateComicSource("Shattered Empire", issue);

const trivia: TRIVIA[] = [];

export default trivia;
