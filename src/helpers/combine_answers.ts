import { Trivia } from "types";

const isNumeric = (testValue: string) => Number.isFinite(parseFloat(testValue));

function shuffle(arr: string[]) {
  let currentIndex: number = arr.length;
  let tempValue;
  let randomIndex: number;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--);

    tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }

  return arr;
}

export function combineAnswers({ wrongAnswers, correctAnswer }: Trivia) {
  const combinedAnswers = [...wrongAnswers, correctAnswer];
  return combinedAnswers.every(isNumeric)
    ? combinedAnswers.sort((a, b) => +a - +b)
    : shuffle(combinedAnswers);
}
