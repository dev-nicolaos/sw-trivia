import { TRIVIA } from "types";

const addSourceIfUnique = (
  sources: string[],
  { source: { name } }: TRIVIA,
): string[] => (sources.includes(name) ? sources : [...sources, name]);

export const countUniqueSources = (providedTrivia: TRIVIA[]): number =>
  providedTrivia.reduce(addSourceIfUnique, []).length;
