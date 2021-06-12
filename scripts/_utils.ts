import { dirname, fromFileUrl } from "https://deno.land/std@0.98.0/path/mod.ts";

export { parse } from "https://deno.land/std@0.98.0/flags/mod.ts";
export {
  ensureDirSync,
  existsSync,
} from "https://deno.land/std@0.98.0/fs/mod.ts";
export { grantOrThrow } from "https://deno.land/std@0.98.0/permissions/mod.ts";

export interface SOURCE {
  name: string;
  mediaType: string;
}

const composeTemplate = (...lines: string[]): string =>
  lines.join("\n\n") + "\n";

const standardExport = [
  "const trivia: TRIVIA[] = [];",
  "export default trivia;",
];

export const generateBasicTriviaTemplate = ({ mediaType, name }: SOURCE) =>
  composeTemplate(
    'import { SOURCE, TRIVIA } from "types";',
    `const source: SOURCE = { name: "${name}", mediaType: "${mediaType}" };`,
    ...standardExport,
  );

export const generateTVTemplate = (seriesName: string) =>
  composeTemplate(
    'import { TRIVIA } from "types";\nimport { generateTVSource } from "../generate_source.ts";',
    `const genSource = (episode: string) => generateTVSource("${seriesName}", episode);`,
    ...standardExport,
  );

export const generateComicTemplate = (seriesName: string) =>
  composeTemplate(
    'import { TRIVIA } from "types";\nimport { generateComicSource } from "../generate_source.ts";',
    `const genSource = (issue: number) => generateComicSource("${seriesName}", issue);`,
    ...standardExport,
  );

export const getPathToProjectRoot = (): string =>
  fromFileUrl(dirname(dirname(import.meta.url)));
