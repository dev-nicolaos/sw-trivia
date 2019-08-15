import { bgBlue, bgGreen, bgRed, bgYellow, black, white } from '../deps.ts';

export function printSuccess(message: string): void {
  console.log(bgGreen(white(message)));
}

export function printNeutral(message: string): void {
  console.log(bgYellow(black(message)));
}

export function printFailure(message: string): void {
  console.log(bgRed(white(message)));
}

export function printQuestion(question: string, options: string[] = []): void {
  console.log(bgBlue(white(question)));
  options.forEach((option, i) => {
    console.log(`${i + 1}) ${option}`);
  });
}

export function printScore(correct: number, total: number): void {
  const percentage = Math.round((correct / total) * 100);

  const printFunc =
    percentage >= 90
      ? printSuccess
      : percentage >= 67
      ? printNeutral
      : printFailure;

  printFunc(`You got ${correct}/${total} correct (${percentage}%)`);
}
