export type MEDIA_TYPE = "Book" | "Comic" | "Film" | "Game" | "Television";

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
  min?: number;
  max: number;
  round?: boolean;
  prompt: string;
}
