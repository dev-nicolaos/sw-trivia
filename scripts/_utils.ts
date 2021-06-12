import {
  dirname,
  fromFileUrl,
  relative,
} from "https://deno.land/std@0.95.0/path/mod.ts";

export { parse } from "https://deno.land/std@0.95.0/flags/mod.ts";
export {
  ensureDirSync,
  existsSync,
} from "https://deno.land/std@0.95.0/fs/mod.ts";
export { grantOrThrow } from "https://deno.land/std@0.95.0/permissions/mod.ts";

import { SOURCE } from "../src/types.ts";

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

export const getPathToProjectRoot = (): string => {
  const projectRoot = fromFileUrl(dirname(dirname(import.meta.url)));
  const path = relative(Deno.cwd(), projectRoot) || ".";
  return path.startsWith(".") ? path : `./${path}`;
};
