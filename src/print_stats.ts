import {
  ALL_TRIVIA,
  BOOKS,
  COMICS,
  FILMS,
  GAMES,
  TELEVISION,
} from "./trivia/mod.ts";

import { TRIVIA } from "types";

const countUniqueSources = (providedTrivia: TRIVIA[]): number =>
  providedTrivia.reduce((acc: string[], curr: TRIVIA) => (
    acc.includes(curr.source.name) ? acc : [...acc, curr.source.name]
  ), []).length;

interface MOST_COMMON_SOURCES {
  names: string[];
  count: number;
}

function findMostCommonSources(providedTrivia: TRIVIA[]): MOST_COMMON_SOURCES {
  const sourceCounts: { [index: string]: number } = {};

  providedTrivia.forEach((trivia) => {
    const { name } = trivia.source;

    if (sourceCounts[name]) {
      sourceCounts[name]++;
    } else {
      sourceCounts[name] = 1;
    }
  });

  const mostCommonSources: { names: string[]; count: number } = {
    names: [],
    count: 0,
  };

  for (const source in sourceCounts) {
    if (sourceCounts[source] > mostCommonSources.count) {
      mostCommonSources.names = [source];
      mostCommonSources.count = sourceCounts[source];
    } else if (sourceCounts[source] === mostCommonSources.count) {
      mostCommonSources.names.push(source);
    }
  }

  return mostCommonSources;
}

const formatMostCommonSources = ({
  names,
  count,
}: MOST_COMMON_SOURCES): string =>
  names.length === 1
    ? `Source with the most questions: ${names[0]} - ${count} questions`
    : `Sources with the most questions: ${
      names.join(", ")
    } - ${count} questions each`;

export default () => {
  console.log("Number of Trivia Questions:", ALL_TRIVIA.length);
  console.log("From books:", BOOKS.length);
  console.log("From comics:", COMICS.length);
  console.log("From films:", FILMS.length);
  console.log("From games:", GAMES.length);
  console.log("From television:", TELEVISION.length);
  console.log("Number of Unique Sources:", countUniqueSources(ALL_TRIVIA));
  console.log(formatMostCommonSources(findMostCommonSources(ALL_TRIVIA)));
};
