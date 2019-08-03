export default (mediaType: string, name: string) =>
  `import { TRIVIA, SOURCE } from '../../interfaces/mod.ts';

const source: SOURCE = { name: '${name}', mediaType: '${mediaType}' };

const trivia: TRIVIA[] = [];

export default trivia;
`;
