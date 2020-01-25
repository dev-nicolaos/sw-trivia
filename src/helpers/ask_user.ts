import { TRIVIA } from "interfaces";
import {
  combineAnswers,
  getUserInput,
  getYesNoResponse,
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
  console.log("Source:", selectedTrivia.source.name);

  return correct;
}

export async function askRandomTriviaQuestion(): Promise<void> {
  await askTriviaQuestion(pickRandomTrivia());

  if (await getYesNoResponse("Another?")) {
    console.clear();
    askRandomTriviaQuestion();
  }
}

export async function getQuizLength(maxLength: number): Promise<number> {
  const quizLength = Math.round(
    +(await getUserInput(
      `How many questions would you like? (max: ${maxLength})`,
    )),
  );

  if (quizLength <= maxLength && quizLength > 0) {
    return quizLength;
  } else {
    console.clear();
    console.log(
      "Please enter a positive number less than or equal to",
      maxLength,
    );
    return await getQuizLength(maxLength);
  }
}
