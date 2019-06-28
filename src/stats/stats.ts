import trivia, { books, comics, films, games, television } from '../trivia/mod.ts';

import uniqueSources from './unique_sources.ts';
import sourcesWithMostQuestions from './sources_with_most_questions.ts';

function formatMostQuestions({ names, count }) {
  const s = names.length > 1 ? 's' : '';
  let statline = `Source${s} with the most questions: `;

  names.forEach((name, i) => {
    statline += (i > 0 ? ', ' : '') + name;
  });

  statline += ` - ${count} questions${s ? ' each' : ''}`;
  return statline;
}

export default function() {
  console.log('Number of Questions:', trivia.length);
  console.log('From books:', books.length);
  console.log('From comics:', comics.length);
  console.log('From films:', films.length);
  console.log('From games:', games.length);
  console.log('From television:', television.length);
  console.log('Number of Unique Sources:', uniqueSources(trivia));
  console.log(formatMostQuestions(sourcesWithMostQuestions(trivia)));
}