export const SUPPORTED_MEDIA_TYPES = [
  "book",
  "comic",
  "film",
  "game",
  "television",
] as const;

export type MediaType = typeof SUPPORTED_MEDIA_TYPES[number];

export interface Source {
  name: string;
  mediaType: MediaType;
}

export interface Trivia {
  question: string;
  correctAnswer: string;
  wrongAnswers: [string, string, string];
  source: Source;
}

export interface GET_NUMERIC_INPUT_OPTIONS {
  max?: number;
  min?: number;
  prompt?: string;
  round?: boolean;
}
