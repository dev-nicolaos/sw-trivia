import { TRIVIA } from '../interfaces/mod.ts';

interface MOSTCOMMONSOURCES {
  names: string[];
  count: number;
}

export function findMostCommonSources(
  providedTrivia: TRIVIA[],
): MOSTCOMMONSOURCES {
  const sourceCounts = {};

  providedTrivia.forEach(trivia => {
    const { name } = trivia.source;

    if (sourceCounts[name]) {
      sourceCounts[name]++;
    } else {
      sourceCounts[name] = 1;
    }
  });

  const mostCommonSources = { names: [], count: 0 };

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
}: MOSTCOMMONSOURCES): string {
  const s = names.length > 1 ? 's' : '';
  let statline = `Source${s} with the most questions: `;

  names.forEach((name, i) => {
    statline += (i > 0 ? ', ' : '') + name;
  });

  statline += ` - ${count} questions${s ? ' each' : ''}`;
  return statline;
}
