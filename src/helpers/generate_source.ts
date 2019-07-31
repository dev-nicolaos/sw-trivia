import { SOURCE } from '../interfaces/mod.ts';

const generateSource = (name: string, mediaType: string): SOURCE => ({
  name,
  mediaType,
});

export const generateTVSource = (series: string, episode: string): SOURCE =>
  generateSource(`${series}: ${episode}`, 'Television');

export const generateComicSource = (series: string, part: number): SOURCE =>
  generateSource(`${series}, Part ${part}`, 'Comic');
