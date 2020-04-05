import { SOURCE } from "types";

export const generateBasicTriviaTemplate = ({ mediaType, name }: SOURCE) =>
  `import { TRIVIA, SOURCE } from "types";

const source: SOURCE = { name: "${name}", mediaType: "${mediaType}" };

const trivia: TRIVIA[] = [];

export default trivia;
`;

export const generateTVTemplate = (seriesName: string) =>
  `import { TRIVIA } from "types";
import { generateTVSource } from "helpers";

const genSource = (episode: string) => generateTVSource("${seriesName}", episode);

const trivia: TRIVIA[] = [];

export default trivia;
`;

export const generateComicTemplate = (seriesName: string) =>
  `import { TRIVIA } from "types";
import { generateComicSource } from "helpers";

const genSource = (issue: number) => generateComicSource("${seriesName}", issue);

const trivia: TRIVIA[] = [];

export default trivia;
`;
