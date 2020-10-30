import { TRIVIA } from "types";
import { generateComicSource } from "helpers";

const genSource = (issue: number) =>
  generateComicSource("Han Solo - Imperial Cadet", issue);

const trivia: TRIVIA[] = [];

export default trivia;
