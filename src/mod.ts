import { parse } from "std/flags/mod.ts";
import { checkRuntimeVersion, printVersion } from "./version.ts";
import { printStats } from "./stats/mod.ts";
import {
  askRandomTriviaQuestion,
  getNumericInput,
  printQuestion,
  startQuiz,
} from "helpers";

async function startGame(retry = false) {
  console.clear();

  if (retry) {
    console.log("Please select a valid option");
  }

  printQuestion("How would you like to play?", [
    "Answer a random trivia question",
    "Multi-question quiz",
  ]);

  const action = await getNumericInput();

  console.clear();

  switch (action) {
    case 1:
      askRandomTriviaQuestion();
      break;
    case 2:
      startQuiz();
      break;
    default:
      startGame(true);
      break;
  }
}

await checkRuntimeVersion();

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
