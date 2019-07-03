import { QUESTION } from '../interfaces/question.interface.ts';

export default function(questions: QUESTION[]) {
  const sourceCounts = {};

  questions.forEach(question => {
    const { name } = question.source;

    if (sourceCounts[name]) {
      sourceCounts[name]++;
    } else {
      sourceCounts[name] = 1;
    }
  });

  const mostQuestions = { names: [], count: 0 };

  for (const source in sourceCounts) {
    if (sourceCounts[source] > mostQuestions.count) {
      mostQuestions.names = [source];
      mostQuestions.count = sourceCounts[source];
    } else if (sourceCounts[source] === mostQuestions.count) {
      mostQuestions.names.push(source);
    }
  }

  return mostQuestions;
}
