import {
  ALLTRIVIA,
  BOOKS,
  COMICS,
  FILMS,
  GAMES,
  TELEVISION,
} from "../trivia/mod.ts";
import {
  askTriviaQuestion,
  getQuizLength,
  getUserInput,
  printQuestion,
  printScore,
  pickTrivia,
} from "./mod.ts";

export async function startQuiz() {
  printQuestion("Select a source", [
    "All",
    "Books",
    "Comics",
    "Films",
    "Games",
    "Television",
  ]);

  let selectedSource = null;

  switch (+(await getUserInput())) {
    case 1:
      selectedSource = ALLTRIVIA;
      break;
    case 2:
      selectedSource = BOOKS;
      break;
    case 3:
      selectedSource = COMICS;
      break;
    case 4:
      selectedSource = FILMS;
      break;
    case 5:
      selectedSource = GAMES;
      break;
    case 6:
      selectedSource = TELEVISION;
      break;
    default:
      console.log("Please select a valid option");
      break;
  }

  if (selectedSource) {
    const quizLength = await getQuizLength(selectedSource.length);

    const trivia = pickTrivia(quizLength, selectedSource);

    let correctCount = 0;
    for (let i = 0; i < trivia.length; i++) {
      if (await askTriviaQuestion(trivia[i])) {
        correctCount++;
      }
    }

    printScore(correctCount, trivia.length);
  } else {
    startQuiz();
  }
}
