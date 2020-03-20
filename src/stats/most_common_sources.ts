import { TRIVIA } from "interfaces";

interface MOST_COMMON_SOURCES {
  names: string[];
  count: number;
}

export function findMostCommonSources(
  providedTrivia: TRIVIA[],
): MOST_COMMON_SOURCES {
  const sourceCounts: {[index: string]:number} = {};

  providedTrivia.forEach(trivia => {
    const { name } = trivia.source;

    if (sourceCounts[name]) {
      sourceCounts[name]++;
    } else {
      sourceCounts[name] = 1;
    }
  });

  const mostCommonSources: { names: string[], count: number } = { names: [], count: 0 };

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

export function formatMostCommonSources({
  names,
  count,
}: MOST_COMMON_SOURCES): string {
  const s = names.length > 1 ? "s" : "";
  let statline = `Source${s} with the most questions: `;

  names.forEach((name, i) => {
    statline += (i > 0 ? ", " : "") + name;
  });

  statline += ` - ${count} questions${s ? " each" : ""}`;
  return statline;
}
