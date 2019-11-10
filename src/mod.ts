import { parse } from "./deps.ts";
import { printVersion } from "./version.ts";
import { printStats } from "./stats/mod.ts";
import {
  askRandomTriviaQuestion,
  getUserInput,
  printQuestion,
  startQuiz
} from "helpers";

window.addEventListener("load", () => {
  const { stats, version } = parse(Deno.args, {
    alias: { s: "stats", v: "version" }
  });

  if (stats) {
    printStats();
  } else if (version) {
    printVersion();
  } else {
    startGame();
  }
});

async function startGame() {
  printQuestion("How would you like to play?", [
    "Answer a random trivia question",
    "Multi-question quiz"
  ]);

  const action = await getUserInput();

  switch (+action) {
    case 1:
      askRandomTriviaQuestion();
      break;
    case 2:
      startQuiz();
      break;
    default:
      console.log("Please select a valid option");
      startGame();
      break;
  }
}
