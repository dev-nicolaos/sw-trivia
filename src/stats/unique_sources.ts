import { QUESTION } from '../interfaces/question.interface.ts';

export default (questions: QUESTION[]) =>
  questions
    .map(question => question.source.name)
    .filter((source, i, arr) => arr.indexOf(source) === i).length;
