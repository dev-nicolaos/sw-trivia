import { MediaType, Source } from "types";

const generateSource = (name: string, mediaType: MediaType): Source => ({
  name,
  mediaType,
});

export const generateBookSource = (name: string) =>
  generateSource(name, "book");

export const generateComicSource = (series: string, issue: number) =>
  generateSource(`${series}, Issue ${issue}`, "comic");

export const generateFilmSource = (name: string) =>
  generateSource(name, "film");

export const generateGameSource = (name: string) =>
  generateSource(name, "game");

export const generateTVSource = (series: string, episode: string) =>
  generateSource(`${series}: ${episode}`, "television");
