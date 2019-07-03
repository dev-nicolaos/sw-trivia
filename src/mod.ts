import { parse } from './deps.ts';
import showStats from './stats/stats.ts';

const { args } = Deno;

// TODO: Convert from using a flag to being interactive
const statsFlag = parse(args).stats;

if (statsFlag) {
  showStats();
} else {
  // TODO: ask a question
}