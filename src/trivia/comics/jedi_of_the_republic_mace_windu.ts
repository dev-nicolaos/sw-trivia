import { TRIVIA } from "types";
import { generateComicSource } from "helpers";

const genSource = (issue: number) =>
  generateComicSource("Jedi of the Republic—Mace Windu", issue);

const trivia: TRIVIA[] = [];

export default trivia;
