import showStats from './stats/stats.ts';
import { parse } from 'https://deno.land/std@v0.9.0/flags/mod.ts';

const { args } = Deno;

// TODO: Convert from using a flag to being interactive
const statsFlag = parse(args).stats;

if (statsFlag) {
  showStats();
} else {
  // TODO: ask a question
}