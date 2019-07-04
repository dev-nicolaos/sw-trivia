import { parse } from './deps.ts';
import showStats from './stats/stats.ts';
import { askRandomQuestion } from './helpers/mod.ts';
import trivia from './trivia/mod.ts';

const { args } = Deno;

const statsFlag = parse(args).stats;

if (statsFlag) {
  showStats();
} else {
  askRandomQuestion(trivia);
}
