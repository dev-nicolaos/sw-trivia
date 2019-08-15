import { bgBlue, bgGreen, bgRed, bgYellow, black, white } from '../deps.ts';

export function acceptAnswer() {
  printSuccess('Correct ✔');
}

export function rejectAnswer() {
  console.log(bgRed(white('Incorrect 😢')));
}

export function printQuestion(question: string, options: string[] = []): void {
  console.log(bgBlue(white(question)));
  options.forEach((option, i) => {
    console.log(`${i + 1}) ${option}`);
  });
}

export function printScore(correct: number, total: number): void {
  const percentage = Math.round((correct / total) * 100);

  let bgColor;

  if (percentage >= 90) {
    bgColor = bgGreen;
  } else if (percentage >= 67) {
    bgColor = bgYellow;
  } else {
    bgColor = bgRed;
  }

  console.log(
    bgColor(black(`You got ${correct}/${total} correct (${percentage}%)`)),
  );
}

export function printSuccess(message: string): void {
  console.log(bgGreen(white(message)));
}
