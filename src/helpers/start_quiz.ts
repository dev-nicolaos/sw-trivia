import {
  ALL_TRIVIA,
  BOOKS,
  COMICS,
  FILMS,
  GAMES,
  TELEVISION,
} from "../trivia/mod.ts";
import {
  askMultipleTrivia,
  getNumericInput,
  getUserInput,
  getYesNoResponse,
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
      selectedSource = ALL_TRIVIA;
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
      console.clear();
      console.log("Please select a valid option");
      break;
  }

  if (selectedSource) {
    console.clear();
    const quizLength = await getNumericInput({
      max: selectedSource.length,
      prompt: "How many questions would you like?",
    });
    console.clear();

    const trivia = pickTrivia(quizLength, selectedSource);

    const correctCount = await askMultipleTrivia(trivia);

    printScore(correctCount, trivia.length);

    if (await getYesNoResponse("Another?")) {
      console.clear();
      startQuiz();
    }
  } else {
    startQuiz();
  }
}
