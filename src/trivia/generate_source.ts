import { MEDIA_TYPE, SOURCE } from "types";

const generateSource = (name: string, mediaType: MEDIA_TYPE): SOURCE => ({
  name,
  mediaType,
});

export const generateBookSource = (name: string): SOURCE =>
  generateSource(name, "book");

export const generateComicSource = (series: string, issue: number): SOURCE =>
  generateSource(`${series}, Issue ${issue}`, "comic");

export const generateFilmSource = (name: string): SOURCE =>
  generateSource(name, "film");

export const generateGameSource = (name: string): SOURCE =>
  generateSource(name, "game");

export const generateTVSource = (series: string, episode: string): SOURCE =>
  generateSource(`${series}: ${episode}`, "television");
