import { TRIVIA } from "types";
import {
  combineAnswers,
  getUserInput,
  pickRandomTrivia,
  printNegative,
  printPositive,
  printQuestion,
} from "./mod.ts";

export async function askTriviaQuestion(
  selectedTrivia: TRIVIA,
): Promise<boolean> {
  const possibleAnswers = combineAnswers(selectedTrivia);
  printQuestion(selectedTrivia.question, possibleAnswers);

  const response = await getUserInput();

  const correct =
    possibleAnswers[+response - 1] === selectedTrivia.correctAnswer;

  if (correct) {
    printPositive("Correct ✔");
  } else {
    printNegative("Incorrect 😢");
    console.log("The correct answer is:", selectedTrivia.correctAnswer);
  }

  console.log("Source:", selectedTrivia.source.name, "\n");

  return correct;
}

export async function askRandomTriviaQuestion(): Promise<void> {
  await askTriviaQuestion(pickRandomTrivia());

  if (confirm("Another?")) {
    console.clear();
    askRandomTriviaQuestion();
  }
}

export async function askMultipleTrivia(trivia: TRIVIA[]): Promise<number> {
  let score = 0;
  for (let i = 0; i < trivia.length; i++) {
    if (await askTriviaQuestion(trivia[i])) {
      score++;
    }
  }
  return score;
}
