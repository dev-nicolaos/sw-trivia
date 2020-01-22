import { parse } from "std/flags/mod.ts";
import { printVersion } from "./version.ts";
import { printStats } from "./stats/mod.ts";
import {
  askRandomTriviaQuestion,
  getUserInput,
  printQuestion,
  startQuiz,
} from "helpers";

window.addEventListener("load", () => {
  const { stats, version } = parse(Deno.args, {
    alias: { s: "stats", v: "version" },
  });

  if (stats) {
    printStats();
  } else if (version) {
    printVersion();
  } else {
    startGame();
  }
});

async function startGame(retry:boolean = false) {
  console.clear();

  if (retry) {
    console.log("Please select a valid option");
  }
  printQuestion("How would you like to play?", [
    "Answer a random trivia question",
    "Multi-question quiz",
  ]);

  const action = await getUserInput();

  switch (+action) {
    case 1:
      console.clear();
      askRandomTriviaQuestion();
      break;
      case 2:
      console.clear();
      startQuiz();
      break;
    default:
      startGame(true);
      break;
  }
}
