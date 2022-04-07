export const SUPPORTED_MEDIA_TYPES = ['book', 'comic', 'film', 'game', 'television'] as const;

export type MEDIA_TYPE = typeof SUPPORTED_MEDIA_TYPES[number];

export interface SOURCE {
  name: string;
  mediaType: MEDIA_TYPE;
}

export interface TRIVIA {
  question: string;
  correctAnswer: string;
  wrongAnswers: [string, string, string];
  source: SOURCE;
}

export interface GET_NUMERIC_INPUT_OPTIONS {
  max?: number;
  min?: number;
  prompt?: string;
  round?: boolean;
}
