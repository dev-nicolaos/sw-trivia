import { SOURCE } from '../interfaces/mod.ts';

export const generateTVSource = (series: string, episode: string): SOURCE => ({
  name: `${series}: ${episode}`,
  mediaType: 'Television',
});
