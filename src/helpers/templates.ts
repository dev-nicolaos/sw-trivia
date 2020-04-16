import { SOURCE } from "types";

const composeTemplate = (...lines: string[]): string =>
  lines.join("\n\n") + "\n";

const standardExport = [
  "const trivia: TRIVIA[] = [];",
  "export default trivia;",
];

export const generateBasicTriviaTemplate = ({ mediaType, name }: SOURCE) =>
  composeTemplate(
    'import { TRIVIA, SOURCE } from "types";',
    `const source: SOURCE = { name: "${name}", mediaType: "${mediaType}" };`,
    ...standardExport,
  );

export const generateTVTemplate = (seriesName: string) =>
  composeTemplate(
    'import { TRIVIA } from "types";\nimport { generateTVSource } from "helpers";',
    `const genSource = (episode: string) => generateTVSource("${seriesName}", episode);`,
    ...standardExport,
  );

export const generateComicTemplate = (seriesName: string) =>
  composeTemplate(
    'import { TRIVIA } from "types";\nimport { generateComicSource } from "helpers";',
    `const genSource = (issue: number) => generateComicSource("${seriesName}", issue);`,
    ...standardExport,
  );
