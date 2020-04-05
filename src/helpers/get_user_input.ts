import { readLines } from "std/io/mod.ts";
import { GET_NUMERIC_INPUT_OPTIONS } from "types";
import { printQuestion } from "./mod.ts";

export async function getUserInput(prompt: string = ""): Promise<string> {
  if (prompt) {
    printQuestion(prompt);
  }

  const reader = readLines(Deno.stdin);
  const { value } = await reader.next();
  return value.trim();
}

export async function getYesNoResponse(question: string): Promise<boolean> {
  const response = (await getUserInput(`${question} (y/n)`))
    .trim()
    .toLowerCase();

  return response === "y" || response === "yes";
}

export async function getNumericInput({
  prompt,
  min = 1,
  max,
  round = true,
}: GET_NUMERIC_INPUT_OPTIONS): Promise<number> {
  let response = +(await getUserInput(`${prompt} (min: ${min}, max: ${max})`));

  if (round) {
    response = Math.round(response);
  }

  if (response >= min && response <= max) {
    return response;
  } else {
    console.clear();
    console.log(`Please enter a number between ${min} and ${max}`);
    return await getNumericInput({ prompt, min, max, round });
  }
}
