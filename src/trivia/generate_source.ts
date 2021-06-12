import { MEDIA_TYPE, SOURCE } from "types";

const generateSource = (name: string, mediaType: MEDIA_TYPE): SOURCE => ({
  name,
  mediaType,
});

export const generateTVSource = (series: string, episode: string): SOURCE =>
  generateSource(`${series}: ${episode}`, "Television");

export const generateComicSource = (series: string, issue: number): SOURCE =>
  generateSource(`${series}, Issue ${issue}`, "Comic");
