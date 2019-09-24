import { SOURCE } from 'interfaces';

export const generateBasicTriviaTemplate = (source: SOURCE) =>
  `import { TRIVIA, SOURCE } from 'interfaces';

const source: SOURCE = { name: '${source.name}', mediaType: '${source.mediaType}' };

const trivia: TRIVIA[] = [];

export default trivia;
`;
