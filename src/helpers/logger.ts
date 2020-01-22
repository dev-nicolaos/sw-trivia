import { bgBlue, bgGreen, bgRed, bgYellow, black, white } from "std/fmt/colors.ts";

export function printPositive(message: string): void {
  console.log(bgGreen(white(message)));
}

export function printNeutral(message: string): void {
  console.log(bgYellow(black(message)));
}

export function printNegative(message: string): void {
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
      ? printPositive
      : percentage >= 67
      ? printNeutral
      : printNegative;

  printFunc(`You got ${correct}/${total} correct (${percentage}%)`);
}
