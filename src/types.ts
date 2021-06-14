export type MEDIA_TYPE = "book" | "comic" | "film" | "game" | "television";

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
