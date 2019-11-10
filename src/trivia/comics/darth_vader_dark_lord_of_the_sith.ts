import { TRIVIA } from "interfaces";
import { generateComicSource } from "helpers";

const genSource = (issue: number) =>
  generateComicSource("Darth Vader - Dark Lord of the Sith", issue);

const trivia: TRIVIA[] = [];

export default trivia;
