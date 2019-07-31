import { SOURCE } from '../interfaces/mod.ts';

const generateTVSource = (series: string, episode: string): SOURCE => ({
  name: `${series}: ${episode}`,
  mediaType: 'Television',
});

export const generateCloneWarsSource = (episode: string) =>
  generateTVSource('The Clone Wars', episode);

export const generateMandalorianSource = (episode: string) =>
  generateTVSource('The Mandalorian', episode);

export const generateRebelsSource = (episode: string) =>
  generateTVSource('Rebels', episode);

export const generateResistanceSource = (episode: string) =>
  generateTVSource('Resistance', episode);
