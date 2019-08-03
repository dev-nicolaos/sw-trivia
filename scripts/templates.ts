import { SOURCE } from '../src/interfaces/mod.ts';

export const generateBasicTriviaTemplate = (source: SOURCE) =>
  `import { TRIVIA, SOURCE } from '../../interfaces/mod.ts';

const source: SOURCE = { name: '${source.name}', mediaType: '${
    source.mediaType
  }' };

const trivia: TRIVIA[] = [];

export default trivia;
`;
